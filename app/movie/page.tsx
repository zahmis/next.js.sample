'use client'

import React, { Component, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'

import videoPath from './data/cat.mp4.mp4'

export default function Page() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
        <React.StrictMode>
            <video controls muted ref={videoRef} >
                <source src={videoPath} type="video/mp4" />
            </video>
        </React.StrictMode>
    )
}