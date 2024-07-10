import './css/aboutus.css'
export default function AboutUs() {
    return (
        <div className="about_us container">
            <div className="image_oval">
                <img src="/img/about-img.jpg" alt="image of a smiling clown wearing a school backpack" />
            </div>
            <div className="about_us_text">
                <h5>Scopri di più su di noi</h5>
                <h2>Chi Siamo</h2>
                <p>
                    Benvenuti nel nostro magico mondo dove la programmazione incontra il divertimento sfrenato? Offriamo corsi unici e stravaganti, guidati da istruttori eccentrici che trasformano ogni lezione in un'avventura indimenticabile. Unisciti a noi per scoprire il lato più fantasioso del coding!
                </p>
                <ul>
                    <li>
                        <div>
                            <svg className="icon" viewBox="0 0 15 15">
                                <path fillRule="evenodd"
                                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>Esperti di programmazione che rendono ogni lezione uno spettacolo creativo.</p>
                    </li>
                    <li>
                        <div>
                            <svg className="icon" viewBox="0 0 15 15">
                                <path fillRule="evenodd"
                                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>Corsi divertenti e coinvolgenti che trasformano l'apprendimento in un'avventura.</p>
                    </li>
                    <li>
                        <div>
                            <svg className="icon" viewBox="0 0 15 15">
                                <path fillRule="evenodd"
                                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>Connettiti con appassionati di coding di tutto il mondo per un'esperienza unica e divertente.</p>
                    </li>
                </ul>
                <button className="btn_secondary">scopri di piu</button>
            </div>
        </div>
    )
}