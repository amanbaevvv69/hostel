import React from 'react'
import './Dowland.css'

const Dowland = () => {
  return (
    <>
        <section className='download top '>
            <div className='container flex_space'>
                <div className='row'>
                    <h3>Download Our app</h3>
                    <h1>Wow! Get This Templete App For Your Mobile</h1>
                    <ul>
                        <li>&#10003; Get paperless confirmation</li>
                        <li>&#10003; Get paperless confirmation</li>
                        <li>&#10003; Get paperless confirmation</li>
                        <li>&#10003; Get paperless confirmation</li>
                    </ul>
                    <div className='img flex'>
                        <img src='/images/appstore-button.png'/>
                        <img src='/images/google-play-button.png'/>
                    </div>
                </div>
                <div className='row row2'>
                    <img src='/images/app-image-1.png'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Dowland