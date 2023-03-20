import {Nunito} from "next/font/google"
import "styles/globals.sass"
import React from "react"

const nunito = Nunito({subsets: ["latin"]})

export const metadata = {
  title: "Chat",
  description: "Test client-chat",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={nunito.className}>
      {children}
      <div id="Modal"></div>
    </body>
    </html>
  )
}
