import Image from "next/image";

import { FC, useState } from "react";
import ModalVideo from "react-modal-video";
import ChooseUsCard from "../ChooseUsCard";
import { Carddata } from "../ChooseUsCard/data";
import DefiDevelopment from "../DefiDevelopment";
import s from "./WhyChooseUs.module.scss";

const WhyChooseUs: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={`${s.topSection2} text-center`}>
        <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
          Why <span className="c-primary">Choose Us</span>
        </h1>
        <div className={`${s.desc} f28`}>
          {`Swytch is India's leading Web3 company that lookout for core issues or process restrictions that brands are facing today and how those limitations can be resolved through the blockchain and other technologies.
`}
        </div>

        <div className={s.benefitTerm}>
          <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">Benefits</h1>
          <div className={`${s.info} f28`}>
            The company advances the future operations of a business by
            exploring various kinds of blockchain solutions.
          </div>
        </div>

        <div className={s.card}>
          {Carddata.map((cardInfo, i) => {
            return (
              <ChooseUsCard
                data-aos="fade-left"
                data-aos-duration="1000"
                key={i}
                data={cardInfo}
              />
            );
          })}
        </div>

        {/* <div className={s.defiDevelopment}>
          <p className="h1 c-secondary f-konexy">
            DeFi
            <br />
            <span className="c-primary">Development</span>
          </p>
          <p className={s.subheading}>
            The company advances the future operations of a business by
            exploring various kinds of blockchain solutions.
          </p>
        </div> */}

        {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 `}>
          <div className={s.mobileBtn}>
            <div className="btn-primary mr-4">Contact Us</div>
            <div className="btn-secondary ">Learn More</div>
          </div>
        </div> */}
        <DefiDevelopment />

        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          onClose={() => setOpen(false)}
        />

        <div className={s.videoSection}>
          <div className={s.videoWrapper}>
            <div className={s.playBtn} onClick={() => setOpen(true)}>
              <span />
            </div>
            <div className={s.videoCard}>
              <div className={s.firstLine}>
                <div className={s.logoWrapper}>
                  <Image
                    src="/images/video_logo.png"
                    alt="logo"
                    layout="fill"
                    // height={20}
                    // width={40}
                  />
                </div>

                <div className={s.firstRow}>
                  Why
                  <br />
                  <span className={s.brand}>Swytch?</span>
                </div>
              </div>
              <div className={s.secBlock}>
                {` By holding valuable Web3 projects and working with massive clients, Swytch knows how to identify limitations in your current organization and resolve them with the right blockchain-based integrations that will boost your business's growth by 20x.`}
              </div>
              <div className={s.thirdBlock}>
                The company’s mission and vision distinguish it from other Web3
                firms worldwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
