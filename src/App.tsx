import React, { useRef } from 'react';
import './App.css';
import './styles/style.css';

function App() {
	const videoRef = useRef<HTMLVideoElement>(null);

	const playVideo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	const pauseVideo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.pause();
		}
	};

	return (
		<div className='page_container'>
			<div className='cards_container'>
				<div className='each_card_container'>
					<div className='each_card_box'>
						<div className='each_card' onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
							<video
								src='videos/Tile_Anim_Diablo_II_Res.webm'
								className='card_video'
								ref={videoRef}
								muted
								loop></video>
							<img src='images/d2.png' alt='x1' className='card_overlay' />
							<img src='images/d2-logo.png' alt='x2' className='card_brand' />
						</div>
					</div>
					<div className='each_card_footer'>
						<div className='each_card_title'>Diablo II: Resurrected</div>
						<div className='each_card_genre'>Action RPG</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
