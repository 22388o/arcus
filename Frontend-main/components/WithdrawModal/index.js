// Withdraw Modal when User clicks 'Deposit' Button

import { useState } from 'react';

export default function WithdrawModal({ isOpen, onClose, vaultName }) {
  const [amount, setAmount] = useState('');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75">
          </div>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="mt-3 text-center">
            <span
              className=" text-gray-900 font-bold text-[30px] font-exo2"
              id="modal-headline"
            >
              {vaultName}
            </span> 
          </div>
        <div className='flex flex-col px-4 mt-4'>  
          

          <div className='border-2 border-gray-500 p-3 rounded-lg mt-3 flex flex-col'>     
              <div className='flex px-2'>
                <span className="text-sm font-bold text-[24px] mr-auto my-auto w-fit">
                  Exchange Rate
                </span>
                <span className="font-bold font-exo2 text-[20px] ml-auto text-center">
                    $1,096,756
                </span>
              </div>
              <div className='flex px-2 mt-2'>
                <span className="text-sm font-bold text-[24px] mr-auto my-auto w-fit">
                  Your Balance
                </span>
                <span className="font-bold font-exo2 w-fit text-[20px] ml-auto">
                  0.24 % | 42 vBTC LP
                </span>
              </div>
              <div className='flex px-2 mt-2'>
                <span className="text-sm font-bold text-[24px] mr-auto my-auto w-fit">
                  Pool Balance
                </span>
                <span className="font-bold font-exo2 w-fit text-[20px] ml-auto">
                  STX | BTC
                </span>
              </div>
          </div>
          </div>
        
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Confirm
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>  
    </div>
  );
}