import { useEffect, useImperativeHandle, useRef } from "react"

export default function Modal({ ref }) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    function closeModal() {
        dialog.current.close();
    }

    useEffect(() => {
        if(dialog.current) {
            const cb = (e) => {
                if (e.target === dialog.current) {
                    dialog.current.close()
                }
            }
            dialog.current.addEventListener('click', cb)
        }
        return () => dialog.current?.removeEventListener('click', cb)
    })

    return (
        <dialog 
            ref={dialog} 
            className="w-96 h-96 bg-black text-white rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/70 backdrop:backdrop-blur-md"
        >
            <div className="flex items-center justify-center w-full h-full">
                <button onClick={closeModal} className="cursor-pointer bold text-3xl rounded-md border-2 p-3">Close</button>
            </div>
        </dialog>
    )
}