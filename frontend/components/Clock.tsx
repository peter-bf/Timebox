"use client"

import { useState, useEffect } from "react"

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  return (
    <div className="relative w-64 h-64 mx-auto shadow-xl rounded-full bg-card border-4 border-primary/20">
      <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
      {/* Clock Face Details */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background to-muted/50"></div>

      {/* Hour Markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-5 bg-primary rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-100px)`,
          }}
        ></div>
      ))}

      {/* Center Dot */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-md"></div>

      {/* Hour Hand */}
      <div
        className="absolute top-1/2 left-1/2 w-1.5 h-16 bg-primary rounded-full origin-bottom z-10 shadow-sm"
        style={{ transform: `translate(-50%, -100%) rotate(${hours * 30 + minutes / 2}deg)` }}
      ></div>

      {/* Minute Hand */}
      <div
        className="absolute top-1/2 left-1/2 w-1 h-24 bg-foreground/80 rounded-full origin-bottom z-10 shadow-sm"
        style={{ transform: `translate(-50%, -100%) rotate(${minutes * 6}deg)` }}
      ></div>

      {/* Second Hand */}
      <div
        className="absolute top-1/2 left-1/2 w-0.5 h-28 bg-red-500 rounded-full origin-bottom z-10"
        style={{ transform: `translate(-50%, -100%) rotate(${seconds * 6}deg)` }}
      ></div>
    </div>
  )
}

