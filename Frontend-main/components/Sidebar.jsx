import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";

function Sidebar() {
  const router = useRouter();

  const imageClickHandle = () => {
    router.push("../");
  };


  return (
    <div className="flex flex-col flex-1">
      <div className="flex">
        <div className="flex flex-col w-[220px] pt-6 pl-3">
          <Image
            src="/alogo_v2-r.png"
            width={100}
            height={50}
            alt="Arcus Logo"
            onClick={imageClickHandle}
            className="hover:cursor-pointer pb-4"
          />
          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push('./')}
          >
            <AiOutlineHome className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">
              Home
            </span>
          </div>

          {/* <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push('./Lendnborrow')}
          >
            <PiVaultLight className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">
              Lend N' Borrow
            </span>
          </div> */}

          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push('./Vaults')}
          >
            <PiVaultLight className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">
              Vaults
            </span>
          </div>

          <div
            className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
            onClick={() => router.push('http://arcusbtc.com')}
          >
            <FcAbout className="text-white text-[20px]" />
            <span className="text-white font-Exo2 text-[14px] ml-3">
              About
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
