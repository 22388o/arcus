import React, { useState, useRef } from "react";

export default function sendMailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = useRef();
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        alert("Thanks for Signing Up!");
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      alert("Email could not be sent!");
    }
  };

  return (
    <div
      className="flex w-full h-70vh bg-cover bg-center"
    >
      <div className="flex w-full justify-center bg-gradient-to-r from-blackAlpha-600 to-transparent">
        <div className="max-w-2xl text-center">
          <div className="space-y-4">
            <button
              className="text-white bg-orange-300 rounded-2xl px-10 py-8 text-3xl hover:bg-orange-500"
              onClick={onOpen}
            >
              Sign up
            </button>

            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p className="text-md font-medium pb-4">
                    Secure early access to Arcus Vaults! Enter your email.
                  </p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-orange-300 hover:border-orange-500 focus:border-orange-500 p-2"
                    type="email"
                    placeholder="Enter your email"
                  />
                </ModalBody>

                <ModalFooter>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          
        </div>
      </div>
    </div>
  );
}
