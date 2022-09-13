import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import NewsLetter from "../NewsLetter";
import s from "./TeamSec.module.scss";

const TeamSec: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={s.row}>
          <div className={s.topSection2}>
            <h1 className="h1 fw400 f-konexy c-secondary mob-mb1">
              Meet our team of{" "}
              <span className="c-primary">
                Developers, <br />
                Designers
              </span>{" "}
              and world-class{" "}
              <span className="c-primary">
                Problem
                <br /> Solvers
              </span>
            </h1>
            <div className={`${s.desc} f26`}>
              A core team where everyone works together to deliver and produce
              your desired vision in the web3 domain
            </div>
          </div>
          <Image
            src="/images/icons/arrow.png"
            height={150}
            width={420}
            objectFit="contain"
            alt="arrow"
          />
        </div>

        <div className="">
          <div className={s.teamWrapper}>
            {AppConstant.team.map((item, i) => (
              <>
                <div className={s.item} key={i}>
                  <div className={s.imgWrapper}>
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="contain"
                      alt="team"
                      objectPosition="center bottom"
                    />
                  </div>
                  <div className={s.details}>
                    <span className={s.name}>{item.name}</span>
                    <span className={s.designation}>{item.designation}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSec;
