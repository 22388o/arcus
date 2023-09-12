import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const assetsSupplied = [
  { asset: "BTC", balance: 0, apy: 2.35 },
  { asset: "ORDI", balance: 0, apy: 6.82 },
];

const assetsBorrowed = [
  { asset: "BTC", balance: 0, apy: 4.32 },
  { asset: "zkUSD", balance: 0, apy: 1.74 },
];

const assetsToSupplyData = [
  { asset: "BTC", balance: 0, apy: 2.35 },
  { asset: "ORDI", balance: 0, apy: 6.82 },
  { asset: "TRAC", balance: 0, apy: 1.23 },
  { asset: "ABR", balance: 0, apy: 2.24 },
  { asset: "zkUSD", balance: 0, apy: 1.14 },
];

const assetsToBorrowData = [
  { asset: "BTC", balance: 0, apy: 4.32 },
  { asset: "ORDI", balance: 0, apy: 2.65 },
  { asset: "TRAC", balance: 0, apy: 5.23 },
  { asset: "ABR", balance: 0, apy: 2.94 },
  { asset: "zkUSD", balance: 0, apy: 1.74 },
];

const YourSupply = ({ onSwitch, onWithdraw }) => {
  return (
    <>
      <div className="rounded w-5/12 overflow-hidden shadow-lg bg-gray-custom pt-40">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Your supplies</div>
        </div>
        <div className="px-6 py-4 flex flex-row">
          <p className=" text-base text-white">Balance 0.5152</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">APY 4.2%</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">Collateral 0.162</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row content-end">
          <div className=" pt-4 pb-2">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <thead className="text-xs text-white uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Asset
                    </th>
                    <th scope="col" className="px-6 py-3">
                      WALLET BALANCE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      APY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assetsSupplied.map((item) => (
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        {item.asset}
                      </th>
                      <td className="px-6 py-4">{item.balance}</td>
                      <td className="px-6 py-4">{item.apy}%</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => onSupply()}
                          className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                        >
                          Withdraw
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const YourBorrow = ({ onRepay, onBorrow }) => {
  return (
    <>
      <div className="rounded w-6/12 overflow-hidden shadow-lg bg-gray-custom pt-40">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Your Borrow</div>
        </div>
        <div className="px-6 py-4 flex flex-row">
          <p className=" text-base text-white">Balance 0.0826</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">APY 8.4%</p>
          <p className="pr-2 pl-2">|</p>
          <p className=" text-base text-white">Borrow power used 74.8%</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row content-end">
          <div className=" pt-4 pb-2">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <div className="flex flex-col">
                <thead className="text-xs text-white uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Asset
                    </th>
                    <th scope="col" className="px-6 py-3">
                      WALLET BALANCE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      APY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assetsBorrowed.map((item) => (
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        {item.asset}
                      </th>
                      <td className="px-6 py-4">{item.balance}</td>
                      <td className="px-6 py-4">{item.apy}%</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => onSupply()}
                          className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
                        >
                          Supply
                        </button>
                        <button
                          onClick={() => onDetails(item.asset)}
                          className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                        >
                          Repay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AssetsToSupply = ({ onSupply, onDetails }) => {
  return (
    <>
      <div className="rounded w-5/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Assets To Supply</div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  WALLET BALANCE
                </th>
                <th scope="col" className="px-6 py-3">
                  APY
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsToSupplyData.map((item) => (
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item.asset}
                  </th>
                  <td className="px-6 py-4">{item.balance}</td>
                  <td className="px-6 py-4">{item.apy}%</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onSupply()}
                      className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
                    >
                      Supply
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const AssetsToBorrow = ({ onDetails }) => {
  return (
    <>
      <div className="rounded w-6/12 overflow-hidden shadow-lg bg-gray-custom">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Assets To Supply</div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  available
                </th>
                <th scope="col" className="px-6 py-3">
                  APY, variable
                </th>
                <th scope="col" className="px-6 py-3">
                  APY, STABLE
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsToBorrowData.map((item) => (
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item.asset}
                  </th>
                  <td className="px-6 py-4">{item.balance}</td>
                  <td className="px-6 py-4">{item.apy}%</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">
                    <button className="ml-2 mr-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded  opacity-50 cursor-not-allowed">
                      Supply
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 mr-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const Dashboard = () => {
  const onSwitch = () => {
    alert("on switch handle");
  };
  const onWithdraw = () => {
    alert("on Withdraw handle");
  };
  const onRepay = () => {
    alert("on repay handle");
  };
  const onBorrow = () => {
    alert("on borrow handle");
  };
  const onSupply = () => {
    alert("on supply handle");
  };
  const onDetails = (asset) => {
    alert("on details handle: " + asset);
  };

  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-10 py-2">
        <Image
          src="/Arcus_Logo_v2.png"
          width={150}
          height={50}
          alt="Arcus Logo"
          onClick={imageClickHandle}
          className="hover:cursor-pointer"
        />
        <Header />
      </div>

      {/* Sidebar */}

      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col h-full">
        <div className="flex h-full">
          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push("./")}
          >
            <AiOutlineHome className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">Home</span>
          </div>

          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push("./Vaults")}
          >
            <PiVaultLight className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">
              Vaults
            </span>
          </div>

          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push("http://arcusbtc.com")}
          >
            <FcAbout className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">About</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <section id="hero" className="relative bg-black">
          <div className="container h-screen relative z-20">
            <div className="h-full flex flex-col justify-end mt-10 lg:pb-0 lg:justify-center">
              <div className="flex flex-row justify-around mb-10 text-start text-white white border-white">
                <YourSupply onSwitch={onSwitch} onWithdraw={onWithdraw} />
                <YourBorrow onRepay={onRepay} onBorrow={onBorrow} />
              </div>
              <div className="flex flex-row justify-around mb-10 text-start text-white white border-white">
                <AssetsToSupply
                  onSupply={onSupply}
                  onDetails={(asset) => onDetails(asset)}
                />
                <AssetsToBorrow onDetails={(asset) => onDetails(asset)} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}

      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex mt-auto">
        <Footer className="h-[80px]" />
      </div>
    </>
  );
};

export default Dashboard;
