

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './adsItemSlider.scss';

const like = (
    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7145 22.3777L12.0346 22.6553L12.3609 22.3852C13.7603 21.2268 15.9105 19.3458 17.8187 17.4619C18.7725 16.5203 19.6721 15.5719 20.3888 14.7086C21.0941 13.859 21.6617 13.0463 21.9022 12.3825C22.9848 9.3955 22.7974 5.73779 19.6122 3.72888C17.6001 2.45985 15.589 2.78969 14.1306 3.40281C13.4019 3.70916 12.7982 4.09036 12.3774 4.39363C12.2533 4.4831 12.1445 4.56621 12.0524 4.63922C12.0244 4.61489 11.9949 4.5894 11.9638 4.5629C11.7025 4.33971 11.334 4.04131 10.9066 3.74188C10.4805 3.44341 9.98676 3.13747 9.47528 2.90464C8.96903 2.6742 8.41213 2.4999 7.86868 2.5C6.19655 2.5003 4.01031 3.18253 2.76019 5.02228C1.07992 7.49509 1.07994 11.172 2.76021 13.6446C3.42257 14.6193 5.07482 16.289 6.82053 17.9439C8.58336 19.615 10.4931 21.3185 11.7145 22.3777Z"  />
    </svg>
)

const comparison = (
    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z" />
    <path d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z" />
    <path d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z" />
    </svg>
)

const AdsItemSlider = ({seen}) => {


    const visited = !seen?null:(<div className="visited">Просмотрено</div>);
    return (
        <Swiper
                height={368}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                >
                    {visited}
                    <div className="icon-wrapper">
                        <div className="icon">{comparison}</div>
                        <div className="icon">{like}</div>
                    </div>
                    <SwiperSlide><img className='slide' src={"https://source.unsplash.com/random"} alt='Картинка'></img></SwiperSlide>
                    <SwiperSlide><img className='slide' src={"https://source.unsplash.com/random"} alt='Картинка'></img></SwiperSlide>
                    <SwiperSlide><img className='slide' src={"https://source.unsplash.com/random"} alt='Картинка'></img></SwiperSlide>
                    <SwiperSlide><img className='slide' src={"https://source.unsplash.com/random"} alt='Картинка'></img></SwiperSlide>
        </Swiper>
    )
}

export default AdsItemSlider;