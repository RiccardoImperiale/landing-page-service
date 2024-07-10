import './css/footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div className="social">
                        <img src="./img/logo.png" alt="codecircus logo" />
                        <div className="icons">
                            xxxxx
                        </div>
                    </div>
                    <div className="footer_links">
                        <div>
                            <h6>Collegamenti</h6>
                            <ul className="p-0">
                                <li>Home</li>
                                <li>Chi Siamo</li>
                                <li>Corsi</li>
                                <li>Contatti</li>
                            </ul>
                        </div>
                        <div>
                            <h6>About</h6>
                            <ul className="p-0">
                                <li>Come Funziona</li>
                                <li>Prezzi</li>
                                <li>Promozioni</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Help Center</h6>
                            <ul className="p-0">
                                <li>Payments</li>
                                <li>FAQs</li>
                                <li>Checkout</li>
                                <li>Other</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Contatti</h6>
                            <ul className="p-0">
                                <li>contact@codecircus.code</li>
                                <li>+110 1000 0111</li>
                                <li>Soriano Calabro, IT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <small>© 2024 Boolean. All rights reserved.</small>
                    <small>Allegria! (Mike Buongiorno)</small>
                </div>
            </div>
        </footer>
    )
}