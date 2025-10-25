"use client"

import { cn } from "@/lib/utils"
import { Star, Paperclip } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Email } from "@/lib/types"
import { mockEmails } from "@/lib/mock-data"

interface EmailListProps {
  folder: string
  selectedEmail: Email | null
  onEmailSelect: (email: Email) => void
}

export function EmailList({ folder, selectedEmail, onEmailSelect }: EmailListProps) {
  const emails = mockEmails.filter((email) => {
    if (folder === "inbox") return !email.archived && !email.deleted
    if (folder === "starred") return email.starred
    if (folder === "sent") return email.folder === "sent"
    if (folder === "drafts") return email.folder === "drafts"
    if (folder === "archive") return email.archived
    if (folder === "trash") return email.deleted
    return false
  })

  return (
    <div className="w-96 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground capitalize">{folder}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {emails.length} {emails.length === 1 ? "message" : "messages"}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <button
            key={email.id}
            onClick={() => onEmailSelect(email)}
            className={cn(
              "w-full p-4 border-b border-border text-left transition-colors hover:bg-accent",
              selectedEmail?.id === email.id && "bg-accent",
              !email.read && "bg-secondary/50",
            )}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span
                  className={cn(
                    "text-sm truncate",
                    !email.read ? "font-semibold text-foreground" : "font-medium text-foreground",
                  )}
                >
                  {email.from}
                </span>
                {email.starred && <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500 flex-shrink-0" />}
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{email.time}</span>
            </div>

            <h3
              className={cn(
                "text-sm mb-1 truncate",
                !email.read ? "font-semibold text-foreground" : "font-normal text-foreground",
              )}
            >
              {email.subject}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{email.preview}</p>

            <div className="flex items-center gap-2 flex-wrap">
              {email.labels?.map((label) => (
                <Badge key={label} variant="secondary" className="text-xs">
                  {label}
                </Badge>
              ))}
              {email.hasAttachment && <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
