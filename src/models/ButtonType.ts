export type IButtonType = "primary" | "secondary" | "outlined" | "ghost" | "link" | "w-primary" | "checked" | "checked-disabled" | "error";

export const BtnSizes: any = {
  small: {
    padding: "9px 20px",
    minWidth: "auto",
    whiteSpace: "nowrap"
  },
  medium: {
    padding: "13px 24px",
    minWidth: "auto",
    whiteSpace: "nowrap"
  },
};

export const BtnTypes: any = {
  primary: {
    color: "var(--button-primary-text-color)",
    background: "var(--button-primary-background-color)",
    ":hover": {
      background: "var(--button-primary-hover-background-color)",
    },
    ":active": {
      background: "var(--button-primary-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-primary-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-primary-focus-background-color)",
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      background: "var(--button-primary-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  secondary: {
    color: "var(--button-secondary-text-color)",
    background: "var(--button-secondary-background-color)",
    ":hover": {
      background: "var(--button-secondary-hover-background-color)",
    },
    ":active": {
      background: "var(--button-secondary-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-secondary-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-secondary-focus-background-color)",
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      background: "var(--button-secondary-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  ghost: {
    color: "var(--button-ghost-text-color)",
    background: "var(--button-ghost-background-color)",
    ":hover": {
      background: "var(--button-ghost-hover-background-color)",
    },
    ":active": {
      background: "var(--button-ghost-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-ghost-pressed-background-color)",
    },
    ":focus": {
      borderColor: "var(--button-ghost-focus-border-color)",
      background: "var(--button-ghost-focus-background-color)",
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      background: "var(--button-ghost-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  outlined: {
    color: "var(--button-outlined-text-color)",
    background: "var(--button-outlined-background-color)",
    borderColor: "var(--button-outlined-border-color)",
    ":hover": {
      background: "var(--button-outlined-hover-background-color)",
    },
    ":active": {
      background: "var(--button-outlined-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-outlined-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-outlined-focus-background-color)",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-primary-hover-background-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      background: "var(--button-outlined-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  "w-primary": {
    color: "var(--button-wprimary-text-color)",
    background: "var(--button-wprimary-background-color)",
    ":hover": {
      background: "var(--button-wprimary-hover-background-color)",
    },
    ":active": {
      background: "var(--button-wprimary-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-wprimary-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-wprimary-focus-background-color)",
      outline: "2px solid var(--button-wprimary-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-wprimary-border-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      background: "var(--button-wprimary-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  checked: {
    color: "var(--button-checked-text-color)",
    background: "var(--button-checked-background-color)",
    ":hover": {
      background: "var(--button-checked-hover-background-color)",
    },
    ":active": {
      background: "var(--button-checked-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-checked-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-checked-focus-background-color)",
      outline: "2px solid var(--button-checked-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-checked-border-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      color: "var(--button-checked-disabled-text-color)",
      background: "var(--button-checked-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  error: {
    color: "var(--button-error-text-color)",
    background: "var(--button-error-background-color)",
    ":hover": {
      background: "var(--button-error-hover-background-color)",
    },
    ":active": {
      background: "var(--button-error-hover-background-color)",
    },
    ":visited": {
      background: "var(--button-error-pressed-background-color)",
    },
    ":focus": {
      background: "var(--button-error-focus-background-color)",
      outline: "2px solid var(--button-error-hover-background-color)",
      outlineOffset: "2px",
    },
    ":focus-visible": {
      outline: "2px solid var(--button-error-border-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      color: "var(--button-error-disabled-text-color)",
      background: "var(--button-error-disabled-background-color)",
      cursor: "not-allowed",
    },
  },
  link: {
    padding: "0 8px",
    color: "var(--button-link-text-color)",
    background: "transparent",
    ":hover": {
      textDecoration: "underline",
    },
    ":active": {
      textDecoration: "underline",
    },
    ":visited": {
      textDecoration: "underline",
    },
    ":focus": {
      textDecoration: "underline",
    },
    ":focus-visible": {
      textDecoration: "underline",
      outline: "2px solid var(--button-link-border-color)",
      outlineOffset: "2px",
    },
    "&:disabled": {
      color: "var(--button-link-disabled-text-color)",
      cursor: "not-allowed",
    },
  },
};

BtnTypes["checked-disabled"] = {
  ...BtnTypes.checked,
  "&:disabled": {
    background: "var(--button-checked-background-color)",
    cursor: "not-allowed",
  },
};
