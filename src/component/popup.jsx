import React from "react";

import starImg from '../assets/icon-star.svg';

function Popup () {
    return (
        <div className="h-96 w-96 bg-gradient-to-b from-[#1F2630] to-[#171E28] rounded-3xl p-6">
            <div className="bg-[#272E38] rounded-full p-4 w-fit">
                <img src={starImg} alt="Star" className="h-4" />
            </div>
            <h1 className="font-sans text-3xl mt-4 text-white font-semibold">How did we do ?</h1>
            <p className="font-sans mt-2 text-base text-[#9AA1AB]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering !</p>
            <div className="mt-8 flex w-full justify-between">
                <button className="group bg-[#272E38] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300 focus:bg[#7C8898]">
                    <p className="font-sans mt-2 text-base text-[#9AA1AB] mt-0 group-hover:text-white duration-300">1</p>
                </button>
                <button className="group bg-[#272E38] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300">
                    <p className="font-sans mt-2 text-base text-[#9AA1AB] mt-0 group-hover:text-white duration-300">2</p>
                </button>
                <button className="group bg-[#272E38] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300">
                    <p className="font-sans mt-2 text-base text-[#9AA1AB] mt-0 group-hover:text-white duration-300">3</p>
                </button>
                <button className="group bg-[#272E38] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300">
                    <p className="font-sans mt-2 text-base text-[#9AA1AB] mt-0 group-hover:text-white duration-300">4</p>
                </button>
                <button className="group bg-[#272E38] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300">
                    <p className="font-sans mt-2 text-base text-[#9AA1AB] mt-0 group-hover:text-white duration-300">5</p>
                </button>
            </div>
            <button className="w-full mt-8 bg-[#FC7613] rounded-full p-3 text-white uppercase font-semibold tracking-widest hover:bg-white hover:text-[#FC7613] duration-300 active:translate-y-1">Submit</button>
            
        </div>
    )
}

export default Popup;