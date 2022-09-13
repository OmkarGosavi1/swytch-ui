import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NewsLetter from "../NewsLetter";
import s from "./OurProducts.module.scss";

const OurProducts: FC = () => {
  return (
    <>
      <div className={`${s.contentSection} boxed`}>
        <div className="row align-items-center">
          <div className="col-md-5 overflow-hidden">
            <h1 className="h1 fw600 f-konexy c-secondary mob-mb1 ">
              Our <br />
              <span className="c-primary  ">Products</span>
            </h1>
          </div>
          <div className={`${s.text} col-md-7 f28 fm14 `}>
            Swytch introduces some top-notch decentralized products that
            accelerate the adoption of blockchain-based applications in the web3
            domain. Also, users can witness out-of-the-world gaming experiences
            and facilitate multiple earning opportunities on these platforms.
          </div>
        </div>
      </div>
      <div className={`${s.container} boxed`}>
        <div className={`${s.productBlock} row align-items-center`}>
          <div className="col-md-7">
            <div className={`${s.content}`}>
              <div
                className={`${s.pName} h4 f28 c-primary f-konexy mb-1 line4`}
              >
                Realms of Ethernity
              </div>
              <div className={`f28 ${s.pDesc}`}>
                Realm of Ethernity is the next-generation multiple role-player
                metaverse game where player-driven communities explore epic
                adventures. This decentralized game gives users access to their
                own in-game digital assets and earn profits through trading
                them.
              </div>
            </div>
          </div>
          <div className={`${s.pImgSection} col-md-5`}>
            <div className={s.imgWrapper}>
              <Image
                src={"/images/products/roe.png"}
                alt="product"
                quality={100}
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div
          className={`${s.productBlock} ${s.alignRight} row align-items-center`}
        >
          <div className={`${s.pImgSection} col-md-5 z-2`}>
            <div className={s.imgWrapper}>
              <Image
                src={"/images/products/hw.png"}
                alt="product"
                quality={100}
                layout="fill"
              />
            </div>
          </div>
          <div className="col-md-7 z-1">
            <div className={`${s.content}`}>
              <div
                className={`${s.pName} h4 f28 c-primary f-konexy mb-1 line4-left`}
              >
                <span>Hidden Whales</span>
              </div>
              <div className={`f28 ${s.pDesc}`}>
                {`A modern-day web3-based platform that provides information on
                world trending and top influencers NFT and token collection.
                Moreover, users can access the latest news on NFTs and also
                follow and add desired celebrity’s digital assets to their
                favorite list. them.`}
              </div>
            </div>
          </div>
        </div>

        <div className={`${s.productBlock} row align-items-center`}>
          <div className="col-md-7 z-1">
            <div className={`${s.content}`}>
              <div
                className={`${s.pName} h4 f28 c-primary f-konexy mb-1 line4`}
              >
                Kart Racing League
              </div>
              <div className={`f28 ${s.pDesc}`}>
                KRL is a blockchain-based play-to-earn racing game. This 3D NFT
                game delivers a distinct gaming experience, where users can earn
                money by trading in-game digital assets and NFTs.
              </div>
            </div>
          </div>
          <div className={`${s.pImgSection} col-md-5 z-2`}>
            <div className={s.imgWrapper}>
              <Image
                src={"/images/products/krl.png"}
                alt="product"
                quality={100}
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div
          className={`${s.productBlock} ${s.alignRight} row align-items-center`}
        >
          <div className={`${s.pImgSection} col-md-5 z-2`}>
            <div className={s.imgWrapper}>
              <Image
                src={"/images/products/bmn.png"}
                alt="product"
                quality={100}
                layout="fill"
              />
            </div>
          </div>
          <div className="col-md-7 z-1">
            <div className={`${s.content}`}>
              <div
                className={`${s.pName} h4 f28 c-primary f-konexy mb-1 line4-left`}
              >
                <span> Blue Monster Games</span>
              </div>
              <div className={`f28 ${s.pDesc}`}>
                {`One of our major gaming platforms, Black Magic Network, is DAO governed and has the top-notch metaverse realm. Users can earn and access the BMN metaverse by holding $BMN tokens.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
