import classnames from "classnames";
import { NavLink } from "react-router-dom";

import { Icon } from "@components";
import { PATHS, IMenuItem } from "@models";

import st from "../../sidebar.module.css";

type Props = {
  openedMenu: number | null;
  link: IMenuItem;
  handleOpenMenu: (id: number) => void;
  status: "active" | "new" | "soon";
};

export const Sublinks = ({
  openedMenu,
  link,
  status,
  handleOpenMenu,
}: Props) => {
  return (
    <>
      {(status === "active" || status === "new") && (
        <>
          <button
            className={classnames(
              {
                active:
                  openedMenu === link.id ||
                  link.id === (PATHS as any)[location.pathname],
              },
              "c-button-main c-font-14-24"
            )}
            type="button"
            onClick={() => handleOpenMenu(link.id)}
          >
            {link.icon && <Icon size="24" name={link.icon} />}

            {link.title}

            {link.id !== (PATHS as any)[location.pathname] && (
              <Icon
                className={classnames(
                  { [st.opened]: openedMenu === link.id },
                  st.icon
                )}
                name="menu-select"
                size="24"
              />
            )}
          </button>

          {(openedMenu === link.id ||
            link.id === (PATHS as any)[location.pathname]) && (
            <ul className={st.submenu}>
              {link.sublist &&
                link.sublist.map((sublink) => (
                  <li key={sublink.id}>
                    {sublink.type === "self" && (
                      <NavLink
                        // @ts-ignore
                        to={sublink.path}
                        target="_self"
                        className={(sublink) =>
                          classnames(
                            { [st.active]: sublink.isActive },
                            "c-font-14-17"
                          )
                        }
                      >
                        <span>{sublink.title}</span>
                      </NavLink>
                    )}

                    {sublink.type === "redirect" && (
                      <a
                        className="c-font-14-17"
                        href={sublink.path}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{sublink.title}</span>
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </>
      )}

      {status === "soon" && (
        <p className="c-button-main c-button-disabled c-font-14-24">
          {link.icon && <Icon size="24" name={link.icon} />}

          {link.title}

          <span className="c-button-disabled-soon c-font-12-15">SOON</span>
        </p>
      )}
    </>
  );
};
