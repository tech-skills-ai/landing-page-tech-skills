"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
          <div className="relative aspect-video bg-card border border-border rounded-2xl overflow-hidden">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                <div className="text-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors group"
                  >
                    <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="mt-4 text-muted-foreground text-sm">Clique para assistir a demonstração</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <p className="text-muted-foreground">Seu vídeo de demonstração será exibido aqui</p>
                {/* Substitua pelo seu vídeo:
                <video 
                  src="/seu-video.mp4" 
                  controls 
                  autoPlay 
                  className="w-full h-full object-cover"
                /> 
                */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
