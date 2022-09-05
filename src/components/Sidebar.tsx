import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillGridFill,  } from "react-icons/bs";
import { MdPerson, MdAmpStories  } from "react-icons/md";
import { FaSignOutAlt  } from "react-icons/fa";

const links = [
  { id: 1, name: "Dashboard", icon: BsFillGridFill, path: "/dashboard/overview" },
  { id: 2, name: "My Profile", icon: MdPerson, path: "/dashboard/profile" },
  { id: 3, name: "Posted Dogs", icon: MdAmpStories, path: "/dashboard/posted-dogs" },
  // { id: 4, name: "Dashboard", icon: FaSignOutAlt, path: "http://" },
];

const Sidebar = () => {
  return (
    <div className="w-[250px] min-h-[100vh] overflow-y-scroll shadow-primary">
      <div className="w-[80%] mx-auto pt-[4em]">
        <div>
          <img src="" alt="" />
        </div>
        <p className="text-center text-large font-semibold text-grey">JOHN DOE</p>

        <div className="pt-[3em]">
        {links.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className={(navData) =>
                  navData.isActive
                    ? "text-brown text-primary bg-active  flex  items-center rounded-primary my-1 px-4 py-[10px] shadow-activeShadow"
                    : "flex text-primary text-grey  items-center rounded my-1 px-4 py-[10px]"
                }
              >
                <div className="lg:mx-0 mx-auto">{<link.icon size={25} />}</div>

                <p className="ml-[1em] lg:block hidden">{link.name}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
