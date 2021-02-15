import { useState } from "react";
import "./Input.css"
function Input({onChange}) {
    return (
        <div className="input-container">
            <input type="text" onChange={onChange} placeholder="Search for a character"></input>
        </div>
    )
}

export default Input;
