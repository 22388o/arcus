struct LenderWallet {
    wallet: Wallet,
    pool: LendingPool, // Reference to associated lending pool 
  }
  
  impl LenderWallet {
  
    // Approve deposit to lending wallet
    fn approve_deposit(&self, amount: u64) {
      let deposit = BRC20Deposit::new(amount);
      self.wallet.sign(deposit); 
      self.brc20_contract.submit_deposit(deposit);
    }
  
    // Withdraw accumulated rewards
    fn withdraw_rewards(&mut self) {
      let rewards = self.brc20_contract.get_rewards(self.wallet.address);
      let withdraw = BRC20Withdraw::new(rewards);
      self.wallet.sign(withdraw);
      self.brc20_contract.submit_withdraw(withdraw);
    }
  
  }
  