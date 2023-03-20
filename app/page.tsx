import Auth from "app/components/Auth"
import React from "react"

export default function Home() {

  return (
    <div className="h-screen center">
      <div className="flex-column">
        <div>
          <h2 className="text-center">Welcome to OrionApp</h2>
          <p className="text-center">This is non-comercial and test project</p>
        </div>
        <Auth/>
      </div>
    </div>
  )
}
