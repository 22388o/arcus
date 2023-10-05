struct Borrower {
    wallet: Wallet,
    brc20_contract: BRC20,
  }
  
  impl Borrower {
  
    fn on_rate_update(&self, rate: f64) {
      // Display new rate to borrower
    }
  
    fn request_loan(&mut self, amount: u64, pool: &LendingPool) {
      // Verify collateral is adequate
  
      let loan = BRC20Borrow::new(amount, pool.id); 
      // Include pool id in borrow event
  
      self.wallet.sign(loan);
  
      if pool.verify_borrow(loan) {
        self.brc20_contract.submit_borrow(loan);
      }
    }
  
    fn repay_loan(&mut self, loan: BRC20Borrow) {
      // Calculate principal + interest
      let total = loan.amount + interest;
  
      let payment = BRC20Payment::new(loan.id, total);  
      self.wallet.sign(payment);
  
      self.brc20_contract.submit_payment(payment);
    }
  
  }
  