import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { panelAtom } from "src/_state";
import s from "./Header.module.scss";
import { MenuItems } from "./MenuItems";

interface Props {
  hideMenu?: boolean;
}
const Header: FC<Props> = ({ hideMenu }) => {
  const ref = useRef(null);
  const commonRef: any = useRef({});
  const [isMenuActive, setMenuActive] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [{ value, type }, setPanel] = useRecoilState(panelAtom);
  commonRef.current = {};

  const router = useRouter();

  const sideMenuClick = (e: any) => {
    setPanel({ value: !value, type: "" });
    setSideMenuActive(!sideMenuActive);
    e.preventDefault();
    e.stopPropagation();
    console.log("side", sideMenuActive);
    // window.scrollTo(0, 0);

    // if (sideMenuActive) {
    // 	document.body.style.overflow = 'unset';
    // } else {
    // 	document.body.style.overflow = 'hidden';
    // }
  };

  const menuToggle = () => {
    setMenuActive((t) => !t);

    if (isMenuActive) {
      //document.body.style.overflow = "unset";
    } else {
      //document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className={`${s.container} ${hideMenu ? s.hideMenu : ""} boxed`}>
      <div className={s.menuWrapper}>
        <div
          className={`${s.hamburgerMenu} hamburger-menu ${
            isMenuActive ? s.active : ""
          }`}
          onClick={menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={s.logo}>
          <Link href="/">
            <a>
              <Image src="/images/logo.jpg" alt="Swytch logo" layout="fill" />
            </a>
          </Link>
        </div>

        <div className={`${s.content} header-content`}>
          <div className={`${s.menuItems} ${isMenuActive ? s.active : ""}`}>
            {MenuItems.map((item, i) => (
              <Link href={item.url} key={i}>
                <a
                  className={`${s.item} ${
                    router.pathname === item.url ? s.active : ""
                  }`}
                  target={item.isExternal ? "_blank" : "_self"}
                  onClick={() => {
                    setMenuActive(false);
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ))}

            {/* <div className={s.socialWrapper}>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="img"
                    src="/images/icons/fb.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/insta.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/linkedin.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/twitter.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div> */}
            {/* </div> */}

            {/* <div className={`btn-primary ${s.walletbtn}`}>
            <Link href="mailto:business@swytch.in">
              <a>Contact Us</a>
            </Link>
          </div> */}

            {/* <div className="ml-md-3 ml-1"> */}
            {/* <Image
              src="/images/icons/theme-toggle.svg"
              alt="theme toggle icon"
              width={43}
              height={43}
            /> */}
          </div>
        </div>

        <div
          className={`btn-primary ${s.walletbtn}`}
          onClick={(e) => sideMenuClick(e)}
        >
          Contact Us{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
