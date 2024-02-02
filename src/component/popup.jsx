import React, { useState, useEffect } from "react";

import starImg from '../assets/icon-star.svg';
import sentImg from '../assets/illustration-thank-you.svg';

function Popup () {

    const [rating, setRating] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        setRating(rating);
    }, [rating]);

    const handleRatingChange = (value) => {
        setRating(value);
    }


    const handleSubmit = () => {
        if (rating > 0) {
            console.log(rating);
            localStorage.setItem('rating', rating);
            setIsSubmit(true);
        } else {
          console.error('Veuillez sélectionner une note avant de soumettre.');
        }
    };

    return (
        <div className="h-fit w-[90vw] max-w-sm	 bg-gradient-to-b from-[#1F2630] to-[#171E28] rounded-3xl p-6">

            {isSubmit ? (
                <>
                    <div className="l-1/1 flex flex-col items-center my-8">
                        <img src={sentImg} alt='Rate sent' className="h-24" />
                        <div className="bg-[#272E38] rounded-full px-4 py-1 w-fit mt-4">
                            <p className="text-[#FC7613]">{"You selected " + localStorage.getItem('rating') + " out of 5" }</p>
                        </div>
                        <h2 className="font-custom text-3xl mt-4 text-white font-semibold">Thank you !</h2>
                        <p className="font-custom mt-2 text-base text-[#9AA1AB] text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                </> 
            ) : (
                <>
                    <div className="bg-[#272E38] rounded-full p-4 w-fit">
                        <img src={starImg} alt="Star" className="h-4" />
                    </div>
                    <h2 className="font-custom text-3xl mt-4 text-white font-semibold">How did we do ?</h2>
                    <p className="font-custom mt-2 text-base text-[#9AA1AB]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering !</p>
                    <div className="mt-8 flex w-full justify-between">
                        {[1,2,3,4,5].map((value) => (
                            <button key={value} className={`group rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#FC7613] duration-300 ${
                                rating === value ? 'bg-[#7C8898]' : 'bg-[#272E38]'
                            }`} 
                            onClick={() => handleRatingChange(value)}>
                                <p className={`font-custom text-base mt-1 inline-block group-hover:text-white duration-300 ${ rating === value ? 'text-white': 'text-[#9AA1AB]'}`}>{value}</p>
                            </button>
                        ))}
                    </div>
                    <button className="w-full mt-8 bg-[#FC7613] rounded-full p-3 text-white uppercase font-semibold tracking-widest hover:bg-white hover:text-[#FC7613] duration-50 active:translate-y-1" onClick={handleSubmit}>Submit</button>
                </>

            )}


            
            
        </div>
    )
}

export default Popup;