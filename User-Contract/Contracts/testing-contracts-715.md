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