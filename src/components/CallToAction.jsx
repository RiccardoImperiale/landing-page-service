import './css/calltoaction.css'
export default function CallToAction() {
    return (
        <div className="call_to_action">
            <div className="container_sm">
                <div className="text">
                    <h2>Iscriti E Ottieni il 20% di sconto sul tuo primo corso online</h2>
                    <h5>Iscriviti alla nostra newsletter e non perderti mai nessuna offerta.</h5>
                </div>
                <div className="buttons">
                    <input className='btn_secondary w-100 bg-white text-lowercase text-center' placeholder='lascia la tua email*' type="text" />
                    <button className="btn_secondary w-100 mt-4">registrati</button>
                </div>
            </div>
        </div >
    )
}