import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r flex justify-center items-start border-gray-600 p-3">
      <div className="flex items-center w-full">
        <ul className="w-full">
          <Link href="/dashboard">
            <li className="text-base text-center capitalize hover:bg-violet-800  py-2 rounded w-full">
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
