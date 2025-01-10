import React from 'react';
import chair from '../assets/chair.webp';
import horns from '../assets/horns2.jpg';
import bees from '../assets/jujubees.jpg';
import levitt from '../assets/levitt.webp';
import jazzjam from '../assets/jazzjam.jpg';

const Gallery = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Gallery</h1>

            {/* Section 1: Pictures */}
            <div style={{ marginBottom: '2rem' }}>
                <h2>Pictures</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    <img
                        src={chair}
                        alt="Todd Bridges picture"
                        style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                    />
                    <img
                        src={horns}
                        alt="Thumbnail 2"
                        style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                    />
                    <img
                        src={bees}
                        alt="Thumbnail 3"
                        style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                    />
                    <img
                        src={levitt}
                        alt="Thumbnail 4"
                        style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                    />
                    <img
                        src={jazzjam}
                        alt="Thumbnail 5"
                        style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                    />
                </div>
            </div>

            {/* Section 2: YouTube Links */}
            <div>
                <h2>Videos</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Watch Video 1
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Watch Video 2
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
