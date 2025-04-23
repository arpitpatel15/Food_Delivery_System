import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { storeContext } from "../context/storeContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(storeContext);

  const logout = () =>{
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <div class="flex justify-between items-center py-5">
      <Link to={"/"}>
        <img src={assets.logo} alt="" class="w-[150px]" />
      </Link>
      <ul class="flex gap-4 text-[#49557e] text-[18px]">
        <Link
          to={"/"}
          onClick={() => {
            setMenu("Home");
          }}
          class={`${
            menu === "Home" ? "pb-1 border-b-2 border-[#46557e]" : ""
          } cursor-pointer`}
        >
          Home
        </Link>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenu("Menu");
            const menuSection = document.getElementById("explore-menu");
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          class={`${
            menu === "Menu" ? "pb-1 border-b-2 border-[#46557e]" : ""
          } cursor-pointer`}
        >
          Menu
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenu("Mobile-App");
            const appSection = document.getElementById("app-download");
            if (appSection) {
              appSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          class={`${
            menu === "Mobile-App" ? "pb-1 border-b-2 border-[#46557e]" : ""
          } cursor-pointer`}
        >
          Mobile-App
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenu("Contect-Us");
            const footer = document.getElementById("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            }
          }}
          class={`${
            menu === "Contect-Us" ? "pb-1 border-b-2 border-[#46557e]" : ""
          } cursor-pointer`}
        >
          Contect Us
        </a>
      </ul>
      <div class="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div class="relative">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            class={
              getTotalCartAmount()
                ? ""
                : "absolute min-w-2.5 min-h-2.5 bg-orange-500 rounded-[5px] top-[-8px] right-[-8px]"
            }
          >
            {" "}
          </div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} class="bg-transparent text-[15px] text-[#49557e] border border-red-500 py-2.5 px-[30px] cursor-pointer rounded-4xl hover:bg-[#fff4f2] transition-all duration-300">
            Sign in
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="" className="cursor-pointer" />
            <ul className="absolute right-0 z-[1] hidden group-hover:flex flex-col bg-[#fff2ef] py-3 px-3 rounded-md border border-orange-500 list-none outline-[2px] outline-white shadow-md w-[160px]">
              <li onClick={()=>navigate('/myorders')} className="flex items-center justify-center gap-2 text-sm cursor-pointer hover:text-orange-500">
                <img src={assets.bag_icon} alt="" className="w-[18px]" />
                <p>Orders</p>
              </li>
              <hr className="border-t border-orange-300 my-2" />
              <li onClick={logout} className="flex items-center justify-center gap-2 text-sm cursor-pointer hover:text-orange-500">
                <img src={assets.logout_icon} alt="" className="w-[18px]" />
                <p>Logout</p>
              </li>
            </ul>
          </div>

        )}
      </div>
    </div>
  );
};

export default Navbar;
