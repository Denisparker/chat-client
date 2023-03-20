import c from "classnames"
import {PropsWithChildren} from "react"

interface I {
  color?: "basic"|"none"
  className?: string
  onClick?: () => void
}

export default function Button({
  color = "basic",
  className,
  onClick,
  children
}: PropsWithChildren<I>) {
  return (
    <button onClick={onClick} className={c(className,
      "py-1.5 px-3 select-none bg-red rounded-md", {
      "bg-basic hover:opacity-70 active:opacity-50 transition": color === "basic"
    })}
    >
      {children}
    </button>
  )
}
