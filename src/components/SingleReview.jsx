import './css/singlereview.css'
export default function SingleReview({ author, review, profession, avatar, alt }) {
    return (
        <div className="review">
            <div className="top">
                "{review}"
            </div>
            <div className="bottom">
                <div className="avatar">
                    <img src={`./img/${avatar}.jpg`} alt={alt} />
                </div>
                <div className="reviewer_info">
                    <h6>{author}</h6>
                    <small>{profession}</small>
                </div>
            </div>
        </div>
    )
}