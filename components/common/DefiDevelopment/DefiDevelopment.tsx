import Image from "next/image";
import { FC, useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./DefiDevelopment.module.scss";

SwiperCore.use([Navigation, Autoplay]);
interface Props {
  className?: string;
}

const DefiDevelopment: FC = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  useEffect(() => {
    if (swiper !== null) {
      // swiper.update();
    }
  }, [swiper]);

  const sliderOptions = {
    spaceBetween: 0,
    // effect: 'fade' as const,
    // allowTouchMove: false,
    speed: 4000,
    watchSlidesProgress: true,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,

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
      delay: 1,
      disableOnInteraction: false,
    }, // according to the codepen

    breakpoints: {
      100: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: "auto" as const,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
    },
  };

  const sliderOptions2 = {
    spaceBetween: 0,
    // effect: 'fade' as const,
    // allowTouchMove: false,
    speed: 4000,
    watchSlidesProgress: true,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper2(swiperItem);
      });
    },
    slidesPerView: "auto" as const,
    freeMode: false,
    loop: true,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    }, // according to the codepen

    breakpoints: {
      100: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: "auto" as const,

        // centeredSlides: true,
        // initialSlide: 1.5,
      },
    },
  };

  return (
    <>
      <div className={`${s.container}`}>
        <div className={`${s.heading}`}>
          <p className="h1 c-secondary f-konexy">
            DeFi
            <br />
            <span className="h1 c-primary f-konexy">Development</span>
          </p>
        </div>
        <div className={s.row}>
          <div className={`${s.logoCol}`}>
            <Swiper {...sliderOptions} className="partners-slider">
              {Array(8)
                .fill("")
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.slideCustom} ${i % 2 ? s.grey : ""}`}>
                      <div className={`${s.imgWrapper} ${s.small}`}>
                        <Image
                          src={`/images/defi/defi${i + 1}.png`}
                          layout="fill"
                          objectPosition="center center"
                          objectFit="contain"
                          quality={100}
                          loading="eager"
                          alt="defi"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className={`${s.partnersCol}`}>
            <div className={`${s.content}`}>
              <div className={s.subheading}>
                <h2>
                  The company advances the future operations of a business by
                  exploring various kinds of blockchain solutions.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={s.row}>
          <div className={`${s.logoCol} ${s.w100}`}>
            <Swiper {...sliderOptions2} className="partners-slider">
              {Array(8)
                .fill("")
                .map((_item, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.slideCustom} ${i % 2 ? s.grey : ""}`}>
                      <div
                        className={`${s.imgWrapper} 
                    ${s.small}`}
                      >
                        {/* 12223333 */}
                        <Image
                          src={`/images/defi/defi${7 - i + 1}.png`}
                          objectPosition="center center"
                          objectFit="contain"
                          layout="fill"
                          // width={
                          //   item.url == "/images/partners/partner2.png"
                          //     ? 300
                          //     : 200
                          // }
                          // height={
                          //   item.url == "/images/partners/partner2.png" ? 90 : 60
                          // }
                          // quality={100}
                          loading="eager"
                          alt="defi2"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefiDevelopment;
