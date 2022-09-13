import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Team.module.scss";

const Team: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <p className="h1 text-center c-primary f-konexy">The Core Team</p>
        <p className={`${s.content} h2 text-center line2`}>
          <span>
            {" "}
            A core team where everyone works together to deliver and produce
            your
            <br />
            desired vision in the web3 domain
          </span>
        </p>

        <div className={`${s.teamMembers}`}>
          {/* <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/haydn3.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                  // objectPosition="top"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Haydn Snape </div>
            <div className={`${s.teamMemberDesignation}`}>
              Director/ Co-Founder
            </div>
          </div>
          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/josh.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Joshua Snape</div>
            <div className={`${s.teamMemberDesignation}`}>Director</div>
          </div> */}

          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/raj.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Raj Shah</div>
            <div className={`${s.teamMemberDesignation}`}>
              Founder / Director
            </div>
          </div>

          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/yugen.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Yugen Chokshi </div>
            <div className={`${s.teamMemberDesignation}`}>
              Chief Technology Officer
            </div>
          </div>

          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/rahul.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Rahul Yadav </div>
            <div className={`${s.teamMemberDesignation}`}>
              VP of Engineering
            </div>
          </div>
          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/devika.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Devika Patel </div>
            <div className={`${s.teamMemberDesignation}`}>
              Asst. Product Manager
            </div>
          </div>
          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/parth.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Parth Shah </div>
            <div className={`${s.teamMemberDesignation}`}>Chief of Staff</div>
          </div>
        </div>

        {/* <div className={`${s.teamMembers} ${s.teamMembers2} `}>
          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/haydn3.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                  // objectPosition="top"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Rahul Yadav </div>
            <div className={`${s.teamMemberDesignation}`}>VP Engineering</div>
          </div>
          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/josh.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Devika Patel</div>
            <div className={`${s.teamMemberDesignation}`}>
              Lead Design Manager
            </div>
          </div>

          <div className={`${s.singleBlock}`}>
            <div className={`${s.imageContainer}`}>
              <div className={s.imgWrapper}>
                <Image
                  src={"/images/raj.jpg"}
                  alt="team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.teamMemberName}`}>Parth Shah</div>
            <div className={`${s.teamMemberDesignation}`}>General Manager</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Team;
