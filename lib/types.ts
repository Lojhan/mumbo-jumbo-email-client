export interface Email {
  id: string
  from: string
  email: string
  to: string
  subject: string
  preview: string
  content: string
  time: string
  date: string
  read: boolean
  starred: boolean
  hasAttachment: boolean
  labels?: string[]
  folder?: string
  archived?: boolean
  deleted?: boolean
  attachments?: Array<{
    name: string
    size: string
  }>
}
