import './css/teachers.css'
import teachers from '../data/teachers.js'
import TeacherCard from './TeacherCard.jsx'
export default function Teachers() {
    return (
        <section className="teachers">
            <div className="container">
                <div className="section_title">
                    <h5>Stalkera i nostri insegnanti</h5>
                    <h2>I Nostri Insegnanti</h2>
                </div>
                <div className="teachers_cards">
                    {teachers.map(teacher => {
                        return (
                            <TeacherCard key={teacher.id} image={teacher.avatar} profession={teacher.profession} name={teacher.name} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}