// Deeplake DLC Component - Deposit to DLC Address via UI Script

import React, { useEffect } from "react";

const AddToVault = () => {
  useEffect(() => {
    const handleAddScript = () => {
      !(function (d, l, f) {
        const a = d.getElementsByTagName("head")[0];
        const b = d.createElement("link");
        b.setAttribute("rel", "stylesheet");
        b.setAttribute("type", "text/css");
        b.setAttribute("href", f);
        a.appendChild(b);

        const r = d.createElement("script");
        r.async = 1;
        r.src = l;
        a.appendChild(r);

        const c = d.getElementsByTagName("body")[0];
        c.setAttribute("pkey", "dlf9lbtcl002008mbouo4nzm3");
      })(window.document, "https://helper.deeplake.finance/static/js/dl.js", "https://helper.deeplake.finance/static/css/dl.css");
    };

    // Call the function to load the script when the component mounts
    handleAddScript();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="pt-8">
      <button
        onClick={() => window.initDeepLake()} // Assuming the script provides a global function named initDeepLake
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Vault
      </button>
    </div>
  );
};

export default AddToVault;
