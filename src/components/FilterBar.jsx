/* eslint-disable react/prop-types */
import {
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { RiFilter2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

// Mapping for country short names
const countryShortNames = {
  "United States": "USA",
  Canada: "CAN",
  "United Kingdom": "UK",
};

const FilterBar = ({ countries, setSelectedCountry, setSelectedGender }) => {
  // Handle country change
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  // Handle gender change
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Employees</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <RiFilter2Fill style={{ color: "darkred", marginRight: "5px" }} />
        <Dropdown>
          <DropdownTrigger>
            <Button flat>
              Country <IoIosArrowDown style={{ color: "darkred" }} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Country"
            onAction={(key) => handleCountryChange(key)}
          >
            <DropdownItem key="All">All</DropdownItem>
            {countries.map((country) => (
              <DropdownItem key={country}>
                {countryShortNames[country] || country}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button flat>
              Gender <IoIosArrowDown style={{ color: "darkred" }} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Gender"
            onAction={(key) => handleGenderChange(key)}
          >
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="Male">Male</DropdownItem>
            <DropdownItem key="Female">Female</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterBar;
