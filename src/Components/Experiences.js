import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap'

import { Link, useHistory } from "react-router-dom"

export default function Experiences(){
    return (
        <>
        <div class="topnav">
            <a href="/react-gh-pages">Home</a>
            <a href="About">About</a>
            <a class="active" href="Experiences">Experiences</a>
            <a href="Education">Education</a>
            <a href="Projects">Projects</a>
            
        </div>
        </>
    )
}