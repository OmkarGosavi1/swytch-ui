import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./CareerVacancy.module.scss";


const CareerVacancy: FC = () => {
 
  return (
    <>
      <div className={`${s.container} boxed`}>
      <div className={`${s.topSection2} text-center`}>
        <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
          Careers 
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

      <div className={s.row}>
        <div className={s.leftBlock}>
         {` Currently we don't have
           any open positions`}
      
      
        </div>
        <div className={s.rightBlock}>
        Follow us on social media and be the first to know about new vacancies

        <div className={s.socialLinks}>
      <div className={s.links}>
          <Image
                src="/images/social-links/instagram.svg"
                alt="social link"
                layout="fill"
              />
          </div>
          <div className={s.links}>
          <Image
                src="/images/social-links/twitter.svg"
                alt="social link"
                layout="fill"
              />
          </div>
          <div className={s.links}>
          <Image
                src="/images/social-links/linkedin.svg"
                alt="social link"
                layout="fill"
              />
          </div>
          
        
      </div>
        </div>



      </div>
     
      </div>
    </>
  );
};

export default CareerVacancy;
