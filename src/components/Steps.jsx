import './steps.css'
import steps from '../data/steps.js'
export default function Steps() {
    return (
        <section className="steps">
            <div className="container">
                <div className="steps_wrapper">
                    <div className="vertical_line"></div>
                    {steps.map(step => {
                        return (
                            <div key={step.id} className="step">
                                <div className="icon">
                                    <div>
                                        <svg width={25} viewBox="0 0 25 25">
                                            <path fill='white'
                                                d={step.svg}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="step_card">
                                    <div className="top">
                                        {step.title}
                                        <div className="triangle"></div>
                                    </div>
                                    <div className="bottom">
                                        <p>{step.description}</p>
                                        <button className="btn_secondary">{step.buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}