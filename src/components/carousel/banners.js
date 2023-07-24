"use client"
import { useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

export default function Banner() {
    
    const slides = [
  
        {id: 1, url:"/banner1.png"},
        {id: 2, url:"/banner2.png"},
        {id: 3, url:"/banner3.png"},
    
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    
    return(
        <div className="max-w-[1440px] h-[400px] w-full relative group">
                         
                <div       
                    className="w-full h-full bg-center bg-cover duration-500" 
                    style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
                </div>
            
                
            {/* seta para a esquerda */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} onClick={prevSlide}></BsChevronCompactLeft>
            </div>
            {/* seta para a direita */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactRight size={30}  onClick={nextSlide} ></BsChevronCompactRight>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                )  )}
            </div>
        </div>
    )

}