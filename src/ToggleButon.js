import { useState } from "react";
import "./styleToggle.css"

function ToggleButton() {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");

    const handleClick = () => {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "white" : "#1b1b1b");
    }
    return (
        <section style={{backgroundColor, color: `${textColor}`}}>
            <button onClick={handleClick} style={{backgroundColor: backgroundColor, color: `${textColor}` }}>
                {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
            </button>
            <section className="content">
                <h1>Welcome to Shadrack Essien's <br/>
                    Supper Toggle Button
                </h1>
            </section>
        </section>
    )
}

export default ToggleButton;