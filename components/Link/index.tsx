import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Icon from "../Icon";
import { IconNames } from "@/types/icons";

import styles from "./link.module.scss";

interface ActiveLinkProps {
  path: string;
  iconPath?: string;
  iconName?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  path,
  iconPath,
  iconName,
}) => {
  const router = useRouter();
  const isActivePath = Boolean(router.pathname === path);

  return (
    <Link href={path}>
      <div
        className={`${styles["link"]} ${
          isActivePath ? styles["link__active"] : ""
        }`}
      >
        <Icon icon={iconPath as IconNames} />
        {iconName}
      </div>
    </Link>
  );
};

export default ActiveLink;
