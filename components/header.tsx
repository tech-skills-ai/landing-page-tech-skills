"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Tech Skills</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Demo
            </a>
            <a
              href="#funcionalidades"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Funcionalidades
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Falar com Especialista
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Falar com Especialista
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
