import React from 'react'
import {FaArrowRight} from "react-icons/fa"
const Contact = () => {
    return (
        <div className='max-w-lg w-full mx-auto text-center pt-36 pb-10'>
            <h1 className='text-4xl sm:text-4xl'>Intrested in working together?</h1>
            <a href="mailto:mayanktanwar8402@gmail.com">
                <span className='mt-6 inline-block w-auto bg-black text-white text-base py-4 px-7 cursor-pointer'>
                    <div className='flex flex-row items-center'>
                        <span className='mr-3'>Get in touch</span>
                        <FaArrowRight color='white'/>
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Contact
