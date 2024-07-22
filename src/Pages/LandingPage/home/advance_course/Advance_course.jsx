import React from 'react'
import "./Advance_course.css"
import Advance_course_card from './Advance_course_card'

function Advance_course() {
  return (
    <div className='advacne-course-main-div'>
        <h1>Advance Level Courses </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere recusandae, nobis suscipit molestiae natus inventore tempore quam similique illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae non delectus velit accusantium. Totam inventore ipsum voluptatum atque perferendis optio corporis ma</p>
        <div className='advance-image-div'>
            <Advance_course_card image="./assets/advance_course/advance_1.png"
            description=" lorem lorem lorem loem "/>
            <Advance_course_card image="./assets/advance_course/advance_2.png"
            description=" lorem lorem lorem loem "/>
            <Advance_course_card image="./assets/advance_course/advance_3.png"
            description=" lorem lorem lorem loem "/>
        </div>
    </div>
  )
}

export default Advance_course