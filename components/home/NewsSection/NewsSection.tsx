import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./NewsSection.module.scss";

const NewsSection: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <p className="h1 text-center c-primary f-konexy">Latest News</p>
        <p className={`${s.content} h2 text-center`}>
          Get yourself the right information on web3 and blockchain and workout
          on technology that suits your business
        </p>
        <div className={s.newsWrapper}>
          <div className="row">
            <div className="col-md-4">
              <div className={`${s.newsBlock}`}>
                <div className={s.imgWrapper}>
                  <Image
                    src="/images/news-image.jpg"
                    alt="news"
                    layout="fill"
                  />
                </div>

                <div className={`${s.postedOn}`}>3 days ago</div>
                <div className={`${s.newsTitle} f26 c-secondary fw700`}>
                  Lorem ipsum dolor
                </div>
                <div className={`${s.excerpt}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nibh a, elit hac augue malesuada
                </div>
                <Link href="#">
                  <a>
                    <div className={`${s.readMore}`}>{`Read More >>`}</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.newsBlock}`}>
                <div className={s.imgWrapper}>
                  <Image
                    src="/images/news-image.jpg"
                    alt="news"
                    layout="fill"
                  />
                </div>

                <div className={`${s.postedOn}`}>3 days ago</div>
                <div className={`${s.newsTitle} f26 c-secondary fw700`}>
                  Lorem ipsum dolor
                </div>
                <div className={`${s.excerpt}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nibh a, elit hac augue malesuada
                </div>
                <Link href="#">
                  <a>
                    <div className={`${s.readMore}`}>{`Read More >>`}</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.newsBlock}`}>
                <div className={s.imgWrapper}>
                  <Image
                    src="/images/news-image.jpg"
                    alt="news"
                    layout="fill"
                  />
                </div>

                <div className={`${s.postedOn}`}>3 days ago</div>
                <div className={`${s.newsTitle} f26 c-secondary fw700`}>
                  Lorem ipsum dolor
                </div>
                <div className={`${s.excerpt}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nibh a, elit hac augue malesuada
                </div>
                <Link href="#">
                  <a>
                    <div className={`${s.readMore}`}>{`Read More >>`}</div>
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

export default NewsSection;
