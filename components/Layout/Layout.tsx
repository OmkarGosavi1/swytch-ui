import Contact from "@components/common/Contact";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { panelAtom } from "src/_state";
import s from "./Layout.module.scss";

interface Props {
  className?: string;
}
export const Layout: FC<Props> = ({ className, children }) => {
  const [{ value, type }, setPanel] = useRecoilState(panelAtom);

  const sideMenuClick = (e: any) => {
    // console.log(value);
    setPanel({ value: !value, type: null });
    // setSideMenuActive(!sideMenuActive);
    e.preventDefault();
    e.stopPropagation();
    // window.scrollTo(0, 0);

    // if (sideMenuActive) {
    // 	document.body.style.overflow = 'unset';
    // } else {
    // 	document.body.style.overflow = 'hidden';
    // }
  };

  useEffect(() => {
    // console.log(value, type);
    if (!value) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
      // window.scrollTo(0, 0);
    }
  }, [value, type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`${s.container} ${className}`}>
      <div className={`${s.sidebarMenu} ${value ? s.active : ""}`}>
        <div
          onClick={sideMenuClick}
          className={`${s.close} ${!value ? "" : s.active}`}
        >
          <Image
            src="/images/icons/close1.svg"
            width={40}
            height={40}
            alt="close"
          />
        </div>
        <div className="conatct-wrapper">
          <Contact />
        </div>
      </div>
      {/* <div className={s.bgImageWrapper}>
        <div className={s.bgImage}>
          <Image src="/images/footer-bg.svg" width="3001" height="2940" />
        </div>
      </div> */}
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default Layout;
