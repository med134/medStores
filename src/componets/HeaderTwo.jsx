import React from "react";
import i18n from "../i18n";

const HeaderTwo = () => {
  return (
    <div className="w-full h-10 bg-blue-500">
      <div className="lang flex text-[15px] font-mono font-semibold text-white float-right mr-10 mt-2">
        <button
          className="hover:underline hover:text-black"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        |
        <button
          className="hover:underline hover:text-black"
          onClick={() => i18n.changeLanguage("ar")}
        >
          Arabic
        </button>
      </div>
    </div>
  );
};

export default HeaderTwo;
