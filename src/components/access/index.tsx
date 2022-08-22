import { Button, Icon } from "@components";
import st from "./access.module.css";
import accessImage from "@assets/images/access.png";

export const Access = () => {
  return (
    <section className={st.access}>
      <h2 className={st.caption}>Get access to the $ALPHAG token sale!</h2>
      <div className={st.imageWrapper}>
        <img src={accessImage} alt="access image" className={st.accessImage} />
        <Icon
          name="access-ellipse"
          width={1408}
          height={1291}
          className={st.ellipse}
        />
      </div>
      <p className={st.text}>
        All conference participants will be granted access to our upcoming token
        sale. All the details will be announced in our Social Media.
      </p>
      <Button
        style="primary"
        className={st.accessButton}
        type="button"
        size="large"
        href="https://discord.com/invite/WEpqA7DPDN"
        target="_blank"
      >
        Link to Discord group
      </Button>
    </section>
  );
};
