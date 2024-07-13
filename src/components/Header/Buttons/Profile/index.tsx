import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NotAuthProfile } from "./NotAuthProfile";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const ProfileButton: FC<Props> = (props) => {
  const [locale, setLocale] = useState<any>("ru");

  // const handleClick = () => {
  //   router.push({ pathname: "/profile", query: { lang: locale } });
  // };

  return (
    <div
      onClick={() => {
        // handleClick();
      }}
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(true);
        props.setSubMenuTitle?.("profile");
      }}
    >
      <NotAuthProfile />
    </div>
  );
};

export default ProfileButton;
