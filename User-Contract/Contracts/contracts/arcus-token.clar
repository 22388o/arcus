;; A Token meant to be distributed to users who partake in providing liquidity to a Vault
;; Fungible Token - Arcus-Token, supply 100000
;; Written by David-Jesse

(impl-trait .Sip-10.ft-trait)

;;;;;;;;;;;;;;;;;;;;;;
;; Cons, Vars, Maps ;;
;;;;;;;;;;;;;;;;;;;;;;

;; Define Fungible token
(define-fungible-token arcus-token u100000)

(define-data-var contract-owner principal tx-sender)

;; Error Constants
(define-constant err-owner-only u100)
(define-constant err-minting u101)
(define-constant err-sending-token u102)
(define-constant err-cannot-send-zilch u103)
(define-constant err-cannot-send-zer0 u104)

;; Human-readable name
(define-constant name "Arcus-token")

;; Human-readable symbol
(define-constant symbol "AT")

;; Token decimals
(define-constant decimals u4)

;;;;;;;;;;;;
;; SIP-10 ;;
;;;;;;;;;;;;

;; Transfer
(define-public (transfer (amount uint) (sender principal) (recipient principal) (note (optional (buff 64)))) 
    (ft-transfer? arcus-token amount (var-get contract-owner) tx-sender)
)

;; Get token name
(define-public (get-name) 
    (ok name)
)

;; Get token symbol
(define-public (get-symbol) 
    (ok symbol)
)

;; Get token Decimals
(define-public (get-decimals) 
    (ok decimals)
)

;; Get token Balance
(define-public (get-balance (wallet principal)) 
    (ok (ft-get-balance arcus-token wallet))
)

;; Get token URI
(define-public (get-token-uri)
    (ok none)
)

;; Get total supply
(define-public (get-total-supply) 
    (ok (ft-get-supply arcus-token))
)

;;;;;;;;;;;;;;;;;;;;;;;;
;; Read-only Function ;;
;;;;;;;;;;;;;;;;;;;;;;;;

(define-read-only (get-token-balance (wallet principal)) 
    (ft-get-balance arcus-token wallet)
)

;;;;;;;;;;
;; Mint ;;
;;;;;;;;;;

;; @desc: Function that mints and transfers fungible token to a user
;; @params: amount -> uint, sender -> principal, recipient -> principal
(define-public (mint-ft (amount uint) (recipient principal))
    (begin    
        (asserts! (is-eq tx-sender (var-get contract-owner)) (err "err-owner-only"))
        (asserts! (> amount u0) (err "err-amount-less-than-zero"))
        (ok (unwrap! (ft-mint? arcus-token amount tx-sender) (err "err-sending-token")))
    )
)

;; @desc: Function that transfer token FT to the user
;; @params: amount -> uint, sender -> principal, recipient -> principal
(define-public (transfer-ft (amount uint) (sender principal) (recipient principal)) 

    (begin   
        (asserts! (> amount u0) (err "err-cannot-send-zilch"))
        (asserts! (is-eq tx-sender sender) (err "err-not-owner"))
        (ok (unwrap! (ft-transfer? arcus-token amount (var-get contract-owner) recipient) (err "err-sending-token")))
    )
)

