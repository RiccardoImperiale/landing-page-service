import { useState } from 'react'
import categories from '../data/categories';
import './css/categories.css'
export default function Categories() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="categories">
            <div className="container">
                <div className="section_title">
                    <div>
                        <h5>Scegli la categoria di corsi dalla quale vuoi iniziare</h5>
                        <h2>Categorie Popolari</h2>
                    </div>
                    <button className="btn_secondary">guarda tutto</button>
                </div>
                <div className="categories_list">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="category d-flex gap-2 p-4"
                            style={{
                                backgroundColor:
                                    hoveredIndex === index ? category.svgFill : category.backgroundColor,
                            }}
                        >
                            <div>
                                <svg id={category.id} viewBox="0 0 24 24" >
                                    <path fill={hoveredIndex === index ? 'white' : category.svgFill} d={category.d} />
                                </svg>
                            </div>
                            <div style={{ color: hoveredIndex === index ? 'white' : '' }} className="text">
                                <h6>{category.title}</h6>
                                <span>{category.subTitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}