import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./ChooseUsCard.module.scss";

interface Props {
  data: any;
}

const ChooseUsCard: FC<Props> = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.numberCount}>
        <h2>{data.number}</h2>
      </div>
      <div className={s.imgWrap}>
        <Image
          src={data.images}
          alt="image"
          width={90}
          height={90}
          objectFit="contain"
        />
      </div>
      <div className={s.block}>
        <div className={s.title}>
          <h1>{data.title}</h1>          
        </div>
        <div className={s.desc}>
          <p>{data.desc}</p>
        </div>


      </div>

    </div>
  );
};

export default ChooseUsCard;
