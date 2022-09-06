import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img 
                        src={logo}
                        alt="hoobank"
                        className="w-[266px] h-[72px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        Lorem Ipsum
                    </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLinks.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerLink.title}
                                <ul className="list-none mt-4">
                                    {footerLinks.footerLink.map((link, i) => (
                                        <li key={link.name}
                                            className={`font-poppins font-normal text-[16px] leading-[24px] 
                                            text-dimWhite hover:text-secondary cursor-pointer
                                            ${i !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}
                                            `}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
                <p className="font-poppins font-medium text-[18px] text-center
                text-[18px] leading-[27px] text-white" >
                    2022 Lorem Ipsum All Rights Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, i) => (
                        <img 
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer
                            ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer