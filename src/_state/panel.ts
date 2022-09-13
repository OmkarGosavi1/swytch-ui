import { atom } from "recoil";

interface PanelMetaData {
  id: string;
  identifier?: string;
}

interface panelInterface {
  type?: string;
  text?: string;
  active?: boolean;
  panelData: PanelMetaData[];
}

const panelAtom = atom<panelInterface | any>({
  key: "panelState",

  default: {
    value: null,
    msg: "null",
  },
  //   default: null,
});

export { panelAtom };
