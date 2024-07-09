import CourseCard from './CourseCard';
import courses from '../data/courses.js'
import './courses.css'

export default function Courses() {

    return (
        <section className="courses">
            <div className="container">
                <div className="section_title">
                    <h5>Alcuni dei nostri corsi online più popolari</h5>
                    <h2>Esplora I Corsi Online</h2>
                </div>
                <div className="courses_list">
                    {courses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
                <button className="btn_secondary">guarda tutto</button>
            </div>
        </section>
    )
}