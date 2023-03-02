import React from "react";
import { NavLink } from "react-router-dom";

function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h3 className="text-white text-2xl font-semibold tracking-tight ">{title}</h3>
        {more && (
          <NavLink className={"text-xs font-semibold uppercase text-link"} to={more}>
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded "}>
            <img src={item.img} alt="" />
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Section;
