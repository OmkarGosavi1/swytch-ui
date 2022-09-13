import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./ServiceCard.module.scss";

// interface Props {
//   data: string;
// }

const ServiceCard: FC = () => {
  return (
   <div className={s.serviceCard}>
     <div className={s.card}>
      <div className={s.imgWrap}>
        <Image
          src="/images/services/blockchain.jpg"
          alt="icon"
          width={110}
          height={120}
          objectFit="contain"
        />
      </div>
      <div className={s.block}>
        <div className={s.title}>
          <h1>Blockchain</h1>
        </div>
        <div className={s.desc}>
          <p>Deciphering blockchain & building sustainable & robust custom solutions</p>
        </div>
        <div className={s.nav}>
          <Image
            src='/images/services/arrow.jpg'
            alt="arrow"
            width={38}
            height={28}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
    <div className={s.card2}>
      <div className={s.imgWrap}>
        <Image
          src="/images/services/devops.jpg"
          alt="icon"
          width={110}
          height={120}
          objectFit="contain"
        />
      </div>
      <div className={s.block}>
        <div className={s.title}>
          <h1>Blockchain</h1>
        </div>
        <div className={s.desc}>
          <p>Deciphering blockchain & building sustainable & robust custom solutions</p>
        </div>
        <div className={s.nav}>
          <Image
            src='/images/services/arrow.jpg'
            alt="arrow"
            width={38}
            height={28}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
    
   </div>
   
  );
};

export default ServiceCard;
