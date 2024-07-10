import './css/hero.css'
import { LuSearch } from "react-icons/lu";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_text">
                    <h1>CODECIRCUS</h1>
                    <p>Immergiti nel divertimento del codice, dove ogni byte è un gioia!</p>
                    <div className="input_group">
                        <input type="text" placeholder='cosa vuoi imparare oggi?' />
                        <button><LuSearch /></button>
                    </div>
                </div>
                <div className="hero_image">
                    <img src="/img/billboard-img.png" alt="image of a clown seated working on the computer" />
                </div>
            </div>
        </section>
    )
}