import './coursecard.css'
import { IoStar } from "react-icons/io5";

export default function CourseCard({ course }) {

    return (
        <div className="course_card">
            <div className="card_image">
                <img src={`/img/${course.image}`} alt={course.alt} />
                {course.badge && <div className="badge">{course.badge}</div>}
            </div>
            <div className="card_text">
                <div className="top">
                    <span>{course.category}</span>
                    <div className='d-flex align-items-center'>
                        <svg width={20} id="clock" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8" />
                        </svg>
                        <span>1H 50M</span>
                    </div>
                </div>
                <div className="middle">
                    <h6>{course.title}</h6>
                </div>
                <div className="bottom">
                    <small className="author">By: {course.author}</small>
                    <span className="rating">
                        <IoStar className='star' />
                        <IoStar className='star' />
                        <IoStar className='star' />
                        <IoStar className='star' />
                        <IoStar className='star' />
                    </span>
                </div>
            </div>
        </div>
    )
}