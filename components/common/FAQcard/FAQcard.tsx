import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./FAQcard.module.scss";


interface Props {
  data: any;
}

const FAQcard: FC<Props> = ({ data }) => {
  return (
    <div className={s.queries}>
      <div className={s.questioncard}>
        <p className={s.question}>{data.question}</p>
      </div>

      <div className={s.answercard}>
        <p className={s.answer}>{data.answer}</p>
      </div>
    </div>
  );
};

export default FAQcard;
