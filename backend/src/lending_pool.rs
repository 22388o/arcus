use bitcoin::{BlockHash, OutPoint, Txid};
use bitcoin_da::DLC; 

struct LendingWallet {
  dlc: DLC,
  pool: LendingPool, // Reference to associated lending pool
}


impl LendingWallet {

  fn new(brc20_contract: BRC20) -> Self {
    let dlc = DLC::new(); 
    Self { dlc, brc20_contract }
  }

  fn on_deposit(&mut self, deposit: BRC20Deposit) {
    // Lock deposit collateral in DLC
    let outpoint = OutPoint::new(deposit.txid, deposit.vout);
    self.dlc.fund(outpoint, deposit.amount);

    // Emit deposit event
    self.brc20_contract.emit_deposit_event(deposit); 
  }

  fn on_withdraw(&mut self, withdraw: BRC20Withdraw) {
    // Verify withdraw request signature
    if !withdraw.verify_signature() {
      return Err(Error::InvalidSignature);
    }

    // Unlock funds in DLC
    let outpoint = self.dlc.get_funding_outpoint();
    self.dlc.spend(outpoint, withdraw.address, withdraw.amount);

    // Emit withdraw event
    self.brc20_contract.emit_withdraw_event(withdraw);
  }

}
