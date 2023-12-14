
import { createPortal } from "react-dom";

import Button from "./Button";
import { useEffect } from 'react'
const Modal = ({ onClose, children, actionBar }) => {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    const portalOverlay = document.getElementById("modal");
    const backdrop = createPortal(
        <div
            className="fixed inset-0 bg-gray-300 opacity-80"
            onClick={() => onClose()}>
        </div>,
        portalOverlay
    );
    const modal = createPortal(
        <div className="fixed inset-40 p-10 bg-white">
            <div className="flex flex-col justify-between h-full">
                {children}
                <div className="flex justify-end">
                    {actionBar}
                </div>
            </div>
        </div>,
        portalOverlay
    );

    return (
        <div>
            {backdrop}
            {modal}
        </div>
    );
};
export default Modal;
