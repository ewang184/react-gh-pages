import React, {useState} from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, Redirect } from "react-router-dom"


export default function Dashboard(){

    return(
        <>
            
            <div class="topnav">
                <a class="active"><Link to = "/" >Home</Link></a>
                <a><Link to = "/About" >About</Link></a>
                <a ><Link to = "/Awards" >Awards</Link></a>
                <a><Link to = "/Education" >Education</Link></a>
                <a><Link to = "/Projects" >Projects</Link></a>
                <a href = "https://github.com/ewang184" style={{padding:"1%" }}>GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/" style={{padding:"1%" }}>LinkedIn</a>
                <a style={{padding:"1%" }}>Contact me! Email: ervin.wang.881@gmail.com</a>
            </div>
            <div class="titleHead">
                    Hi there!
                    <p>Welcome to my website!</p>  
            </div>
            <div class = "subHead"><Link to="/About">Learn more!</Link></div>
            <div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div>
        </>
        
    )
}
