;; Arcus-swap contract
;; Contract that lets a user add liquidity to the vault and vault token (arcus-token) as prove of liquidity
;; Written by David-Jesse

;;;;;;;;;;;;;;;;;;;;;;
;; Cons, Vars, Maps ;;
;;;;;;;;;;;;;;;;;;;;;;

;; (define-constant contract-owner .arcus-swap)

(define-constant err-cant-send-zero-tokens u200)
(define-constant err-zero-tokens u201)
(define-constant err-sending-stx u202)
(define-constant err-transfering-tokens u203)
(define-constant err-not-authorized 204)
(define-constant err-transferring-from-user 205)
(define-constant err-cannot-send-zilch 206)
(define-constant err-sending-arcus u207)

(define-data-var contract-owner principal tx-sender)

(define-map user-liquidity principal {
    id: principal,
    amount: uint 
})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Set-Contract Owner Function ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define-public (set-contract-owner (owner principal))
    (begin  
        (asserts! (is-eq tx-sender (var-get contract-owner)) (err "err-not-authorized"))
        (ok (var-set contract-owner owner))
    )
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Provide-Liquidity Function ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; @desc: Function that lets users provide liquidity to the vault to earn a yield
;; @params: amount -> uint

(define-public (provide-liquidity (amount uint)) 
    (begin        
        (asserts! (> amount u0) (err "err-cant-send-zero-tokens"))
        (unwrap! (contract-call? .satosh-token transfer-satosh amount tx-sender (var-get contract-owner)) (err "err-transfering-from-user"))
        (ok (unwrap! (contract-call? .arcus-token mint-ft amount tx-sender) (err "err-transfering-tokens")))
    )
)


;;;;;;;;;;;;;;;;;;;;;;;;;
;; Withdrawal Function ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

;; @desc: Function that lets a user withdraw swap their funds for the LP token recieved on providing liquidity
;; @params: Recipient -> principal, amount -> uint. 

(define-public (withdraw-token (recipient principal) (amount uint)) 
    (begin    

        (asserts! (> amount u0) (err "err-cannot-withdraw-zilch"))
        (asserts! (is-eq tx-sender recipient) (err "err-not-owner"))

        (unwrap! (contract-call? .satosh-token transfer-satosh amount (var-get contract-owner) tx-sender) (err "err-sending-token"))
        (unwrap! (contract-call? .arcus-token transfer-ft amount tx-sender (var-get contract-owner)) (err "err-sending-arcus"))
                

        (ok 1)
    )
)