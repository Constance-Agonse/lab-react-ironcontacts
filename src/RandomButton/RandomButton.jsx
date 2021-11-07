import React from 'react'

import './RandomButton.css'

import contacts from "../contacts.json";

// randomly select a contact from the larger contacts array
let randomCelebrity = contacts[Math.floor(Math.random() * contacts.length)];

export const RandomButton = () => {
    return (
        <div>
            
        </div>
    )
}
