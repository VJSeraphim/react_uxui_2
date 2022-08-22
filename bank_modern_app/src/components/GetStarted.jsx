import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
        bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] hidden">
                        <span className="text-gradient">
                            Get
                        </span>
                    </p>
                    <img 
                        src={arrowUp}
                        alt="up"
                        className="w-[23px] h-[23px] object-contain"
                    />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px] hidden mr-2">
                    <span className="text-gradient">
                        Started
                    </span>
                    <img 
                        src={arrowUp}
                        alt="up"
                        className="w-[23px] h-[23px] object-contain"
                    />
                </p>
            </div>
        </div>
    )
}

export default GetStarted