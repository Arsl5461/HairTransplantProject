import React from 'react'
import "./Gallery.css"
import Image1 from "../images/image1.webp"
import image1 from "../images/image1-2.webp"
function Gallery() {
  return (
    <>
    <div className='w-50 margin'>
    <h1>
        Some of the <b>life changing results
of our patients over the years</b>
</h1>
<p className='text-center'>Real lives, real people, life changing stories.</p>
<p><b>Slide your mouse to the left on the photos </b> and see the results.</p>
</div>
<div class="image-container">
  <div clasName="half-image">
    <img src={image1} alt="Half of Image 1"/>
  </div>
  <div class="half-image">
    <img src={Image1} alt="Half of Image 2"/>
  </div>
</div>
    </>
  )
}

export default Gallery