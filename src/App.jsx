import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import EmployeeTable from "./components/EmployeeTable";
import { useAppData } from "./hooks/useAppData";
import "./App.css";

const App = () => {
  // Destructure data and functions from the custom hook
  const {
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
  } = useAppData();

  return (
    <div style={{ border: "1px solid #ddd" }}>
      {/* Render Navbar component */}
      <Navbar />
      
      {/* Render FilterBar component with relevant props */}
      <FilterBar
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />
      
      {/* Render EmployeeTable component with relevant props */}
      <EmployeeTable
        scrollerRef={scrollerRef}
        loaderRef={loaderRef}
        hasMore={hasMore}
        isLoading={isLoading}
        sortedItems={sortedItems}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleSort={handleSort}
      />
    </div>
  );
};

export default App;
