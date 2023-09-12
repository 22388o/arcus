import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
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

const YourSupply = ({ onSwitch, onWithdraw }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-5/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Your supplies</div>
      </div>
      <div className="px-6 py-4 flex flex-col">
        <p className="text-base text-white">Balance 0.5152</p>
        <p className="text-base text-white">APY 4.2%</p>
        <p className="text-base text-white">Collateral 0.162</p>
      </div>
      <div className="px-6 py-4">
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {assetsSupplied.map((item) => (
              <tr className="border-b" key={item.asset}>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4">{item.balance}</td>
                <td className="px-6 py-4">{item.apy}%</td>
                <td className="px-6 py-4">
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
  );
};

const YourBorrow = ({ onRepay, onBorrow }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-6/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Your Borrow</div>
      </div>
      <div className="px-6 py-4 flex flex-col">
        <p className="text-base text-white">Balance 0.0826</p>
        <p className="text-base text-white">APY 8.4%</p>
        <p className="text-base text-white">Borrow power used 74.8%</p>
      </div>
      <div className="px-6 py-4">
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
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {assetsBorrowed.map((item) => (
              <tr className="border-b" key={item.asset}>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4">{item.balance}</td>
                <td className="px-6 py-4">{item.apy}%</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onBorrow()}
                    className="ml-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
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
  );
};

const AssetsToSupply = ({ onSupply, onDetails }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-5/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Assets To Supply</div>
      </div>
      <div className="px-6 py-4">
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
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {assetsToSupplyData.map((item) => (
              <tr className="border-b" key={item.asset}>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4">{item.balance}</td>
                <td className="px-6 py-4">{item.apy}%</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onSupply()}
                    className="ml-2 bg-gold hover:bg-gold text-white font-bold py-2 px-4 rounded"
                  >
                    Supply
                  </button>
                  <button
                    onClick={() => onDetails(item.asset)}
                    className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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
  );
};

const AssetsToBorrow = ({ onDetails }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-custom pt-4 pb-6 md:w-1/2 lg:w-6/12 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Assets To Borrow</div>
      </div>
      <div className="px-6 py-4">
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
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {assetsToBorrowData.map((item) => (
              <tr className="border-b" key={item.asset}>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4">{item.balance}</td>
                <td className="px-6 py-4">{item.apy}%</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">
                  <button
                    className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded cursor-not-allowed"
                    disabled
                  >
                    Supply
                  </button>
                  <button
                    onClick={() => onDetails(item.asset)}
                    className="ml-2 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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
      className="flex items-center px-3 py-2 rounded-md text-gray-200 hover:bg-gray-700 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 text-sm font-medium">{text}</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <main className="flex-grow">
          <div className="bg-black p-4 md:px-10">
            <div className="flex justify-between items-center">
              <Image
                src="/Arcus_Logo_v2.png"
                width={150}
                height={50}
                alt="Arcus Logo"
                onClick={imageClickHandle}
                className="cursor-pointer"
              />
              <Header />
            </div>
          </div>

          <div className="flex-grow overflow-hidden flex">
            <div className="flex flex-col w-60 px-3 py-6 bg-[#1E1E1E]">
              <SidebarItem
                text="Home"
                icon={<AiOutlineHome />}
                onClick={() => router.push("./")}
              />
              <SidebarItem
                text="Vaults"
                icon={<PiVaultLight />}
                onClick={() => router.push("./Vaults")}
              />
              <SidebarItem
                text="About"
                icon={<FcAbout />}
                onClick={() => router.push("http://arcusbtc.com")}
              />
            </div>

            <div className="flex flex-col flex-grow overflow-auto">
              <div className="p-4 md:px-10">
                <div className="flex justify-between mb-4">
                  <div className="text-xl font-bold text-white">
                    {isLendSelected ? "Your Supplies" : "Your Borrows"}
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={toggleLendBorrow}
                      className={`${
                        isLendSelected
                          ? "bg-white text-gray-800"
                          : "bg-gray-700 text-white"
                      } px-4 py-2 rounded-full`}
                    >
                      Lend
                    </button>
                    <button
                      onClick={toggleLendBorrow}
                      className={`${
                        !isLendSelected
                          ? "bg-white text-gray-800"
                          : "bg-gray-700 text-white"
                      } px-4 py-2 rounded-full`}
                    >
                      Borrow
                    </button>
                  </div>
                </div>
                {isLendSelected ? (
                  <YourSupply onSwitch={onSwitch} onWithdraw={onWithdraw} />
                ) : (
                  <YourBorrow onRepay={onRepay} onBorrow={onBorrow} />
                )}
                {isLendSelected ? (
                  <AssetsToSupply
                    onSupply={onSupply}
                    onDetails={(asset) => onDetails(asset)}
                  />
                ) : (
                  <AssetsToBorrow onDetails={(asset) => onDetails(asset)} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
