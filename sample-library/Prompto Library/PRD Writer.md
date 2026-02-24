---
name: "PRD Writer"
category: Product
tags: [prd, product, requirements]
variables: [selected_text, feature_name, target_user]
version: 2
effectiveness: 4.6
lastUsed: "2026-02-22"
icon: "clipboard-list"
---
Write a Product Requirements Document for: {{feature_name}}
Target user: {{target_user}}

Background and context from my notes:
{{selected_text}}

Include these sections:

**Problem Statement**: What user pain point does this solve? Include evidence of the problem's severity.

**Goals & Success Metrics**: Specific, measurable outcomes. Include leading and lagging indicators.

**User Stories**: 5-8 user stories in "As a [user], I want to [action] so that [benefit]" format, ordered by priority.

**Functional Requirements**: Detailed feature requirements with acceptance criteria for each.

**Non-Functional Requirements**: Performance, security, accessibility, scalability expectations.

**Out of Scope**: Explicitly state what this does NOT include (prevent scope creep).

**Open Questions**: List decisions that still need to be made.

**Timeline Estimate**: Rough T-shirt sizing (S/M/L/XL) with rationale.

Write for an engineering audience. Be precise enough that an engineer could start designing from this document.
