;; A Fungible token users add to liquidity pool to get yield on the tokens.
;; Fungible Token -> Satosh-Token, supply 1000000
;; Written by David-Jesse

(impl-trait .Sip-10.ft-trait)

;;;;;;;;;;;;;;;;;;;;;;
;; Cons, Vars, Maps ;;
;;;;;;;;;;;;;;;;;;;;;;

;; Define Fungible token
(define-fungible-token satosh-token u1000000)

(define-data-var contract-owner principal tx-sender)

;; Error Constants
(define-constant err-not-owner u300)
(define-constant err-amount-less-than-zero u301)
(define-constant err-sending-tokens u302)


;; Human readable name 
(define-constant name "Satosh-Token")

;; Human-readable symbol
(define-constant symbol "ST")

;; Token decimals
(define-constant decimals u6)

;;;;;;;;;;;;
;; SIP-10 ;;
;;;;;;;;;;;;

;; Transfer
(define-public (transfer (amount uint) (sender principal) (recipient principal) (note (optional (buff 64)))) 
    (ft-transfer? satosh-token amount (var-get contract-owner) recipient)
)

;; Get token name
(define-public (get-name) 
    (ok name)
)

;; Get token symbol
(define-public (get-symbol) 
    (ok symbol)
)

;; Get token decimals
(define-public (get-decimals) 
    (ok decimals)
)

;; Get balance 
(define-public (get-balance (wallet principal)) 
    (ok (ft-get-balance satosh-token wallet))
)

;; Get URI token
(define-public (get-token-uri) 
    (ok none)
)

;; Get total supply
(define-public (get-total-supply) 
    (ok (ft-get-supply satosh-token))
)

;;;;;;;;;;
;; Mint ;;
;;;;;;;;;;

;; @desc: Users mint token and contribute to liquidity pool to earn pool tokens
;; @params: amount -> uint, wallet -> principal

(define-public (satosh-mint (amount uint)) 
    (begin        
        (asserts! (> amount u0) (err "err-amount-less-than-zero"))
        (asserts! (is-eq tx-sender (var-get contract-owner)) (err "err-not-owner"))
        (ok (unwrap! (ft-mint? satosh-token amount (var-get contract-owner)) (err "err-minting-ft")))
    )
)

;;;;;;;;;;;;;;;;;;;;;;;;
;; Read-only Function ;;
;;;;;;;;;;;;;;;;;;;;;;;;

(define-read-only (get-token-balance (wallet principal)) 
    (ft-get-balance satosh-token wallet)
)

;;;;;;;;;;;;;;;;;;;;;;;
;; Transfer Function ;;
;;;;;;;;;;;;;;;;;;;;;;;

;; @desc: Function that transfer FT to the user
;;@params: amount -> uint, sender -> principal, recipient -> principal
(define-public (transfer-satosh (amount uint) (sender principal) (recipient principal)) 
    (begin      
        (asserts! (> amount u0) (err "err-amount-less-thann-zero"))
        (asserts! (is-eq tx-sender sender) (err "err-sending-token"))
        (ok (unwrap! (ft-transfer? satosh-token amount (var-get contract-owner) recipient) (err "err-sending-token")))
    )
)
