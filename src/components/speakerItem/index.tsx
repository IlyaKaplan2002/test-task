import { Icon } from "@components";
import { Speaker } from "@models";
import st from "./speakerItem.module.css";
import speakerIcon from "@assets/images/speakerIcon.png";

export const SpeakerItem = ({
  data: { image, name, position, project, socLinks },
}: {
  data: Speaker;
}) => {
  return (
    <div className={st.item}>
      <div className={st.imageWrapper}>
        <img src={image} alt="speaker image" className={st.itemImage} />
      </div>

      <div className={st.content}>
        <div className={st.topWrapper}>
          <h3 className={st.name}>{name}</h3>
          <p className={st.position}>{position}</p>
          <img src={speakerIcon} alt="speaker icon" className={st.itemIcon} />
        </div>
        <div className={st.bottomWrapper}>
          <ul className={st.socList}>
            <li className={st.socItem}>
              <a
                href={socLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="linkedin" />
              </a>
            </li>
            <li className={st.socItem}>
              <a
                href={socLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="twitter" />
              </a>
            </li>
          </ul>

          <a
            href={project.link}
            className={st.projectLink}
            target="_blank"
            rel="noreferrer"
          >
            {project.name}
          </a>
        </div>
      </div>
    </div>
  );
};
