import './teachercard.css'
export default function TeacherCard({ image, name, profession }) {
    return (
        <div className="teacher_card">
            <div className="top">
                <img src={`/img/${image}.jpg`} alt="image of the teacher" />
            </div>
            <div className="bottom">
                <h6>{name}</h6>
                <div>{profession}</div>
            </div>
        </div>
    )

}