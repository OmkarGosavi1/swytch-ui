import { FC, useEffect, useRef } from "react";
import s from "./Banner.module.scss";

const Banner: FC = () => {
  const commonRef: any = useRef({});
  commonRef.current = {};

  useEffect(() => {
    if (Object.keys(commonRef.current).length === 0) {
      return;
    }
    commonRef.current["videoTag"].defaultMuted = true;
    commonRef.current["videoTag"].muted = true;
  });
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className="row">
          <div className="col-sm-7 position-r">
            <h1 className="h1 fw600 f-konexy c-secondary">
              <span className="c-primary">
                Unlocking {` `}
                <br />
                0pportunities {` `}
              </span>
              One <br />
              Block At A Time
              {/* Join The <span className="c-primary"> 3.0 Revolution</span> Of The
              Internet */}
            </h1>

            <div className={`${s.subheding} h2`}>
              Developing Web3 and Blockchain <br /> based applications that
              empower <br /> businesses and millions of individuals <br />{" "}
              worldwide.
            </div>

            <div className={`${s.buttonsWrapper} buttons d-flex mt-4 m-hide`}>
              <div className={s.mobileBtn}>
                {/* <div className="btn-primary mr-4">Download Presentation</div> */}
               
               <a href="/images/Swytch.pdf"  download
               target= "_blank" className={`${s.secondaryButton} btn-secondary`}>Download Presentation</a>
               
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className={s.videoWrapper}>
              <video
                ref={(el: any) => (commonRef.current["videoTag"] = el)}
                src="https://swytch-final-video.pages.dev/vid.mp4"
                loop={true}
                autoPlay
                muted
                playsInline
              />
              {/* <video
                ref={(el: any) => (commonRef.current["videoTag"] = el)}
                loop
                autoPlay
                muted
                playsInline
              >
                <source
                  src="https://swytch-final-video.pages.dev/vid.mp4"
                  type="video/mp4"
                />
              </video> */}
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
