import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import classnames from "classnames";
import { useLocation } from "react-router-dom";

import { Scroll, Decor } from "@components";
import { PATHS, MENU, IMenuItem, EPATH_IDS } from "@models";

import { Sublinks } from "./components/sublinks";
import { SLink } from "./components/link";

import st from "./sidebar.module.css";
import { isMobile } from "react-device-detect";

type Props = { isOpened: boolean };

export const Sidebar = ({ isOpened = false }: Props) => {
  const location = useLocation();
  const [openedMenu, setOpenedMenu] = useState<number | null>(null);
  const [menu, setMenu] = useState<IMenuItem[]>(MENU);

  const defineOpenedMenu = (path: string) => {
    if ((PATHS as any)[path]) {
      setOpenedMenu((PATHS as any)[path]);
    } else {
      setOpenedMenu(null);
    }
  };

  const handleOpenMenu = (id: number) => {
    if (id !== openedMenu) {
      setOpenedMenu(id);
    } else {
      defineOpenedMenu(location.pathname);
    }
  };

  useEffect(() => {
    defineOpenedMenu(location.pathname);
  }, [location.pathname]);

  return (
    <section
      className={classnames(
        st.wrapper,
        { [st.opened]: isOpened },
        "c-user-select-none"
      )}
    >
      <nav className={st["nav-wrapper"]}>
        <Scroll overflow-behavior="{ x: 'h', y: 's' }">
          <ul className={st.nav}>
            {menu.map((link) => {
              return (
                (link.path || link.sublist) && (
                  <li key={link.id}>
                    {link.sublist && link.sublist.length && (
                      <Sublinks
                        openedMenu={openedMenu}
                        link={link}
                        handleOpenMenu={handleOpenMenu}
                        status={link.status}
                      />
                    )}

                    {link.path && !link.sublist && (
                      <SLink link={link} status={link.status} />
                    )}
                  </li>
                )
              );
            })}
          </ul>
        </Scroll>
      </nav>

      <footer className={st.footer}>
        <div className={st["footer-bord"]}>
          <div className={st["footer-content"]}>
            <Box
              component="p"
              className={classnames(st["footer-title"], "c-font-20-26")}
              sx={{ mb: 1.5, fontWeight: 600 }}
            >
              Have a great project?
            </Box>

            <Box
              component="a"
              className="c-font-16-22 c-text-link"
              sx={{ fontWeight: 500 }}
              href="https://forms.gle/mAeXttC9Qbfjef5Y7"
              target="_blank"
              rel="noreferrer"
            >
              Get in Touch
            </Box>
          </div>

          <Decor />
        </div>
      </footer>
    </section>
  );
};
