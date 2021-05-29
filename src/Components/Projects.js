import React, {useRef, useState} from 'react';
import quickS from "../images/quickS.jpg"
import mathsoc from "../images/mathsoc.jpg"
import { Link, useHistory } from "react-router-dom"
export default function Projects(){
  
    return (
        <>
        <div class="topnav">
            <a><Link to = "/" >Home</Link></a>
            <a><Link to = "/About" >About</Link></a>
            <a ><Link to = "/Awards" >Awards</Link></a>
            <a><Link to = "/Education" >Education</Link></a>
            <a class="active"><Link to = "/Projects" >Projects</Link></a>
            <a href = "https://github.com/ewang184" style={{padding:"1%" }}>GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/" style={{padding:"1%" }}>LinkedIn</a>
                <a style={{padding:"1%" }}>Contact me! Email: ervin.wang.881@gmail.com</a>
        </div>
            <div class="pagebubble">
                <p>QuickStat</p><p> 2021-Present</p>
                <p>This is a project I currently am working on. The end goal is to have a software that can
                    automatically read .csv files, clean them, and create reports on the data contianed within.
                    Currently it can perform confidence interval testing, t-tests, correlation matrix, data describing, and exploratory data analysis, such as finding null values or unique values.
                    It can also create data visualizations using Pandas library.

                </p>
            </div>
            <div class="pagebubble">
                <p>MathSoc (Math Club)</p><p> 2020-2021</p>
                <p>
                    MathSoc is the math club at Milliken Mills High School.
                    In this club I coordinated with other exec members in order to organize meetings and events, such as online jeopardy games, and problem solving contests.
                    I worked with other members in order to create content and a website to host said content.
                    I also led discussions around contest level mathematics with members of the club.
                    Eventually, the club grew to have more than 50 members!

                </p>
            </div>
            
            <img src = {mathsoc} className="projecttwo" alt ="mathsoc" style={{opacity: function() {
                var scrollTop = (this).scrollTop();
                var elementHeight = (this).height();
                console.log(1 - (elementHeight - scrollTop) / elementHeight)
                return 1 - (elementHeight - scrollTop) / elementHeight;
            }}}></img>

            <img src = {quickS} className="project" alt ="quickS" style={{opacity: function() {
                var scrollTop = (this).scrollTop();
                var elementHeight = (this).height();
                return 1 - (elementHeight - scrollTop) / elementHeight;
            }}}></img>
        </>
    )
}