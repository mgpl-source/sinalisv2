import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Page, Route, State } from "./model";
export type Dialog = {
  title: string;
  text: string;
  confirm?: string;
  action?: () => void;
};
export type Context = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
  route: Route;
  go: (page: Page, id?: string) => void;
  toast: (message: string) => void;
  dialog: (value: Dialog) => void;
};
export const SinalisContext = createContext<Context | null>(null);
export function useSinalis() {
  const context = useContext(SinalisContext);
  if (!context) throw new Error("SinalisContext ausente");
  return context;
}
