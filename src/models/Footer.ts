export interface IMenuLink {
  id: number
  path: string
  title: string
  disabled: boolean
  type: "self" | "redirect"
}

export const PRODUCTS_LINKS: IMenuLink[] = [
  {
    id: 3,
    path: "/marketplace",
    title: "NFT marketplace",
    disabled: true,
    type: "self",
  },
];

export const KNOWLEDGE_BASE_LINKS: IMenuLink[] = [
  {
    id: 1,
    path: "/calendar",
    title: "Smart reminder",
    disabled: true,
    type: "self",
  },
];
