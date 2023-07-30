;; Sip-010 traits
;; Written by David-Jesse

;; SIP-10

(define-trait sip-10-trait

    (
        ;; Transfer from principal to principal
        (transfer (uint principal principal (optional (buff 34))) (response bool uint))

        ;; Human-readable name of the token
        (get-name () (response (string-ascii 32) uint))

        ;; Human-readable symbol
        (get-symbol () (response (string-ascii 32) uint))

        ;; Number of decimals used to represent the token
        (get-decimals () (response uint uint))

        ;; Balance
        (get-balance (principal) (response uint uint))

        ;; Current total supply
        (get-total-supply () (response uint uint))

        ;; Optional URI for metadata
        (get-token-uri () (response (optional (string-utf8 256)) uint))

        ;; Helper functions
        (mint (uint principal) (response bool uint))
        (burn (uint principal) (response bool uint))
    )
)