import './values.css'
export default function Values() {
    const checkIcon = () => (
        <div>
            <svg className="icon" viewBox="0 0 15 15">
                <path fillRule="evenodd"
                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                    clipRule="evenodd" />
            </svg>
        </div>
    )

    return (
        <section className="values">
            <div className="container">
                <div className="section_title">
                    <h5>Valori aggiunti</h5>
                    <h2>I Nostri Corsi Piacciono Perché...</h2>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            {(checkIcon())}
                            <p>Ridendo, l'apprendimento della programmazione diventa un'esperienza divertente e piacevole.</p>
                        </li>
                        <li>
                            {(checkIcon())}
                            <p>Partecipa a attività pratiche che rendono il coding tangibile e coinvolgente.</p>
                        </li>
                        <li>
                            {(checkIcon())}
                            <p>Risolvi problemi e completa progetti che stimolano la tua immaginazione e ingegno.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {(checkIcon())}
                            <p>Connettiti con altri studenti appassionati che condividono il tuo entusiasmo per la programmazione.</p>
                        </li>
                        <li>
                            {(checkIcon())}
                            <p>Impara a programmare attraverso avventure tematichem come viaggi spaziali o mondi magici.</p>
                        </li>
                        <li>
                            {(checkIcon())}
                            <p>Lavora su progetti stravaganti, come creare meme o programmare danze per robot.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}