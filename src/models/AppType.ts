export type TThemne = "dark" | "light";

export interface IAppState {
  theme: TThemne
  isMenuOpen: boolean
  isBunnerClosed: boolean
}
