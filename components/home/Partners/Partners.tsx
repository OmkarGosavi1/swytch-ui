import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./Partners.module.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { partners, partners2 } from "constant/AppConstant";

SwiperCore.use([Navigation, Autoplay]);
interface Props {
  className?: string;
}

const Partners: FC = () => {
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
        <div className={s.row}>
          <div className={`${s.partnersCol}`}>
            <div className={`${s.content}`}>
              <div className={`${s.heading}`}>
                <p className="h1 c-primary f-konexy">Partners</p>
              </div>
              <div className={`${s.subheding} h2 line2`}>
                Our leading collaboration <br /> that leverages blockchain{" "}
                <br /> technology
              </div>
            </div>
          </div>
          <div className={`${s.logoCol}`}>
            <Swiper {...sliderOptions} className="partners-slider">
              {partners.slice(1).map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={`${s.slideCustom} ${s[item.bg]}`}>
                    <div className={`${s.imgWrapper} ${s[item.size]}`}>
                      {/* 12223333 */}
                      <Image
                        src={item.url}
                        layout="fill"
                        objectPosition="center center"
                        objectFit="contain"
                        // width={
                        //   item.url == "/images/partners/partner2.png"
                        //     ? 400
                        //     : 200
                        // }
                        // height={
                        //   item.url == "/images/partners/partner2.png" ? 120 : 60
                        // }
                        quality={100}
                        loading="eager"
                        alt="partners"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={s.row}>
          <div className={`${s.logoCol} ${s.w100}`}>
            <Swiper {...sliderOptions2} className="partners-slider">
              {partners2.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={`${s.slideCustom} ${s[item.bg]}`}>
                    <div
                      className={`${s.imgWrapper} 
                    ${s[item.size]}`}
                    >
                      {/* 12223333 */}
                      <Image
                        src={item.url}
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
                        alt="partners"
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

export default Partners;
