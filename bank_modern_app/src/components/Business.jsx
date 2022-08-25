import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../styles'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index}) => (
    <div className={`flex flex-row rounded-[20px] p-6 ${ index !== features.length - 1 ? "mb-6" : "mb-0" }
     feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
        </div>
    </div>
)

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the business, <br className="sm:block hidden"/>
                    we'll handle the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem Ipsum
                </p>
                <Button styles="mt-10"/>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, i) => (
                    <FeatureCard key={feature.id} {...feature} index={i}/>
                ))}
            </div>
        </section>
    )
}

export default Business