import type { Email } from "./types"

export const mockEmails: Email[] = [
  {
    id: "1",
    from: "Sarah Chen",
    email: "sarah.chen@company.com",
    to: "john@example.com",
    subject: "Q4 Marketing Strategy Review",
    preview:
      "Hi John, I wanted to share the latest updates on our Q4 marketing strategy. We've seen some impressive results from our recent campaigns...",
    content: `Hi John,

I wanted to share the latest updates on our Q4 marketing strategy. We've seen some impressive results from our recent campaigns, particularly in the social media space.

Key highlights:
- 45% increase in engagement across all platforms
- 28% growth in qualified leads
- New partnership opportunities emerging

I've attached the detailed report for your review. Let's schedule a call this week to discuss next steps.

Best regards,
Sarah`,
    time: "10:30 AM",
    date: "Oct 25, 2025 at 10:30 AM",
    read: false,
    starred: true,
    hasAttachment: true,
    labels: ["Work", "Important"],
    attachments: [
      { name: "Q4-Marketing-Report.pdf", size: "2.4 MB" },
      { name: "Campaign-Analytics.xlsx", size: "1.1 MB" },
    ],
  },
  {
    id: "2",
    from: "Michael Rodriguez",
    email: "michael.r@techstartup.io",
    to: "john@example.com",
    subject: "Project Timeline Update",
    preview: "Quick update on the development timeline. We're making good progress on the new features...",
    content: `Hi John,

Quick update on the development timeline. We're making good progress on the new features and should be ready for the beta launch by next month.

The team has been working hard to address all the feedback from the alpha testing phase. I think you'll be pleased with the improvements.

Let me know if you have any questions.

Thanks,
Michael`,
    time: "9:15 AM",
    date: "Oct 25, 2025 at 9:15 AM",
    read: false,
    starred: false,
    hasAttachment: false,
    labels: ["Work", "Development"],
  },
  {
    id: "3",
    from: "Emma Thompson",
    email: "emma.t@design.studio",
    to: "john@example.com",
    subject: "Design Mockups Ready for Review",
    preview: "The new design mockups are ready! I've incorporated all your feedback from our last meeting...",
    content: `Hi John,

The new design mockups are ready! I've incorporated all your feedback from our last meeting and I think we've really nailed the user experience this time.

I've attached the Figma files and some exported PNGs for easy viewing. Would love to get your thoughts before we move forward with development.

Looking forward to hearing from you!

Emma`,
    time: "Yesterday",
    date: "Oct 24, 2025 at 3:45 PM",
    read: true,
    starred: true,
    hasAttachment: true,
    labels: ["Work", "Design"],
    attachments: [
      { name: "Homepage-Mockup-v3.png", size: "3.2 MB" },
      { name: "Dashboard-Design.png", size: "2.8 MB" },
    ],
  },
  {
    id: "4",
    from: "David Park",
    email: "david.park@finance.com",
    to: "john@example.com",
    subject: "Invoice #2847 - Payment Received",
    preview: "This is to confirm that we have received your payment for Invoice #2847...",
    content: `Dear John,

This is to confirm that we have received your payment for Invoice #2847 dated October 15, 2025.

Payment Details:
- Amount: $5,240.00
- Payment Method: Bank Transfer
- Transaction ID: TXN-9847562

Thank you for your prompt payment. If you have any questions, please don't hesitate to contact us.

Best regards,
David Park
Finance Department`,
    time: "Yesterday",
    date: "Oct 24, 2025 at 11:20 AM",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["Finance"],
  },
  {
    id: "5",
    from: "LinkedIn",
    email: "notifications@linkedin.com",
    to: "john@example.com",
    subject: "You have 3 new connection requests",
    preview: "Sarah Johnson, Michael Chen, and 1 other person want to connect with you on LinkedIn...",
    content: `Hi John,

You have new connection requests waiting for you on LinkedIn:

- Sarah Johnson (Product Manager at TechCorp)
- Michael Chen (Senior Developer at StartupXYZ)
- Jessica Williams (UX Designer at Creative Agency)

View and respond to your connection requests on LinkedIn.

Best,
The LinkedIn Team`,
    time: "Oct 23",
    date: "Oct 23, 2025 at 6:30 PM",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["Social"],
  },
  {
    id: "6",
    from: "Rachel Green",
    email: "rachel.green@hr.company.com",
    to: "john@example.com",
    subject: "Team Building Event - November 5th",
    preview: "Save the date! We're organizing a team building event for the entire department...",
    content: `Hi Team,

Save the date! We're organizing a team building event for the entire department on November 5th.

Event Details:
- Date: November 5th, 2025
- Time: 2:00 PM - 6:00 PM
- Location: Riverside Park
- Activities: Team challenges, BBQ, and games

Please RSVP by October 30th so we can finalize the headcount.

Looking forward to seeing everyone there!

Rachel
HR Department`,
    time: "Oct 23",
    date: "Oct 23, 2025 at 2:15 PM",
    read: false,
    starred: false,
    hasAttachment: false,
    labels: ["Work", "Events"],
  },
  {
    id: "7",
    from: "Alex Martinez",
    email: "alex.m@consulting.com",
    to: "john@example.com",
    subject: "Meeting Notes - Strategy Session",
    preview: "Thanks for the productive meeting today. Here are my notes from our strategy session...",
    content: `Hi John,

Thanks for the productive meeting today. Here are my notes from our strategy session:

Action Items:
1. Review competitor analysis by end of week
2. Prepare budget proposal for Q1 2026
3. Schedule follow-up with stakeholders
4. Finalize partnership agreement terms

Next meeting scheduled for November 1st at 10:00 AM.

Let me know if I missed anything!

Best,
Alex`,
    time: "Oct 22",
    date: "Oct 22, 2025 at 4:50 PM",
    read: true,
    starred: true,
    hasAttachment: false,
    labels: ["Work", "Meetings"],
  },
  {
    id: "8",
    from: "Newsletter Team",
    email: "newsletter@techweekly.com",
    to: "john@example.com",
    subject: "Tech Weekly: AI Breakthroughs & Industry News",
    preview: "Your weekly dose of tech news: Major AI announcements, startup funding rounds, and more...",
    content: `Hi John,

Welcome to this week's edition of Tech Weekly!

Top Stories:
- Major AI company announces breakthrough in natural language processing
- Three startups raise $100M+ in Series B funding
- New regulations proposed for tech industry
- Developer tools roundup: Must-have resources for 2025

Read the full newsletter on our website.

Stay informed,
Tech Weekly Team`,
    time: "Oct 22",
    date: "Oct 22, 2025 at 8:00 AM",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["Newsletter"],
  },
  {
    id: "9",
    from: "Draft",
    email: "john@example.com",
    to: "team@company.com",
    subject: "Project Proposal - New Initiative",
    preview: "I wanted to share some thoughts on a new initiative that could significantly impact our Q1 goals...",
    content: `Hi Team,

I wanted to share some thoughts on a new initiative that could significantly impact our Q1 goals...

[Draft in progress]`,
    time: "Oct 21",
    date: "Oct 21, 2025 at 3:30 PM",
    read: true,
    starred: false,
    hasAttachment: false,
    folder: "drafts",
  },
  {
    id: "10",
    from: "Support Team",
    email: "support@service.com",
    to: "john@example.com",
    subject: "Your Support Ticket #12847 Has Been Resolved",
    preview: "Good news! Your support ticket regarding account access has been resolved...",
    content: `Hi John,

Good news! Your support ticket #12847 regarding account access has been resolved.

Issue: Unable to access premium features
Resolution: Account permissions have been updated
Status: Closed

If you experience any further issues, please don't hesitate to reach out.

Best regards,
Support Team`,
    time: "Oct 20",
    date: "Oct 20, 2025 at 1:15 PM",
    read: true,
    starred: false,
    hasAttachment: false,
    labels: ["Support"],
  },
  {
    id: "11",
    from: "Jessica Williams",
    email: "jessica.w@agency.com",
    to: "john@example.com",
    subject: "Brand Guidelines Update",
    preview: "We've updated the brand guidelines document with the new color palette and typography...",
    content: `Hi John,

We've updated the brand guidelines document with the new color palette and typography specifications we discussed.

Changes include:
- Updated primary color palette
- New typography system
- Logo usage guidelines
- Social media templates

Please review and let me know if you have any feedback.

Thanks,
Jessica`,
    time: "Oct 19",
    date: "Oct 19, 2025 at 11:45 AM",
    read: true,
    starred: false,
    hasAttachment: true,
    labels: ["Work", "Design"],
    attachments: [{ name: "Brand-Guidelines-v2.pdf", size: "5.6 MB" }],
  },
  {
    id: "12",
    from: "Tom Anderson",
    email: "tom.a@sales.com",
    to: "john@example.com",
    subject: "Sales Report - October 2025",
    preview: "Attached is the sales report for October. Overall, we exceeded our targets by 15%...",
    content: `Hi John,

Attached is the sales report for October. Overall, we exceeded our targets by 15% which is fantastic news!

Highlights:
- New client acquisitions: 23
- Revenue growth: 15% YoY
- Customer retention: 94%
- Top performing product: Enterprise Plan

Let's discuss these results in our next meeting.

Best,
Tom`,
    time: "Oct 18",
    date: "Oct 18, 2025 at 9:30 AM",
    read: true,
    starred: false,
    hasAttachment: true,
    labels: ["Work", "Sales"],
    attachments: [{ name: "October-Sales-Report.pdf", size: "1.8 MB" }],
  },
]
