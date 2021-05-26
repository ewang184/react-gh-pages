import React, {useState} from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard(){
    const checkpoint = 300;
    var opacity = 0;
    var opatwo = 0;
            window.addEventListener("scroll", ()=> {
                const currentScroll = window.pageYOffset;
                if (currentScroll <= checkpoint) {
                    document.location.href = "About";
                }
                });
            
    return(
        <>
        
            <div class="topnav">
                <a class="active" href="/react-gh-pages">Home</a>
                <a href="/react-gh-pages/About">About</a>
                <a href="/react-gh-pages/Awards">Awards</a>
                <a href="/react-gh-pages/Education">Education</a>
                <a href="/react-gh-pages/Projects">Projects</a>
                <a href = "https://github.com/ewang184">GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/">LinkedIn</a>
                <a>Contact me! Email: ervin.wang.881@gmail.com</a>
            </div>
            <div class="titleHead">
                    Hi there!
                    <p>Welcome to my website!</p>  
            </div>
            <div class = "subHead">Scroll down to learn more!</div>
            <div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div>
        </>
        
    )
}
