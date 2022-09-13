import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./FooterUpdated.module.scss";

const FooterUpdated: FC = () => {
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
              <p>
                @copyright Swytch web3 Technologies <br />
                Private Limited
              </p>
            </div>
          </div>
          <div className={s.contact}>
            <div className={s.title}>Contact</div>
            <p className={s.address}>
              9th Floor,office no 907,908 (Use 4th Lift) Topiwala Center,
              Topiwala Lane, near Station (Goregaon West, Mumbai, Maharashtra
              400062) business@swytch.in
              <br /> +91 75064277320
            </p>
          </div>

          <div className={s.socialLinks}>
            <div className={s.links}>
              <Link href="https://www.instagram.com/swytch.in/">
                <a target="_blank">
                  <Image
                    src="/images/social-links/instagram.svg"
                    alt="social link"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className={s.links}>
              <Link href="https://twitter.com/SwytchIn">
                <a target="_blank">
                  <Image
                    src="/images/social-links/twitter.svg"
                    alt="social link"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className={s.links}>
              <Link href="https://www.linkedin.com/company/swytchin/mycompany/">
                <a target="_blank">
                  <Image
                    src="/images/social-links/linkedin.svg"
                    alt="social link"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.terms}>
          <div className={`${s.links} ${s.center} muted `}>
            <Link href="/privacy-policy">
              <a className={`${s.links}   ${s.underline}`}>Privacy Policy</a>
            </Link>
            <Link href="/terms-of-use">
              <a className={`${s.links}  ${s.underline}`}>Terms of Use</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterUpdated;
