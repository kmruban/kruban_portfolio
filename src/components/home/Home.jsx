import './home.scss';
import React from 'react';
import ParticleBackground from '../particles/Particles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className='home' id='home'>
        <ParticleBackground />
        <div className='container'>
            <div className='top'>
                <h2>Hello I am Kyle Ruban.</h2>
            </div>
            <div className='mid'>
                <h2>Full-Stack Software Engineer.</h2>
            </div>
            <div className='bottom'>
                <button><a href='#about'>View My Work<span><FontAwesomeIcon icon={faAngleRight} /></span></a></button>
            </div>
        </div>
    </div>
  )
}

export default Home;