import { Button, Icon } from "@components";
import st from "./agenda.module.css";
import agendaImage from "@assets/images/agendaImage.png";
import { agendaData } from "@models";
import { AgendaItem } from "@components";

export const Agenda = () => {
  return (
    <section className={st.agenda}>
      <img src={agendaImage} alt="agenda image" className={st.agendaImage} />
      <h2 className={st.agendaCaption}>Agenda</h2>
      <p className={st.agendaText}>
        Join our group and ask your question. Our speakers will form an agenda
        according to users' questions in Discord.
      </p>
      <Button
        style="primary"
        className={st.agendaButton}
        type="button"
        size="large"
        href="https://discord.com/invite/WEpqA7DPDN"
        target="_blank"
      >
        Link to Discord group
      </Button>

      <div className={st.agendaDate}>WEDNESDAY, AUGUST.24</div>

      <ul className={st.agendaList}>
        {agendaData.map((item, index) => (
          <AgendaItem key={index} data={{ ...item }} />
        ))}
      </ul>
      <Icon
        name="agenda-ellipse"
        width={2170}
        height={1973}
        className={st.ellipse}
      />
    </section>
  );
};
