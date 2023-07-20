import { useState } from 'react';
import { contractCall } from '@stacks/connect';

const ContractCallArcusWithdraw = ({ userSession }) => {
  // State variable to store the withdrawal amount
  const [amount, setAmount] = useState(0);

  // Function to withdraw tokens
  const withdrawTokens = async () => {
    try {
      // Get the user's address
      const userAddress = userSession.loadUserData().profile.stxAddress.testnet;

      // Options for the contract call
      const options = {
        contractAddress: "ST39KDG85WZ340RAGGFY4FN3JMKYMEC1AEQHRM7TN",
        contractName: "arcus-lendv01",
        functionName: "withdraw-token",
        functionArgs: [userAddress, amount],
        senderAddress: userAddress,
        network: new StacksTestnet(),
      };

      // Call the contract function to withdraw tokens
      await contractCall(options);

      // Display success message or update state if necessary
    } catch (error) {
      // TODO: Handle errors
    }
  };

  return (
    <div>
      {/* Input field to set the withdrawal amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* Button to call withdrawTokens function */}
      <button onClick={withdrawTokens}>Withdraw Tokens</button>
    </div>
  );
};

export default ContractCallArcusWithdraw;
