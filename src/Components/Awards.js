import React, {useRef, useState} from 'react';
import { Link, useHistory } from "react-router-dom"
export default function Awards(){
    return (
        <>
            
            <div class="topnav">
                <a><Link to = "/" >Home</Link></a>
                <a><Link to = "/About" >About</Link></a>
                <a class="active"><Link to = "/Awards" >Awards</Link></a>
                <a><Link to = "/Education" >Education</Link></a>
                <a><Link to = "/Projects" >Projects</Link></a>
                <a href = "https://github.com/ewang184" style={{padding:"1%" }}>GitHub</a>
                <a href = "https://www.linkedin.com/in/ervin-wang-8290aa20b/" style={{padding:"1%" }}>LinkedIn</a>
                <a style={{padding:"1%" }}>Contact me! Email: ervin.wang.881@gmail.com</a>
            </div>
            <div class = "normalHead" style={{fontSize: "xx-large"}}> Contests 2018</div>
            <div class = "normalHead">
                <div class = "contest">
                    COMC 2018 - Distinction Award
                </div>
                <div class = "contest">
                    CIMC 2018 - Distinction Award
                </div>
                <div class = "contest">
                    Fryer 2018 - Honour Roll
                </div>
                <br></br>
            </div>
            <div class = "normalHead" style={{fontSize: "xx-large"}}> Contests 2019</div>
            <div class = "normalHead">
                <div class = "contest">
                    COMC 2019 - Distinction Award
                </div>
                <div class = "contest">
                    Galois 2019 - Distinction Award
                </div>
                <div class = "contest">
                    Cayley 2019 - School Medal
                </div>
                <div class = "contest">
                    2019 Badminton Ontario Jr HP A Provincial Championship  Under 17 Boys Doubles 4th place
                </div>
                <div class = "contest">
                    2019 Ontario Junior Elite Badminton National Tournament Under 17 Boys Consolation winner
                </div>
                <div class = "contest">
                    2019 Badminton Ontario Jr HP A Series at Mandarin Badminton Club Under 19 boys doubles 3rd place
                </div>
                <div class = "contest">
                    2019 Badminton Ontario Jr HP A series at Haber recreation center Under 17 Boys doubles 3rd place
                </div>
                <br></br>
            </div>
            <div class = "normalHead" style={{fontSize: "xx-large"}}> Contests 2020</div>
            <div class = "normalHead">
                <div class = "contest">     	
                    CSMC 2020 distinction
                </div>
                <br></br>
            </div>
            <div class = "normalHead" style={{fontSize: "xx-large"}}> Contests 2021</div>
            <div class = "normalHead">
                <div class = "contest">     	
                    CSMC 2021 distinction
                </div>
                <div class = "contest">     	
                    Euclid 2021 distinction
                </div>
                <br></br>
            </div>
        </>
        )    
}