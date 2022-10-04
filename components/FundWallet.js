import React from "react";
import { useBundler } from "../context/bundlrContext";

const FundWallet = () => {
  const { fundWallet, balance } = useBundler();
  const [value, setValue] = React.useState("0.02");

  return (
    <div className="font-body">
      <h2>You Current Balance is : {balance || 0} $BNDLR</h2>
      <input
        className="bg-transparent font-body mt-3 py-1 px-2 focus:ring-0 outline-0  text-2xl outline-none border-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="inset-x-0 md:bottom-20 font-body  h-16 w-[200px] left-0 right-0 md:mx-auto  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
            dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2  text-center  mb-4 transition-all ease-in-out delay-150 duration-150
            hover:-translate-y-1 text-1xl flex items-center justify-center gap-4 z-50 hover:shadow-lg hover:shadow-blue-500/80"
        onClick={() => fundWallet(+value)}
      >
        Add Funds 💱
      </button>
    </div>
  );
};

export default FundWallet;
