import React from "react";
import { assets } from "../assets/assets";
import Swal from "sweetalert2";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setToken("");
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className=" w-[max(15%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={handleLogout}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
