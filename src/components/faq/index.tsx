import st from "./faq.module.css";
import { faqData } from "@models";
import { FaqItem } from "@components";

export const Faq = () => {
  return (
    <section className={st.faq}>
      <h2 className={st.caption}>
        <span className={st.block}>Frequently </span>asked questions
      </h2>
      <ul className={st.list}>
        {faqData.map((item) => (
          <FaqItem key={item.title} data={{ ...item }} />
        ))}
      </ul>
    </section>
  );
};
