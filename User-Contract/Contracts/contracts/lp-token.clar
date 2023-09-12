;; A fungible token minted to users when they deposit liquidity

;;;;;;;;;;;;;;;;;;;;;;
;; Cons, Vars, Maps ;;
;;;;;;;;;;;;;;;;;;;;;;

(define-fungible-token vBTC)

(define-constant ERR_NOT_AUTHORIZED u100)
(define-constant CONTRACT-OWNER tx-sender)

(define-data-var token-uri (string-utf8 256) u"")

;;;;;;;;;;;;;;;;;;;;;;;;;
;; Read-only Functions ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

(define-read-only (get-name) 
    (ok "vBTC")
)

(define-read-only (get-symbol) 
    (ok "vBTC")
)

(define-read-only (get-decimals) 
    (ok u8)
)

(define-read-only (get-total-supply) 
    (ok (ft-get-supply vBTC))
)

(define-read-only (get-token-uri) 
    (ok (some (var-get token-uri)))
)

(define-public (set-token-uri (uri (string-utf8 256))) 
    (begin
        (asserts! (is-eq tx-sender CONTRACT-OWNER) (err "ERR_NOT_AUTHORIZED"))
        (ok (var-set token-uri uri))
    )
)

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))) 
    (begin  
        (asserts! (is-eq tx-sender sender) (err "ERR_NOT_AUTHORIZED"))
        (print (default-to 0x memo))
        (ok (ft-transfer? vBTC amount sender recipient))
    )
)

(define-public (mint (amount uint) (recipient principal)) 
    (begin
        (asserts! (is-eq contract-caller .arcus-vault) (err "ERR_NOT_AUTHORIZED"))
        (ok (ft-mint? vBTC amount recipient))
    )
)

(define-public (burn (amount uint) (account principal))
    (begin  
        (asserts! (is-eq contract-caller .arcus-vault) (err "ERR_NOT_AUTHORIZED"))
        (ok (ft-burn? vBTC amount account))
    )
)