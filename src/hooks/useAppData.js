import { useDataFetch } from "./useDataFetch";
import { useFilters } from "./useFilters";
import { useCountries } from "./useCountries";

// Custom hook to manage application data
export const useAppData = () => {
  // Fetch the list of countries
  const countries = useCountries();

  // Fetch data with pagination, and get references for the loader and scroller elements
  const { list, loaderRef, scrollerRef, isLoading, hasMore } = useDataFetch(1);

  // Destructure filter and sort functionalities
  const {
    selectedCountry,
    setSelectedCountry,
    selectedGender,
    setSelectedGender,
    sortColumn,
    sortDirection,
    handleSort,
    filterAndSortItems,
  } = useFilters();

  // Apply filters and sorting to the fetched list of items
  const sortedItems = filterAndSortItems(list.items);

  // Return all the necessary states and functions for use in components
  return {
    countries,
    sortedItems,
    loaderRef,
    scrollerRef,
    isLoading,
    hasMore,
    selectedCountry,
    setSelectedCountry,
    selectedGender,
    setSelectedGender,
    sortColumn,
    sortDirection,
    handleSort,
  };
};
