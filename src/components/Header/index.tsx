"use client";
import { FC, useEffect, useState } from "react";
import { Loader } from "../Loader";
import LanguageButton from "./Buttons/Language";
import NotificationButton from "./Buttons/Notification";
import ProfileButton from "./Buttons/Profile";
import SearchButton from "./Buttons/Search";
import WatchingButton from "./Buttons/WatchForFree";
import DesktopMenu from "./DesktopMenu";
import SubMenu from "./DesktopMenu/SubMenu";
import styles from "./index.module.scss";
import logo from "../../images/icons/logo.svg";
import Image from "next/image";

export const Header: FC = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [subMenuTitle, setSubMenuTitle] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isOpenSubMenu && <div className={styles.container_active}></div>}

        <div className={styles.main_part}>
          <Image src={logo} width={66} height={48} alt="logo" />
          <DesktopMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
            isLoader={isLoader}
            setIsLoader={setIsLoader}
          />
        </div>

        <div className={styles.buttons}>
          <WatchingButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
          />
          <SearchButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
          <NotificationButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
          <ProfileButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
          />
          <LanguageButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        </div>
        {isOpenSubMenu && (
          <SubMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            subMenuTitle={subMenuTitle}
          />
        )}
      </div>
    </header>
  );
};
