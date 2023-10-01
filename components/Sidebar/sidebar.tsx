import React from "react";
import Link from "next/link";

import Icon from "../Icon";

import { IconNames } from "@/types/icons";
import { sidebarRoutes } from "@/util/routes";

import styles from "./sidebar.module.scss";

interface SidebarProps {
  link?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ link }) => {
  return (
    <div className={styles["sidebar"]}>
      {sidebarRoutes?.map((element, index) => {
        return (
          <ul className={styles["sidebar__content-wrapper"]} key={index + 1}>
            {element.name && (
              <p className={styles["sidebar__content-header"]}>
                {element.name}
              </p>
            )}
            <ul className={styles["sidebar__content-children-wrapper"]}>
              {element.children?.map((children, index) => {
                return (
                  <Link href={children.path}>
                    <li
                      className={styles["sidebar-content-children-link"]}
                      key={index + 1}
                    >
                      <Icon icon={children.icon as IconNames} />
                      {children.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
