const SYNTHESES = [
{
  module: 1,
  title: "Product & Model Selection",
  theme: "Before you prompt, make four decisions: where, what capabilities, which model, and how to manage context. These set the quality ceiling for everything that follows.",
  insights: [
    "The Four Decisions (entry point, capability layer, model, context management) are made before the first word of any prompt — they determine what's possible, not how well you use it.",
    "Chat is for one-offs. Projects are for recurring work with stable context. Two of three criteria (recurs / stable context / consistent format) = build a Project.",
    "Skills live at the account level, not inside Projects — they're reusable across everything and invoked automatically. One well-built Skill beats re-prompting every time.",
    "Code Execution is the only way to guarantee a correct number. Claude generating prose produces plausible arithmetic, not verified arithmetic.",
    "Context is a budget. In long sessions, earlier detailed instructions compress. If behaviour changes mid-session, context overload is the first diagnosis.",
    "Model tier is not about quality in general — it's about matching depth to the task. Haiku at volume. Sonnet by default. Opus for high-stakes judgment."
  ],
  exam_traps: [
    "Distractor: 'Use Opus for everything important.' Wrong — Opus is for complexity and judgment, not all high-stakes tasks. A high-volume, clear-rubric task belongs on Haiku regardless of stakes.",
    "Distractor: 'Skills eliminate review.' Wrong — Skills reduce variance; they do not eliminate it. Review stays structural.",
    "Watch for: Project Test questions where model tier or time spent are offered as criteria. They are not."
  ],
  key_quote: "The quality ceiling for every Claude session is set before the first prompt is written.",
  quiz_answers: "Q1: B (Project) · Q2: C (Research) · Q3: C (Haiku) · Q4: C (Opus) · Q5: A,B,C (multi) · Q6: B (context overload) · Q7: C (Artifact) · Q8: B (account level)"
},
{
  module: 2,
  title: "Prompting & Task Execution",
  theme: "Most output failures come from prompts missing one component. The fix is finding which one is missing and adding it — not rewriting everything.",
  insights: [
    "The 5-Component Stack: Role / Context / Task / Constraints / Output Format. Context is the most commonly missing component — Claude cannot see your inbox, org chart, or project history.",
    "When output is generic or off-base, the fix is almost always more Context — not a more capable model.",
    "Iterate by changing the ONE component the output pointed to. Changing everything makes the cause of improvement untraceable.",
    "Stop iterating when further rounds produce marginal change. Diminishing returns is the signal — not a fixed round count.",
    "For complex tasks, decompose. Each step produces a checkable intermediate result. The shared foundation step comes first.",
    "Brainstorming wants latitude: goal + guardrails only. Filter after generating, not before — tight constraints suppress divergence."
  ],
  exam_traps: [
    "Distractor: 'Upgrade to Opus when output is wrong.' Model tier does not fix a missing Context. Right model, wrong prompt = still wrong.",
    "Distractor: 'Rewrite the whole prompt after one bad output.' Only change the component that failed — rewriting discards what worked.",
    "Watch for: Brainstorming questions where tight constraints are offered as the answer. The correct answer is always 'goal and guardrails only.'"
  ],
  key_quote: "Context is the component professionals most often omit. Claude cannot know what's in your head.",
  quiz_answers: "Q1: B (Context) · Q2: C (constraint + format) · Q3: C (decompose) · Q4: B (goal + guardrails) · Q5: C (code execution) · Q6: A,C (multi) · Q7: B (diminishing returns) · Q8: C (Context) · Q9: C (extract first)"
},
{
  module: 3,
  title: "Evaluating & Validating Output",
  theme: "You own everything you ship. Fluency is not accuracy. Discernment means evaluating against requirements, sources, and standards — Diligence means owning the result regardless of who generated it.",
  insights: [
    "Claude's confident tone is uniform. A fabricated statistic reads identically to a verified one. Tone is never a quality signal.",
    "Three evaluation references: requirements (did it do what I asked?), source material (are facts grounded in my inputs?), professional standards (does it meet my role's bar?).",
    "Hallucinations have patterns: fabricated specifics (the precision is the tell), capability hallucination (claiming to have acted), completeness failure (confident summary masking silence).",
    "Three grounding techniques: permit 'I don't know', restrict to provided sources, require auditable citations. All three can appear in one instruction.",
    "Code Execution is the only format that guarantees a correct number. Structured output looks organised but is still generated.",
    "Four risk thresholds trigger close review: stakes, reversibility, audience, regulatory exposure. High on any one = review before use."
  ],
  exam_traps: [
    "Distractor: 'Citations mean the information is verified.' Citations from training memory are as unreliable as uncited claims — they need independent verification.",
    "Distractor: 'A configured Skill removes the need for review.' It does not. Review is structural, regardless of how well the Skill performs.",
    "Watch for: Scenarios where the diligence failure is the answer — accountable professional ships something wrong. Diligence = you own it."
  ],
  key_quote: "Accountability does not transfer to the tool. What you ship, you are answerable for.",
  quiz_answers: "Q1: C (Diligence) · Q2: C (tone ≠ accuracy) · Q3: B (verify independently) · Q4: C (financial → high stakes) · Q5: B,C (multi: Discernment + Diligence) · Q6: B (review stays) · Q7: B (training cutoff) · Q8: B (Discernment)"
},
{
  module: 4,
  title: "Workflow Integration & Solution Design",
  theme: "Delegation is a judgment, not a default. Every step in a workflow must be evaluated on reversibility, stakes, and accountability — independently, not inherited from the previous step.",
  insights: [
    "Accountability is the decisive criterion. A step a person must answer for stays human-retained — regardless of how mechanically capable AI is at performing it.",
    "Three delegation classifications: AI-appropriate (reversible, low stakes, mechanical), Collaborative (AI drafts, human judges — gate must be real), Human-retained (irreversible, high stakes, accountability-bearing).",
    "Three mapping errors: halo delegation (prior step went well → next step auto-delegated), collapsing collaborative (review gate never staffed), mapping the tool (features you like vs. actual step risk).",
    "A defined gate must name who reviews, what they verify, and when. 'Someone will check it' is not a gate.",
    "When a prompt-built artifact becomes infrastructure three departments rely on, escalate — that's Developer scope.",
    "Describe AI involvement accurately. Name the human gate explicitly. Overstatement destroys trust at the first visible error."
  ],
  exam_traps: [
    "Distractor: 'If Claude can do it well, it should.' Mechanical competence does not determine delegation — accountability does.",
    "Distractor: 'Collaborative steps are safe.' Only if the gate is actually staffed. Nominal review ≠ real review.",
    "Watch for: Multi-step workflow questions. Identify which step carries accountability or is irreversible — that's always human-retained."
  ],
  key_quote: "A review gate that is never staffed is not a review gate — it is automation.",
  quiz_answers: "Q1: B (over-delegation) · Q2: C (AI-appropriate) · Q3: A (halo delegation) · Q4: B (escalate) · Q5: B (accurate description) · Q6: C,D (multi: approve + sign) · Q7: B (code execution for numbers) · Q8: C (Delegation) · Q9: B (collapsing collaborative)"
},
{
  module: 5,
  title: "Configuration & Knowledge Management",
  theme: "Configuration is not a one-time setup — it drifts. The right home for each piece of configuration (instruction, knowledge, Skill) matters, and only precise instructions change output.",
  insights: [
    "Four mechanisms, each for a different type of content: standing instructions (rules), knowledge base (facts), Skills (procedures), scoped Memory (evolving project state).",
    "Skills live at the account level — not inside Projects. One Skill serves every Project that needs it.",
    "Instruction precision test: would two different people implement this the same way? If not, it will fail silently.",
    "The pairing rule: a behaviour rule and the facts it acts on belong together. Neither works alone.",
    "Monthly maintenance cadence for active Projects. Stale configuration produces output quality degradation with no error message.",
    "Custom-uploaded Skills only update when you re-upload. Org-provisioned and Anthropic Skills update automatically."
  ],
  exam_traps: [
    "Distractor: 'Vague instructions still guide behaviour.' They don't — vague instructions fail silently. 'Be accurate' changes nothing.",
    "Distractor: 'Skills live inside the Project they're used in.' They don't — account level, reusable across all Projects.",
    "Watch for: Stale config scenarios. Signal: 'it used to work.' Fix: maintenance — not a model upgrade, not a new prompt."
  ],
  key_quote: "Waiting until output quality drops means drift has already reached deliverables.",
  quiz_answers: "Q1: B (Skill) · Q2: B (account level) · Q3: B (separate Projects) · Q4: C (precise instruction) · Q5: C (stale config) · Q6: C (pairing rule) · Q7: C (monthly) · Q8: B (scoped Memory) · Q9: B (Rule→instruction, Reference→KB, Procedure→Skill)"
},
{
  module: 6,
  title: "Governance, Risk & Responsible Use",
  theme: "Governance is daily practice, not an audit checkbox. Apply it on routine low-visibility decisions — not only obvious high-stakes ones.",
  insights: [
    "Three classification tiers: fully appropriate, appropriate with human review, inappropriate. The load-bearing criterion is the one that, if changed, moves the classification.",
    "Skills inherit full session access — not just what the task needs. Unknown source + disproportionate reach = escalate, not enable.",
    "Data sensitivity: Green (safe), Yellow (review first), Red (stop and escalate). Incognito controls persistence, not compliance.",
    "Incognito does NOT override organisational data retention. It does NOT make red data safe. It is not a compliance mechanism.",
    "Least privilege: grant the narrowest access that lets the job get done. Applies to all features, integrations, and Skills.",
    "Diligence gap: when the compliant path is harder than the workaround, people drift. Fix the friction — don't ban the tool."
  ],
  exam_traps: [
    "Distractor: 'Incognito mode protects sensitive data.' It controls persistence only — not whether the data was allowed in the entry point.",
    "Distractor: 'A colleague vouched for the Skill.' Colleague endorsement is not organisational vetting.",
    "Watch for: Bias scenarios in automated screening. Automated exclusion with no human review of who was dropped is the ethical concern — not just 'AI made a decision.'"
  ],
  key_quote: "Internal does not mean vetted.",
  quiz_answers: "Q1: C (inappropriate) · Q2: B (escalate for review) · Q3: C (Red tier) · Q4: B (who/what/when) · Q5: C (Incognito ≠ compliance) · Q6: B (bias: automated exclusion) · Q7: B (least privilege) · Q8: B (Diligence gap)"
},
{
  module: 7,
  title: "Troubleshooting & Optimization",
  theme: "Diagnose before concluding. Most failures have a simple cause earlier in the diagnostic sequence. 'This task is impossible for Claude' is always the last hypothesis, never the first.",
  insights: [
    "Four failure patterns: under-specification (first response wrong), context overload (degrades over time), wrong feature/model (specific repeatable error), stale configuration ('it used to work').",
    "Diagnostic sequence: cheapest fix first. Check specification → context → feature/model → configuration → task fit. Step 5 is the most expensive — save it for last.",
    "Translate reactions ('too generic') into instructions ('add the three criteria from the brief and limit to 200 words'). Only instructions move a prompt forward.",
    "When a fix works, promote it. One-off improvements left in chat are rediscovered every cycle. Standing instruction or Skill = one-time cost.",
    "Three friction signals: repetition (same paste every run), correction (same flaw every output), variance (different people get different results on same task).",
    "Diminishing returns on optimisation is also a signal: once the metric is good enough, further tuning is itself a form of friction."
  ],
  exam_traps: [
    "Distractor: 'Output quality is shallow — use Opus.' Shallow output on a speed-tier model = wrong model tier. But add specification check first.",
    "Distractor: 'Conclude Claude can't do this.' Only after steps 1–4 in the diagnostic sequence.",
    "Watch for: 'Used to work' scenarios — always stale configuration, never under-specification."
  ],
  key_quote: "'This task is impossible for Claude' is always the last hypothesis — never the first.",
  quiz_answers: "Q1: C (under-specification) · Q2: B (wrong model tier) · Q3: B (uncaptured fix) · Q4: B (cheapest-fix-first sequence) · Q5: B (shared Skill) · Q6: D (stale config) · Q7: C (prove before committing)"
},
{
  module: 8,
  title: "Course Summary & Next Steps",
  theme: "The four competencies build on each other. You cannot evaluate output you don't understand how to request. You cannot govern what you don't know how to evaluate.",
  insights: [
    "AI Fluency Framework: Description (prompt) → Discernment (evaluate) → Diligence (own) → Delegation (govern). Each assumes the one before it.",
    "The arc: Selection sets what's possible → Prompting shapes what's requested → Evaluation catches what's wrong → Integration maps what's delegated → Configuration sustains what's built → Governance protects what's deployed → Troubleshooting recovers when things drift.",
    "Associate scope ends at prompt-and-iterate. API integration, agent building, tool development = escalate to Developer.",
    "Recognising the boundary and escalating across it is listed as an Associate-level skill — not a failure, a judgment.",
    "The course is a coordination mechanism: a verified common floor, not an expert ceiling."
  ],
  exam_traps: [
    "Distractor: 'Keep building past the escalation threshold.' Associate scope ends at the prompt-and-iterate boundary.",
    "Watch for: competency identification questions. Description = prompting. Discernment = evaluation. Diligence = ownership/accountability. Delegation = workflow mapping."
  ],
  key_quote: "Recognising the boundary and escalating across it is itself an Associate-level skill.",
  quiz_answers: "Q1: D (Description) · Q2: C (escalate to Developer)"
}
];
