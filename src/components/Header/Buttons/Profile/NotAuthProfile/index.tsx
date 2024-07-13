import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { RiUser3Line } from "react-icons/ri";
import Link from "next/link";

export const NotAuthProfile: FC = () => {
  const [locale, setLocale] = useState<any>("ru");

  return (
    <Link href={`/profile?lang=${locale}`}>
      <div className={styles.button_profile}>
        <IconContext.Provider
          value={{
            className: `${styles.profile_icon}`,
          }}
        >
          <div>
            <RiUser3Line />
          </div>
        </IconContext.Provider>
      </div>
    </Link>
  );
};
