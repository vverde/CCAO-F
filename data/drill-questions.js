const DRILL_QUESTIONS = [

// ══════════════════════════════════════════════════════
// MODULE 1 — Product & Model Selection
// ══════════════════════════════════════════════════════

// True/False
{ module: 1, type: "tf", q: "Skills live inside a specific Project and only apply within that Project.", answer: false,
  explanation: "Skills live at the account level — not inside any Project. They are reusable across every conversation, inside or outside a Project." },

{ module: 1, type: "tf", q: "A trained professional can rely on Claude's confident tone as a signal that an answer is accurate.", answer: false,
  explanation: "Confident tone is not a signal of accuracy. Claude writes with uniform fluency regardless of whether the answer is correct. This is one of the 5 Behavioral Properties." },

{ module: 1, type: "tf", q: "The Project Test requires that all three conditions be true before building a Project: the task recurs, context is stable, and format is consistent.", answer: false,
  explanation: "Two out of three is the threshold — not all three. If two conditions hold, a Project is appropriate." },

{ module: 1, type: "tf", q: "Code Execution returns a verified computed result, unlike prose generation which produces a plausible but unverified answer.", answer: true,
  explanation: "Correct. Code Execution runs the calculation in a sandbox and returns the result — the only way to guarantee a correct number." },

{ module: 1, type: "tf", q: "Incognito mode overrides organisational data retention policies.", answer: false,
  explanation: "Incognito mode controls persistence in chat history and Memory only. It does NOT override organisational data retention configured at the admin level." },

{ module: 1, type: "tf", q: "Context is a budget — as a session grows longer, earlier instructions can compress and lose force.", answer: true,
  explanation: "Correct. This is the third of the 5 Behavioral Properties. Context degradation is a distinct failure pattern with its own diagnosis and fix." },

// MCQ — recall and recognition
{ module: 1, type: "mcq", q: "How many 'Four Decisions' set the quality ceiling before the first prompt?",
  options: ["3", "4", "5", "6"], correct: 1,
  explanation: "The Four Decisions: Entry Point · Capability Layer · Model · Context Management." },

{ module: 1, type: "mcq", q: "Which Claude model tier is designed for high-volume, structured tasks where speed and cost efficiency compound?",
  options: ["Opus", "Sonnet", "Haiku", "Research"], correct: 2,
  explanation: "Haiku is optimised for structured, high-volume work — classification, extraction, formatting — where speed matters and the rubric is clear." },

{ module: 1, type: "mcq", q: "What are the three options for managing a long session when context degrades?",
  options: ["Restart · Summarise · Persist to Memory", "Delete · Archive · Export", "Refresh · Compress · Extend", "Upgrade · Retry · Reset"], correct: 0,
  explanation: "The three context management responses: Restart (new conversation), Summarise (carry a compressed summary forward), Persist to Memory (store key facts for future sessions)." },

{ module: 1, type: "mcq", q: "Which entry point is designed for deep, multi-source synthesis requiring current information?",
  options: ["Chat", "Projects", "Artifacts", "Research"], correct: 3,
  explanation: "Research runs multi-step searches across multiple sources and synthesises the findings — designed for investigations that go beyond a single web search." },

{ module: 1, type: "mcq", q: "Which layer of the Four-Layer Model 'verifies computations'?",
  options: ["Projects", "Skills", "Code Execution", "Memory"], correct: 2,
  explanation: "Code Execution is the layer that verifies computations — it runs the calculation and returns a guaranteed result, not a generated estimate." },

{ module: 1, type: "mcq", q: "Project-scoped Memory is best described as:",
  options: ["A global store shared across all Projects", "An isolated record per Project — context from one Project does not appear in another", "A backup of the conversation history", "A connector to external databases"], correct: 1,
  explanation: "Scoped Memory is isolated per Project. This is the correct mechanism for preventing context bleed between separate workstreams or clients." },

{ module: 1, type: "fill", q: "Complete the Project Test: 'Build a Project when ___ of three conditions hold: task recurs, context is stable, format is consistent.'",
  options: ["1", "2", "3", "all"], correct: 1,
  explanation: "2 of 3. You do not need all three conditions — two is the threshold." },

// ══════════════════════════════════════════════════════
// MODULE 2 — Prompting & Task Execution
// ══════════════════════════════════════════════════════

{ module: 2, type: "tf", q: "When a prompt returns generic output, the most likely missing component is the Role.", answer: false,
  explanation: "Context is the most commonly missing component. Generic output almost always means Claude didn't have the background it needed — audience, situation, prior decisions, source material." },

{ module: 2, type: "tf", q: "When iterating on a prompt, you should change only the one component the output pointed to.", answer: true,
  explanation: "Correct. Changing multiple components at once makes the cause of improvement untraceable. Fix the one component the failure pointed to." },

{ module: 2, type: "tf", q: "For a brainstorming task, the correct approach is to apply tight constraints upfront to keep Claude on message.", answer: false,
  explanation: "Brainstorming requires latitude — goal and guardrails only. Tight constraints suppress the divergence you are trying to generate. Filter after generating, not before." },

{ module: 2, type: "tf", q: "The diminishing returns signal means you should stop iterating when each additional round produces marginal improvement.", answer: true,
  explanation: "Correct. Diminishing returns — not a fixed round count — is the signal. When the gain per round drops to near zero, a quick manual edit is more efficient than another prompt cycle." },

{ module: 2, type: "tf", q: "Task Decomposition means running each step of a complex task in a separate conversation.", answer: false,
  explanation: "Sequential steps that build on each other stay in one conversation so each step sees prior results. Move to a new conversation only when context has grown long enough to degrade." },

// MCQ
{ module: 2, type: "mcq", q: "Name the 5 components of the Prompt Stack in order:",
  options: ["Role · Context · Task · Constraints · Output Format", "Goal · Background · Action · Tone · Length", "Persona · Situation · Instruction · Style · Template", "Who · What · Why · How · When"], correct: 0,
  explanation: "Role · Context · Task · Constraints · Output Format — the five components. Context is the most commonly omitted." },

{ module: 2, type: "mcq", q: "A prompt returns accurate content but it is three times too long and too formal. Which components need fixing?",
  options: ["Role and Context", "Task and Role", "Constraints (length) and Output Format (tone)", "Context and Task"], correct: 2,
  explanation: "The content is right — the task was understood. The problem is the shape of the output: too long (Constraint) and wrong register (Output Format/tone)." },

{ module: 2, type: "mcq", q: "Which component controls 'the specific action with one primary verb'?",
  options: ["Role", "Context", "Task", "Constraints"], correct: 2,
  explanation: "Task is the specific action — one primary verb. Ambiguity here causes Claude to answer the wrong question." },

{ module: 2, type: "mcq", q: "In a Task Decomposition for three deliverables drawing from the same policy document, what comes first?",
  options: ["Draft the highest-priority deliverable", "Extract and verify the substantive changes from the source document", "Run all three in parallel to save time", "Ask Claude which deliverable to produce first"], correct: 1,
  explanation: "The shared extraction step comes first. All three deliverables draw on the same source — if the extraction is wrong, the error propagates into all three." },

{ module: 2, type: "mcq", q: "For an analysis task, what should be tightened in the prompt?",
  options: ["Word choice and phrasing", "Goal and guardrails only", "Criteria, standards, and scope", "Quantity and direction"], correct: 2,
  explanation: "Analysis: tighten criteria, standards, scope. Loosen phrasing. The framework varies by task type — brainstorming is the opposite (goal + guardrails only)." },

// ══════════════════════════════════════════════════════
// MODULE 3 — Evaluating & Validating Output
// ══════════════════════════════════════════════════════

{ module: 3, type: "tf", q: "A fabricated statistic reads with lower fluency than a verified one, making it easier to detect.", answer: false,
  explanation: "Fabricated specifics read with the same confident fluency as verified claims. The precision is the tell — not the tone. This is the most dangerous hallucination type." },

{ module: 3, type: "tf", q: "Diligence means the practitioner owns and is accountable for every output they ship, regardless of who or what generated it.", answer: true,
  explanation: "Correct. Diligence is the competency of ownership — accountability does not transfer to a tool. What you ship, you are answerable for." },

{ module: 3, type: "tf", q: "Configuring a Skill removes the need for human review of that Skill's output.", answer: false,
  explanation: "Skills reduce variance but never eliminate it. Review is structural — it stays in the workflow regardless of how well the Skill is configured." },

{ module: 3, type: "tf", q: "The three evaluation references are: requirements, source material, and professional standards.", answer: true,
  explanation: "Correct. Every output should be evaluated against all three. Missing one creates a systematic blind spot." },

{ module: 3, type: "tf", q: "'Completeness failure' is when Claude refuses to answer a question.", answer: false,
  explanation: "Completeness failure is when a confident summary masks silence on missing data — the output looks comprehensive but key information is absent. It is not a refusal." },

// MCQ
{ module: 3, type: "mcq", q: "How many named hallucination types are in the Hallucination Pattern Gallery?",
  options: ["4", "5", "6", "7"], correct: 3,
  explanation: "Seven: Plausible-but-unsupported claims · Fabricated specifics · Confident tone masking uncertainty · Internal contradictions · Confirmation bias · Capability hallucination · Completeness failure." },

{ module: 3, type: "mcq", q: "Which hallucination type involves Claude claiming to have sent an email or accessed a live system when it did not?",
  options: ["Fabricated specifics", "Completeness failure", "Capability hallucination", "Confirmation bias"], correct: 2,
  explanation: "Capability hallucination: Claude claims to have taken an external action it didn't. High risk when connectors are involved." },

{ module: 3, type: "mcq", q: "What are the three Fact-Checking & Grounding techniques?",
  options: ["Verify · Restrict · Redact", "Permit 'I don't know' · Restrict to provided sources · Require auditable citations", "Search · Cross-check · Archive", "Cite · Confirm · Escalate"], correct: 1,
  explanation: "Permit 'I don't know' · Restrict to provided sources · Require auditable citations. All three can appear in a single prompt instruction." },

{ module: 3, type: "mcq", q: "Which of the 4 Risk Thresholds asks 'can the error be corrected, or does it have lasting consequence?'",
  options: ["Stakes", "Reversibility", "Audience", "Regulatory exposure"], correct: 1,
  explanation: "Reversibility: can the error be undone? Irreversible outputs — published documents, sent communications, legal filings — trigger the highest diligence requirement." },

{ module: 3, type: "mcq", q: "What are the three Three-Way Triage verdicts for evaluating an output?",
  options: ["Accept · Edit · Reject", "Ready to use · Needs revision · Needs human override", "Pass · Fail · Retry", "Ship · Hold · Escalate"], correct: 1,
  explanation: "Ready to use · Needs revision · Needs human override. The third verdict applies when the task requires accountability or expertise a tool cannot hold." },

// ══════════════════════════════════════════════════════
// MODULE 4 — Workflow Integration & Solution Design
// ══════════════════════════════════════════════════════

{ module: 4, type: "tf", q: "Accountability is the decisive criterion in delegation mapping — a step a person must answer for stays human-retained.", answer: true,
  explanation: "Correct. Accountability does not delegate. Regardless of how mechanically capable Claude is at a step, if a person must answer for it, it stays human-retained." },

{ module: 4, type: "tf", q: "Halo delegation means delegating a step because the prior step in the workflow went well.", answer: true,
  explanation: "Correct. Halo delegation is one of the three Common Delegation Mapping Errors. Each step must be evaluated on its own reversibility, stakes, and accountability — not inherited from the previous step." },

{ module: 4, type: "tf", q: "A review gate that is never actually staffed still counts as a 'Collaborative' workflow step.", answer: false,
  explanation: "A review gate that is never staffed is automation, not collaboration. This is the 'collapsing collaborative into automate' mapping error." },

{ module: 4, type: "tf", q: "When a Claude-built solution becomes infrastructure that three departments rely on daily, the correct action is to upgrade the model tier.", answer: false,
  explanation: "The correct action is to escalate to Developer or Architect scope. Infrastructure requirements (uptime, security, integrations) are beyond Associate/prompt-and-iterate scope." },

// MCQ
{ module: 4, type: "mcq", q: "What are the three Delegation Mapping criteria?",
  options: ["Speed · Cost · Quality", "Reversibility · Stakes · Accountability", "Time · Effort · Risk", "Model · Skill · Memory"], correct: 1,
  explanation: "Reversibility (can it be undone?) · Stakes (cost of error?) · Accountability (who is answerable?). All three evaluated per step, independently." },

{ module: 4, type: "mcq", q: "A Defined Gate Formula must specify three things. Which answer is correct?",
  options: ["Model tier · Token budget · Session length", "Who reviews · What they verify · When it happens", "AI step · Human step · Handoff format", "Skill · Connector · Memory entry"], correct: 1,
  explanation: "Who reviews (role with accountability) · What they verify (specific risk) · When it happens (point in the workflow before the output is used). 'Someone will check it' is not a gate." },

{ module: 4, type: "mcq", q: "Which step in the canonical contract-review delegation map is classified as 'Human-retained'?",
  options: ["Extracting clauses from the document", "Flagging playbook departures", "Drafting the redline", "Signing and sending the contract"], correct: 3,
  explanation: "Signing and sending is irreversible, external, and legally binding — human-retained. Approving/rejecting changes is also human-retained. Extraction and flagging are AI-appropriate." },

{ module: 4, type: "mcq", q: "Name the three Common Delegation Mapping Errors.",
  options: ["Over-delegation · Under-delegation · No delegation", "Halo delegation · Collapsing collaborative · Mapping the tool", "Speed error · Cost error · Quality error", "Context error · Model error · Skill error"], correct: 1,
  explanation: "Halo delegation (auto-delegating because a prior step went well) · Collapsing collaborative (review gate never staffed) · Mapping the tool (building around features, not actual step risk)." },

// ══════════════════════════════════════════════════════
// MODULE 5 — Configuration & Knowledge Management
// ══════════════════════════════════════════════════════

{ module: 5, type: "tf", q: "Vague standing instructions fail silently — they do not produce an error, they just don't change output.", answer: true,
  explanation: "Correct. 'Be accurate and professional' looks like a rule but changes nothing. Precise instructions — testable, specific, unambiguous — are the only kind that reliably change output." },

{ module: 5, type: "tf", q: "The Pairing Rule states that a behaviour rule and the facts it acts on should be stored in separate Projects.", answer: false,
  explanation: "The Pairing Rule says a behaviour rule (standing instruction) and the facts it acts on (knowledge base) belong together in the same Project. Neither works alone." },

{ module: 5, type: "tf", q: "Anthropic-built Skills update automatically. Custom-uploaded Skills update only when you re-upload them.", answer: true,
  explanation: "Correct. Anthropic-built and org-provisioned Skills update automatically. Custom Skills are static until manually re-uploaded — a common source of stale configuration." },

{ module: 5, type: "tf", q: "The recommended maintenance cadence for active Projects is weekly.", answer: false,
  explanation: "Monthly is the recommended cadence. Waiting for output quality to visibly drop means drift has already reached deliverables." },

// MCQ
{ module: 5, type: "mcq", q: "What are the four Configuration Mechanisms?",
  options: ["Chat · Projects · Artifacts · Research", "Standing Instructions · Knowledge Base · Skills · Scoped Memory", "Prompts · Templates · Formats · Styles", "Rules · Facts · Procedures · History"], correct: 1,
  explanation: "Standing Instructions (rules) · Knowledge Base (facts) · Skills (procedures) · Scoped Memory (evolving project state). Each holds a different type of content." },

{ module: 5, type: "mcq", q: "Apply the Rule–Reference–Procedure Test: a multi-step formatting procedure belongs in which mechanism?",
  options: ["Standing Instructions", "Knowledge Base", "Skill", "Scoped Memory"], correct: 2,
  explanation: "Procedure → Skill. Rule → standing instruction. Reference → knowledge base. This is the canonical routing test." },

{ module: 5, type: "mcq", q: "Which standing instruction passes the Precision Test?",
  options: ["'Write clearly and professionally.'", "'Make reports accurate.'", "'For every figure, state its source. Mark unverified figures as such. Lead with a one-sentence headline.'", "'Use a formal tone.'"], correct: 2,
  explanation: "Only option C would be implemented the same way by two different people. The others are vague — they fail silently without producing an error." },

{ module: 5, type: "mcq", q: "What is the 'stale configuration' signal?",
  options: ["An error message in the console", "'It used to work' — output quality degrading with no visible error", "A Skill fails to invoke", "The knowledge base returns no results"], correct: 1,
  explanation: "'It used to work' is the signature of stale configuration. Something the output depends on — an instruction, knowledge entry, or Skill — has drifted out of date." },

// ══════════════════════════════════════════════════════
// MODULE 6 — Governance, Risk & Responsible Use
// ══════════════════════════════════════════════════════

{ module: 6, type: "tf", q: "Incognito mode makes it safe to upload Red-tier data because the session won't persist.", answer: false,
  explanation: "Incognito controls persistence, not compliance. Red-tier data (regulated health, financial, government data) requires confirming an approved compliant path — Incognito does not create one." },

{ module: 6, type: "tf", q: "The Least Privilege Principle means always using the lowest-tier Claude model.", answer: false,
  explanation: "Least Privilege is about access scope, not model tier. It means granting the narrowest access (connectors, Skills, integrations) that lets the job get done — revisiting when the job changes." },

{ module: 6, type: "tf", q: "A Skill inherits only the specific permissions the task needs, not the full session access.", answer: false,
  explanation: "Skills inherit the full session's access — not just the task scope. This is why the Source and Reach checks in the Skill Trust framework matter." },

{ module: 6, type: "tf", q: "When the compliant route is harder than a workaround, the correct response is to ban the tool entirely.", answer: false,
  explanation: "The correct response is a Diligence gap fix: make the approved route the path of least resistance. Banning the tool doesn't fix the underlying friction — people find other workarounds." },

{ module: 6, type: "tf", q: "Governance is a daily practice applied on routine, low-visibility decisions — not only obvious high-stakes moments.", answer: true,
  explanation: "Correct. Applying governance only to obvious high-stakes cases leaves systematic low-visibility risks unaddressed. The course explicitly names this as the correct stance." },

// MCQ
{ module: 6, type: "mcq", q: "Name the three Data Sensitivity tiers in order from safest to most restricted.",
  options: ["Low · Medium · High", "Green · Yellow · Red", "Public · Internal · Confidential", "Open · Restricted · Classified"], correct: 1,
  explanation: "Green (safe to use) · Yellow (review first, use Incognito for non-persistence) · Red (stop and escalate — do not upload until an approved path is confirmed)." },

{ module: 6, type: "mcq", q: "The Skill Trust 3-Check Framework evaluates: Source, Reach, and what third check?",
  options: ["Speed", "Cost", "Appropriateness", "Publisher"], correct: 2,
  explanation: "Source (who published it?) · Reach (what session access does it inherit?) · Appropriateness (right tool for the job, or more capability than needed?). Three outcomes: Enable / Escalate / Decline." },

{ module: 6, type: "mcq", q: "What is the 'load-bearing criterion' concept?",
  options: ["The most expensive step in a workflow", "The one criterion that, if changed, would move a use-case classification from one tier to another", "The skill with the highest session access", "The final decision-maker in a review gate"], correct: 1,
  explanation: "The load-bearing criterion is the one factor that, if changed, would shift the classification (e.g. from 'appropriate with review' to 'inappropriate'). Naming it makes the classification defensible." },

{ module: 6, type: "mcq", q: "Which use-case classification applies to 'final, unreviewed medical or legal determinations'?",
  options: ["Fully appropriate", "Appropriate with human review", "Inappropriate", "Appropriate with a Skill configured"], correct: 2,
  explanation: "Inappropriate. Irreversible consequence + non-transferable professional accountability = human ownership required. No configuration or review gate changes this." },

{ module: 6, type: "mcq", q: "The Ethical Reasoning Framework has four questions. Which is NOT one of them?",
  options: ["Who is affected?", "What could go wrong?", "What is the cost-benefit ratio?", "What disclosure does the situation call for?"], correct: 2,
  explanation: "The four questions: Who is affected? · What could go wrong? · What does the fair outcome look like? · What disclosure does the situation call for? Cost-benefit is not one of them." },

// ══════════════════════════════════════════════════════
// MODULE 7 — Troubleshooting & Optimization
// ══════════════════════════════════════════════════════

{ module: 7, type: "tf", q: "If Claude produces shallow output on a complex task, upgrading to Opus should always be the first diagnostic step.", answer: false,
  explanation: "The first step is always: check the prompt against the 5 components. Under-specification is more common than a model tier mismatch, and it's free to fix." },

{ module: 7, type: "tf", q: "A reaction ('too generic') and an instruction ('add the three criteria from the brief') are equally useful for improving a prompt.", answer: false,
  explanation: "Only instructions move a prompt forward. A reaction describes how output feels — an instruction specifies what to change so the next output is different." },

{ module: 7, type: "tf", q: "When output quality degrades gradually over a long session (not on the first response), the diagnosis is context overload.", answer: true,
  explanation: "Correct. Symptom timing is the diagnostic key: first response wrong = under-specification. Gradual degradation over a session = context overload." },

{ module: 7, type: "tf", q: "The 'capture vs. lose' principle says: when a fix works, promote it into configuration so it's not rediscovered every cycle.", answer: true,
  explanation: "Correct. A fix left in a one-off chat is rediscovered at the same cost every time. Phrasing that works → standing instruction. Multi-step fix → Skill." },

// MCQ
{ module: 7, type: "mcq", q: "Name the 4 Root-Cause Failure Patterns.",
  options: ["Bad prompt · Bad model · Bad data · Bad output", "Under-specification · Context overload · Wrong feature/model · Stale configuration", "Slow · Wrong · Incomplete · Off-topic", "Input error · Process error · Output error · Format error"], correct: 1,
  explanation: "Under-specification (first response wrong) · Context overload (degrades over time) · Wrong feature/model (specific repeatable error) · Stale configuration ('it used to work')." },

{ module: 7, type: "mcq", q: "In the Diagnostic Sequence, what is Step 1?",
  options: ["Question whether the task is a fit for Claude", "Switch to a more capable model", "Re-read the prompt against the 5 components", "Restart the conversation"], correct: 2,
  explanation: "Step 1: re-read the prompt against the 5 components — is anything under-specified? Cheapest fix first. Step 5 ('is this task a fit?') is the most expensive conclusion and always comes last." },

{ module: 7, type: "mcq", q: "What are the 3 Friction Signals in workflow optimization?",
  options: ["Slow · Expensive · Unreliable", "Repetition · Correction · Variance", "Missing · Wrong · Late", "Input · Process · Output"], correct: 1,
  explanation: "Repetition (same paste every run → standing instruction) · Correction (same flaw every output → configuration change) · Variance (different results on same task → shared Skill)." },

{ module: 7, type: "mcq", q: "An analyst fixes the same formatting error in every weekly report for six months without capturing the fix. What does this represent?",
  options: ["Acceptable workflow overhead", "A friction signal: Correction — the same flaw recurs and should become a standing instruction or Skill", "A model tier mismatch", "Stale configuration in the knowledge base"], correct: 1,
  explanation: "This is the Correction friction signal. The fix exists — it just hasn't been promoted. Each rediscovery costs the same as the first, multiplied by every person and every cycle." },

// ══════════════════════════════════════════════════════
// MODULE 8 — AI Fluency Framework
// ══════════════════════════════════════════════════════

{ module: 8, type: "tf", q: "The four AI Fluency competencies are: Description, Discernment, Diligence, Delegation.", answer: true,
  explanation: "Correct. The four Ds. Each assumes the one before it — you cannot evaluate output you don't know how to request; you cannot govern what you can't evaluate." },

{ module: 8, type: "tf", q: "Building an agentic workflow with API integration is within the Claude Associate scope.", answer: false,
  explanation: "API integration, agent building, and tool development are Developer-tier scope. Recognising this boundary and escalating is itself an Associate-level skill." },

{ module: 8, type: "tf", q: "Discernment is the competency for prompting discipline — telling Claude precisely what you want.", answer: false,
  explanation: "Description is the prompting discipline. Discernment is critically evaluating output against requirements, sources, and professional standards." },

{ module: 8, type: "mcq", q: "Which competency does Module 2 primarily develop?",
  options: ["Discernment", "Diligence", "Description", "Delegation"], correct: 2,
  explanation: "Module 2 develops Description — the prompting discipline (5-Component Stack, task decomposition, iteration)." },

{ module: 8, type: "mcq", q: "Which competency does Module 4 primarily develop?",
  options: ["Description", "Discernment", "Diligence", "Delegation"], correct: 3,
  explanation: "Module 4 develops Delegation — deciding which steps Claude does, which stay human, which are collaborative." },

{ module: 8, type: "mcq", q: "What are the three certification tiers in the Anthropic certification path?",
  options: ["Basic · Advanced · Expert", "Associate · Developer · Architect", "Foundation · Professional · Master", "Practitioner · Engineer · Principal"], correct: 1,
  explanation: "Associate (individual practitioner, this course) · Developer (API, SDKs, agents) · Architect (enterprise architecture, governance at scale)." },

{ module: 8, type: "mcq", q: "When should an Associate escalate to Developer scope?",
  options: ["When the output quality is poor", "When the model tier is insufficient", "When the solution requires API integration, agent building, or tool development beyond prompt-and-iterate", "When the Project configuration becomes complex"], correct: 2,
  explanation: "The escalation signal: when prompt-and-iterate has run its course and the solution needs API/SDK work, agent architecture, or tool development. Recognising this boundary is an Associate skill." },

// ══════════════════════════════════════════════════════
// CROSS-MODULE — Definitions & Term Recognition
// ══════════════════════════════════════════════════════

{ module: 0, type: "mcq", q: "What is the term for 'a hallucination where Claude produces precise-looking statistics or citations that don't exist'?",
  options: ["Capability hallucination", "Fabricated specific", "Completeness failure", "Confirmation bias"], correct: 1,
  explanation: "Fabricated specific — the precision is the tell. A vague plausible claim is easier to catch than a specific-looking number or citation that appears authoritative." },

{ module: 0, type: "mcq", q: "What is the term for the error of delegating a step because the prior step went well?",
  options: ["Collapsing collaborative", "Mapping the tool", "Halo delegation", "Capability creep"], correct: 2,
  explanation: "Halo delegation. Each step must be evaluated on its own criteria — the quality of the prior step is not evidence about the next one." },

{ module: 0, type: "mcq", q: "Which term describes the principle: 'grant the narrowest access that lets the job get done'?",
  options: ["Minimal footprint", "Scoped access", "Least Privilege", "Bounded delegation"], correct: 2,
  explanation: "Least Privilege. Applies to Skills, connectors, integrations, and all feature enablement — not just a security concept." },

{ module: 0, type: "mcq", q: "What does the 'Instruction Precision Test' ask?",
  options: ["Is the instruction under 50 words?", "Would two different people implement this the same way?", "Does the instruction include a specific metric?", "Has the instruction been reviewed by a manager?"], correct: 1,
  explanation: "Would two different people implement this the same way? If not, it's vague — it will fail silently without producing an error." },

{ module: 0, type: "tf", q: "The 'Pairing Rule' states that a behaviour rule works best when it is stored separately from the facts it acts on.", answer: false,
  explanation: "The Pairing Rule says they belong together. 'Always cite sources' (standing instruction) needs the source documents (knowledge base) in the same Project to function." },

{ module: 0, type: "mcq", q: "What is a 'Defined Gate' in workflow design?",
  options: ["A model selection checkpoint before a complex task", "A review gate that specifies who reviews, what they verify, and when in the workflow", "A configuration step that locks a Project's settings", "A Skill that validates output before delivery"], correct: 1,
  explanation: "A Defined Gate names the role with accountability (who), the specific risk it exists to catch (what), and the point in the workflow before the output is used (when). 'Someone will check it' is not a gate." },

{ module: 0, type: "mcq", q: "Which term describes gradually worsening output quality in a long session, caused by the context window filling?",
  options: ["Stale configuration", "Under-specification", "Context overload", "Model degradation"], correct: 2,
  explanation: "Context overload. The signal is gradual degradation over the course of a session — not a failure on the first response. Fix: restart or summarise." },

{ module: 0, type: "tf", q: "'Collapsing collaborative into automate' means a review gate that is nominally present but never actually staffed.", answer: true,
  explanation: "Correct. 'AI drafts, human reviews' becoming 'AI drafts' because nobody actually reviews is the collapsing collaborative error — it looks like collaboration but functions as automation." },

];
