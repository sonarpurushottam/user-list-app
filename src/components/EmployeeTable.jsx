/* eslint-disable react/prop-types */
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

// Mapping for country short names
const countryShortNames = {
  "United States": "USA",
  Canada: "CAN",
  "United Kingdom": "UK",
};

const EmployeeTable = ({
  scrollerRef,
  loaderRef,
  hasMore,
  isLoading,
  sortedItems,
  sortColumn,
  sortDirection,
  handleSort,
}) => {
  // Function to render the sorting arrows
  const renderSortArrow = (column, direction) => {
    const isActive = sortColumn === column && sortDirection === direction;
    return (
      <span
        style={{
          color: isActive ? "darkred" : "black",
          cursor: "pointer",
          marginLeft: "5px",
        }}
      >
        {direction === "asc" ? <FaArrowDownLong /> : <FaArrowUpLong />}
      </span>
    );
  };

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with infinite pagination"
      baseRef={scrollerRef}
      bottomContent={
        // Show spinner if there are more items to load
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="white" />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="id">
          <div
            onClick={() => handleSort("id")}
            style={{ display: "flex", alignItems: "center" }}
          >
            Id
            {renderSortArrow("id", "asc")}
            {renderSortArrow("id", "desc")}
          </div>
        </TableColumn>
        <TableColumn key="image">Image</TableColumn>
        <TableColumn key="fullName">
          <div
            onClick={() => handleSort("fullName")}
            style={{ display: "flex", alignItems: "center" }}
          >
            Full Name
            {renderSortArrow("fullName", "asc")}
            {renderSortArrow("fullName", "desc")}
          </div>
        </TableColumn>
        <TableColumn key="demography">
          <div
            onClick={() => handleSort("age")}
            style={{ display: "flex", alignItems: "center" }}
          >
            Demography
            {renderSortArrow("age", "asc")}
            {renderSortArrow("age", "desc")}
          </div>
        </TableColumn>
        <TableColumn key="designation">Designation</TableColumn>
        <TableColumn key="location">Location</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={sortedItems}
        loadingContent={<Spinner color="white" />}
      >
        {(item) => (
          <TableRow key={item.id}>
            <TableCell className="table-cell">{item.id}</TableCell>
            <TableCell className="table-cell">
              <img
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </TableCell>
            <TableCell className="table-cell">{`${item.firstName} ${item.maidenName} ${item.lastName}`}</TableCell>
            <TableCell className="table-cell">
              {item.gender === "female" ? "F" : "M"}/{item.age}
            </TableCell>
            <TableCell className="table-cell">{item.company.title}</TableCell>
            <TableCell className="table-cell">{`${item.address.state}, ${
              countryShortNames[item.address.country] || item.address.country
            }`}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default EmployeeTable;
