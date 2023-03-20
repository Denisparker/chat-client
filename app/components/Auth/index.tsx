"use client"
import Login from "app/components/Auth/Login"
import SignIn from "app/components/Auth/SignIn"
import {useState} from "react"
import Button from "globalComponents/Button"

export default function Auth() {
  const [showAuth, setShowAuth] = useState<"login" | "signIn" | false>(false)

  return (
    <>
      <div className="gap-8 center mt-6">
        <Button onClick={() => setShowAuth("login")}>
          <h5>Login</h5>
        </Button>
        <Button onClick={() => setShowAuth("signIn")}>
          <h5>Sign in</h5>
        </Button>
      </div>
      <SignIn setShow={setShowAuth} show={showAuth}/>
      <Login setShow={setShowAuth} show={showAuth}/>
    </>
  )
}
