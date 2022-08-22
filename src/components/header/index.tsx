import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Box } from "@mui/material";

import { Button, Icon } from "@components";

import { Wallet } from "./components/wallet";

import st from "./header.module.css";

type Props = { toggleSidebar: () => void; sidebarOpened: boolean };

export const Header = ({ toggleSidebar, sidebarOpened }: Props) => {
  const location = useLocation();

  return (
    <header className={st.header}>
      <Link
        className={st.logo}
        to="/"
        onClick={() => {
          if (location.pathname === "/") {
            window.location.reload();
          }
        }}
      >
        <Icon name="logo" height="32" width="187" />
      </Link>

      {!location.pathname.includes("whitelisting") && (
        <Box className={st.menu} sx={{ ml: "auto" }}>
          <Icon
            name={sidebarOpened ? "menu-close" : "menu-open"}
            height="24"
            width="24"
            onClick={toggleSidebar}
          />
        </Box>
      )}

      {!isMobile && (
        <>
          <Box className={st.wallet} sx={{ ml: "auto" }}>
            <Wallet />
          </Box>
        </>
      )}
    </header>
  );
};
