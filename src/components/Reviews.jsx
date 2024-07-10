import './reviews.css'
import reviews from '../data/reviews.js'
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleReview from './SingleReview';

export default function Reviews() {
    const [containerClass, setContainerClass] = useState('');
    const swiperRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 991) {
                setContainerClass('reviewers container');
            } else {
                setContainerClass('reviewers container_sm');
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="reviews">
            <div className="section_title">
                <h5>Cosa dicono gli studenti</h5>
                <h2>Recensioni</h2>
            </div>
            <div className={containerClass}>
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        991: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                >
                    {reviews.map(review => {
                        return (
                            <SwiperSlide key={review.id}>
                                <SingleReview review={review.review} avatar={review.avatar} author={review.author} profession={review.profession} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}