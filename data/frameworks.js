const FRAMEWORKS = [

// ── MODULE 1 ──────────────────────────────────────────────────────
{
  name: "The Four Decisions",
  module: 1,
  summary: "Every Claude session is shaped by four foundational choices that set its quality ceiling.",
  components: [
    { label: "Entry Point", desc: "Where you work: Chat / Projects / Artifacts / Research" },
    { label: "Capability Layer", desc: "What Claude can do: Skills / Code Execution / Memory" },
    { label: "Model", desc: "Which tier: Haiku / Sonnet / Opus" },
    { label: "Context Management", desc: "How to handle a long session: Restart / Summarise / Persist" }
  ],
  exam_note: "These four decisions are the setup frame for the whole course. Know them cold — exam scenarios often test whether you can identify which decision was made wrong."
},
{
  name: "The Four-Layer Model",
  module: 1,
  summary: "Four independent layers extend Claude's default behaviour. Use any combination based on what the task needs.",
  components: [
    { label: "Projects carry context", desc: "Standing instructions + knowledge base + conversation history" },
    { label: "Skills define procedures", desc: "Repeatable, consistent execution of a specific task type" },
    { label: "Code Execution verifies computations", desc: "Sandboxed computation — a verified result, not a generated one" },
    { label: "Memory persists continuity", desc: "Relevant facts carry forward across sessions without re-entry" }
  ],
  exam_note: "Layers are independent. A one-off question needs none. A recurring analytical workflow might use all four."
},
{
  name: "5 Behavioral Properties of Claude",
  module: 1,
  summary: "What Claude actually does — the defaults that every user needs to understand before relying on any output.",
  components: [
    { label: "Responses vary", desc: "Probability-based generation — same input, different output each time" },
    { label: "Confident tone ≠ accuracy", desc: "Fluency is not a reliability signal" },
    { label: "Context is a budget", desc: "As a session grows, earlier content compresses and can lose force" },
    { label: "Knowledge has a cutoff", desc: "Training data ends at a point — post-cutoff information requires a live source" },
    { label: "Configured procedures still vary", desc: "A Skill reduces variance but does not eliminate it" }
  ],
  exam_note: "Property 2 (tone ≠ accuracy) and Property 3 (context budget) are the most commonly tested. Exam scenarios often present a situation where someone trusted tone as a quality signal."
},
{
  name: "The Project Test",
  module: 1,
  summary: "Three questions that determine whether a task belongs in a Project or is better handled in Chat.",
  components: [
    { label: "Does the task recur?", desc: "If yes, a Project saves re-entering context every time" },
    { label: "Is the background context stable?", desc: "If yes, standing instructions and a knowledge base apply" },
    { label: "Is the output format consistent?", desc: "If yes, format instructions belong in configuration, not each prompt" }
  ],
  exam_note: "Two out of three = build a Project. Model tier and time spent are NOT criteria. Exam distractors often include them."
},
{
  name: "Context Degradation — 3 Responses",
  module: 1,
  summary: "When a session runs long and context quality degrades, there are three options.",
  components: [
    { label: "Restart", desc: "Open a new conversation with a clean context window" },
    { label: "Summarise", desc: "Compress what's been established and carry a summary into a new session" },
    { label: "Persist to Memory", desc: "For facts that should survive into future sessions, store them in Memory" }
  ],
  exam_note: "Context overload is a distinct failure pattern from under-specification or stale config. The signal: output quality degrades *over time* in a long session, not on the first response."
},
{
  name: "Model Selection Logic",
  module: 1,
  summary: "Three tiers, each optimised for a different trade-off between speed, cost, and reasoning depth.",
  components: [
    { label: "Haiku", desc: "Fastest, most efficient. Structured tasks, classification, extraction, high-volume routine work." },
    { label: "Sonnet", desc: "Balanced. Full range of professional work: drafting, synthesis, analysis. Default starting point." },
    { label: "Opus", desc: "Highest capability. Nuanced judgment, complex reasoning, high-stakes outputs where quality outranks speed." }
  ],
  exam_note: "Exam questions test: knowing when depth > speed (Opus), when volume > depth (Haiku), and that model tier does not substitute for fixing an under-specified prompt."
},

// ── MODULE 2 ──────────────────────────────────────────────────────
{
  name: "The 5-Component Prompt Stack",
  module: 2,
  summary: "Every prompt has five components. Missing one reduces output quality in a predictable way.",
  components: [
    { label: "Role", desc: "Sets vocabulary, depth, and assumptions — e.g. 'as a financial analyst'" },
    { label: "Context", desc: "Background Claude cannot infer: audience, situation, prior decisions, source material" },
    { label: "Task", desc: "The specific action with one primary verb" },
    { label: "Constraints", desc: "Boundaries: length, tone, inclusions, exclusions" },
    { label: "Output Format", desc: "Shape of result: table, bullet list, memo, email" }
  ],
  exam_note: "Context is the most commonly missing component. When a prompt returns generic output, missing Context is usually the diagnosis. Changing only the component the output pointed to — not the whole prompt — is the correct iteration approach."
},
{
  name: "Prompt Diagnosis Table",
  module: 2,
  summary: "Map symptoms to root causes to know which component to fix without rewriting the whole prompt.",
  components: [
    { label: "Generic / off-base output", desc: "Root cause: thin Context. Fix: add background Claude couldn't infer." },
    { label: "Answered the wrong question", desc: "Root cause: ambiguous Task verb. Fix: sharpen the instruction." },
    { label: "Wrong length, tone, or shape", desc: "Root cause: missing Constraint or Format. Fix: add it." },
    { label: "Close but misses one section", desc: "Root cause: partial gap. Fix: iterate on that section only." }
  ],
  exam_note: "Change only the ONE component the output pointed to. Stop when rounds produce marginal change — that's the diminishing returns signal."
},
{
  name: "Task Decomposition Framework",
  module: 2,
  summary: "Split multi-part problems into discrete ordered steps, each producing a checkable intermediate result.",
  components: [
    { label: "Step 1", desc: "Define the shared extraction step first — the foundation all outputs share" },
    { label: "Step 2+", desc: "Each step sees the result of the prior step and builds on it" },
    { label: "Parallel case rule", desc: "Sequence the shared high-stakes extraction first before producing parallel outputs" },
    { label: "Context management", desc: "Keep sequential steps in one conversation; move to a new one when context degrades" }
  ],
  exam_note: "Decomposition prevents downstream errors from propagating. If three deliverables draw from the same source, extract and verify it first — not in parallel."
},
{
  name: "Strategy by Task Type",
  module: 2,
  summary: "Different task types require different constraint settings — tight where precision matters, loose where latitude helps.",
  components: [
    { label: "Analysis", desc: "Tighten: criteria, standards, scope. Loosen: phrasing." },
    { label: "Research", desc: "Tighten: question, sources, citations. Loosen: synthesis approach." },
    { label: "Drafting", desc: "Tighten: audience, tone, format. Loosen: word choice." },
    { label: "Brainstorming", desc: "Tighten: goal and guardrails only. Loosen: quantity and direction." }
  ],
  exam_note: "Brainstorming questions are the most common trap — over-constraining kills divergence. Filter after generating, not before."
},
{
  name: "Iteration — Diminishing Returns Principle",
  module: 2,
  summary: "When to stop iterating on a prompt.",
  components: [
    { label: "Change one component", desc: "Identify which component caused the gap and change only that" },
    { label: "Stop signal", desc: "When further rounds produce marginal change rather than improvement" },
    { label: "Implication", desc: "Diminishing returns = a quick manual edit is more efficient than another prompt cycle" }
  ],
  exam_note: "The exam tests recognition of the stop signal. It is NOT 'after 3 rounds' or 'when grammatically perfect' — it is when marginal improvement drops."
},

// ── MODULE 3 ──────────────────────────────────────────────────────
{
  name: "Three Evaluation References",
  module: 3,
  summary: "Every output should be evaluated against three anchors before use.",
  components: [
    { label: "Requirements", desc: "Does the output do what the task asked?" },
    { label: "Source material", desc: "Are the facts in the output present in the inputs you provided?" },
    { label: "Professional standards", desc: "Does it meet the standard your role or industry requires?" }
  ],
  exam_note: "The three references are the scaffold for Discernment. Missing one creates a systematic blind spot — tasks that look fine against Requirements but fail on Source accuracy."
},
{
  name: "Three-Way Triage Verdicts",
  module: 3,
  summary: "After evaluating an output, classify it into one of three states before deciding what to do next.",
  components: [
    { label: "Ready to use", desc: "Passes all three references. Proceed." },
    { label: "Needs revision", desc: "Fixable gaps identified. Edit before using." },
    { label: "Needs human override", desc: "Core issue not fixable by prompting. Requires professional judgment or domain expertise." }
  ],
  exam_note: "The third verdict ('human override') is the most exam-tested. It applies when the task itself requires accountability or expertise that cannot delegate to a tool."
},
{
  name: "Hallucination Pattern Gallery",
  module: 3,
  summary: "Seven named hallucination types, each with a distinct signature.",
  components: [
    { label: "Plausible-but-unsupported claims", desc: "Sounds right, but no source backs it up" },
    { label: "Fabricated specifics", desc: "Precise-looking data (stats, quotes, citations) that don't exist — 'the precision is the tell'" },
    { label: "Confident tone masking uncertainty", desc: "High fluency hiding a weak or absent factual basis" },
    { label: "Internal contradictions", desc: "In long outputs, later sections contradict earlier ones" },
    { label: "Confirmation bias in framing", desc: "Output frames evidence to support the premise rather than evaluating it" },
    { label: "Capability hallucination", desc: "Claims to have taken an action it didn't (e.g. sent an email, accessed a live system)" },
    { label: "Completeness failure", desc: "Confident summary that masks silence on the hard case or missing data" }
  ],
  exam_note: "Fabricated specifics and capability hallucination are the highest-risk types. The precision of a fabricated stat is what makes it pass a surface review."
},
{
  name: "Fact-Checking & Grounding Techniques",
  module: 3,
  summary: "Three prompt-level techniques that reduce hallucination risk.",
  components: [
    { label: "Permit 'I don't know'", desc: "Explicit permission to say 'I don't know' reduces confabulation under uncertainty" },
    { label: "Restrict to provided sources", desc: "Instruct Claude to draw only from uploaded documents, not training knowledge" },
    { label: "Require auditable citations", desc: "Ask for source references so claims can be independently verified" }
  ],
  exam_note: "These are prompt-level controls, not model controls. All three can be combined in a single instruction. The exam often presents scenarios where one of these was missing."
},
{
  name: "4 Risk Thresholds (Diligence)",
  module: 3,
  summary: "Four questions that determine whether an output requires close human review before use.",
  components: [
    { label: "Stakes", desc: "What is the cost if the output is wrong?" },
    { label: "Reversibility", desc: "Can the error be corrected, or does it have lasting consequence?" },
    { label: "Audience", desc: "Who sees this output? Internal vs. external vs. regulatory?" },
    { label: "Regulatory exposure", desc: "Does a rule, law, or compliance requirement govern this content?" }
  ],
  exam_note: "Do-not-ship-without-review list: final client deliverables, audit-critical calculations, regulated/confidential data, public or legal communications."
},
{
  name: "Output Format by Reliability",
  module: 3,
  summary: "Different output formats carry different reliability guarantees for numbers.",
  components: [
    { label: "Inline prose", desc: "Generated text — plausible but not verified" },
    { label: "Artifacts", desc: "Separate document block — same reliability as prose" },
    { label: "Structured formats", desc: "Tables, JSON — organised but still generated" },
    { label: "Code Execution output", desc: "Verified computation — the only format with a guaranteed numeric result" }
  ],
  exam_note: "When a number must be correct, Code Execution is non-negotiable. Structured format does not mean accurate."
},
{
  name: "Input Curation Techniques",
  module: 3,
  summary: "Preparing your inputs improves output reliability.",
  components: [
    { label: "De-duplicate", desc: "Remove repeated or overlapping source files that confuse the analysis" },
    { label: "Label and structure", desc: "Name files and organise them so Claude can trace which source a claim comes from" },
    { label: "Prune irrelevant material", desc: "Remove content unrelated to the task — it uses context budget and creates noise" }
  ],
  exam_note: "Often overlooked in the exam. A scenario with 6 near-duplicate source files is calling for de-duplication, not a model upgrade."
},
{
  name: "Audience Editing — 3 Passes",
  module: 3,
  summary: "When Claude produces an output for a specific audience, review it in three passes.",
  components: [
    { label: "Clarity", desc: "Is the meaning unambiguous for this specific audience?" },
    { label: "Tone", desc: "Does the register match who will read this?" },
    { label: "Formatting", desc: "Does the visual structure serve the reader's needs?" }
  ],
  exam_note: "Distinct audience versions (exec summary vs. working group) require separate passes — not just a 'shorten it' instruction."
},

// ── MODULE 4 ──────────────────────────────────────────────────────
{
  name: "Delegation Mapping — 3 Criteria",
  module: 4,
  summary: "Three questions to decide whether a workflow step should be AI-appropriate, human-retained, or collaborative.",
  components: [
    { label: "Reversibility", desc: "Can this step be undone if the output is wrong?" },
    { label: "Stakes", desc: "What is the cost of an error at this step?" },
    { label: "Accountability", desc: "Who is answerable for this step? Accountability does not delegate." }
  ],
  exam_note: "Accountability is the decisive criterion. A step a person must answer for stays human-retained — regardless of how well AI can perform the mechanical part."
},
{
  name: "Delegation Classifications",
  module: 4,
  summary: "Three categories for every step in a workflow.",
  components: [
    { label: "AI-appropriate", desc: "Reversible, low stakes, mechanical — delegate fully" },
    { label: "Collaborative", desc: "AI drafts, human judges — the review gate must be real and staffed" },
    { label: "Human-retained", desc: "Irreversible, high stakes, or accountability-bearing — human ownership required" }
  ],
  exam_note: "The most common exam trap: 'Collaborative' steps where the review gate is never actually staffed — this is 'collapsing collaborative into automate.'"
},
{
  name: "Common Delegation Mapping Errors",
  module: 4,
  summary: "Three patterns that produce unsafe or ineffective delegation maps.",
  components: [
    { label: "Halo delegation", desc: "Prior step went well, so next step is auto-delegated without its own evaluation" },
    { label: "Collapsing collaborative into automate", desc: "'AI drafts, human reviews' becomes 'AI drafts' when no one actually staffs the review gate" },
    { label: "Mapping the tool, not the work", desc: "Build around features you like, not the actual steps and their risk profiles" }
  ],
  exam_note: "All three errors produce workflows that look safe but aren't. Halo delegation and collapsing collaborative are the most exam-tested."
},
{
  name: "Defined Gate Formula",
  module: 4,
  summary: "A review gate is only real if it specifies three things.",
  components: [
    { label: "Who reviews", desc: "The specific role with accountability — not 'someone'" },
    { label: "What they verify", desc: "The specific risk the gate exists to catch" },
    { label: "When it happens", desc: "The point in the workflow before the output is used or sent" }
  ],
  exam_note: "'A human will check it' is not a gate. The exam tests whether you can identify a real gate vs. a nominal one."
},
{
  name: "Escalation Signal to Developer/Architect",
  module: 4,
  summary: "When prompt-and-iterate has run its course and a solution needs infrastructure-grade engineering.",
  components: [
    { label: "Signal", desc: "People rely on a Claude-built artifact as infrastructure (daily reporting, uptime expectations, security requirements)" },
    { label: "Threshold", desc: "API integration, agent building, or tool development required — beyond Associate scope" },
    { label: "Action", desc: "Escalate to Developer (API/SDK) or Architect (enterprise governance)" }
  ],
  exam_note: "Recognising this boundary and escalating across it is listed as an Associate-level skill. The exam tests whether you escalate vs. keep prompting."
},
{
  name: "Stakeholder Communication Accuracy Principle",
  module: 4,
  summary: "How to describe AI involvement to stakeholders without overstating or understating capability.",
  components: [
    { label: "Accurate", desc: "'Claude drafts the first-pass redline, which a lawyer reviews and approves'" },
    { label: "Overstates", desc: "'Claude handles contract review'" },
    { label: "Rule", desc: "Name the human gate explicitly. Accuracy about AI's role builds trust; overstatement destroys it on the first visible error." }
  ],
  exam_note: "The exam often offers 4 versions of a stakeholder description. The correct one names the review gate with specificity."
},

// ── MODULE 5 ──────────────────────────────────────────────────────
{
  name: "4 Configuration Mechanisms",
  module: 5,
  summary: "Four distinct places to put configuration, each designed for a different type of content.",
  components: [
    { label: "Standing Instructions", desc: "Behavior rules: tone, format defaults, verification habits. Lives inside a Project." },
    { label: "Knowledge Base", desc: "Facts, reference documents, policies. Lives inside a Project." },
    { label: "Skills", desc: "Repeatable multi-step procedures. Lives at account level under Customize — reusable across any Project." },
    { label: "Scoped Memory", desc: "Evolving record of Project decisions, stakeholder names, preferences. Project-isolated." }
  ],
  exam_note: "Skills live at the account level — not inside a Project. This is the most commonly tested distinction."
},
{
  name: "Rule–Reference–Procedure Test",
  module: 5,
  summary: "Quick routing test to decide where a configuration item belongs.",
  components: [
    { label: "Rule (how Claude should always act)", desc: "→ Standing instruction" },
    { label: "Reference (facts every run needs)", desc: "→ Knowledge base" },
    { label: "Procedure (repeatable steps)", desc: "→ Skill" }
  ],
  exam_note: "This is the canonical decision tree for configuration placement. The exam presents a configuration item and asks where it belongs."
},
{
  name: "The Pairing Rule",
  module: 5,
  summary: "A behaviour rule and the facts it acts on must be paired together.",
  components: [
    { label: "Instruction without facts", desc: "'Always cite sources' — but no documents to cite from. Fails silently." },
    { label: "Facts without instruction", desc: "Documents in the knowledge base, but no rule about using them. Used inconsistently." },
    { label: "Paired", desc: "Instruction + corresponding documents. The rule has material to act on; the material has a rule governing it." }
  ],
  exam_note: "The pairing rule explains why some well-intended configurations don't work. The exam tests the failure mode."
},
{
  name: "Instruction Precision Test",
  module: 5,
  summary: "A standing instruction only changes output if it is specific enough for two different people to read it the same way.",
  components: [
    { label: "Vague (fails silently)", desc: "'Make the reports good and accurate.' — Ambiguous. Two people read it differently." },
    { label: "Precise (changes output)", desc: "'For every figure, state its source. Mark unverified figures as such. Lead each report with a one-sentence headline.'" },
    { label: "Test", desc: "Would two different people implement this the same way? If not, it's vague." }
  ],
  exam_note: "The exam presents instruction options ranging from vague to precise. Only the precise one qualifies as a standing instruction."
},
{
  name: "Configuration Maintenance Cadence",
  module: 5,
  summary: "Active Projects need periodic review to prevent configuration drift.",
  components: [
    { label: "Monthly cadence", desc: "Recommended review frequency for active Projects" },
    { label: "Skill update cadence", desc: "Anthropic-built and org-provisioned Skills update automatically. Custom-uploaded Skills update only when you re-upload." },
    { label: "Memory hygiene", desc: "Review periodically, delete stale entries, export before major changes, full reset when accumulated context misleads." },
    { label: "Signal you waited too long", desc: "Output quality slipping for no visible reason — stale config is the diagnosis." }
  ],
  exam_note: "Stale configuration is a distinct failure pattern: 'it used to work' is the signature symptom. Monthly maintenance prevents it."
},

// ── MODULE 6 ──────────────────────────────────────────────────────
{
  name: "Use-Case Classification (3 Tiers)",
  module: 6,
  summary: "Every proposed use case for Claude falls into one of three tiers.",
  components: [
    { label: "Fully appropriate", desc: "Internal FAQ from approved policy docs, summarising public material, formatting" },
    { label: "Appropriate with human review", desc: "Candidate screening, customer billing responses, data analysis feeding decisions" },
    { label: "Inappropriate", desc: "Final medical/legal determinations, unreviewed eligibility decisions, autonomous external actions" }
  ],
  exam_note: "The 'load-bearing criterion' concept: identify the ONE criterion that, if changed, would move the classification. Name it to make the decision defensible."
},
{
  name: "Skill Trust — 3-Check Framework",
  module: 6,
  summary: "Before enabling any third-party Skill, evaluate it against three checks.",
  components: [
    { label: "Source", desc: "Who published it? Anthropic/org-approved = lower risk. Unknown = escalate." },
    { label: "Reach", desc: "What could it reach in a session? Skills inherit full session access, not just what the task needs." },
    { label: "Appropriateness", desc: "Right tool for the job? Or more capability than the task requires?" }
  ],
  exam_note: "Three outcomes: Enable / Escalate / Decline. 'A colleague vouched for it' is not vetting. 'Internal does not mean vetted.'"
},
{
  name: "Least Privilege Principle",
  module: 6,
  summary: "Grant the narrowest access that lets the job get done. Revisit when the job changes.",
  components: [
    { label: "Application", desc: "Applies to connectors, integrations, Skills, and all feature enablement" },
    { label: "Rationale", desc: "Minimises blast radius if a Skill or connector is misconfigured or compromised" },
    { label: "Review trigger", desc: "When the job or scope changes, re-evaluate access rather than leaving old permissions in place" }
  ],
  exam_note: "The exam tests whether you apply least privilege to Skills and connectors — not just a policy concept."
},
{
  name: "Data Sensitivity — 3-Tier Model",
  module: 6,
  summary: "Three tiers of data sensitivity with different handling requirements.",
  components: [
    { label: "Green", desc: "Published material, anonymised/aggregated data, internal docs cleared for wide sharing. Safe to use." },
    { label: "Yellow", desc: "Internal docs not meant to leave the company, named individuals, unreleased material. Review first; use Incognito for non-persistence." },
    { label: "Red", desc: "Regulated data (health/financial/government), credentials, third-party confidentiality. Stop and escalate — do not upload until an approved path is confirmed." }
  ],
  exam_note: "Incognito mode controls persistence, not compliance. Red data requires confirming an approved compliant path — Incognito does not make red data safe."
},
{
  name: "Feature Controls",
  module: 6,
  summary: "What each feature control does and what it does NOT do.",
  components: [
    { label: "Code execution sandbox", desc: "Review what you upload before running. Sandboxed but not zero-risk." },
    { label: "Memory persistence", desc: "Carries info across sessions — may be unwanted for sensitive work." },
    { label: "Incognito mode", desc: "Keeps session out of chat history and Memory. Does NOT override org data retention. Does NOT make red data safe." },
    { label: "Org-level Memory controls", desc: "Team plans: no org-level controls. Enterprise: Owners hold org-wide Memory controls." }
  ],
  exam_note: "Incognito misunderstanding is the most common exam trap in Module 6. Know exactly what it does and doesn't do."
},
{
  name: "Ethical Reasoning Framework",
  module: 6,
  summary: "Four questions to work through when a use case raises an ethical concern.",
  components: [
    { label: "Who is affected?", desc: "All stakeholders, including indirect ones" },
    { label: "What could go wrong?", desc: "Specific failure modes, not generic risk" },
    { label: "What does the fair outcome look like?", desc: "The version where no party is systematically disadvantaged" },
    { label: "What disclosure does the situation call for?", desc: "When unsure whether to disclose AI assistance, disclose rather than conceal" }
  ],
  exam_note: "Escalation signal: large affected population, significant potential harm, or the question exceeds the team's standing to resolve. Document reasoning when escalating."
},

// ── MODULE 7 ──────────────────────────────────────────────────────
{
  name: "4 Root-Cause Failure Patterns",
  module: 7,
  summary: "Four distinct failure patterns, each with a different symptom timing and fix.",
  components: [
    { label: "Under-specification", desc: "Symptom: first response wrong. Cause: prompt missing components. Fix: add what was missing." },
    { label: "Context overload", desc: "Symptom: quality degrades over time in a long session. Cause: context limit reached. Fix: restart or summarise." },
    { label: "Wrong feature or model", desc: "Symptom: specific, repeatable error type. Cause: wrong entry point, tier, or missing code execution. Fix: right tool, not more prompting." },
    { label: "Stale configuration", desc: "Symptom: 'it used to work.' Cause: instructions/knowledge/Skill drifted. Fix: run Module 5 maintenance checklist." }
  ],
  exam_note: "Symptom timing is the diagnostic key. First response wrong = under-specification. Degrades over time = context. Used to work = stale config."
},
{
  name: "Diagnostic Sequence — 5 Steps",
  module: 7,
  summary: "The cheapest-fix-first diagnostic order for any underperforming output.",
  components: [
    { label: "Step 1", desc: "Re-read the prompt against the 5 components: anything under-specified?" },
    { label: "Step 2", desc: "Check conversation length: is context overloaded?" },
    { label: "Step 3", desc: "Check feature and model: needs code execution? Wrong model tier?" },
    { label: "Step 4", desc: "Check configuration: are instructions, knowledge, and Skills current?" },
    { label: "Step 5", desc: "Question whether the task is a fit at all. This is last — it's the most expensive conclusion." }
  ],
  exam_note: "Never jump to Step 5 first. The exam often presents someone who concludes 'Claude can't do this' before checking Steps 1–4."
},
{
  name: "Reaction vs. Instruction Distinction",
  module: 7,
  summary: "Feedback that moves a prompt forward vs. feedback that doesn't.",
  components: [
    { label: "Reaction (not actionable)", desc: "'Too generic.' 'Not quite right.' — How it feels, not what to change." },
    { label: "Instruction (actionable)", desc: "'Add the three criteria we agreed on and limit to 200 words.' — What to change so the next output is different." },
    { label: "Translation method", desc: "Ask: 'What specifically would need to be present for this to be right, and which prompt component controls that?'" }
  ],
  exam_note: "The exam often presents feedback options ranging from reaction to instruction. Only the instruction moves the prompt forward."
},
{
  name: "3 Friction Signals in Workflow Optimization",
  module: 7,
  summary: "Three patterns in a workflow that signal a fixable inefficiency.",
  components: [
    { label: "Repetition", desc: "Same context pasted every run → saved context or standing instruction" },
    { label: "Correction", desc: "Same flaw fixed in every output → configuration change" },
    { label: "Variance", desc: "Different people get different results on the same task → shared Skill or knowledge base" }
  ],
  exam_note: "Capture vs. Lose: when a fix works, promote it. Phrasing → standing instruction. Multi-step fix → Skill. Leaving it in a one-off chat means rediscovering it every cycle."
},

// ── MODULE 8 ──────────────────────────────────────────────────────
{
  name: "AI Fluency Framework — 4 Competencies",
  module: 8,
  summary: "The four competencies that thread through the entire course and the certification exam.",
  components: [
    { label: "Description", desc: "Telling Claude precisely what you want. The prompting discipline from Module 2." },
    { label: "Discernment", desc: "Critically evaluating output against requirements, sources, and professional standards. Module 3." },
    { label: "Diligence", desc: "Owning and verifying the output before it is used. Accountability does not delegate. Modules 3 & 6." },
    { label: "Delegation", desc: "Deciding which steps Claude does, which stay human, and which are collaborative. Modules 4 & 6." }
  ],
  exam_note: "Each competency assumes the one before it. Module 8 is the synthesis. Know which competency each module primarily develops."
},
{
  name: "Certification Boundary — Associate vs. Developer vs. Architect",
  module: 8,
  summary: "Three tiers of the Anthropic certification path with distinct scope boundaries.",
  components: [
    { label: "Associate", desc: "Individual practitioner operating Claude via claude.ai. Scope: this course." },
    { label: "Developer", desc: "API, SDKs, agents, tool development. Escalate here when prompt-and-iterate is insufficient." },
    { label: "Architect", desc: "Enterprise architecture, integration design, governance at scale." }
  ],
  exam_note: "Recognising the boundary and escalating across it is listed as an Associate-level skill. The exam tests this recognition."
}

];
