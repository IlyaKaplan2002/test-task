// @ts-nocheck
import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { IButtonType, BtnTypes, BtnSizes } from "@models";

type Props = {
  id?: string
  className?: string
  children: ReactElement | string
  loading?: boolean
  size?: "small" | "medium" | "large"
  type?: "button" | "submit"
  style: IButtonType
  disabled?: boolean
  href?: string
  target?: "_blank" | "_self"
  onClick?: (any?: any) => void
}

export const Button = styled(({
  id,
  className,
  children,
  loading,
  size,
  type,
  style,
  href,
  disabled,
  target,
  onClick
}: Props) => {
  const navigate = useNavigate();

  return href ? (
    <button
      id={ id }
      className={ className }
      target={ target }
      disabled={ disabled }
      type={ type }
      onClick={ () => {
        if(target === "_self") {
          navigate(href);
        }

        if(target === "_blank") {
          window.open(`${ href }`);
        }

        if(onClick) {
          onClick();
        }
      } }
    >
      { loading ? <p className="loadtrt"><CircularProgress size={ 16 } color="inherit" /></p> : children }
    </button>
  ) : (
    <button
      id={ id }
      className={ className }
      target={ target }
      disabled={ disabled }
      type={ type }
      onClick={ onClick }
    >
      { loading ? <p className="loadtrt"><CircularProgress size={ 16 } color="inherit" /></p> : children }
    </button>
  );
})(({ size, style }) => {
  return {
    ...BtnSizes[size],
    fontFamily: "var(--font-family-1)",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: "background-color .3s, border .3s, color .3s",

    ".loadtrt": {
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ...BtnTypes[style],
  };
});

Button.defaultProps = {
  size: "medium",
  type: "button",
} as Partial<Props>;
