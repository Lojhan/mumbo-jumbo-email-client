"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Paperclip, ImageIcon, Smile, X, Sparkles } from "lucide-react"
import type { Email } from "@/lib/types"

interface ComposeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "compose" | "reply" | "replyAll" | "forward"
  email?: Email | null
}

function generateMumboJumbo(mode: string, email?: Email | null): string {
  const greetings = [
    "Thank you for reaching out.",
    "I appreciate your email.",
    "Thanks for getting in touch.",
    "I hope this message finds you well.",
    "Thank you for your message.",
  ]

  const transitions = [
    "Regarding your inquiry,",
    "In response to your question,",
    "With respect to the matter at hand,",
    "Concerning the points you raised,",
    "Following up on your message,",
  ]

  const bodies = [
    "I've reviewed the details and believe we can move forward with the proposed approach. The timeline seems reasonable, and I'll coordinate with the team to ensure everything is aligned. Please let me know if you need any additional information or clarification on any specific points.",
    "I wanted to touch base on this and confirm that we're on the same page. The deliverables look good, and I think we can proceed as discussed. I'll keep you updated on our progress and reach out if any questions come up.",
    "After careful consideration, I think this is a solid plan. I've shared the information with the relevant stakeholders, and we should be able to provide feedback by early next week. In the meantime, feel free to reach out if you have any questions.",
    "I've taken a look at the materials you sent over, and everything appears to be in order. We can schedule a follow-up meeting to discuss the next steps in more detail. Let me know what times work best for you.",
    "This all makes sense to me. I'll review the documentation more thoroughly and get back to you with any questions or concerns. I appreciate your patience as we work through these details.",
  ]

  const closings = [
    "Looking forward to your response.",
    "Please let me know if you have any questions.",
    "I'm happy to discuss this further if needed.",
    "Feel free to reach out if you need anything else.",
    "Thanks again for your time and consideration.",
  ]

  const signatures = ["Best regards", "Best", "Kind regards", "Regards", "Thank you"]

  const randomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

  if (mode === "compose") {
    return `${randomItem(greetings)}\n\n${randomItem(bodies)}\n\n${randomItem(closings)}\n\n${randomItem(signatures)}`
  } else {
    return `${randomItem(greetings)} ${randomItem(transitions).toLowerCase()} ${randomItem(bodies).toLowerCase()}\n\n${randomItem(closings)}\n\n${randomItem(signatures)}`
  }
}

export function ComposeDialog({ open, onOpenChange, mode, email }: ComposeDialogProps) {
  const [to, setTo] = useState("")
  const [cc, setCc] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [showCc, setShowCc] = useState(false)

  useEffect(() => {
    if (open && email) {
      switch (mode) {
        case "reply":
          setTo(email.email)
          setSubject(`Re: ${email.subject}`)
          setBody(`\n\n\nOn ${email.date}, ${email.from} wrote:\n> ${email.content.split("\n").join("\n> ")}`)
          break
        case "replyAll":
          setTo(email.email)
          setCc(email.to)
          setShowCc(true)
          setSubject(`Re: ${email.subject}`)
          setBody(`\n\n\nOn ${email.date}, ${email.from} wrote:\n> ${email.content.split("\n").join("\n> ")}`)
          break
        case "forward":
          setTo("")
          setSubject(`Fwd: ${email.subject}`)
          setBody(
            `\n\n\n---------- Forwarded message ---------\nFrom: ${email.from} <${email.email}>\nDate: ${email.date}\nSubject: ${email.subject}\nTo: ${email.to}\n\n${email.content}`,
          )
          break
        default:
          setTo("")
          setCc("")
          setSubject("")
          setBody("")
          setShowCc(false)
      }
    } else if (open && mode === "compose") {
      setTo("")
      setCc("")
      setSubject("")
      setBody("")
      setShowCc(false)
    }
  }, [open, mode, email])

  const handleSend = () => {
    console.log("[v0] Sending email:", { to, cc, subject, body })
    onOpenChange(false)
  }

  const handleMumboJumbo = () => {
    const generatedText = generateMumboJumbo(mode, email)

    if (mode === "compose") {
      setBody(generatedText)
    } else {
      // For reply/forward, insert at the beginning before quoted text
      const lines = body.split("\n")
      const quoteIndex = lines.findIndex(
        (line) => line.startsWith(">") || line.startsWith("---------- Forwarded message"),
      )

      if (quoteIndex !== -1) {
        lines.splice(quoteIndex, 0, generatedText, "")
        setBody(lines.join("\n"))
      } else {
        setBody(generatedText + "\n\n" + body)
      }
    }
  }

  const getDialogTitle = () => {
    switch (mode) {
      case "reply":
        return "Reply"
      case "replyAll":
        return "Reply All"
      case "forward":
        return "Forward"
      default:
        return "New Message"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle>{getDialogTitle()}</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="to" className="w-12 text-sm text-muted-foreground">
                To
              </Label>
              <Input
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Recipients"
                className="flex-1"
              />
              {!showCc && (
                <Button variant="ghost" size="sm" onClick={() => setShowCc(true)} className="text-xs">
                  Cc
                </Button>
              )}
            </div>

            {showCc && (
              <div className="flex items-center gap-2">
                <Label htmlFor="cc" className="w-12 text-sm text-muted-foreground">
                  Cc
                </Label>
                <Input
                  id="cc"
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                  placeholder="Carbon copy"
                  className="flex-1"
                />
                <Button variant="ghost" size="icon" onClick={() => setShowCc(false)} className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Label htmlFor="subject" className="w-12 text-sm text-muted-foreground">
                Subject
              </Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="flex-1"
              />
            </div>
          </div>

          <div>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message..."
              className="min-h-[300px] resize-none"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <div className="ml-2 border-l border-border pl-2">
              <Button variant="ghost" size="sm" onClick={handleMumboJumbo} className="gap-2">
                <Sparkles className="h-4 w-4" />
                Mumbo Jumbo
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Discard
            </Button>
            <Button onClick={handleSend}>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
