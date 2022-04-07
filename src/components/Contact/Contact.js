import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = ({contactInfo}) => {
    return (
        <>
            <div className='flex justify-around mt-6 mb-12 flex-wrap ' id='contact'>
                <ContactInfo contactInfo={contactInfo}/>
                <ContactForm />
            </div>
        </>
    )
}

export default Contact