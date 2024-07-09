import './reviews.css'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleReview from './SingleReview';

export default function Reviews() {
    const [containerClass, setContainerClass] = useState('');

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
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        991: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}