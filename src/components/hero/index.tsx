import st from "./hero.module.css";
import heroImage from "@assets/images/hero.png";
import { Button, Icon } from "@components";
import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";

const MAX_COUNT = 2500;
const START_COUNT_DATE = "08/18/2022";
const END_COUNT_DATE = "08/24/2022";

export const Hero = () => {
  const eventCount = useMemo(() => {
    const startCountDate = new Date(START_COUNT_DATE);
    const endCountDate = new Date(END_COUNT_DATE);
    const today = new Date();

    const globalDifference = Math.ceil(
      (endCountDate.getTime() - startCountDate.getTime()) / (1000 * 3600 * 24)
    );
    const localDifference = Math.ceil(
      (endCountDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );

    return Math.round((MAX_COUNT * localDifference) / globalDifference);
  }, []);

  return (
    <div className={st.hero}>
      <h1 className={st.captionHeader}>
        <span className={st.captionGreen}>DeFi investment </span>
        and Go-To-market strategies on a bear market
      </h1>

      <p className={st.subCaption}>Online meetup of KOLs among launchpads</p>

      <img src={heroImage} alt="hero image" className={st.heroImage} />

      <div className={st.event}>
        <h2 className={st.eventCaption}>Event participants</h2>
        <p className={st.eventCount}>+{eventCount}</p>
        <div className={st.progressBar}>
          <div
            className={st.progress}
            style={{ width: `${(eventCount / MAX_COUNT) * 100}%` }}
          ></div>
        </div>
        <Button
          style="primary"
          className={st.eventButton}
          type="button"
          size="large"
          // onClick={() => console.log("first")}
          target="_blank"
          href="https://go.alphaguilty.io/conf_aug_24"
          disabled={new Date().getTime() >= new Date(END_COUNT_DATE).getTime()}
        >
          Participate in giveaway
        </Button>
      </div>
      <Icon
        name={isMobile ? "hero-ellipses" : "hero-ellipses-desktop"}
        width={isMobile ? 1892 : 2510}
        height={isMobile ? 1643 : 1638}
        className={st.heroEllipses}
      />
    </div>
  );
};
