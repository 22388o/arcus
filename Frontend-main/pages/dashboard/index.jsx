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

const YourDetails = () => {
  return (
    <div className="py-12 rounded-xl text-center shadow-lg">
      <h2 className="text-2xl font-bold text-[#BE936B]">Asset Manager</h2>

      <div className="flex flex-wrap justify-center py-10">
        <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-900 pt-4 pb-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2">
          <div className="font-semiold text-xl text-[#BE936B]">
            <p>
              Total Available
              <span className="pl-10 font-bold text-xl text-gray-200">
                0.5152 BTC
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-900 pt-4 pb-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2">
          <div className="font-semiold text-xl text-[#BE936B]">
            <p>
              Total Deposited{" "}
              <span className="pl-10 font-bold text-xl text-gray-200">
                1.39 BTC
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-900 pt-4 pb-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2">
          <div className="font-semiold text-xl text-[#BE936B]">
            <p>
              Total Borrowed{" "}
              <span className="pl-10 font-bold text-xl text-gray-200">
                0.420 BTC
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-900 pt-4 pb-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2">
          <div className="font-semiold text-xl text-[#BE936B]">
            <p>
              Health Factor{" "}
              <span className="pl-10 font-bold text-xl text-[#90EE90]">
                1.75
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-900 pt-4 pb-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-2">
          <div className="font-semiold text-xl text-[#BE936B]">
            <p>
              Pending Rewards
              <span className="pl-5 font-bold text-xl text-gray-200">
                311 ABR
              </span>
              <span className="pl-5 font-bold text-xl text-gray-200">
                0.09 BTC
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const [isLendSelected, setIsLendSelected] = useState(true);

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

  const toggleLendBorrow = () => {
    setIsLendSelected(!isLendSelected);
  };

  const SidebarItem = ({ text, icon, onClick }) => (
    <div
      className="flex items-center px-3 py-2  rounded-xl text-gray-200 hover:bg-gray-700 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 text-sm font-medium">{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex-grow flex">
        
        <Sidebar />

        <div className="flex-grow flex flex-col">
          <YourDetails />

          <div className="md:flex md:hstack justify-center items-center md:p-4">
            <YourSupply />

            <YourBorrow />
          </div>

          <div className="flex flex-row items-center justify-center py-10">
            <button
              className={`px-20 py-8 rounded-full text-2xl ${
                isLendSelected
                  ? "bg-[#BE936B] text-gray-800"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => setIsLendSelected(true)}
            >
              Lend
            </button>

            <div className="px-10" />

            <button
              className={`px-20 py-8 rounded-full text-2xl ${
                !isLendSelected
                  ? "bg-[#BE936B] text-gray-800"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => setIsLendSelected(false)}
            >
              Borrow
            </button>
          </div>

          <div className="flex flex-row items-start justify-center flex-wrap p-4 gap-4">
            {isLendSelected && (
              <>
                <AssetsToSupply />
              </>
            )}

            {!isLendSelected && (
              <>
                <AssetsToBorrow />
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

// Sidebar
const Sidebar = () => {
  const router = useRouter();
  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <>
      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col h-full">
        <div className="flex h-full">
          <div className="flex flex-col w-[100px] pt-6 pl-3">
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
              onClick={() => router.push("./")}
            >
              <AiOutlineHome className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Home
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./dashboard")}
            >
              <LuLayoutDashboard className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Dashboard
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./")}
            >
              <PiBridgeDuotone className="text-white text-[20px]" />
              <span className="text-gray-400 font-Exo2 text-[14px] ml-3">
                ZK Bridge
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("http://arcusbtc.com")}
            >
              <PiBookOpenTextLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                About
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ text, icon, onClick }) => (
  <div
    className="flex items-center px-4 py-3 text-gray-200 rounded-md cursor-pointer hover:bg-gray-700"
    onClick={onClick}
  >
    {icon}
    <span className="ml-3 text-sm font-medium">{text}</span>
  </div>
);

const YourSupply = ({ onSwitch, onWithdraw }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg  bg-gray-900  pt-4 pb-6 md:w-1/2 lg:w-5/12 mx-auto">
      <div className="flex items-center px-6 py-4">
        <div className="font-bold text-white text-2xl mb-2">Your Lending</div>
      </div>

      <div className="px-6 py-4 flex flex-row">
        <p className="font-semiold text-xl text-[#BE936B]">
          Balance
          <span className="pl-3 font-bold text-xl text-gray-200">
            0.5152 BTC
          </span>
        </p>

        <p className="pl-5 font-semiold text-xl text-[#BE936B]">
          APY
          <span className="pl-3 font-bold text-xl text-gray-200">4.2%</span>
        </p>

        <p className="pl-5 font-semiold text-xl text-[#BE936B]">
          Collateral
          <span className="pl-3 font-bold text-xl text-gray-200">0.162 BTC</span>
        </p>
      </div>

      <div className="px-6 py-4">
        <div className="overflow-x-auto">
          <table className="w-full text-lg text-left">
            <thead className="text-xl text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  BALANCE
                </th>
                <th scope="col" className="px-6 py-3">
                  APY
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsSupplied.map((item) => (
                <tr className="border-b" key={item.asset}>
                  <td className="px-6 py-4 text-white">{item.asset}</td>
                  <td className="px-6 py-4 text-white">{item.balance}</td>
                  <td className="px-6 py-4 text-white">{item.apy}%</td>
                  <td className="px-6 py-4 text-white">
                    <button
                      onClick={() => onWithdraw()}
                      className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                    >
                      Withdraw
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

const YourBorrow = ({ onRepay, onBorrow }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg  bg-gray-900  pt-4 pb-6 md:w-1/2 lg:w-6/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-white text-2xl mb-2">Your Borrowing</div>
      </div>

      <div className="px-6 py-4 flex flex-row">
        <p className="pl-5 font-semiold text-xl text-[#BE936B]">
          Balance
          <span className="pl-3 font-bold text-xl text-gray-200">
            0.5152 BTC
          </span>
        </p>

        <p className="pl-5 font-semiold text-xl text-[#BE936B]">
          APY
          <span className="pl-3 font-bold text-xl text-gray-200">4.2%</span>
        </p>

        <p className="pl-5 font-semiold text-xl text-[#BE936B]">
          Collateral
          <span className="pl-3 font-bold text-xl text-gray-200">0.162 BTC</span>
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
                  Actions
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
                      className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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

const AssetsToSupply = ({ onSupply, onDetails }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-5/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-white">Assets To Lend</div>
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
                  BALANCE
                </th>
                <th scope="col" className="px-6 py-3">
                  APY
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {assetsToSupplyData.map((item) => (
                <tr className="border-b" key={item.asset}>
                  <td className="px-6 py-4 text-white">{item.asset}</td>
                  <td className="px-6 py-4 text-white">{item.balance}</td>
                  <td className="px-6 py-4 text-white">{item.apy}%</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onSupply()}
                      className="ml-2 bg-[#BE936B] font-bold py-2 px-4 rounded hover:bg-white text-black rounded"
                    >
                      Supply
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 bg-transparent hover:bg-white-500 text-white hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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
    </div>
  );
};

const AssetsToBorrow = ({ onDetails }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-6/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-white">
          Assets To Borrow
        </div>
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
                  available
                </th>
                <th scope="col" className="px-6 py-3">
                  APY, variable
                </th>
                {/* <th scope="col" className="px-6 py-3">
                APY, STABLE
              </th> */}
                {/* <th scope="col" className="px-6 py-3">
                Actions
              </th> */}
              </tr>
            </thead>
            <tbody>
              {assetsToBorrowData.map((item) => (
                <tr className="border-b" key={item.asset}>
                  <td className="px-6 py-4 text-white">{item.asset}</td>
                  <td className="px-6 py-4 text-white">{item.balance}</td>
                  <td className="px-6 py-4 text-white">{item.apy}%</td>
                  <td className="px-6 py-4 text-white">-</td>
                  <td className="px-6 py-4">
                    <button className="ml-2 bg-[#BE936B] font-bold py-2 px-4 rounded hover:bg-white text-black rounded">
                      Borrow
                    </button>
                    <button
                      onClick={() => onDetails(item.asset)}
                      className="ml-2 bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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
    </div>
  );
};
