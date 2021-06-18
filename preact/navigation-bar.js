import { useState } from 'react';
export default ({ backgroundColor, color, balance }) => {
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(currentState => !currentState);
    }
    return (
        <div className="nav">
            <ul className="navigation-bar">
                <h1>Stock Trader</h1>
                <li><a href="/">Home</a></li>
                <li><a href="/get-started">Get Started</a></li>
                <li><a href="/donate">{balance} Shares</a></li>
                <li className="special"><a href="/about-us">About us</a></li>
            </ul>
            <div className="navigation-bar-mobile">
                <div onClick={toggleOpen} className="navigation-toggle"></div>
                <h1>Stock Trader</h1>
                {isOpen &&
                    <ul >
                        <li><a href="/">Home</a></li>
                        <li><a href="/get-started">Get Started</a></li>
                        <li><a href="/donate">Donate</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li className="exit-button"><a onClick={toggleOpen}>X</a></li>
                    </ul>
                }
            </div>
            <style>{`
                div {
                    background-color green;
                }
                .navigation-bar {
                    color: ${color || "white"};
                    margin: 0;
                    display: flex;
                    align-items: center;
                        background-color: ${backgroundColor || "#141414"};
                    }
                    .navigation-bar > li {
                        list-style-type: none; }
                        .navigation-bar > li > a {
                        display: block;
                        padding: 1em;
                        color: ${color || "white"};
                        text-decoration: none; }
                        .navigation-bar > li > a:hover {
                            color: #a61f27; }
                    .navigation-bar > .special {
                        margin-left: auto; }
                    @media (max-width: 450px) {
                        .navigation-bar {
                        display: none; } }

                    .navigation-bar-mobile {
                    display: none; }
                    @media (max-width: 450px) {
                        .navigation-bar-mobile {
                        display: flex; 
                        align-items: center;
                    } }
                    .navigation-bar-mobile > .navigation-toggle {
                        width: fit-content;
                        height: 50px; }
                        .navigation-bar-mobile > .navigation-toggle::after {
                        position: absolute;
                        right: .5em;
                        display: block;
                        color: black;
                        content: "\\2261";
                        font-size: 2.7rem; }

                    @keyframes move-in {
                    0% {
                        transform: translateY(-200px); }
                    100% {
                        transform: translateY(0px); } }
            `}</style>
        </div>
    )
}