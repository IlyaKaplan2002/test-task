import { Button, Icon } from "@components";
import st from "./contact.module.css";

export const Contact = () => {
  return (
    <section className={st.contact}>
      <h2 className={st.caption}>Have a great project?</h2>
      <p className={st.text}>
        Alphaguilty is a community governed launchpad to help you launch your
        projects in a way that is fair for all.
      </p>

      <Button style="secondary" type="button" className={st.button}>
        Get in Touch
      </Button>

      <Icon
        name="contact-ellipse"
        width={803}
        height={803}
        className={st.ellipse}
      />
    </section>
  );
};
