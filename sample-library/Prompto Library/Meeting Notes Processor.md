---
name: "Meeting Notes Processor"
category: Daily
tags: [meetings, notes, action-items]
variables: [selected_text, meeting_type]
version: 2
effectiveness: 4.3
lastUsed: "2026-02-24"
icon: "calendar-check"
---
Process these raw meeting notes into a structured, actionable summary:

{{selected_text}}

Meeting type: {{meeting_type}}

Output format:

**Meeting Summary** (2-3 sentences): The essential outcome a person who missed this meeting needs to know.

**Decisions Made**: List each decision clearly, with the rationale if captured.

**Action Items**: Table format — WHO | WHAT | BY WHEN. Be specific about deliverables, not vague ("Draft proposal" not "Look into it").

**Key Discussion Points**: The 3-5 most important topics discussed, with any notable disagreements or open questions.

**Parking Lot**: Items raised but deferred for future discussion.

**Follow-up Meeting Needed?**: Yes/No with suggested agenda if yes.
