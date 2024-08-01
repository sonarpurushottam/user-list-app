import { useState, useEffect } from "react";
import { useAsyncList } from "@react-stately/data";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { fetchUsers } from "../api/api";

// Custom hook to fetch data with pagination and infinite scrolling
export const useDataFetch = (initialPage) => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to manage if more data is available for fetching
  const [hasMore, setHasMore] = useState(true);

  // Asynchronous list to handle data fetching and pagination
  const list = useAsyncList({
    async load({ cursor }) {
      // Set loading status to true
      setIsLoading(true);

      // Determine the current page based on the cursor or initial page
      const currentPage = cursor || initialPage;

      // Fetch users for the current page
      const users = await fetchUsers(currentPage);

      // Determine if there are more users to load
      const newHasMore = users.length === 10;
      setHasMore(newHasMore);

      // Return the loaded users and update the cursor for the next page
      return {
        items: users,
        cursor: newHasMore ? currentPage + 1 : null,
      };
    },
  });

  // References for loader and scroller elements for infinite scrolling
  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  // Effect to set loading status to false when the list items change
  useEffect(() => {
    setIsLoading(false);
  }, [list.items]);

  // Return the list, loader, scroller, and loading status
  return {
    list,
    loaderRef,
    scrollerRef,
    isLoading,
    hasMore,
  };
};
