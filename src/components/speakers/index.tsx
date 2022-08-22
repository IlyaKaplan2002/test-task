import st from "./speakers.module.css";
import speakerImage from "@assets/images/speaker.png";
import { speakersData } from "@models";
import { SpeakerItem, Icon, Button } from "@components";
import { isMobile } from "react-device-detect";
import classNames from "classnames";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export const Speakers = () => {
  return (
    <section className={st.speakers}>
      <Icon
        name="speakers-ellipse"
        width={1972}
        height={1708}
        className={st.ellipse}
      />
      <div className={st.wrapper}>
        <img
          src={speakerImage}
          alt="speaker image"
          className={st.speakerImage}
        />
        <h2 className={st.speakersCaption}>Our speakers</h2>
        {isMobile ? (
          <ul className={st.speakersList}>
            {speakersData.map((item, index) => (
              <SpeakerItem key={index} data={{ ...item }} />
            ))}
          </ul>
        ) : (
          <Splide
            hasTrack={false}
            options={{ gap: "12px", perPage: 3, perMove: 3 }}
            onMoved={(e) => {
              e.Components.Pagination.items.map((item) => {
                if (item.button.classList.contains("is-active")) {
                  item.button.classList.add(st.isActive);
                } else {
                  item.button.classList.remove(st.isActive);
                }
              });
            }}
            onPaginationMounted={(e) => {
              e.Components.Pagination.items.map((item) => {
                item.button.classList.add(st.customPagination);
                item.button.closest("ul")?.classList.add(st.paginationList);
                if (item.button.classList.contains("is-active")) {
                  item.button.classList.add(st.isActive);
                } else {
                  item.button.classList.remove(st.isActive);
                }
              });
            }}
          >
            <SplideTrack>
              {speakersData.map((item, index) => (
                <SplideSlide key={index}>
                  <SpeakerItem data={{ ...item }} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows">
              <Button
                style="ghost"
                className={classNames(
                  st.buttonLeft,
                  st.button,
                  "splide__arrow splide__arrow--prev"
                )}
              >
                <Icon
                  name="slider-arrow"
                  width={6}
                  height={12}
                  className={st.arrowLeft}
                />
              </Button>
              <Button
                style="ghost"
                className={classNames(
                  st.buttonRight,
                  st.button,
                  "splide__arrow splide__arrow--next"
                )}
              >
                <Icon
                  name="slider-arrow"
                  width={6}
                  height={12}
                  className={st.arrowRight}
                />
              </Button>
            </div>
          </Splide>
        )}
      </div>
    </section>
  );
};
