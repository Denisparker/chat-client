/* eslint-disable react/display-name */
"use client"
import React, {memo, PropsWithChildren, useEffect, useState} from "react"
import {createPortal} from "react-dom"

interface Props {
	id: string
}

const ReactPortal: React.FC<PropsWithChildren<Props>> = memo(({id, children}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return createPortal(children, document.getElementById(id) as Element)
  } else {
    return null
  }
})

export default ReactPortal
