import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="place-items-center grid grid-cols-2 mt-3">
      <div className="mb-5 p-3 bt-5">
        <h3 className="text-slate-900 font-bold text-2xl mb-1.5">
          Opportunity
        </h3>
        <p className="text-slate-500 text-sm">showing 73 results</p>
      </div>
      <div className="flex">
        <p className="inline-flex items-center text-slate-500 text-sm">
          sort by:{" "}
          <span className="font-bold text-slate-900 ml-1">most relevant</span>
          <TiArrowSortedDown className="ml-1 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
