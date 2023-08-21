import React from "react";
import { useState } from "react";
import { PiVaultLight } from "react-icons/pi";
import { BsCoin } from "react-icons/bs";
import { RiWaterPercentFill } from "react-icons/ri";
import { GiLockedChest } from "react-icons/gi";
import { GiPush } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import DepositModal from "@/components/DepositModal";
import WithdrawModal from "@/components/WithdrawModal";

export default function TransactionTable() {
  const router = useRouter();

  const [isDepositModal, setDepositModal] = useState(false);
  const [isWithdrawModal, setWithdrawModal] = useState(false);

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

  return (
    <div className="flex flex-col mt-3">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          
          <div className="overflow-hidden sm:rounded-lg">
            
            <table className="min-w-full divide-y divide-[#2C2C2C]">
              <thead className="bg-transparent">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex space-x-1 items-center">
                      <PiVaultLight className="text-white text-[20px]" />
                      <span>Vault Name</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex items-center">
                      <BsCoin className="text-white text-[20px] mr-1" />
                      <span>Token</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex space-x-1 items-center">
                      <RiWaterPercentFill className="text-white text-[20px]" />
                      <span>APY</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex space-x-1 items-center">
                      <GiLockedChest className="text-white text-[20px]" />
                      <span>TVL</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex space-x-1 items-center">
                      <GiPush className="text-white text-[20px]" />
                      <span>Deposited</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                  >
                    <div className="flex space-x-1 items-center">
                      <RiMoneyDollarCircleLine className="text-white text-[20px]" />
                      <span>Pending Rewards</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="px-4 py-2">
                    <div
                      className="flex items-center hover:bg-[#111111] hover:cursor-pointer hover:rounded-lg px-2 py-2"
                      onClick={() => router.push("/DetailedVault/BTC")}
                    >
                      <span className="text-[15px] text-white ml-2">
                        {" "}
                        BTC Vault
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> vBTC</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        10.3%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white">
                        {" "}
                        $ 1,054,261
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white"> 0.014 BTC</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-white">
                      <span className="text-[15px] text-[#F0B90B]">
                        0.000671 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        53.7 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
                        onClick={handleOpenDeposit}
                      >
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        <span>Deposit</span>
                      </button>
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#E0E0E0] to-[#FFCCCB] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#FFCCCB] hover:to-[#FFCCCB]"
                        onClick={handleOpenWithdraw}
                      >
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        <span>Withdraw</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <div
                      className="flex items-center justify hover:bg-[#111111] hover:cursor-pointer px-2 py-2 rounded-lg"
                      onClick={() => router.push("/DetailedVault/BTC")}
                    >
                      <span className="text-[15px] text-white ml-2">
                        {" "}
                        Stable Vault
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> vsUSDT</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        5.6%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white">
                        {" "}
                        $ 3,413,040
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white"> 1.29 BTC</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-white">
                      <span className="text-[15px] text-[#F0B90B]">
                        0.00748 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        31.79 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
                        onClick={handleOpenDeposit}
                      >
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        <span>Deposit</span>
                      </button>
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#E0E0E0] to-[#FFCCCB] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#FFCCCB] hover:to-[#FFCCCB]"
                        onClick={handleOpenWithdraw}
                      >
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        <span>Withdraw</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <div
                      className="flex items-center px-2 py-2 rounded-lg hover:bg-[#111111] hover:cursor-pointer"
                      onClick={() => router.push("/DetailedVault/BTC")}
                    >
                      <span className="text-[15px] text-white ml-2">
                        {" "}
                        Arcus Bitcoin Rewards Vault
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> vABR</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        47.3%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white"> $ 621,898</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white"> 0.05 BTC</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-white">
                      <span className="text-[15px] text-[#F0B90B]">
                        0.000374 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        11.7 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
                        onClick={handleOpenDeposit}
                      >
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        <span>Deposit</span>
                      </button>
                      <button
                        className="text-[15px] py-1 bg-gradient-to-r from-[#E0E0E0] to-[#FFCCCB] rounded-full font-bold px-2 flex items-center justify-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#FFCCCB] hover:to-[#FFCCCB]"
                        onClick={handleOpenWithdraw}
                      >
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        <span>Withdraw</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex w-full justify-center mt-6 md:mt-12">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-[15px]">
              {isDepositModal && (
                <DepositModal
                  isOpen={isDepositModal}
                  onClose={handleCloseDeposit}
                  vaultName={"BTC Vault - Deposit"}
                ></DepositModal>
              )}
              {isWithdrawModal && (
                <WithdrawModal
                  isOpen={isWithdrawModal}
                  onClose={handleCloseWithdraw}
                  vaultName={"BTC Vault - Withdraw"}
                ></WithdrawModal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
