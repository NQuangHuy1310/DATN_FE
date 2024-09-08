import React, { useRef } from 'react'
import Slider from 'react-slick'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface SliderProps {
    children: React.ReactNode
    slideShow: number
}

const SliderComponent: React.FC<SliderProps> = ({ children, slideShow }) => {
    const sliderRef = useRef<Slider>(null)

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: slideShow,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slideShow - 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: slideShow - 2,
                    initialSlide: 2
                }
            }
        ]
    }

    return (
        <div className="relative">
            <Slider {...settings} ref={sliderRef}>
                {children}
            </Slider>
            <div className="absolute top-[44%] -left-5 bg-black/70 rounded-full p-2 cursor-pointer" onClick={previous}>
                <HiChevronLeft className="size- text-white" />
            </div>
            <div className="absolute top-[44%] -right-5 bg-black/70 rounded-full p-2 cursor-pointer" onClick={next}>
                <HiChevronRight className="size-5 text-white" />
            </div>
        </div>
    )
}

export default SliderComponent
