import { useState } from "react";

export interface ModalManager {
  isOpen: boolean;
  open?: () => void;
  close?: () => void;
}

export default function modalManager(): ModalManager {
  const [isOpen, setOpen] = useState(true);
  return {
    isOpen,
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  };
}
