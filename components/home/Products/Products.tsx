import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./Products.module.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { partners, products } from "constant/AppConstant";

SwiperCore.use([Navigation, Autoplay]);
interface Props {
  className?: string;
}

const Products: FC = () => {
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
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: 2,
        // centeredSlides: true,
        // initialSlide: 1.5,
      },
    },
  };

  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={s.row}>
          <div className={`${s.logoCol}`}>
            <Swiper {...sliderOptions} className="product-slider">
              {products.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={`${s.slideCustom} ${s[item.bg]}`}>
                    <div className="slideContent">
                      <div className={`${s.logoWrapper}  logoWrapper`}>
                        <Image
                          src={item.logo}
                          layout="fill"
                          objectFit="contain"
                          quality={100}
                          loading="eager"
                          alt="partners"
                          objectPosition={"left"}
                        />
                      </div>

                      <div className={`${s.textWrapper} textWrapper`}>
                        {/* <div className={`${s.title} fw700`}>{item.title}</div> */}
                        <div className={`${s.content} content`}>
                          {" "}
                          {item.content}
                        </div>
                      </div>
                    </div>
                    <div className={`${s.imgWrapper} imgWrapper `}>
                      {/* 12223333 */}
                      <Image
                        src={item.url}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        loading="eager"
                        alt="partners"
                      />
                    </div>
                    <div className={`${s.blur} blur`}></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className={s.btnWrapperMobile}>
              <div className="btn-secondary ">Contact Us</div>
            </div> */}
          </div>
          <div className={`${s.partnersCol}`}>
            <div className={`${s.content}`}>
              <div className={`${s.heading}`}>
                <p className="h1  c-primary f-konexy">Products</p>
              </div>
              <div className={`${s.subheding} h2 line2`}>
                Simplifying future operations <br /> with decentralized <br />
                applications
              </div>
              {/* <div className={s.btnWrapperDesk}>
                <div className="btn-secondary ">Contact Us</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
