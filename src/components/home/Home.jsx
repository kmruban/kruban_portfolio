import './home.scss';
import React from 'react';
import ParticleBackground from '../particles/Particles';

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
                <button><a href='#about'>View My Work</a></button>
            </div>
        </div>
    </div>
  )
}

export default Home;