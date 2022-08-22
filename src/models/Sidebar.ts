import { isMobile } from "react-device-detect";

export interface IMenuItem {
  id: number;
  path?: string;
  title: string;
  icon?: string;
  sublist?: IMenuItem[];
  type?: "self" | "redirect";
  status: "active" | "new" | "soon";
  closeMenu?: boolean;
}

export enum EPATH_IDS {
  HOME = 1,
}

export const MENU: IMenuItem[] = [
  {
    id: EPATH_IDS.HOME,
    path: "/",
    icon: "menu-home",
    title: "Home",
    type: "self",
    status: "active",
    closeMenu: true,
  },
];

export const PATHS = {};
