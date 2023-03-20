import c from "classnames"
import {RefCallback} from "react"
import {FieldError} from "react-hook-form"

interface I {
  className?: string
  inputRef?: RefCallback<any>
  placeholder: string
  value: string
  disable?: boolean
  type?: string
  error?: FieldError
  onChange: (...event: any[]) => void
}
export default function Input({
  className,
  inputRef,
  type,
  value,
  error,
  placeholder,
  disable,
  onChange
}: I) {

  return (
    <input type={type} className={c("focus:outline-none border-white border-2 text-black py-1.5 px-2 w-full text-[1.125rem]",
      className, {"border-error": !!error})}
           placeholder={placeholder}
           ref={inputRef} value={value} onChange={e => onChange(e.target.value)} disabled={disable}/>
  )
}
