import React from 'react';
import { PiVaultLight } from "react-icons/pi";
import { BsCoin } from "react-icons/bs";
import { RiWaterPercentFill } from "react-icons/ri";
import { GiLockedChest } from "react-icons/gi";
import { GiPush } from "react-icons/gi"
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from 'next/router';

export default function TransactionTable() {
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
                                        <div className='flex space-x-1 items-center'>
                                            <PiVaultLight className="text-white text-[20px]" />
                                            <span>Vault Name</span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                                    >
                                        <div className='flex items-center'>
                                            <BsCoin className="text-white text-[20px] mr-1" />
                                            <span>Token</span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                                    >
                                        <div className='flex space-x-1 items-center'>
                                            <RiWaterPercentFill className="text-white text-[20px]" />
                                            <span>APY</span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                                    >
                                        <div className='flex space-x-1 items-center'>
                                            <GiLockedChest className="text-white text-[20px]" />
                                            <span>TVL</span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                                    >
                                        <div className='flex space-x-1 items-center'>
                                            <GiPush className="text-white text-[20px]" />
                                            <span>Deposited</span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#B4B4B4] tracking-wider"
                                    >
                                        <div className='flex space-x-1 items-center'>
                                            <RiMoneyDollarCircleLine className="text-white text-[20px]" />
                                            <span>Pending Rewards</span>
                                        </div>                                                 
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center hover:bg-[#111111] hover:cursor-pointer hover:rounded-lg px-2 py-2" 
                                            onClick={() => router. push('/DetailedVault/BTC')}>
                                            <span className='text-[15px] text-white ml-2'> BTC Vault</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <span className='text-[15px] text-white'> vBTC</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white text-center'>10.3%</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> $ 1,054,261</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> 0.014 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col text-white">
                                            <span className='text-[15px] text-[#42EACA]'>1.7 ABR</span>
                                            <span className='text-[12px] text-[#F0B90B]'>0.00031 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="flex flex-col">
                                            <button className='text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center'><BsArrowUpCircleFill className='text-[15px] mr-1' />Deposite</button>
                                            <button className='text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center'><BsArrowDownCircleFill className='text-[15px] mr-1' />Withdraw</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify hover:bg-[#111111] hover:cursor-pointer px-2 py-2 rounded-lg">
                                            <span className='text-[15px] text-white ml-2'> Stable Vault</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <span className='text-[15px] text-white'> vsUSDT</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white text-center'>5.6%</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> $ 3,413,040</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> 1.29 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col text-white">
                                            <span className='text-[15px] text-[#42EACA]'>384.3 ABR</span>
                                            <span className='text-[12px] text-[#F0B90B]'>0.0256 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="flex flex-col">
                                            <button className='text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center'><BsArrowUpCircleFill className='text-[15px] mr-1' />Deposite</button>
                                            <button className='text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center'><BsArrowDownCircleFill className='text-[15px] mr-1' />Withdraw</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center px-2 py-2 rounded-lg hover:bg-[#111111] hover:cursor-pointer ">
                                            <span className='text-[15px] text-white ml-2'> Arcus Bitcoin Rewards Vault</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <span className='text-[15px] text-white'> vABR</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white text-center'>47.3%</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> $ 621,898</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className='text-[15px] text-white'> 0.05 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col text-white">
                                            <span className='text-[15px] text-[#42EACA]'>42.04 ABR</span>
                                            <span className='text-[12px] text-[#F0B90B]'>0.0021 sBTC</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="flex flex-col">
                                        <button className='text-[15px] bg-[#42EACA] rounded-full font-bold px-2 flex items-center'><BsArrowUpCircleFill className='text-[15px] mr-1' />Deposite</button>
                                            <button className='text-[15px] bg-[#F0B90B] rounded-full font-bold mt-2 px-2 flex items-center'><BsArrowDownCircleFill className='text-[15px] mr-1' />Withdraw</button>
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