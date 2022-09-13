import { services } from "constant/AppConstant";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Services.module.scss";

SwiperCore.use([Navigation, Autoplay]);
interface Props {
  className?: string;
}

const Services: FC = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper !== null) {
      // swiper.update();
    }
  }, [swiper]);

  const sliderOptions = {
    // spaceBetween: 40,
    // effect: 'fade' as const,
    // allowTouchMove: false,
    speed: 4000,
    watchSlidesProgress: true,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,

    spaceBetween: 1,
    centeredSlides: true,
    roundLengths: true,
    loopAdditionalSlides: 30,

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    slidesPerView: "auto" as const,
    freeMode: false,
    loop: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    }, // according to the codepen

    breakpoints: {
      100: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1.5,
      },
      1100: {
        slidesPerView: 3.2,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
      1500: {
        slidesPerView: 3.2,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
      1920: {
        slidesPerView: 5,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
      2000: {
        slidesPerView: 5,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
    },
  };

  return (
    <>
      <div className={`${s.container} `}>
        <div className={`${s.row} boxed`}>
          <div className={`${s.heading} h1 fw600 f-konexy c-secondary mob-mb1`}>
            <span className=" c-primary">
              {" "}
              {`Services & `}
              <br /> {`Solutions`}
            </span>
          </div>
          <div className={`${s.deatails} h2`}>
            Our leading collaboration that
            <br />
            leverages blockchain technology
          </div>
        </div>
        <div className={s.slider}>
          <Swiper {...sliderOptions} className="service-slider">
            {services.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={`${s.slideCustom}`}>
                  <div className={`${s.card} card`}>
                    <div className={s.cardFront}>
                      <div className={s.content}>
                        <div className={`${s.logoWrapper} `}>
                          {/* 12223333 */}
                          <Image
                            src={item.logo}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left center"
                            quality={100}
                            loading="eager"
                            alt="partners"
                          />
                        </div>
                        <div className={`${s.title} title`}>{item.title}</div>
                        <div className={`${s.desc} desc`}>{item.desc}</div>
                        <div className={`${s.arrow} `}>
                          {/* 12223333 */}
                          <Image
                            src="/images/right-arrow-orange.svg"
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                            loading="eager"
                            alt="partners"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={s.cardBack}>
                      <ul>
                        {item.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
