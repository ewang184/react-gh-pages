import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap'

import { Link, useHistory } from "react-router-dom"
import mmhs from "../images/schoollogo.jpg"
import wloo from "../images/waterloo.jpg"
export default function Education(){
    
    return (
        <>
            <div class="topnav">
                <a><Link to = "/" >Home</Link></a>
                <a><Link to = "/About" >About</Link></a>
                <a ><Link to = "/Awards" >Awards</Link></a>
                <a class="active"><Link to = "/Education" >Education</Link></a>
                <a><Link to = "/Projects" >Projects</Link></a>
                <a href = "https://github.com/ewang184" style={{padding:"1%" }}>GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/" style={{padding:"1%" }}>LinkedIn</a>
                <a style={{padding:"1%" }}>Contact me! Email: ervin.wang.881@gmail.com</a>
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