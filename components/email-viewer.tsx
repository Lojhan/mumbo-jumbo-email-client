"use client"

import { Button } from "@/components/ui/button"
import { Reply, ReplyAll, Forward, Archive, Trash2, Star, MoreVertical, Paperclip, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Email } from "@/lib/types"

interface EmailViewerProps {
  email: Email | null
  onReply: () => void
  onReplyAll: () => void
  onForward: () => void
}

export function EmailViewer({ email, onReply, onReplyAll, onForward }: EmailViewerProps) {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
            <svg className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-1">No message selected</h3>
          <p className="text-sm text-muted-foreground">Select an email from the list to view its contents</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Star className={email.starred ? "h-4 w-4 fill-yellow-500 text-yellow-500" : "h-4 w-4"} />
          </Button>
          <Separator orientation="vertical" className="h-6 mx-2" />
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onReply}>
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" size="sm" onClick={onReplyAll}>
            <ReplyAll className="h-4 w-4 mr-2" />
            Reply All
          </Button>
          <Button variant="outline" size="sm" onClick={onForward}>
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground mb-4 text-balance">{email.subject}</h1>

            <div className="flex items-center gap-2 mb-4">
              {email.labels?.map((label) => (
                <Badge key={label} variant="secondary">
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                  {email.from
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground">{email.from}</p>
                  <p className="text-sm text-muted-foreground">{email.email}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{email.date}</span>
            </div>

            <div className="text-sm text-muted-foreground mb-4">
              <span>To: </span>
              <span className="text-foreground">{email.to}</span>
            </div>

            <Separator className="my-4" />

            <div className="prose prose-sm max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-wrap">{email.content}</div>
            </div>

            {email.attachments && email.attachments.length > 0 && (
              <>
                <Separator className="my-6" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Paperclip className="h-4 w-4" />
                    {email.attachments.length} {email.attachments.length === 1 ? "Attachment" : "Attachments"}
                  </p>
                  <div className="space-y-2">
                    {email.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                            <Paperclip className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{attachment.name}</p>
                            <p className="text-xs text-muted-foreground">{attachment.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
