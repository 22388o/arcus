import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.5.4/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Test vBTC smart contract",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        // arrange: set up the chain, state, and other required elements
        let wallet_1 = accounts.get("wallet_1")!;
        let arcus_vault = accounts.get(".arcus-vault")!; // Update with the actual contract principal for arcus-vault
        
        // act: perform actions related to the current test

        // Test get-name function
        let resultGetName = await chain.callReadOnlyFn('contract-name', 'get-name', [], wallet_1.address);
        assertEquals(resultGetName, "vBTC");

        // Test get-symbol function
        let resultGetSymbol = await chain.callReadOnlyFn('contract-name', 'get-symbol', [], wallet_1.address);
        assertEquals(resultGetSymbol, "vBTC");

        // Test get-decimals function
        let resultGetDecimals = await chain.callReadOnlyFn('contract-name', 'get-decimals', [], wallet_1.address);
        assertEquals(resultGetDecimals, 8); // Assuming decimals are 8, update accordingly if different

        // Test get-total-supply function
        let resultGetTotalSupply = await chain.callReadOnlyFn('contract-name', 'get-total-supply', [], wallet_1.address);
        assertEquals(resultGetTotalSupply, /* Provide expected total supply */);

        // Test get-token-uri function
        let resultGetTokenURI = await chain.callReadOnlyFn('contract-name', 'get-token-uri', [], wallet_1.address);
        assertEquals(resultGetTokenURI, /* Provide expected token URI */);

        // Test set-token-uri function
        let resultSetTokenURI = await chain.mineBlock([
            Tx.contractCall('contract-name', 'set-token-uri', [
                types.argument(types.stringAscii('https://example.com/vbtc')),
            ], arcus_vault.address)
        ]);

        // assert: review returned data, contract state, and other requirements
        assertEquals(resultSetTokenURI.receipts.length, 1);
        // Add additional assertions for contract state and behavior

        // TODO: Add more test cases to cover other public functions (transfer, mint, burn)
    },
});
