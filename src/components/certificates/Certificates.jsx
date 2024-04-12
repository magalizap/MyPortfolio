import React from 'react'
import { useEffect, useState } from 'react';
import { certificates } from '../../utils/Data';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './certificates.css';

const Certificates = () => {
    const [operator, setOperator] = useState(0)
    const [count, setCount] = useState(1)
    const [widthImg, setWidthImg] = useState(100 / certificates.length)

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 3000)

        return () => clearInterval(interval);
    }, [operator])

    const moveToLeft = () => {
        setCount(count - 1)

        if(count <= 1) {
            const newCount = certificates.length
            const newOperator = widthImg * (certificates.length - 1)
            setCount(newCount)
            setOperator(newOperator)
        }else {
            const newOperator = Math.max(operator - widthImg, 0)
            setOperator(newOperator)
        }

    }

    const moveToRight = () => {
        setCount(count + 1)
        if(count >= certificates.length ){
            setCount(1)
            setOperator(0)
        }else {
            const newOperator = Math.min(operator + widthImg, (certificates.length - 1) * 100)
            setOperator(newOperator)
        }

    }

    return (
        <section id='certificate' className='certificate container'>
            <h2 className='certificate__title'>Mis certificaciones</h2>
            <div className="certificate__content">
                <div className="container__carousel">
                    <div className="carousel" style={{ transform: `translate(-${operator}%)`, transition: 'all ease .6s' }}>
                        {certificates.map(({ img }, index) => (
                            <article key={index} className="slider-section">
                                <img src={img} alt="certificate_img" />
                            </article>
                        ))}
                    </div>
                    <button className="btn-left" onClick={moveToLeft} > <IoIosArrowBack/> </button>
                    <button className="btn-right" onClick={moveToRight} > <IoIosArrowForward/>  </button>
                </div>
            </div>
        </section>
    )
}

export default Certificates;
