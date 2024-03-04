import React from "react";
import { useState,useEffect } from "react";

function WindowsizeHook() {

    const [WindowSize,setWindowSize]=useState({
        width:undefined,
        height:undefined
});

    useEffect(()=>{
        const handleSize=()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
        })
        }
        handleSize();

        window.addEventListener("resize",handleSize);
    },[]);

    return WindowSize;
}

export default WindowsizeHook