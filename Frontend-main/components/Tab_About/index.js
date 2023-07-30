export default function Tab_About() {
    return (
        <div className="flex w-full">
            <div className="mt-4 w-1/2 flex flex-col">
                <span className="font-exo2 text-white font-bold text-[24px] underline">Description</span>
                <div className="w-full font-exo2 text-[#B4B4B4] text-[14px] mt-5 tracking-wider">
                    Introducing the BTC Vault: Your Ticket to Exciting Yield Adventures on the Stacks Blockchain!

                    Hold on tight, crypto enthusiasts! Forget those traditional finance shenanigans, because we've got something extraordinary for you. It's time to unlock the power of the BTC Vault and embark on a thrilling journey to yield-land like never before!

                    Picture this: a savings account on steroids, floating in the endless realm of cyberspace. With the BTC Vault, you can securely deposit your precious BTC and watch as it goes to work within the vibrant DeFi ecosystem. This vault is like a superhero, tirelessly seeking out the most lucrative opportunities to generate yield on your behalf.
                </div>
                <div className="w-full font-exo2 text-[#B4B4B4] text-[14px] mt-5 tracking-wider">
                    Hold up, here's the best part. Unlike those stuffy old banks, we believe in transparency and empowerment. Every step of the way, you're in control of your assets, and you can witness their magical movements in real-time. It's like having a front-row seat to the most thrilling show on Earth!

                    No more closed doors and hidden mysteries. We've unleashed the power of decentralized finance on the Stacks blockchain, where everything is transparent, auditable, and accessible to everyone. Feel the exhilaration as you take charge of your financial destiny, armed with the knowledge that your assets are safe and your yields are blooming.
                </div>
                <div className="w-full font-exo2 text-[#B4B4B4] text-[14px] mt-5 tracking-wider">
                    Are you ready for an adventure like no other? Step into the world of the BTC Vault on the Stacks blockchain and join the ranks of fearless crypto pioneers. Get ready to be amazed, excited, and rewarded as you explore the possibilities of high-yield crypto savings. It's time to unleash the power of your BTC and embark on a wild ride with the BTC Vault!

                    Buckle up, because the BTC Vault is here to revolutionize the way you earn yield. Say goodbye to boring and hello to the thrill of decentralized finance on the Stacks blockchain! Get ready to make your BTC work for you and embark on an epic journey towards financial empowerment and endless excitement. Let's go!
                </div>
            </div>
            <div className="mt-4 w-1/2 flex flex-col px-10">
                <div className="flex flex-col w-full px-10">
                    <span className="font-exo2 text-white font-bold text-[24px] underline">Arcus Fees</span>
                    <div className="flex space-x-12 px-10">
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Deposit / Withdrawal fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">0%</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Management fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">0%</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Performance fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">10%</span>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 mt-10">
                    <hr />
                </div>
                <div className="flex flex-col w-full px-10 mt-[50px]">
                    <span className="font-exo2 text-white font-bold text-[24px] underline">APY</span>
                    <div className="flex flex-col w-full px-10 mt-5">
                        <span className="font-exo2 text-white font-bold text-[16px]">Inception APY - 0%</span>
                        <br />
                        <span className="font-exo2 text-white font-bold text-[16px]">Yearly APY - 0%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}