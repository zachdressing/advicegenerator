import React, { useEffect, useState } from 'react'
import '../App.css';
import deskDivider from '../images/pattern-divider-desktop.svg';
import mobDivider from "../images/pattern-divider-mobile.svg"
import diceBtn from '../images/icon-dice.svg';

const HomeComponent = () => {

    const [data, setData] = useState();
    const [id, setId] = useState(117);
    const [quote, setQuote] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action");

    const callData = (() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
        if (data) {
            setId(data.slip.id)
            setQuote(data.slip.advice)
        }
    });

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className='TextBox'>
                        <p className='advNum manrope-light'>
                            ADVICE #{id}
                        </p>
                        <p className='quote manrope-strong'>
                            "{quote}"
                        </p>
                        <img className='desktop-divider' src={deskDivider} />
                        <img className='mobile-divider' src={mobDivider} />

                        <button className="dice" onClick={callData}>
                            <img src={diceBtn} />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HomeComponent
