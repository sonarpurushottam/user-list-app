import { useState } from "react";

// Custom hook to manage filters and sorting
export const useFilters = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  // Toggle sort direction or set new sort column
  const handleSort = (column) => {
    setSortDirection(
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    );
    setSortColumn(column);
  };

  // Filter items based on selected country and gender
  const filterItems = (items) =>
    items.filter(
      ({ address, gender }) =>
        (selectedCountry === "All" || address.country === selectedCountry) &&
        (selectedGender === "All" || gender.toLowerCase() === selectedGender)
    );

  // Get comparison value for sorting
  const getSortValue = (item) => {
    if (sortColumn === "fullName") {
      return `${item.firstName} ${item.maidenName} ${item.lastName}`.toLowerCase();
    }
    return item[sortColumn];
  };

  // Sort items based on sort column and direction
  const sortItems = (items) =>
    items.sort((a, b) => {
      const aVal = getSortValue(a);
      const bVal = getSortValue(b);
      return (aVal < bVal ? -1 : 1) * (sortDirection === "asc" ? 1 : -1);
    });

  // Apply filters and sorting to items
  const filterAndSortItems = (items) => sortItems(filterItems(items));

  // Return states and handlers
  return {
    selectedCountry,
    setSelectedCountry,
    selectedGender,
    setSelectedGender,
    sortColumn,
    sortDirection,
    handleSort,
    filterAndSortItems,
  };
};
