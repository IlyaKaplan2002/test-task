import classnames from "classnames";
import { NavLink } from "react-router-dom";

import { Icon } from "@components";
import { IMenuItem } from "@models";

import { Box } from "@mui/system";

type Props = {
  link: IMenuItem
  status: "active" | "new" | "soon"
}

export const SLink = ({
  link,
  status
}: Props) => {
  return (
    <>
      { (status === "active" || status === "new") && (
        <>
          { link.type === "self" ? (
            <NavLink
              // @ts-ignore
              to={ link.path }
              className={ linkData => classnames({ active: linkData.isActive }, "c-button-main c-font-14-24") }
            >
              { link.icon && (
                <Icon
                  size="24"
                  name={ link.icon }
                />
              ) }

              <span>{ link.title }</span>

              { status === "new" && <Box component="span" className="c-button-disabled-new c-font-12-15" mr={ .01 }>NEW</Box> }
            </NavLink>
          ) : (
            <a
              className="c-button-main c-font-14-24"
              href={ link.path }
              target="_blank"
              rel="noreferrer"
            >
              { link.icon && (
                <Icon
                  size="24"
                  name={ link.icon }
                />
              ) }

              <span>{ link.title }</span>
            </a>
          )}
        </>
      ) }

      { status === "soon" && (
        <p className="c-button-main c-button-disabled c-font-14-24">
          { link.icon && (
            <Icon
              size="24"
              name={ link.icon }
            />
          ) }

          { link.title }

          <Box component="span" className="c-button-disabled-soon c-font-12-15" mr={ .01 }>SOON</Box>
        </p>
      ) }
    </>
  );
};
