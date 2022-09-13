import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import s from "./Solution.module.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Solution: FC = () => {
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
            <h1 className="h1 fw600 f-konexy c-primary">
              
                Services
                 
                 {/* <span>&</span> */}
                  {` `}
                <br />
                 {` `}
                Solutions            
            
              
            </h1>

            <div className={`${s.subheding} h2`}>
             {''}&nbsp; &nbsp; &nbsp; Our leading collaboration that <br/> leverages blockchain technology

            </div>
            </div>

            <Swiper {...sliderOptions} className="service-slider">
             
            </Swiper>



              


            </div>

            {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 m-hide`}>
              <div className={s.mobileBtn}>
                <div className="btn-primary mr-4">Contact Us</div>
                <div className="btn-secondary ">Learn More</div>
              </div>
            </div> */}
         
         
            {/* <div className={s.imgWrapper}>
              <Image
                src={"/images/banner-img.png"}
                // src={"/images/banner2.gif"}
                alt="banner image"
                layout="fill"
                objectFit="contain"
              />
            </div> */}
            {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 d-hide`}>
              <div className={s.mobileBtn}>
                <div className="btn-primary mr-4">Contact Us</div>
                <div className="btn-secondary ">Learn More</div>
              </div>
            </div> */}
              
    </>
  );
};

export default Solution;
