import React from 'react'
import "./header.css";
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">blog</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwYmFja2dyb3VuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Loading" />
        </div>
    )
}
