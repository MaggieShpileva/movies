import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
  isLoader: boolean;
  setIsLoader: Dispatch<SetStateAction<boolean>>;
};
const DesktopMenu: FC<Props> = (props) => {
  const [locale, setLocale] = useState<any>("ru");

  const handleClick = () => {
    props.setIsLoader(true);
    // props.setIsOpenSubMenu(false);
  };
  return (
    <div className={styles.navigation}>
      <Link href={`/home?lang=${locale}`} onClick={handleClick}>
        {/* <span className={styles.link}>{t("header.my_ivi")}</span> */}
      </Link>
      <Link href="https://www.ivi.tv/new">
        <span
          className={styles.link}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(false);
          }}
          onClick={handleClick}
        >
          Что нового
        </span>
      </Link>
      <Link href={`/movies?lang=${locale}`}>
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("film");
          }}
          onClick={handleClick}
        >
          Фильмы
        </span>
      </Link>
      <Link href="/series">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("series");
          }}
          onClick={handleClick}
        >
          Сериалы
        </span>
      </Link>
      <Link href="https://www.ivi.tv/animation">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("anim");
          }}
          onClick={handleClick}
        >
          Мультфильмы
        </span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
