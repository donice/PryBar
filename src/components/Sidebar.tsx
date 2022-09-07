import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { MdPerson, MdAmpStories } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import Modal from "./Modal";
import ModalButton from "./buttons/ModalButton";

const links = [
  {
    id: 1,
    name: "Dashboard",
    icon: BsFillGridFill,
    path: "/dashboard/overview",
  },
  { id: 2, name: "My Profile", icon: MdPerson, path: "/dashboard/profile" },
  {
    id: 3,
    name: "Posted Dogs",
    icon: MdAmpStories,
    path: "/dashboard/posted-dogs",
  },
  // { id: 4, name: "Dashboard", icon: FaSignOutAlt, path: "http://" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[250px] h-[100vh] overflow-y-scroll shadow-primary">
      <div className="w-[80%] mx-auto pt-[4em]">
        <div>
          <img src="" alt="" />
        </div>
        <p className="text-center text-large font-semibold text-grey">
          JOHN DOE
        </p>

        <div className="pt-[3em]">
          {links.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className={(navData) =>
                  navData.isActive
                    ? "text-brown text-primary bg-active flex items-center rounded-primary my-6 px-4 py-[10px] shadow-activeShadow"
                    : "flex text-primary text-grey  items-center rounded my-6 px-4 py-[10px]"
                }
              >
                <div className="lg:mx-0 mx-auto">{<link.icon size={25} />}</div>

                <p className="ml-[1em] lg:block hidden">{link.name}</p>
              </NavLink>
            );
          })}

          <div
            className="flex text-primary text-grey items-center rounded my-6 px-4 py-[10px cursor-pointer"
            onClick={logout}
          >
            <div className="lg:mx-0 mx-auto">
              <FaSignOutAlt size={25} />
            </div>
            <p className="ml-[1em] lg:block hidden">Logout</p>
          </div>
        </div>
      </div>

      {open && (
        <Modal>
          <div className="w-[30vw] h-[25vh] py-8">
            <p className="text-center">Do you want to logout ?.</p>

            <div className="flex justify-between w-[80%] mx-auto mt-[1.5em]">
              <ModalButton
                text="NO"
                css="text-brown bg-white w-[130px]"
                onClick={logout}
              />
              <ModalButton
                text="YES"
                css="border-[1px] border-white w-[130px]"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
