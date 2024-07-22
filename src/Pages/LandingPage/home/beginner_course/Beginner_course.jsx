import React from 'react'
import "./Beginner_course.css"
import Beginner_course_card from './Beginner.course-card.jsx'

function Beginner_course() {
  return (
    <div className='beginner-course-main-div'>
        <h1>Begineer Level Courses </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere recusandae, nobis suscipit molestiae natus inventore tempore quam similique illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae non delectus velit accusantium. Totam inventore ipsum voluptatum atque perferendis optio corporis ma</p>
        <div className='beginner-image-div'>
            <Beginner_course_card image="./assets/beginner_course/beginner_1.png"
            description=" lorem lorem lorem loem "/>
            <Beginner_course_card image="./assets/beginner_course/beginner_2.png"
            description=" lorem lorem lorem loem "/>
            <Beginner_course_card image="./assets/beginner_course/beginner_3.png"
            description=" lorem lorem lorem loem "/>
             <Beginner_course_card image="./assets/beginner_course/beginner_4.png"
            description=" lorem lorem lorem loem "/>
        </div>
    </div>
  )
}

export default Beginner_course