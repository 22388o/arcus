struct LendingPool {
    lending_wallet: LendingWallet,
    brc20_contract: BRC20,
    collateral: HashMap<Address, u64>, // user address => collateral amount
    total_collateral: u64,
    total_borrowed: u64,
    reward_rate: f64, // annual percentage yield
  }
  
  impl LendingPool {
  
    fn on_deposit(&mut self, deposit: BRC20Deposit) {
  
  
  // Update lending wallet DLC
      self.lending_wallet.on_deposit(deposit);
      let amount = deposit.amount;  
      self.collateral.insert(deposit.address, amount);
      self.total_collateral += amount;
  
      // Recalculate reward rate
      self.calculate_reward_rate();
  
      // Emit new rate event
      self.brc20_contract.emit_rate_update(self.reward_rate);
    }
  
    fn on_withdraw(&mut self, withdraw: BRC20Withdraw) {
      let amount = withdraw.amount;
      self.collateral.remove(&withdraw.address);
      self.total_collateral -= amount;
  
      // Recalculate reward rate
      self.calculate_reward_rate();
      
      // Send rewards to lending wallet
      let rewards = self.calculate_rewards(withdraw.address);
      self.brc20_contract.transfer_rewards(withdraw.address, rewards);
  
      // Emit withdraw event
      self.brc20_contract.emit_withdraw_event(withdraw);
    }
  
    fn calculate_reward_rate(&mut self) {
      // Implement logic to recalculate rate based 
      // on total collateral and utilization
    }
  
    fn calculate_rewards(&self, address: Address) -> u64 {
      // Lookup user's share of collateral and calculate rewards
    }
  
  }
  