import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBridgeDuotone } from "react-icons/pi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function YourBorrow({ onRepay, onBorrow }) {

    const router = useRouter();

    const handleGoToDashboard = () => {
      router.push("/dashboard");
    };

    
  
    const [isDepositModal, setDepositModal] = useState(false);
    const [isWithdrawModal, setWithdrawModal] = useState(false);
  
    const assetsSupplied = [
        { asset: "BTC", balance: 0.0674, apy: 2.48 },
        { asset: "ORDI", balance: 1000, apy: 5.31 },
      ];
      
      const assetsBorrowed = [
        { asset: "STABLE", balance: 270.11, apy: 5.61 },
      ];
      
      const assetsToSupplyData = [
        { asset: "BTC", balance: 0, apy: 2.48 },
        { asset: "ORDI", balance: 0, apy: 5.31 },
        { asset: "TRAC", balance: 0, apy: 1.23 },
        { asset: "ABR", balance: 0, apy: 2.24 },
        { asset: "STABLE", balance: 0, apy: 3.14 },
      ];
      
      const assetsToBorrowData = [
        { asset: "BTC", balance: 0, apy: 4.32 },
        { asset: "ORDI", balance: 0, apy: 5.65 },
        { asset: "TRAC", balance: 0, apy: 5.23 },
        { asset: "ABR", balance: 0, apy: 2.94 },
        { asset: "STABLE", balance: 0, apy: 5.61 },
      ];

    const handleOpenDeposit = () => {
      setDepositModal(true);
    };
  
    const handleCloseDeposit = () => {
      setDepositModal(false);
    };
  
    const handleOpenWithdraw = () => {
      setWithdrawModal(true);
    };
  
    const handleCloseWithdraw = () => {
      setWithdrawModal(false);
    };
  
    const imageClickHandle = () => {
      router.push("../");
    };

    return (
      <div className=" rounded-xl overflow-hidden shadow-lg  bg-gray-900  pt-4 pb-6 md:w-1/2 lg:w-6/12 mx-auto">
        <div className="px-6 py-4">
          <div className=" text-white text-2xl mb-2">Your Borrowing</div>
        </div>
  
        <div className="px-4 py-4 flex flex-row">
          <p className="pl-5 font-semiold text-xl text-[#BE936B]">
            Balance
            <span className="pl-3 font-bold text-xl text-gray-200">
              0.010 BTC
            </span>
          </p>
  
          <p className="pl-5 font-bold text-xl text-gray-500">|</p>
  
          <p className="pl-5 font-semiold text-xl text-[#BE936B]">
            APY
            <span className="pl-3 font-bold text-xl text-gray-200">5.61%</span>
          </p>
  
          <p className="pl-5 font-bold text-xl text-gray-500">|</p>
  
          <p className="pl-5 font-semiold text-xl text-[#BE936B]">
            Borrowing Power
            <span className="pl-3 font-bold text-xl text-gray-200">
             0.0239 BTC
            </span>
          </p>
        </div>
  
        <div className="px-6 py-4">
          <div className="overflow-x-auto">
            <table className="w-full text-md text-left">
              <thead className="text-lg text-white uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Debt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    APY
                  </th>
                  <th scope="col" className="px-6 py-3">
                
                  </th>
                </tr>
              </thead>
              <tbody>
                {assetsBorrowed.map((item) => (
                  <tr className="border-b" key={item.asset}>
                    <td className="px-6 py-4 text-white">{item.asset}</td>
                    <td className="px-6 py-4 text-white">{item.balance}</td>
                    <td className="px-6 py-4 text-white">{item.apy}%</td>
                    <td className="px-6 py-4 text-white">
                      <button
                        onClick={() => onBorrow()}
                        className="ml-2 bg-[#BE936B] font-bold py-2 px-4 rounded hover:bg-white text-black rounded"
                      >
                        Borrow
                      </button>
                      <button
                        onClick={() => onRepay()}
                        className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:bg-white hover:text-black rounded"
                      >
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
    );
  };