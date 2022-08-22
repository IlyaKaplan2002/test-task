import { Icon } from "@components";

import st from "./decor.module.css";

type Props = {
  icon?: boolean;
};

export const Decor = ({ icon }: Props) => {
  return (
    <div className={st.wrapper}>
      {icon ? (
        <Icon className={st.icon} name="decor" size="803" />
      ) : (
        <div className={st.color} />
      )}
    </div>
  );
};

Decor.defaultProps = {
  icon: false,
};
