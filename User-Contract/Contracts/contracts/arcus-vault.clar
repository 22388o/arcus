(use-trait ft-trait .sip-010-trait.sip-10-trait)

;;;;;;;;;;;;;;;;;;;;;;
;; Cons, Vars, Maps ;;
;;;;;;;;;;;;;;;;;;;;;;

(define-constant ONE_8 u100000000)

(define-constant ERR-NOT-AUTHORIZED (err u200))
(define-constant ERR-PAUSED (err u201))
(define-constant  ERR-INVALID-BALANCE (err u202))
(define-constant ERR-INVALID-TOKEN (err u203))
(define-constant ERR-AMOUNT-EXCEED-RESERVE (err u204))

(define-data-var contract-owner principal tx-sender)

(define-map approved-contracts principal bool)
(define-data-var reserve uint u0)


;;;;;;;;;;;;;;;;;;;;;;;;;
;; Read-only Functions ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

(define-read-only (get-contract-owner) 
    (ok (var-get contract-owner))
)

(define-read-only (get-reserve (the-token <ft-trait>)) 
    (var-get reserve)
)

;;;;;;;;;;;;;;;;;;;;;;
;; Public functions ;;
;;;;;;;;;;;;;;;;;;;;;;

(define-public (get-balance (the-token <ft-trait>) (owner principal)) 
    (begin  
        (asserts! (is-eq tx-sender (as-contract tx-sender)) (err "ERR-NOT-AUTHORIZED"))

        (ok 1)
    )
)