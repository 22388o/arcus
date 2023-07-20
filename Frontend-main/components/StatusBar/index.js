export default function StatusBar({number}) {
    return(
        <div className="flex items-center mt-8">
            {
                number == 1 &&
                <div className="flex justify-center items-center">
                    <div className="bg-[#C8C8C8] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                        <span className="font-Exo2 text-[20px]">1</span>
                    </div>
                    <hr className="w-[60px] bg-[#2C2C2C] opacity-20 border-t-2" />
                    <div className="bg-[#1E1E1E] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                        <span className="font-Exo2 text-[20px] text-white">2</span>
                    </div>
                </div>
            }
            {
                number == 2 &&
                <div className="flex justify-center items-center">
                    <div className="bg-[#1E1E1E] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                        <span className="font-Exo2 text-[20px] text-white">1</span>
                    </div>
                    <hr className="w-[60px] bg-[#2C2C2C] opacity-20 border-t-2" />
                    <div className="bg-[#C8C8C8] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                        <span className="font-Exo2 text-[20px]">2</span>
                    </div>
                </div>
            }
        </div>
    );
}