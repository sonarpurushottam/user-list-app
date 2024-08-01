import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
      </div>
      <IoMdMenu style={{ fontSize: "24px", color: "darkred" }} />
    </div>
  );
};

export default Navbar;
