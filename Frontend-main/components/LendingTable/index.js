// Lending Table for Lend N' Borrow

import React from "react";
import { PiVaultLight } from "react-icons/pi";
import { BsCoin } from "react-icons/bs";
import { RiWaterPercentFill } from "react-icons/ri";
import { GiLockedChest } from "react-icons/gi";
import { GiPush } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function LendingTable() {
  const router = useRouter();
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
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> BTC</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        5.3%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white">
                        {" "}
                        $ 4,055,124
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
                        1.0449 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        3.7 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button className="text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center">
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        Deposit
                      </button>
                      <button className="text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center">
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> sUSDT</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        2.6%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white">
                        {" "}
                        $ 2,311,250
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white">
                        {" "}
                        0.000219 BTC
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-white">
                      <span className="text-[15px] text-[#F0B90B]">
                        0.0000061 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        14.127 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button className="text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center">
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        Deposit
                      </button>
                      <button className="text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center">
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white">ALEX</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        2.3%
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
                        0.04859 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        37.2 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button className="text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center">
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        Deposit
                      </button>
                      <button className="text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center">
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 ">
                    <span className="text-[15px] text-white"> ABR</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-[15px] text-white text-center">
                        7.3%
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
                        0.01451 BTC
                      </span>
                      <span className="text-[12px] text-[#42EACA]">
                        21.9 ABR
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex flex-col">
                      <button className="text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center">
                        <BsArrowUpCircleFill className="text-[15px] mr-1" />
                        Deposit
                      </button>
                      <button className="text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center">
                        <BsArrowDownCircleFill className="text-[15px] mr-1" />
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
