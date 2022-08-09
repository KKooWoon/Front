
import { ReactNode } from "react";
import { createPortal } from "react-dom";
export const ModalPotal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.getElementById("modal")!);
};