import { FC } from "react";
import s from "./WhoWeWorkWith.module.scss";

const WhoWeWorkWith: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div className={`${s.topSection2} text-center`}>
          <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
            Who We <span className="c-primary">Work With</span>
          </h1>
          <div className={`${s.desc} f28`}>
            {`Swytch is India's leading web3 company that helps you integrate
          futuristic blockchain technology into your business and experience new
          forms of executing management and operations.`}
          </div>

          <div className={s.row}>
            <div className={s.card}>
              <div className={s.title}>
                Working with large enterprises as well as small & medium-sized
                enterprises (SMEs)
              </div>
              <div className={s.detail}>
                SWYTCH shapes & uplifts on Enterprises to become a leading firm
                by scaling, contributing services and support according to
                business, in order to attain consistent and profitable growth in
                the business they run.
              </div>
              <div className={s.tag}>
                <p>Enterprise</p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.title}>
                Working with consulting companies, independant software vendors
                (ISVs), software product development companies and agencies
              </div>
              <div className={s.detail}>
                By understanding agencies diverse needs and goals, we enrich
                their business. with our ideal strategies, we take them to the
                audience as the most desired & recommended business
              </div>
              <div className={s.tag}>
                <p>Agencies</p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.title}>
                Working with more than 500+ global tech startups for their
                web/cloud/mobile/IoT needs
              </div>
              <div className={s.detail}>
                In the act of Enlightening start-up clients and to lay the
                foundation, OSIZ visualizes their ideas, brings them to reality
                and makes them grow as successful Start-ups.
              </div>
              <div className={s.tag}>
                <p>Startups</p>
              </div>
            </div>
          </div>

          {/* <div className={`${s.buttonsWrapper} buttons d-flex mt-4 `}>
          <div className={s.mobileBtn}>
            <div className="btn-primary mr-4">Contact Us</div>
            <div className="btn-secondary ">Learn More</div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default WhoWeWorkWith;
