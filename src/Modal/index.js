import React from "react";
import { createPortal } from "react-dom";

function Modal ({ children }) {
  // nodo a transportar
  return createPortal(
    <div className="Modal">
      {children}
    </div>, 
    // ddestino a transportar
    document.getElementById('modal')
  );
} 

export { Modal }