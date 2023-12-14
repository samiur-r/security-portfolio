"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ModalProps {
  autoOpenDelay?: number;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ autoOpenDelay = 5000, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, autoOpenDelay);

    return () => clearTimeout(timer);
  }, [autoOpenDelay]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-dark-blue bg-opacity-50 overflow-y-auto h-full w-full z-20"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative top-20 mx-auto p-5 border w-full container shadow-lg rounded-md bg-light-gray"
      >
        <div className="flex justify-end">
          <Image
            src="x-mark.svg"
            height={60}
            width={60}
            alt=""
            onClick={handleClose}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
