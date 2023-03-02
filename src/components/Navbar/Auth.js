import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";
function Auth() {
  const user = {
    name: "Kadir kopuk",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };

  return (
    <Menu as={"nav"} className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center  h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg black"
            } bg-black hover:bg-active`}
          >
            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}></span>
            <Icon size={16} name="downDir" />
          </Menu.Button>
          <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2 "}>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Account settings
                  <Icon size={16} className=" " name={"external"} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded  ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded  ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
