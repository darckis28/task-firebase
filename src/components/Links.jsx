import { NavLink } from "react-router-dom";

function Links({ children, icon, refe }) {
  return (
    <NavLink
      to={refe}
      className={({ isActive }) =>
        isActive
          ? "w-48 flex gap-2 items-center pl-5 py-2 text-white text-lg bg-slate-700 transition-all duration-300"
          : "w-48 flex gap-2 items-center pl-5 py-2 text-white text-lg hover:bg-slate-600 transition-all duration-200"
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
export default Links;
