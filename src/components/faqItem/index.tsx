import { Faq } from "@models";
import { useState } from "react";
import { Icon } from "@components";
import st from "./faqItem.module.css";

export const FaqItem = ({ data: { title, content } }: { data: Faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={st.item}>
      <div className={st.topWrapper} onClick={() => setOpen((prev) => !prev)}>
        <h3 className={st.caption}>{title}</h3>
        <div className={`${st.iconWrapper} ${open ? st.open : ""}`}>
          <Icon name="faq-plus" width={48} height={48} />
        </div>
      </div>
      <p className={`${st.content} ${open ? st.open : ""}`}>{content}</p>
    </li>
  );
};
