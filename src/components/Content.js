import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

function Content({ data }) {
    const navigate = useNavigate();
    function handleLearn(id) {
        navigate("/learn/" + id);
    }

    function handleShop(id) {
        navigate("/shop/" + id);
    }

    return (
        <section>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    260: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    870: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1084: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    data && data.map((car, index) => {
                        return (
                            <section key={car.id}>
                                <SwiperSlide >
                                    <div className="single-content">
                                        <p>{car.bodyType}</p>
                                        <span style={{ fontWeight: "bold" }}>{car.modelName} </span>
                                        <span>{car.modelType}</span>
                                        <div className="img-div">
                                            <img src={car.imageUrl} alt={car.modelName} />
                                        </div>
                                        <div className="link">
                                            <div className="link-name" onClick={() => handleLearn(car.id)}>
                                                <span>LEARN  </span>
                                                <img className="arrow" src="/images/chevron-small.svg" alt="learn" />
                                            </div>
                                            <div className="link-name" onClick={() => handleShop(car.id)} >
                                                <span>SHOP  </span>
                                                <img className="arrow" src="/images/chevron-small.svg" alt="learn" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </section>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Content;