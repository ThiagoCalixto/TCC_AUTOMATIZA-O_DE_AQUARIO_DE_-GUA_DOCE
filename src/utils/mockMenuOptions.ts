import { IconsTypes } from "./mockIcons";

type Props = {
  id: string;
  title: string;
  screen: string;
  urlImage: IconsTypes;
};

export const optionsMenu: Props[] = [
  {
    id: "1",
    title: "Meus pets",
    screen: "pets",
    urlImage: "pets",
  },
  {
    id: "2",
    title: "Rotinas",
    screen: "routine",
    urlImage: "bar-chart",
  }
];
