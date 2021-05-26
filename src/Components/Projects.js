import React, {useRef, useState} from 'react';
import quickS from "../images/quickS.jpg"
import mathsoc from "../images/mathsoc.jpg"
export default function Projects(){
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
                document.querySelector(".project").style.opacity = opacity;
                document.querySelector(".projecttwo").style.opacity = opatwo;
                });
    return (
        <>
        <div class="topnav">
            <a href="/react-gh-pages">Home</a>
            <a href="About">About</a>
            <a href="Awards">Awards</a>
            <a href="Education">Education</a>
            <a class="active" href="Projects">Projects</a> 
            <a href = "https://github.com/ewang184">GitHub</a>
            <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/">LinkedIn</a>
            <a>Contact me! Email: ervin.wang.881@gmail.com</a>
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
            <img src = {mathsoc} className="projecttwo" alt ="mathsoc"></img>
            <img src = {quickS} className="project" alt ="quickS"></img>
        </>
    )
}