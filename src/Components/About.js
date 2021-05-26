import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap'
import ervin from "../images/photo.jpg"
import { Link, useHistory } from "react-router-dom"

export default function About(){
    return (
        <>
            <div class="topnav">
                <a href="/react-gh-pages">Home</a>
                <a class="active" href="About">About</a>
                <a href="Awards">Awards</a>
                <a href="Education">Education</a>
                <a href="Projects">Projects</a>
                <a href = "https://github.com/ewang184">GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/">LinkedIn</a>
                <a>Contact me! Email: ervin.wang.881@gmail.com</a>
            </div>
            <img src = {ervin} className="pictureTwo" alt ="Ervin"></img>
            <div class="pagebubble">
                    Hi there! My name is Ervin Wang. I'm a student in my final year of the International Baccalaureate Diploma Program, and pursuing a degree in mathematics. 
                    With the rising importance of being able to understand and curate data, I aim to learn and develop statistical solutions to this challenge.
                    Wherever I go, I wish to learn from and connect with others; I firmly believe that everyone has something to teach.
                    In my free time, I enjoy playing video games (to some extent, don't we all) and playing badminton when there isn't a pandemic. I also like playing piano, specifically figuring out how to play songs from videos or the radio!
                    
            </div>
            
            
        </>
    )
}