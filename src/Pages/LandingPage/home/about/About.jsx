import React from 'react'
import "./About.css"

function About() {
  return (
    <>
    <section className='home-about-section'>
    <h1>About Us</h1>
    <div className='home-about-image-text'>
        <div className='home-about-image-main-div'>
            <img src="./assets/about/tabla.png" alt="" />
            <div  className=' home-about-inner-div'>
                <img src="./assets/about/home_about.png" alt="" />
            </div>
        </div>
        <div className='home-about-text'>
            <h2>Who We Are</h2>
            <p>Lorem ipsum dolor nihil. Tempore libero expedita esse, alias voluptas deleniti velit consequatur mollitia voluptatibus nesciunt non veniam quis voluptates cum dicta modi natus laboriosam enim ipsam! Sequi exercitationem veniam quibusdam culpa molestiae pariatur quod iusto, aliquid dicta, animi dignissimos dolorum nemo, nobis nihil. Nesciunt sunt nam aliquam quae ipsa, cum placeat eveniet laborum facilis. Corporis iusto sunt perferendis voluptatibus animi assumenda corrupti accusamus ducimus officia impedit quas vitae repellendus quo ex temporibus quasi necessitatibus nulla, beatae dolore autem qui laborum. Quis repudiandae voluptas ab? Voluptas expedita consequuntur illo harum eaque architecto deserunt molestiae ipsum enim provident cum recusandae, odio ab natus, ullam aliquid quisquam officia iusto reiciendis sunt excepturi, illum quia fuga! Quidem dolorum fuga non accusamus unde, beatae voluptas. Sit iusto f</p>
            <button>learn more <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    </div>
    </section>
    </>
  )
}

export default About