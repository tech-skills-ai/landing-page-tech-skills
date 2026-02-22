"use client"

import { useRef, useEffect } from "react"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // autoplay falhou
      })
    }
  }, [])

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Veja o agente em ação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista como nosso agente de IA conduz entrevistas de forma natural e eficiente, diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden bg-transparent">
            <video
              ref={videoRef}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/demo-tech-skills.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}