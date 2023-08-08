// Navbar w/ Logo and Connect Wallet

import Image from 'next/image'
import _ from 'lodash'
import { useConnect } from "@stacks/connect-react"
import { userSession } from "../../utils/stacks";
import { useReducer } from "react";
import useHiro from "../../hooks/useHiro";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { LuWallet } from "react-icons/lu"
import { useRouter } from 'next/router';
import { setStxAddress_testnet } from '@/collectionSlice';
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
    const [ignored, reload] = useReducer(x => x + 1, 0);
    const { authenticate } = useConnect();
    const address = useHiro();
    const router = useRouter('');
    const imageClickHandle = () => {
      router.push('../')
    }

    const authOptions = {
        appDetails: {
        name: "Connect Hiro Wallet",
        icon: "https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/618b0aafa4afde2ae1fe3a1f_icon-isotipo.svg"
        },
        redirectTo: '/',
        onFinish: () => {
          const hiroAddress_testnet = userSession.loadUserData().profile?.stxAddress?.testnet;
          dispatch(setStxAddress_testnet(hiroAddress_testnet));
          reload();
        },
        userSession
    };
    return (
      <div className="p-[12px] flex w-full h-[80px] items-center bg-black">
        <div className="w-[90px] h-[60px] flex ml-3">
          <Image src='/Arcus_logo.png' width={50} height={50} alt="logo" onClick={imageClickHandle} className='hover:cursor-pointer'/>
        </div>
        <div className="w-full flex items-center">
          { 
            !address &&
            <button className='bg-[#42EACA] rounded-[5px] px-4 py-2 h-[40px] flex items-center ml-auto font-exo2'
              onClick={() => authenticate(authOptions)}
            >
              <LuWallet className="mr-2 text-[24px]" />
              Connect Hiro Wallet
            </button>
            }
            { 
            address &&
            <button className='bg-[#42EACA] rounded-[5px] px-4 py-2 h-[40px] flex items-center ml-auto font-exo2'
              onClick={() => { userSession.signUserOut(); reload(); }}
            >
              { _.truncate(address, { length:9}) + address.substr(address.length - 5)}
            </button>
            }
            <div className="flex rounded-full w-[90px] bg-[#2E2E2E] p-2 ml-6 items-center">
                <div className="flex bg-[#c8C8C8] w-[35px] h-[35px] rounded-full items-center p-1 hover:cursor-pointer">
                    <Image src={'/tempavatar.png'} width={30} height={30} />
                </div>
                <div className="ml-2 flex bg-[#1C1B1F] w-[30px] h-[30px] rounded-full justify-center items-center">
                    <MdOutlineKeyboardArrowDown className="text-[#BCBCBC] text-[25px]"/>
                </div>
            </div>
        </div>
      </div>
    )
}