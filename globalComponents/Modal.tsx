import {Nunito} from "next/font/google"
import React, {PropsWithChildren, useEffect} from "react"
import ReactPortal from "./ReactPortal"

interface I {
  onClose?: () => void
  loading?: boolean
}

const nunito = Nunito({subsets: ["latin"]})

const Modal: React.FC<PropsWithChildren<I>> = ({children, onClose}) => {

  useEffect(() => {
    const header = document.getElementById("header")
    header?.classList.remove("sticky")
    header?.classList.remove("z-50")
    header?.classList.add("relative")

    // document.body.className = "overflow-hidden"
    return () => {
      // document.body.className = ""
      header?.classList.remove("relative")
      header?.classList.add("sticky")
      header?.classList.add("z-50")
    }
  }, [])


  return (
    <ReactPortal id="Modal">
      <div className={`${nunito.className} font-sans`}>
        <div className="relative w-full h-full">
          <div className="px-12 relative w-screen h-screen flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)]">
            <div className="p-4 relative z-50 flex items-center justify-center">
              {onClose && (
                <div
                  className="cursor-pointer hover:opacity-5 select-none text-6xl"
                  onClick={onClose}
                >
                  &#10006;
                </div>
              )}
              <div className="relative w-full h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  )
}
export default Modal
