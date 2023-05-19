import React, { useState, useEffect, useRef } from 'react'
import Footer from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)
	const [ audio, setAudio] = useState(false)

	const toggleVideos = () => {
        	if (videoRef.current.paused) {
	    	    videoRef.current.play()
				setAudio(true)
	        } else {
		        videoRef.current.pause()
				setAudio(false)
	        }
	}

	return (
		<div className="video">
			<video
				className="player"
				onClick={toggleVideos}
                onScroll={toggleVideos}
				muted={!audio}
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
