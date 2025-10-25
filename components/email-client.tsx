"use client"

import { useState } from "react"
import { EmailSidebar } from "./email-sidebar"
import { EmailList } from "./email-list"
import { EmailViewer } from "./email-viewer"
import { ComposeDialog } from "./compose-dialog"
import type { Email } from "@/lib/types"

export function EmailClient() {
  const [selectedFolder, setSelectedFolder] = useState("inbox")
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const [composeOpen, setComposeOpen] = useState(false)
  const [composeMode, setComposeMode] = useState<"compose" | "reply" | "replyAll" | "forward">("compose")
  const [composeEmail, setComposeEmail] = useState<Email | null>(null)

  const handleCompose = (mode: "compose" | "reply" | "replyAll" | "forward", email?: Email) => {
    setComposeMode(mode)
    setComposeEmail(email || null)
    setComposeOpen(true)
  }

  return (
    <div className="flex h-screen bg-background">
      <EmailSidebar
        selectedFolder={selectedFolder}
        onFolderSelect={setSelectedFolder}
        onCompose={() => handleCompose("compose")}
      />
      <EmailList folder={selectedFolder} selectedEmail={selectedEmail} onEmailSelect={setSelectedEmail} />
      <EmailViewer
        email={selectedEmail}
        onReply={() => selectedEmail && handleCompose("reply", selectedEmail)}
        onReplyAll={() => selectedEmail && handleCompose("replyAll", selectedEmail)}
        onForward={() => selectedEmail && handleCompose("forward", selectedEmail)}
      />
      <ComposeDialog open={composeOpen} onOpenChange={setComposeOpen} mode={composeMode} email={composeEmail} />
    </div>
  )
}
