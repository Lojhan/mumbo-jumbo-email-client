"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Inbox, Send, FileText, Archive, Trash2, Star, Search, PenSquare, Settings, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface EmailSidebarProps {
  selectedFolder: string
  onFolderSelect: (folder: string) => void
  onCompose: () => void
}

const folders = [
  { id: "inbox", label: "Inbox", icon: Inbox, count: 12 },
  { id: "starred", label: "Starred", icon: Star, count: 3 },
  { id: "sent", label: "Sent", icon: Send, count: 0 },
  { id: "drafts", label: "Drafts", icon: FileText, count: 2 },
  { id: "archive", label: "Archive", icon: Archive, count: 0 },
  { id: "trash", label: "Trash", icon: Trash2, count: 5 },
]

export function EmailSidebar({ selectedFolder, onFolderSelect, onCompose }: EmailSidebarProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <div className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-foreground">Mail</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button className="w-full" size="sm" onClick={onCompose}>
          <PenSquare className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search mail..." className="pl-9 h-9 bg-secondary" />
        </div>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        {folders.map((folder) => {
          const Icon = folder.icon
          return (
            <button
              key={folder.id}
              onClick={() => onFolderSelect(folder.id)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors",
                selectedFolder === folder.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                <span>{folder.label}</span>
              </div>
              {folder.count > 0 && (
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    selectedFolder === folder.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {folder.count}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
