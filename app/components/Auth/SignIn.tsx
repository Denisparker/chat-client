"use client"

import {useTransition, animated} from "@react-spring/web"
import React, {SetStateAction, useRef} from "react"
import {Controller, useForm} from "react-hook-form"
import {useOnClickOutside} from "usehooks-ts"
import Button from "globalComponents/Button"
import Input from "globalComponents/Input"
import Modal from "globalComponents/Modal"

interface I {
  setShow: React.Dispatch<SetStateAction<"login" | "signIn" | false>>
  show: boolean | string
}

interface Form {
  nickName: string
  email: string
  password: string
}

export default function SignIn({setShow, show}: I) {
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShow(false))

  const {control, handleSubmit} = useForm<Form>()

  const transition = useTransition(show, {
    from: {opacity: 1, scale: "20%"},
    enter: {opacity: 1, scale: "100%"},
    leave: {opacity: 0, scale: "20%"}
  })

  const onSubmit = (data: Form) => {

    console.log(data)
  }

  return (
    <>
      {transition((style, i) => (
        i === "signIn" ? (
          <Modal>
            <animated.div style={style}>
              <div className="z-10 bg-darkGray shadow-md py-6 px-12 rounded-md w-[30rem]" ref={ref}>
                <h3>ChatApp</h3>
                <p className="mt-2">To register fill in the fields below</p>
                <div className="flex-column gap-8 mt-8">
                  <Controller
                    control={control}
                    name="nickName"
                    rules={{required: true, pattern: /[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)/}}
                    render={({field: {onChange, ref, value}, fieldState: {error}}) => (
                      <Input placeholder="Enter your name" className="rounded-md" onChange={onChange} inputRef={ref}
                             value={value} error={error}/>
                    )}/>
                  <Controller
                    control={control}
                    name="email"
                    rules={{required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}}
                    render={({field: {onChange, ref, value}, fieldState: {error}}) => (
                      <Input placeholder="Email" className="rounded-md" onChange={onChange} inputRef={ref}
                             value={value} error={error}/>
                    )}/>
                  <Controller
                    control={control}
                    name="password"
                    rules={{required: true}}
                    render={({field: {onChange, ref, value}, fieldState: {error}}) => (
                      <Input placeholder="Password" className="rounded-md" onChange={onChange} inputRef={ref}
                             value={value} type="password" error={error}/>
                    )}/>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="px-8" onClick={handleSubmit(onSubmit)}>
                    <p>Sign in</p>
                  </Button>
                </div>
              </div>
            </animated.div>
          </Modal>
        ) : ""
      ))}
    </>
  )
}
