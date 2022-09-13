import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import s from "./WhoWeAre.module.scss";
import WhoWeWorkWith from "@components/common/WhoWeWorkWith";

const WhoWeAre: FC = () => {
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
      <div className={`${s.topSection2} text-center`}>
        <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
          Who <span className="c-primary">We Are</span>
        </h1>
        <div className={`${s.desc} f28`}>
          {`Swytch is India's leading web3 company that helps you integrate
          futuristic blockchain technology into your business and experience new
          forms of executing management and operations.`}
        </div>

        {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 `}>
          <div className={s.mobileBtn}>
            <div className="btn-primary mr-4">Contact Us</div>
            <div className="btn-secondary ">Learn More</div>
          </div>
        </div> */}
      </div>
      <div className={`${s.aboutUs} boxed`}>
        <div className="row">
          <div className="col-md-7">
            <div className="h1 fw600 f-konexy c-secondary mob-mb1">
              About <span className="c-primary">us</span>
            </div>
            <div className={`${s.desc} f28`}>
              The company advances the future operations of a business by
              exploring various kinds of blockchain solutions. Moreover, the
              company also constructs DeFi, GameFi and NFT applications that
              produce fundamental strength to adopt the decentralized ecosystem
              and participate conveniently in growing business with the support
              of blockchain technology.
            </div>
          </div>
          <div className="col-sm-5">
            <div className={s.videoWrapper}>
              <video
                ref={(el: any) => (commonRef.current["videoTag"] = el)}
                // src="https://swytch-final-video.pages.dev/vid.mp4"
                src="https://swytch-about-video.pages.dev/video.mp4"
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

        <WhoWeWorkWith />
        <div className={s.workFlow}>
          <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
            Our <span className="c-primary">Workflow</span>
          </h1>

          <div className={`${s.blackText} h4 line4-left`}>
            <span>
              Swytch follows a result-oriented process that defines your brand
              identity and enables blockchain features and solutions.
            </span>
          </div>

          <div className={`${s.blocksWrapper}`}>
            <div className={`${s.blockSingle}`}>
              <div className={`${s.topSection}`}>
                <div className={`${s.left}`}>
                  <div className={s.imgWrapper}>
                    <Image
                      src={"/images/icons/concept.svg"}
                      alt="icon"
                      layout="fill"
                    />
                  </div>
                  <div className={`${s.title}  c-black`}>Concept</div>
                </div>
                <div className={`${s.right} f-konexy c-grey`}>1</div>
              </div>

              <div className={`${s.desc} f28`}>
                To overcome instability and establish seamless management,
                Swytch works on futuristic ideas to construct a brand new web3
                project or include blockchain technology into web2 businesses.
              </div>
            </div>

            <div className={`${s.blockSingle}`}>
              <div className={`${s.topSection}`}>
                <div className={`${s.left}`}>
                  <div className={s.imgWrapper}>
                    <Image
                      src={"/images/icons/ui.svg"}
                      alt="icon"
                      layout="fill"
                    />
                  </div>
                  <div className={`${s.title}  c-black`}>UX UI Design</div>
                </div>
                <div className={`${s.right} f-konexy c-grey`}>2</div>
              </div>

              <div className={`${s.desc} f28`}>
                {`Later, our expert designers coordinate to convert that concept into a modern web design or assist traditional companies' websites with a fresh and user-friendly design.`}
              </div>
            </div>

            <div className={`${s.blockSingle}`}>
              <div className={`${s.topSection}`}>
                <div className={`${s.left}`}>
                  <div className={s.imgWrapper}>
                    <Image
                      src={"/images/icons/code.svg"}
                      alt="icon"
                      layout="fill"
                    />
                  </div>
                  <div className={`${s.title}  c-black`}>Developers</div>
                </div>
                <div className={`${s.right} f-konexy c-grey`}>3</div>
              </div>

              <div className={`${s.desc} `}>
                {` After getting the web structure, Swytch's skilled developers
              initiate the development process by integrating web2 and web3
              languages from scratch till it gets live on the desired web.`}
              </div>
            </div>

            <div className={`${s.blockSingle}`}>
              <div className={`${s.topSection}`}>
                <div className={`${s.left}`}>
                  <div className={s.imgWrapper}>
                    <Image
                      src={"/images/icons/ds.svg"}
                      alt="icon"
                      layout="fill"
                    />
                  </div>
                  <div className={`${s.title}  c-black`}>Digital Strategy</div>
                </div>
                <div className={`${s.right} f-konexy c-grey`}>4</div>
              </div>

              <div className={`${s.desc} `}>
                From brand building on social media platforms to creating
                community engagement online, we know how to proficiently market
                a web3 business so that it reaches to the potential customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
