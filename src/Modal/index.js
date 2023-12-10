import React from "react";
import { createPortal } from "react-dom";
import './index.css'

function Modal ({ children }) {
  // nodo a transportar
  return createPortal(
    <div className="modal_background">
      {children}
    </div>, 
    // ddestino a transportar
    document.getElementById('modal')
  );
} 

export { Modal }