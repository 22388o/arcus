import { useState, useCallback } from 'react';
import { callReadOnlyFunction } from '@stacks/connect';

const ContractCallArcusbal = ({ userSession }) => {
  // state variables to store the user balance and the vault balance
  const [userBalance, setUserBalance] = useState(0);
  const [vaultBalance, setVaultBalance] = useState(0);

  // function to get the user balance
  const getUserBalance = useCallback(async () => {
    // Check if the user is signed in
    if (userSession.isUserSignedIn()) {
      // Get the user's address
      const userAddress = userSession.loadUserData().profile.stxAddress.testnet;

      // Options for the read-only function call
      const options = {
        contractAddress: "", // Local or Testnet contract address here
        contractName: "", // Local or Testnet contract name here
        functionName: "get-user-balance", // Local or Testnet contract function name here
        network: new StacksTestnet(),
        functionArgs: [],
        senderAddress: userAddress,
      };

      // Call the read-only function and store the result
      const result = await callReadOnlyFunction(options);
      console.log(result.value);

      // Update the user balance state variable
      setUserBalance(parseInt(result.value));
    }
  }, [userSession]);

  return (
    <div>
      {/* Display the user and vault balance */}
      <p>User Balance: {userBalance}</p>
      <p>Vault Balance: {vaultBalance}</p>
      {/* Button to call getUserBalance function */}
      <button onClick={getUserBalance}>Get User Balance</button>
    </div>
  );
};

export default ContractCallArcusbal;
