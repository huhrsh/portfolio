import { useState } from 'react';
import '../Styles/Contacts.css'

function Contacts(){

    const [contactDetails,setContactDetails]=useState([
        {
            id:1,
            icon:"https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
            name:"LinkedIn",
            link:"https://www.linkedin.com/in/harsh-jain-10467a22b/"
        },
        {
            id:2,
            icon:"https://cdn-icons-png.flaticon.com/128/733/733609.png",
            name:"GitHub",
            link:"https://github.com/huhrsh"
        },
        {
            id:3,
            icon:"data:image/png;base64,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",
            name:"LeetCode",
            link:"https://leetcode.com/Huhrsh/"
        },
        {
            id:4,
            icon:"data:image/jpeg;base64,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",
            name:"Coding Ninjas Studio",
            link:"https://www.codingninjas.com/studio/profile/a2046672-7083-48b6-9d91-b8d1eb4f1e65"
        },
        {
            id:5,
            icon:"https://cdn-icons-png.flaticon.com/128/732/732200.png",
            name:"harshj2010@gmail.com",
            link:"mailto:harshj2010@gmail.com"
        },
        {
            id:6,
            icon:"https://cdn-icons-png.flaticon.com/128/4470/4470351.png",
            name:"Resume",
            link:"/"
        },
        
    ])

    return(
        <>
            <main className='contacts-main'>
                {contactDetails.map((contacts,index)=>(
                    <div className='contact-div animate__animated animate__fadeIn' key={index}>
                        <div className='contact-left'>
                            <img src={contacts.icon} alt={contacts.name}/>
                        </div>
                        <div className='contact-right'>
                            <a target='_blank' href={contacts.link}>{contacts.name}</a>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

export {Contacts};