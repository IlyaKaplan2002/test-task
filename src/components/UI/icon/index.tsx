import classnames from "classnames";

import st from "./icon.module.css";

type Props = {
  name: string;
  className?: string;
  size?: string;
  height?: string | number;
  width?: string | number;
  onClick?: () => void;
};
export const Icon = ({
  name,
  size,
  height,
  className,
  width,
  onClick,
}: Props) => {
  const vSize = size ? `${size}px` : "20px";
  const vHeight = `${height}px`;
  const vWidth = `${width}px`;

  return (
    <svg
      className={classnames(st.icon, className, "c-icon")}
      style={{
        width: width ? vWidth : vSize,
        height: height ? vHeight : vSize,
      }}
      onClick={onClick}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
