import React from 'react'
import './PhotoList.scss'

import photo1 from '../../../assets/photo1.png'
import photo2 from '../../../assets/photo2.png'
import photo3 from '../../../assets/photo3.png'
import photo4 from '../../../assets/photo4.png'
import photo5 from '../../../assets/photo5.png'
import photo6 from '../../../assets/photo6.png'

function PhotoList() {
  return (
    <section className='photos'>
            <div className="about__container container">

<div className="photos__list">
<img src={photo1} alt="" className="photos__img" />
<img src={photo2} alt="" className="photos__img" />
<img src={photo3} alt="" className="photos__img" />
<img src={photo4} alt="" className="photos__img" />
<img src={photo5} alt="" className="photos__img" />
<img src={photo6} alt="" className="photos__img" />
</div>
</div>
    </section>
  )
}

export default PhotoList