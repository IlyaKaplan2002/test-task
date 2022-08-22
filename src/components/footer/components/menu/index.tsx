import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { useLocation } from "react-router-dom";

import { IMenuLink } from "@models";

import st from "./menu.module.css";

type Props = {
  links: IMenuLink[];
};

export const Menu = ({ links }: Props) => {
  const location = useLocation();

  return (
    <ul className={st.menu}>
      {links.map((link) => (
        <li key={link.id}>
          {link.disabled ? (
            <p className={classnames(st.link, st.disabled, "c-font-16-22")}>
              {link.title}

              <span className={classnames(st.soon, "c-font-16-22")}>
                ( soon )
              </span>
            </p>
          ) : link.type === "self" ? (
            <NavLink
              to={link.path}
              className={(linkData) =>
                classnames(
                  { [st.active]: linkData.isActive },
                  st.link,
                  "c-font-16-22"
                )
              }
            >
              {link.title}
            </NavLink>
          ) : (
            <a
              className={classnames(
                { [st.active]: location.pathname === link.path },
                st.link,
                "c-font-16-22"
              )}
              href={link.path}
              target="_blank"
              rel="noreferrer"
            >
              <span>{link.title}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
