import { Agenda } from "@models";
import st from "./agendaItem.module.css";

export const AgendaItem = ({
  data: { time, title, speakers },
}: {
  data: Agenda;
}) => {
  return (
    <li className={st.item}>
      <div className={st.topWrapper}>
        <p className={st.time}>{time}</p>
        <h3 className={st.caption}>{title}</h3>
        <div className={st.divider}></div>
      </div>

      <ul className={st.speakersList}>
        {speakers.map((item, index) => (
          <li key={index} className={st.speakersItem}>
            <div className={st.avatarWrapper}>
              <img
                src={item.avatar}
                alt={item.name}
                className={st.speakersAvatar}
              />
            </div>
            <div>
              <h3 className={st.speakersCaption}>{item.name}</h3>
              <p className={st.speakersPosition}>{item.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};
