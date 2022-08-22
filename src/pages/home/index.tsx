import { Access, Agenda, Hero, Speakers, Faq, Contact } from "@components";
import st from "./home.module.css";

export const Home = () => {
  return (
    <div className={st.home}>
      <Hero />
      <div className={st.wrapper}>
        <Access />
        <Speakers />
        <Agenda />
      </div>
      <Faq />
      <Contact />
    </div>
  );
};
