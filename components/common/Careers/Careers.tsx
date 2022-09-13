import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Careers.module.scss";

const Careers: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.topSection2} text-center`}>
          <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">Careers</h1>
          <div className={`${s.desc} f28`}>
            {`Explore various opportunities mentioned below, and get a chance to work with an emerging Web3 company. Do not miss out on the chance to build your roots firm in the Web3 space with us!`}
          </div>

          {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 `}>
          <div className={s.mobileBtn}>
            <div className="btn-primary mr-4">Contact Us</div>
            <div className="btn-secondary ">Learn More</div>
          </div>
        </div> */}
        </div>
        <div className={s.row}>
          <div className={s.card}>
            <div className={s.title}>Job in Swytch Technologies</div>
            <div className={s.detail}>
              Swytch Web3 Technologies is a permanently developing company, so
              we are always looking for talented developers, proactive HRs,
              professional sales-managers and other employees. Is it about you?
              So come join us!
            </div>

            <div className={s.points}>
              <div className={s.pointers}>
                <div className={s.pointerWrapper}>
                  <Image
                    src="/images/careers/arrow.svg"
                    alt="pointer"
                    layout="fill"
                  />
                </div>
                <div className={s.arrowText}>Official employment</div>
              </div>
              <div className={s.pointers}>
                <div className={s.pointerWrapper}>
                  <Image
                    src="/images/careers/arrow.svg"
                    alt="pointer"
                    layout="fill"
                  />
                </div>
                <div className={s.arrowText}>Possibility of relocation</div>
              </div>
              <div className={s.pointers}>
                <div className={s.pointerWrapper}>
                  <Image
                    src="/images/careers/arrow.svg"
                    alt="pointer"
                    layout="fill"
                  />
                </div>
                <div className={s.arrowText}>Comfortable conditions</div>
              </div>
            </div>

            <div className={`${s.buttonsWrapper} buttons d-flex mt-5 `}>
              <div className={s.mobileBtn}>
                {/* <div className="btn-primary mr-4">Contact Us</div> */}
                <Link href="/careers-vacancy">
                  <a className={`${s.secondaryBtn} btn-secondary`}>
                    Become a part of our team
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.title}>Internship in Swytch Technologies</div>
            <div className={s.detail}>
              Do you already have a base in coding? Do you want to immerse
              yourself in the promising IT industry - blockchain, and leave your
              contribution to it? Hurry up and apply for an internship!
            </div>

            <div className={s.points}>
              <div className={s.points}>
                <div className={s.pointers}>
                  <div className={s.pointerWrapper}>
                    <Image
                      src="/images/careers/arrow.svg"
                      alt="pointer"
                      layout="fill"
                    />
                  </div>
                  <div className={s.arrowText}>
                    Training in working with advanced blockchain platforms from
                    current technical leaders
                  </div>
                </div>

                <div className={s.pointers}>
                  <div className={s.pointerWrapper}>
                    <Image
                      src="/images/careers/arrow.svg"
                      alt="pointer"
                      layout="fill"
                    />
                  </div>
                  <div className={s.arrowText}>
                    Guaranteed offer after successful completion of the
                    internship “Apply”
                  </div>
                </div>
              </div>
            </div>

            <div className={`${s.buttonsWrapperTwo} buttons d-flex mt-5 `}>
              <div className={s.mobileBtn}>
                {/* <div className="btn-primary mr-4">Contact Us</div> */}
                <Link href="/careers-vacancy">
                  <a className={`${s.secondaryBtn} btn-secondary`}>Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
