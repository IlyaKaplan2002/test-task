import { Link } from "react-router-dom";
import classnames from "classnames";
import { Box } from "@mui/material";

import { PRODUCTS_LINKS, KNOWLEDGE_BASE_LINKS } from "@models";
import { Icon } from "@components";

import { Menu } from "./components/menu";

const SOCIAL_MEDIA_LINKS = {
  telegram: "https://t.me/AlphaGuiltyAnn",
  discord: "https://discord.com/invite/S6YgxUfH5S",
  twitter: "http://twitter.com/AGuiltyOfficial",
  medium: "https://medium.com/@alpha.guilty",
};

import st from "./footer.module.css";
import { useCallback, useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = useCallback(() => {
    if (!validateEmail(email)) {
      return;
    }
    console.log(email);
  }, [email]);

  return (
    <footer className={classnames(st["footer-wrapper"])}>
      <div className={classnames(st.footer, "c-wrap")}>
        <section className={classnames(st.section, st.bl1)}>
          <Link to="/" className={st.logo}>
            <Icon name="logo" height="24" width="140" />
          </Link>

          <p className={classnames(st["copyright-text"], "c-font-12-16")}>
            © 2022 AlphaGuilty.
          </p>

          <div className={classnames(st.nav, "c-font-12-16")}>
            <Link to="/terms-and-condition" className={st.link}>
              Terms of Service
            </Link>

            <p className={st.divider}>|</p>

            <Link
              to="/privacy-policy"
              className={classnames(st.link, "c-font-12-16")}
            >
              Privacy Policy
            </Link>
          </div>
        </section>

        <section className={classnames(st.section, st.bl2)}>
          <h3 className={classnames(st.title, "c-font-16-22")}>Product</h3>

          <Menu links={PRODUCTS_LINKS} />
        </section>

        <section className={classnames(st.section, st.bl3)}>
          <h3 className={classnames(st.title, "c-font-16-22")}>
            Knowledge base
          </h3>

          <Menu links={KNOWLEDGE_BASE_LINKS} />
        </section>

        <section className={classnames(st.section, st.email)}>
          <h3 className={classnames(st.title, "c-font-16-22")}>
            Subscribe to our newsletter
          </h3>

          <label className={st.label}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={st.input}
            />
            {!email && <span className={st.labelText}>Email address</span>}
            <Icon
              name="arrow-right"
              width={40}
              height={40}
              className={st.arrow}
              onClick={onSubmit}
            />
          </label>

          <ul className={st.socList}>
            <li className={st.socItem}>
              <a
                href={SOCIAL_MEDIA_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="twitter" />
              </a>
            </li>
            <li className={st.socItem}>
              <a
                href={SOCIAL_MEDIA_LINKS.telegram}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="telegram" />
              </a>
            </li>
            <li className={st.socItem}>
              <a
                href={SOCIAL_MEDIA_LINKS.discord}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="discord" />
              </a>
            </li>
            <li className={st.socItem}>
              <a
                href={SOCIAL_MEDIA_LINKS.medium}
                target="_blank"
                rel="noreferrer"
                className={st.socLink}
              >
                <Icon name="medium" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
