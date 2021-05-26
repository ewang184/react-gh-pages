import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap'

import { Link, useHistory } from "react-router-dom"
import mmhs from "../images/schoollogo.jpg"
import wloo from "../images/waterloo.jpg"
export default function Education(){
    const checkpoint = 300;
    var opacity = 0;
    var opatwo = 0;
            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset;
                if (currentScroll <= checkpoint) {
                    opacity = 1 - currentScroll / checkpoint;

                    opatwo = 0;
                } else {
                    opatwo = currentScroll/window.screen.height;
                    opacity = 0;
                }
                document.querySelector(".pictureOne").style.opacity = opacity;
                document.querySelector(".pictureTwo").style.opacity = opatwo;
                });
    return (
        <>
            <div class="topnav">
                <a href="/react-gh-pages">Home</a>
                <a href="About">About</a>
                <a href="Awards">Awards</a>
                <a class="active" href="Education">Education</a>
                <a href="Projects">Projects</a>
                <a href = "https://github.com/ewang184">GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/">LinkedIn</a>
                <a>Contact me! Email: ervin.wang.881@gmail.com</a>
            </div>
            
            <div class="pagebubble">
                <p>Millikens Mills High School 2017-2021</p>
                <p>IBDP candidate</p>
                <p>Experiences:</p>
                <p>Math Club at Milliken 2020-2021 Vice President</p>
                <p>Junior Badminton Team - 2018 Doubles Bronze - 2019 Doubles Champion</p>
                <p>Student Advisor for CAS committee 2021-2021</p>
                <p>Honour Roll: 2017-2018, 2018-2019, 2019-2020</p>
            </div>
            <div class="pagebubble">
                <p>University of Waterloo</p>
                <p>Honours Mathematics 2021-2026</p>
            </div>
            <img src = {wloo} className="pictureTwo" alt ="wloo"></img>
            <img src = {mmhs} className="pictureOne" alt ="MMHS"></img>
            
        </>
        
    )
}