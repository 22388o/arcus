import { useState } from 'react';
import { contractCall } from '@stacks/connect';

const ContractCallArcusSwap = ({ userSession }) => {
  // state variable to store the amount for liquidity
  const [amount, setAmount] = useState(0);

  // function to provide liquidity
  const provideLiquidity = async () => {
    try {
      // Get the user's address
      const userAddress = userSession.loadUserData().profile.stxAddress.testnet;

      // Options for the contract call
      const options = {
        contractAddress: "ST39KDG85WZ340RAGGFY4FN3JMKYMEC1AEQHRM7TN",
        contractName: "arcus-lendv01",
        functionName: "provide-liquidity",
        functionArgs: [amount],
        senderAddress: userAddress,
        network: new StacksTestnet(),
      };

      // Call the contract function to provide liquidity
      await contractCall(options);

      // Display success message or update state if necessary
    } catch (error) {
      // TODO: Handle errors
    }
  };

  return (
    <div>
      {/* Input field to set the liquidity amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* Button to call provideLiquidity function */}
      <button onClick={provideLiquidity}>Provide Liquidity</button>
    </div>
  );
};

export default ContractCallArcusSwap;
