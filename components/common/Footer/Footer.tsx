import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NewsLetter from "../NewsLetter";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
    <div className={`${s.container} boxed`}>
    <div className={s.row}>
      <div className={s.bottomSection}>
        <div className={s.brandLogo}>
          <div className={s.logo1}>
          <Image
                src="/images/logo.jpg"
                alt="hidden whales logo"
                layout="fill"
              />
          </div>
          <div className={s.logo2}>
          <Image
                src="/images/logo.svg"
                alt="hidden whales logo"
                layout="fill"
              />
          </div>


        </div>
        <div className={s.copyright}>
          <p>@copyright Swytch web3 Technologies <br/>Private Limited</p>
        </div>

        
        <div className={s.terms}>
        <div className={`${s.links} ${s.center} muted `}>
                  <Link href="/terms-of-use">
                    <a className={`${s.links}  ${s.underline}`}>Terms of Use</a>
                  </Link>
                  <Link href="/privacy-policy">
                    <a className={`${s.links}   ${s.underline}`}>
                      Privacy Policy
                    </a>
                  </Link>
                  

        </div>
        </div>

      </div>
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
          <div className={s.links}>
          <Image
                src="/images/social-links/telegram.svg"
                alt="social link"
                layout="fill"
              />
          </div>
        
      </div>
    </div>

    </div>
     
      
    </>
  );
};

export default Footer;
