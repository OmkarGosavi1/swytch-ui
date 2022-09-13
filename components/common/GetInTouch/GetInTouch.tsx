import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./GetInTouch.module.scss";

const GetInTouch: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.secContainer}`}>
          <div className="row">
            <div className="col-md-6">
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/cta-logo.png"}
                  alt="SWYTCH logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-md-6 text-align-right">
              <div className={`${s.content}`}>
                <p className="h1 c-primary f-konexy">Get in touch</p>
                <p className={`${s.text} h2`}>
                  Explore blockchain solutions for your business.
                </p>
                <Link href="#">
                  <a>
                    {/* <div className="h1 c-primary f-konexy">Get in touch</div> */}
                    <div className="btn-primary">Contact Us</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
