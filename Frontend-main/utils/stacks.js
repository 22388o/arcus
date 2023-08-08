import { StacksTestnet, StacksMainnet } from "@stacks/network";
import { contractPrincipalCV, principalCV } from '@stacks/transactions/dist/clarity/types/principalCV'
import { trueCV, falseCV } from "@stacks/transactions/dist/clarity/types/booleanCV";
import {
    uintCV,
    PostConditionMode,
    callReadOnlyFunction,
  } from '@stacks/transactions'
import { openContractCall } from "@stacks/connect";

export const runClarityFunction = async (contractAddress, contractName, funcName, amount, flag) => {

    const cpCV = contractPrincipalCV(contractAddress, contractName);
    const network_testnet = new StacksTestnet();

    const txOptions_depositVaultSTX = {
        contractAddress: contractAddress,
        contractName: contractName,
        functionName: funcName,
        network: network_testnet,      
        postConditionMode: PostConditionMode.Allow,
        functionArgs: [
        cpCV,
        uintCV(amount),
        ],
        appDetails: {
        name: "Connect Hiro Wallet",
        icon: "https://assets-global.website-files.com/618b0aafa4afde65f2fe38fe/618b0aafa4afde2ae1fe3a1f_icon-isotipo.svg"
        },
        onFinish: () => {
        },
    }

    const txOptions_getOwner = {
        contractAddress: contractAddress,
        contractName: contractName,
        functionName: 'get-owner',
        functionArgs: [
            uintCV(amount),
        ],
        network: network_testnet,
        senderAddress: contractAddress,
    };

    if (flag == 0) {
        await openContractCall(txOptions_depositVaultSTX);
    }
  
    else if (flag == 1) {
        try {
            const tempData =  await callReadOnlyFunction(txOptions_getOwner);
            return tempData;
        } catch(e) {
            return { value: {type: -1}};
        }
    }
}
