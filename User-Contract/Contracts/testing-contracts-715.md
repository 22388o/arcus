updated 7/15 - JG

## common

- ::set_tx_sender ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
- ::set_recipient ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG
- ::set_principal SST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5


### arcus-swap Contract:

- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-swap provide-liquidity (amount uint))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-swap set-contract-owner (owner principal))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-swap withdraw-token (recipient principal) (amount uint))

### arcus-token Contract:
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-balance (wallet principal))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-decimals) *|||* + 7/15 JG
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-name) *|||* + 7/15 JG
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-symbol) *|||* + 7/15 JG
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-token-balance (wallet principal))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-token-uri) *|||* + 7/15 JG
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token get-total-supply) *|||* + 7/15 JG
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token mint-ft (amount uint) (recipient principal))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token transfer (amount uint) (sender principal) (recipient principal) (note (optional (buff 64))))
- (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.arcus-token transfer-ft (amount uint) (sender principal) (recipient principal))

### satosh-token Contract:
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-balance (wallet principal))
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-decimals)
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-name)
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-symbol)
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-token-balance (wallet principal))
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-token-uri)
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token get-total-supply)
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token satosh-mint (amount uint))
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token transfer (amount uint) (sender principal) (recipient principal) (note (optional (buff 64))))
- (contract-call? 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG.satosh-token transfer-satosh (amount uint) (sender principal) (recipient principal))

## arcus-vault Contract:

Overall, this contract manages a yield vault for BTC and interacts with fungible tokens. It provides public functions to get token balances for owners and read-only functions to retrieve contract-related information. However, it seems that some parts of the contract are placeholders or not fully implemented (e.g., the actual balance retrieval in get-balance). Developers would need to complete and customize the contract according to their specific use case and requirements.

### Traits and Constants:

- **use-trait ft-trait:** The contract is using the "ft-trait" (fungible token trait) for managing tokens.
- **sip-010-trait.sip-10-trait:** The contract may also be using the "sip-010-trait" for advanced fungible token features.

### Error Constants:

Several error constants are defined for different error scenarios, like not being authorized, the contract being paused, invalid balances or tokens, and the amount exceeding the reserve.
Cons, Vars, Maps:

- **ONE_8:** A constant representing the value of 1 in 8 decimals (useful for token conversions).
- **contract-owner:** A data variable holding the principal (address) of the contract owner.
- **approved-contracts:** A map associating a principal (address) with a boolean value indicating if the contract is approved.
- **reserve:** A data variable holding the uint value representing the reserve.

### Read-only Functions:

- **get-contract-owner:** A read-only function that returns the contract owner's principal.
- **get-reserve:** A read-only function that returns the reserve value for a specific token.

### Public Functions:

- **get-balance:** A public function to get the balance of a specific token for a given owner.
It first checks if the transaction sender is authorized (contract owner) using an assertion.
Then it returns a successful response (ok) with the value "1" (you might expect it to return the actual balance, but it currently just returns 1 as a placeholder).

## lp-token Contract:

The contract allows users to interact with the vBTC token by transferring, minting, and burning tokens. Developers can integrate this fungible token contract into their applications to handle the minting and transfer of vBTC tokens when users deposit liquidity. Note that some parts of the contract might refer to specific contracts or roles within the application (e.g., ".arcus-vault"), and developers may need to customize these based on their use case.

### Cons, Vars, Maps:

- **vBTC:** The fungible token named "vBTC" is defined using define-fungible-token.
- **ERR_NOT_AUTHORIZED:** An error constant representing the "not authorized" error with value u100.
- **CONTRACT-OWNER:** A constant holding the principal (address) of the contract owner.
- **token-uri:** A data variable of type string-utf8 256 representing the URI of the token metadata.

#### Read-only Functions:

- **get-name:** Returns the name of the token ("vBTC").
- **get-symbol:** Returns the symbol of the token ("vBTC").
- **get-decimals:** Returns the number of decimals used by the token (u8).
- **get-total-supply:** Returns the total supply of the token using ft-get-supply for the vBTC token.
- **get-token-uri:** Returns the token's URI, if set.


### Public Functions:

- **set-token-uri:** Sets the token's URI. Only the contract owner (CONTRACT-OWNER) can invoke this function.
- **transfer:** Transfers a specified amount of vBTC from the sender to the recipient with an optional memo. The sender must match the transaction sender (tx-sender).
- **mint:** Mints a specified amount of vBTC to the recipient. This function can only be called by the contract with the name ".arcus-vault".
- **burn:** Burns (destroys) a specified amount of vBTC from the account. This function can only be called by the contract with the name ".arcus-vault".

## 