import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Home } from "@pages";

import { Icons, Scroll, Sidebar, Header, Loader, Footer } from "@components";

import st from "./app.module.css";

export const App = () => {
  const location = useLocation();
  const scrollTo = useRef(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    if (scrollTo.current && isLoaded) {
      (scrollTo as any).current(0);
    }
  }, [location]);

  useEffect(() => {
    document.body.dataset.theme = "dark";
  }, []);

  return (
    <>
      <Icons />

      <div className={st.wrapper}>
        <Header
          toggleSidebar={() => setSidebarOpened((prev) => !prev)}
          sidebarOpened={sidebarOpened}
        />

        <div className={st["content-wrapper"]}>
          <Sidebar isOpened={sidebarOpened} />

          <div className={st.content}>
            <Scroll scrollTo={scrollTo} overflow-behavior="{ x: 'h', y: 's' }">
              <div className={st["pages-wrapper"]}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>

                <Footer />
              </div>
            </Scroll>
          </div>
        </div>
      </div>
    </>
  );
};
