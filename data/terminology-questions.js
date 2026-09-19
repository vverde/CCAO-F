const TERMINOLOGY_DRILL = [
  {
    "id": 1,
    "category": "Product & Model Selection",
    "type": "multi",
    "prompt": "Which FOUR entry-point mappings match the course? Select FOUR.",
    "options": [
      "One-off question or quick task → Chat",
      "Recurring work with stable context → Project",
      "Standalone editable deliverable → Artifact",
      "Deep multi-source investigation and synthesis → Research",
      "Quick current-information lookup always requires Research",
      "Reusable procedure → Artifact"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The four entry points solve different problems: Chat for one-off work, Projects for recurring work with stable context, Artifacts for deliverables, and Research for deep multi-source investigation. A quick current lookup can use web search in Chat."
  },
  {
    "id": 2,
    "category": "Product & Model Selection",
    "type": "multi",
    "prompt": "Which THREE questions form the course test for whether a Project is worth building? Select THREE.",
    "options": [
      "Does this task recur?",
      "Is the background context the same across sessions?",
      "Is the output format consistent?",
      "Does the task require the most capable model?",
      "Will the output be sent externally?"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The Project test is recurrence, stable background context, and consistent output format. If two or more are yes, the course recommends building a Project."
  },
  {
    "id": 3,
    "category": "Product & Model Selection",
    "type": "multi",
    "prompt": "In the four-layer capability model, which TWO mappings are correct? Select TWO.",
    "options": [
      "Projects carry context",
      "Skills persist personal continuity",
      "Code Execution verifies computations",
      "Memory defines repeatable procedures",
      "Artifacts carry standing instructions"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Projects carry context, Skills define procedures, Code Execution verifies computations, and Memory persists continuity."
  },
  {
    "id": 4,
    "category": "Product & Model Selection",
    "type": "single",
    "prompt": "Which statement best describes a Skill?",
    "options": [
      "A Project-specific store of facts",
      "A reusable procedure that can apply across conversations and Projects",
      "A separate editable deliverable block",
      "A replacement for human review when consistency matters"
    ],
    "correct": [
      1
    ],
    "explanation": "Skills are reusable procedures. They live at the account level and can be used wherever relevant. They reduce variance but do not remove review."
  },
  {
    "id": 5,
    "category": "Product & Model Selection",
    "type": "single",
    "prompt": "What is the core reason to use Code Execution instead of prose generation for a calculation?",
    "options": [
      "It makes the writing more concise",
      "It runs a computation that can be traced and checked",
      "It automatically guarantees the code logic is correct",
      "It prevents context-window degradation"
    ],
    "correct": [
      1
    ],
    "explanation": "Code Execution runs the calculation, producing a computed, checkable result. The code logic can still contain a bug, so the result remains reviewable rather than magically guaranteed."
  },
  {
    "id": 6,
    "category": "Product & Model Selection",
    "type": "single",
    "prompt": "Which distinction between knowledge and Memory is most accurate?",
    "options": [
      "Knowledge is for stable reference material; Memory is for continuity such as evolving decisions and preferences",
      "Knowledge is personal; Memory is always organization-wide",
      "Knowledge stores procedures; Memory stores only uploaded files",
      "Knowledge is temporary; Memory is always permanent"
    ],
    "correct": [
      0
    ],
    "explanation": "Stable reference facts belong in knowledge. Memory is for continuity across sessions, such as preferences, stakeholders, or evolving decisions."
  },
  {
    "id": 7,
    "category": "Product & Model Selection",
    "type": "multi",
    "prompt": "Which TWO context-management actions are correctly defined? Select TWO.",
    "options": [
      "Restart: begin a fresh conversation when the current thread has drifted or a new task begins",
      "Summarize: compress the current state so it can seed a fresh conversation",
      "Persist: keep extending the same thread so no context is lost",
      "Restart: delete the Project knowledge base to clear old information",
      "Summarize: move all recurring facts into a Skill"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Restart means opening a fresh conversation. Summarize means carrying forward decisions, work in progress, and open questions in a compact form. Persist is the third strategy: save recurring information to Memory or Project knowledge."
  },
  {
    "id": 8,
    "category": "Product & Model Selection",
    "type": "single",
    "prompt": "Which model-tier mapping matches the course decision logic?",
    "options": [
      "Haiku for nuanced high-stakes judgment; Sonnet for extraction; Opus for volume",
      "Haiku for routine structured work at volume; Sonnet for most professional work; Opus for complex judgment",
      "Haiku for Research only; Sonnet for Artifacts only; Opus for Projects only",
      "Haiku for drafting; Sonnet only for calculations; Opus only for regulated work"
    ],
    "correct": [
      1
    ],
    "explanation": "The course uses a speed-capability trade-off: Haiku for fast structured work, Sonnet as the balanced default for most professional tasks, and Opus for complex or high-stakes reasoning."
  },
  {
    "id": 9,
    "category": "Prompting & Task Execution",
    "type": "multi",
    "prompt": "Which FIVE items make up the professional prompt component stack? Select FIVE.",
    "options": [
      "Role",
      "Context",
      "Task",
      "Constraints",
      "Output format",
      "Model tier",
      "Memory",
      "Citation count"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "The five prompt components are Role, Context, Task, Constraints, and Output format."
  },
  {
    "id": 10,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "Which prompt component sets the vocabulary, depth, and assumptions Claude should bring to the work?",
    "options": [
      "Role",
      "Context",
      "Constraints",
      "Output format"
    ],
    "correct": [
      0
    ],
    "explanation": "Role defines who Claude should act as for the task and therefore influences vocabulary, depth, and assumptions."
  },
  {
    "id": 11,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "Which prompt component contains background Claude cannot know unless you provide or connect it?",
    "options": [
      "Task",
      "Context",
      "Role",
      "Output format"
    ],
    "correct": [
      1
    ],
    "explanation": "Context includes audience, situation, prior decisions, and source material. Missing context is a common cause of generic output."
  },
  {
    "id": 12,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "A well-specified Task component should usually center on what?",
    "options": [
      "A clear primary action verb",
      "A detailed persona",
      "A list of background documents",
      "A model-selection rationale"
    ],
    "correct": [
      0
    ],
    "explanation": "The Task is the specific action, ideally expressed through a clear primary verb such as summarize, compare, draft, or identify."
  },
  {
    "id": 13,
    "category": "Prompting & Task Execution",
    "type": "multi",
    "prompt": "Which TWO mappings are correct? Select TWO.",
    "options": [
      "Constraints define boundaries such as length, tone, inclusions, and exclusions",
      "Output format defines the shape of the result",
      "Constraints define the source-of-truth documents",
      "Output format defines the model tier",
      "Role defines the response length"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Constraints control boundaries. Output format controls the shape of the deliverable, such as a table, memo, or bullet list."
  },
  {
    "id": 14,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "In the AI Fluency vocabulary, what does Description primarily mean?",
    "options": [
      "Telling Claude precisely what you want",
      "Verifying every claim before shipping",
      "Choosing what stays human versus AI",
      "Deciding whether a use case is ethical"
    ],
    "correct": [
      0
    ],
    "explanation": "Description is the competency of specifying what you want clearly. In prompting, that means making the necessary components explicit instead of assuming Claude will infer them."
  },
  {
    "id": 15,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "What is task decomposition?",
    "options": [
      "Changing model tiers after every response",
      "Splitting a multi-stage problem into discrete ordered steps with checkable intermediate results",
      "Putting all requirements into one long prompt",
      "Running the same prompt several times and choosing the best answer"
    ],
    "correct": [
      1
    ],
    "explanation": "Decomposition breaks complex work into ordered steps. Each step produces an intermediate result that can be checked before the next stage depends on it."
  },
  {
    "id": 16,
    "category": "Prompting & Task Execution",
    "type": "single",
    "prompt": "A response answers the wrong question even though it is otherwise well written. Which prompt component is the first place to diagnose?",
    "options": [
      "Role",
      "Task",
      "Output format",
      "Model tier"
    ],
    "correct": [
      1
    ],
    "explanation": "Answering the wrong question points to an ambiguous or poorly specified Task. The course recommends targeted revision of the failed component rather than rewriting everything."
  },
  {
    "id": 17,
    "category": "Prompting & Task Execution",
    "type": "multi",
    "prompt": "Which TWO task-strategy statements match the course? Select TWO.",
    "options": [
      "Analysis benefits from tight criteria and explicit standards",
      "Brainstorming benefits from high latitude and relatively loose constraints",
      "Research should avoid source constraints so synthesis stays creative",
      "Drafting should leave audience and tone unspecified",
      "Brainstorming should narrow to one direction before generating range"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Analysis wants control and explicit criteria. Brainstorming wants range, so it uses loose guardrails and high latitude before narrowing."
  },
  {
    "id": 18,
    "category": "Evaluation & Validation",
    "type": "multi",
    "prompt": "Which FOUR terms are the AI Fluency competencies used throughout the course? Select FOUR.",
    "options": [
      "Description",
      "Discernment",
      "Diligence",
      "Delegation",
      "Determinism",
      "Decomposition"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The four AI Fluency competencies are Description, Discernment, Diligence, and Delegation."
  },
  {
    "id": 19,
    "category": "Evaluation & Validation",
    "type": "multi",
    "prompt": "Which THREE references make up the course evaluation protocol? Select THREE.",
    "options": [
      "Requirements",
      "Source material",
      "Professional standards",
      "Model confidence",
      "Response length"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Evaluate output against what you asked for, the source material it relies on, and the professional standards of the field."
  },
  {
    "id": 20,
    "category": "Evaluation & Validation",
    "type": "single",
    "prompt": "Which set lists the three output-triage verdicts?",
    "options": [
      "Accept, reject, retry",
      "Ready to use, needs revision, needs human override",
      "Green, yellow, red",
      "AI-appropriate, collaborative, human-retained"
    ],
    "correct": [
      1
    ],
    "explanation": "The evaluation triage is Ready to use, Needs revision, or Needs human override."
  },
  {
    "id": 21,
    "category": "Evaluation & Validation",
    "type": "single",
    "prompt": "Which statement correctly distinguishes accuracy from completeness?",
    "options": [
      "Accuracy asks whether what is present is correct; completeness asks whether something important is missing",
      "Accuracy applies to numbers; completeness applies to prose",
      "Accuracy is a prompt property; completeness is a model property",
      "Accuracy and completeness are two names for the same review"
    ],
    "correct": [
      0
    ],
    "explanation": "An output can be fully accurate in what it says yet still be incomplete because it omits a critical factor. The two checks fail independently."
  },
  {
    "id": 22,
    "category": "Evaluation & Validation",
    "type": "multi",
    "prompt": "Which THREE are named hallucination or failure signatures in the course? Select THREE.",
    "options": [
      "Plausible-but-unsupported claims",
      "Fabricated specifics",
      "Confident tone masking uncertainty",
      "Perfectly repeated wording",
      "Explicit refusal to guess"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The course highlights plausible-but-unsupported claims, fabricated specifics, and confident tone masking uncertainty. It also covers internal contradictions and capability hallucination."
  },
  {
    "id": 23,
    "category": "Evaluation & Validation",
    "type": "single",
    "prompt": "What is a capability hallucination?",
    "options": [
      "Claude invents a statistic",
      "Claude claims to have performed an external action it did not have the tool or authority to perform",
      "Claude gives two contradictory numbers",
      "Claude omits part of a source document"
    ],
    "correct": [
      1
    ],
    "explanation": "A capability hallucination is a claim that an action occurred when Claude could not actually perform that action, such as claiming an email was sent without an enabled tool that can send it."
  },
  {
    "id": 24,
    "category": "Evaluation & Validation",
    "type": "multi",
    "prompt": "Which THREE prompt habits make an answer easier to verify? Select THREE.",
    "options": [
      "Permit 'I don't know'",
      "Restrict answers to provided sources when appropriate",
      "Require auditable citations",
      "Tell Claude to sound more confident",
      "Avoid exposing uncertainty"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The verification pattern is to permit uncertainty, bound the answer to sources where appropriate, and require citations you can actually trace."
  },
  {
    "id": 25,
    "category": "Evaluation & Validation",
    "type": "multi",
    "prompt": "Which FOUR thresholds determine when human review becomes non-negotiable? Select FOUR.",
    "options": [
      "Stakes",
      "Reversibility",
      "Audience",
      "Regulatory exposure",
      "Prompt length",
      "Model popularity"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The four Diligence thresholds are Stakes, Reversibility, Audience, and Regulatory exposure."
  },
  {
    "id": 26,
    "category": "Evaluation & Validation",
    "type": "single",
    "prompt": "What does Diligence mean in the AI Fluency framework?",
    "options": [
      "Owning and verifying the output, with accountability staying human",
      "Writing prompts with five components",
      "Choosing the fastest model that works",
      "Giving Claude more autonomy as confidence increases"
    ],
    "correct": [
      0
    ],
    "explanation": "Diligence is the accountability stance: the professional remains answerable for what is shipped and verifies accordingly."
  },
  {
    "id": 27,
    "category": "Evaluation & Validation",
    "type": "single",
    "prompt": "What principle governs output-format choice when reliability matters?",
    "options": [
      "Use the most visually attractive format",
      "Choose the modality by the reliability requirement; use Code Execution when numbers must be computed",
      "Always use an Artifact for professional work",
      "Use prose first because it is easier to review"
    ],
    "correct": [
      1
    ],
    "explanation": "Output format is a reliability decision. Numeric results that matter should be computed with Code Execution rather than generated as plausible prose."
  },
  {
    "id": 28,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "In requirements analysis, what is the preferred transformation of messy business input?",
    "options": [
      "Turn it into a narrative summary only",
      "Turn it into structured, traceable, testable requirements",
      "Replace it with a generic best-practice checklist",
      "Move directly to solution design before resolving ambiguity"
    ],
    "correct": [
      1
    ],
    "explanation": "The course treats Claude as a requirements-analysis partner: extract, structure, trace, and flag ambiguity so the output becomes actionable."
  },
  {
    "id": 29,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "What is the purpose of pressure-testing extracted requirements?",
    "options": [
      "To shorten the requirement list",
      "To surface ambiguous, multi-interpretable, or implied requirements",
      "To choose the model tier",
      "To convert every requirement into a Skill"
    ],
    "correct": [
      1
    ],
    "explanation": "Pressure-testing challenges the first-pass list and reveals ambiguity, competing interpretations, and requirements that were only implied."
  },
  {
    "id": 30,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "Which split best describes the course approach to planning work?",
    "options": [
      "Claude for synthesis; Code Execution for verified calculations; humans retain judgment calls",
      "Code Execution for synthesis; Claude for exact arithmetic; humans only format the result",
      "Claude for all steps once a Project exists",
      "Humans for synthesis; AI only for formatting"
    ],
    "correct": [
      0
    ],
    "explanation": "Planning combines synthesis and calculation. Claude helps structure and synthesize; Code Execution computes figures; human judgment stays with people where risk appetite or context cannot be delegated."
  },
  {
    "id": 31,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "Which sequence is the solution-design iteration loop taught in the course?",
    "options": [
      "Ideate → prototype → feedback → refine",
      "Prompt → automate → deploy → forget",
      "Research → approve → delegate → archive",
      "Classify → redact → compute → disclose"
    ],
    "correct": [
      0
    ],
    "explanation": "The design loop is ideate, prototype, gather feedback, refine, and repeat until the solution holds."
  },
  {
    "id": 32,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "What is the clearest escalation signal that a prompt-and-iterate artifact has outgrown Associate-level solution design?",
    "options": [
      "The output needs a chart",
      "People begin relying on it as infrastructure with uptime, security, or integration requirements",
      "The prompt becomes longer than one paragraph",
      "The work is recurring"
    ],
    "correct": [
      1
    ],
    "explanation": "When others depend on the solution as a system and it carries infrastructure requirements, it belongs with Developer or Architect expertise."
  },
  {
    "id": 33,
    "category": "Workflow Integration",
    "type": "multi",
    "prompt": "Which THREE criteria are used to map individual workflow steps for Delegation? Select THREE.",
    "options": [
      "Reversibility",
      "Stakes",
      "Accountability",
      "Audience",
      "Source",
      "Reach"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Workflow Delegation Mapping judges each step by Reversibility, Stakes, and Accountability."
  },
  {
    "id": 34,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "A step is labeled 'AI drafts, human reviews,' but in practice no reviewer is assigned. Which mapping error is this?",
    "options": [
      "Halo delegation",
      "Collapsing collaborative into automate",
      "Mapping the tool instead of the work",
      "Context overload"
    ],
    "correct": [
      1
    ],
    "explanation": "A collaborative step without a real human review gate is effectively automated. The course calls this collapsing collaborative into automate."
  },
  {
    "id": 35,
    "category": "Workflow Integration",
    "type": "single",
    "prompt": "What is the core rule for communicating an AI workflow to stakeholders?",
    "options": [
      "Emphasize automation and avoid discussing limitations",
      "State the value, the capability boundary, and the human review gates accurately",
      "Use the same technical explanation for every audience",
      "Describe Claude as owning the outcome when it produced most of the draft"
    ],
    "correct": [
      1
    ],
    "explanation": "Credibility comes from bounded claims. Explain what Claude does, what it does not do, and where human oversight remains, calibrated to the audience."
  },
  {
    "id": 36,
    "category": "Configuration & Knowledge",
    "type": "multi",
    "prompt": "Which FOUR mechanisms make up the Project configuration model taught in the course? Select FOUR.",
    "options": [
      "Standing instructions",
      "Knowledge base",
      "Skills",
      "Scoped Memory",
      "Research Mode",
      "Artifacts"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The course configuration model uses standing instructions for behavior, knowledge for references, Skills for reusable procedures, and scoped Memory for continuity. Skills themselves live at the account level but are part of how a Project workflow is configured."
  },
  {
    "id": 37,
    "category": "Configuration & Knowledge",
    "type": "single",
    "prompt": "Which mapping is correct?",
    "options": [
      "Behavior rule → standing instruction; stable reference fact → knowledge; repeatable procedure → Skill; evolving continuity → scoped Memory",
      "Behavior rule → knowledge; stable fact → Memory; procedure → Artifact; continuity → Research",
      "Behavior rule → Skill; stable fact → standing instruction; procedure → Memory; continuity → connector",
      "All recurring information belongs in standing instructions"
    ],
    "correct": [
      0
    ],
    "explanation": "The rule-reference-procedure-continuity distinction is central to configuration: instructions, knowledge, Skills, and Memory each solve a different problem."
  },
  {
    "id": 38,
    "category": "Configuration & Knowledge",
    "type": "single",
    "prompt": "What is the 'pairing rule' in Project configuration?",
    "options": [
      "Every Project must use exactly two model tiers",
      "A recurring need often spans mechanisms, such as a behavior rule in instructions plus the documents it acts on in knowledge",
      "Memory and knowledge should always contain identical information",
      "Every Skill must be copied into the Project instructions"
    ],
    "correct": [
      1
    ],
    "explanation": "Clean configurations often combine mechanisms. For example, an instruction says to cite sources while the source documents themselves live in the knowledge base."
  },
  {
    "id": 39,
    "category": "Configuration & Knowledge",
    "type": "single",
    "prompt": "What does a connector's capability boundary describe?",
    "options": [
      "The maximum number of documents in a Project",
      "Which external-system actions and data access the connector actually supports",
      "The model's training cutoff",
      "How long Memory retains a preference"
    ],
    "correct": [
      1
    ],
    "explanation": "A connector has defined abilities and limits, such as being able to search or read but not necessarily send or modify. Workflows should be designed around the real boundary."
  },
  {
    "id": 40,
    "category": "Configuration & Knowledge",
    "type": "single",
    "prompt": "What is the test of a strong standing instruction?",
    "options": [
      "It sounds professional",
      "Two different people would interpret it the same way",
      "It includes as much context as possible",
      "It mentions the model by name"
    ],
    "correct": [
      1
    ],
    "explanation": "Standing instructions should be operationally precise. The course test is whether two people would read the instruction the same way."
  },
  {
    "id": 41,
    "category": "Configuration & Knowledge",
    "type": "multi",
    "prompt": "Which TWO statements about configuration maintenance are correct? Select TWO.",
    "options": [
      "Active Projects should be reviewed on a recurring cadence for stale instructions, superseded knowledge, and Skill fit",
      "A stale Memory entry can actively mislead later work",
      "Once a configuration works, changing it creates more risk than leaving it alone",
      "Custom Skills automatically update whenever the process changes",
      "Duplicate policy versions improve recall"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Configurations decay quietly. Review them regularly, remove superseded sources, and edit or delete stale Memory."
  },
  {
    "id": 42,
    "category": "Configuration & Knowledge",
    "type": "single",
    "prompt": "Which statement about custom Skills is correct in the course material?",
    "options": [
      "They are stored separately inside every Project",
      "They change only when the custom Skill is updated or re-uploaded; stale Skills can become a maintenance problem",
      "They eliminate output variance",
      "They should hold stable reference documents rather than procedures"
    ],
    "correct": [
      1
    ],
    "explanation": "Custom Skills can drift out of date and require deliberate maintenance. A slightly wrong recurring format can be a Skill-versioning problem rather than a prompt problem."
  },
  {
    "id": 43,
    "category": "Governance & Responsible Use",
    "type": "multi",
    "prompt": "Which FOUR criteria are used to screen an entire use case for appropriateness? Select FOUR.",
    "options": [
      "Reversibility",
      "Consequence of error",
      "Need for human creativity or empathy",
      "Accountability",
      "Output format",
      "Conversation length"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Use-case screening adds the human-element question to reversibility, consequence, and accountability. This is broader than the three-criterion workflow-step map."
  },
  {
    "id": 44,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "What is the load-bearing criterion in a governance decision?",
    "options": [
      "The criterion with the longest written explanation",
      "The criterion that, if changed, would move the use case between classifications",
      "The first criterion on the checklist",
      "The criterion owned by the most senior stakeholder"
    ],
    "correct": [
      1
    ],
    "explanation": "The load-bearing criterion is the one that actually determines the classification: changing it would change the governance call."
  },
  {
    "id": 45,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "Which set lists the three use-case classifications?",
    "options": [
      "Ready, revise, override",
      "Fully appropriate, appropriate with human review, inappropriate",
      "Green, yellow, red",
      "AI-appropriate, collaborative, human-retained"
    ],
    "correct": [
      1
    ],
    "explanation": "Whole use cases are classified as fully appropriate, appropriate with human review, or inappropriate."
  },
  {
    "id": 46,
    "category": "Governance & Responsible Use",
    "type": "multi",
    "prompt": "A defined human-review gate must specify which THREE things? Select THREE.",
    "options": [
      "Who reviews",
      "What they verify",
      "When the review happens",
      "Which model generated the draft",
      "How many tokens the prompt used"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "A real gate is concrete: who is accountable for reviewing, what risk they check, and when that review occurs before the output is used."
  },
  {
    "id": 47,
    "category": "Governance & Responsible Use",
    "type": "multi",
    "prompt": "Which THREE checks make up the Skill trust evaluation? Select THREE.",
    "options": [
      "Source",
      "Reach",
      "Appropriateness",
      "Audience",
      "Reversibility"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Before enabling a Skill, evaluate who published it, what it could reach in the sessions where it runs, and whether that access/capability is appropriate for the task."
  },
  {
    "id": 48,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "Which set lists the three outcomes of a Skill trust check?",
    "options": [
      "Enable, escalate, decline",
      "Install, test, publish",
      "Green, yellow, red",
      "Approve, revise, override"
    ],
    "correct": [
      0
    ],
    "explanation": "A trust check ends in Enable, Escalate for organizational review, or Decline when the risk is clearly disproportionate or the source cannot be established."
  },
  {
    "id": 49,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "What does least privilege mean in this course?",
    "options": [
      "Use the smallest model tier available",
      "Grant the narrowest data/tool access that lets the job get done",
      "Allow only managers to use Skills",
      "Remove all connectors from sensitive Projects"
    ],
    "correct": [
      1
    ],
    "explanation": "Least privilege means access should be proportional to the need: grant only what the task requires and revisit that access when the job changes."
  },
  {
    "id": 50,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "Which data-tier mapping is correct?",
    "options": [
      "Green = safe to use; Yellow = review first; Red = keep out unless an approved path exists",
      "Green = public only; Yellow = internal only; Red = external only",
      "Green = Chat; Yellow = Project; Red = Research",
      "Green = low stakes; Yellow = medium stakes; Red = high stakes regardless of data type"
    ],
    "correct": [
      0
    ],
    "explanation": "The three-tier data classification is Green (safe), Yellow (review first), and Red (keep out unless an approved path exists)."
  },
  {
    "id": 51,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "Which statement about redaction is most accurate?",
    "options": [
      "Removing a person's name always makes the data anonymous",
      "Redaction works when sensitive identifiers are not necessary for the task, but partial redaction can still leave someone identifiable",
      "Redaction makes regulated data automatically approved for any entry point",
      "Redaction should be used even when the task depends on the identifiers"
    ],
    "correct": [
      1
    ],
    "explanation": "Redaction is useful only when the sensitive specifics are not needed. Partial redaction can fail if other fields still identify the person."
  },
  {
    "id": 52,
    "category": "Governance & Responsible Use",
    "type": "single",
    "prompt": "What does Incognito mode control, and what does it NOT establish?",
    "options": [
      "It keeps the session out of chat history and Memory; it does not determine whether the data was approved for that entry point",
      "It disables all organizational retention and makes regulated data safe",
      "It anonymizes every uploaded file but leaves Memory on",
      "It prevents Code Execution from accessing uploaded data"
    ],
    "correct": [
      0
    ],
    "explanation": "Incognito controls history and Memory persistence. It does not override organizational retention rules and does not answer the prior governance question: is this data allowed here at all?"
  },
  {
    "id": 53,
    "category": "Governance & Responsible Use",
    "type": "multi",
    "prompt": "When policy does not settle an ethical case cleanly, which FOUR questions form the course reasoning approach? Select FOUR.",
    "options": [
      "Who is affected?",
      "What could go wrong?",
      "What would a fair outcome look like?",
      "What disclosure does the situation call for?",
      "Which model sounds most confident?",
      "Can the output be made longer?"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The ethical reasoning pattern is to identify who is affected, possible harm, the fair outcome, and the appropriate disclosure. Escalate when the scale or potential harm exceeds individual judgment."
  },
  {
    "id": 54,
    "category": "Troubleshooting & Optimization",
    "type": "multi",
    "prompt": "Which FOUR root-cause patterns make up the main troubleshooting taxonomy? Select FOUR.",
    "options": [
      "Under-specification",
      "Context overload",
      "Wrong feature or model",
      "Stale configuration",
      "Low creativity",
      "Over-disclosure"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The four common root causes are under-specification, context overload, wrong feature/model, and stale configuration. Expectation mismatch is considered after these cheaper causes are ruled out."
  },
  {
    "id": 55,
    "category": "Troubleshooting & Optimization",
    "type": "single",
    "prompt": "Why does the diagnostic sequence start by re-reading the prompt against the five components?",
    "options": [
      "Because under-specification is common and cheap to fix",
      "Because model switching should always be avoided",
      "Because Projects cannot suffer context overload",
      "Because configuration cannot affect output quality"
    ],
    "correct": [
      0
    ],
    "explanation": "The sequence is ordered cheapest-fix-first. Prompt specification is quick to check and resolves many failures before costlier changes are attempted."
  },
  {
    "id": 56,
    "category": "Troubleshooting & Optimization",
    "type": "single",
    "prompt": "Which timing signature most strongly suggests under-specification?",
    "options": [
      "The very first response is wrong or generic",
      "A long session starts well and degrades later",
      "The same workflow worked last month but is now off",
      "Only calculations are subtly wrong"
    ],
    "correct": [
      0
    ],
    "explanation": "Under-specification is usually wrong from the first response because the request never contained what the task required."
  },
  {
    "id": 57,
    "category": "Troubleshooting & Optimization",
    "type": "single",
    "prompt": "Which timing signature most strongly suggests context overload?",
    "options": [
      "The first response is immediately off-base",
      "A conversation works well at first, then early instructions lose force as the thread grows",
      "The output has always used an old template",
      "Only one user gets a different result"
    ],
    "correct": [
      1
    ],
    "explanation": "Context overload is a degradation-over-time pattern. The remedy is typically restart or summarize, not adding more detail to the already overloaded thread."
  },
  {
    "id": 58,
    "category": "Troubleshooting & Optimization",
    "type": "single",
    "prompt": "A recurring workflow used to work, but now produces an outdated format every run. Which root cause is most likely?",
    "options": [
      "Context overload",
      "Stale configuration",
      "Under-specification",
      "Brainstorming latitude"
    ],
    "correct": [
      1
    ],
    "explanation": "'Used to work' is the signature of stale configuration. Check standing instructions, knowledge, Skills, and Memory for drift before rewriting the prompt."
  },
  {
    "id": 59,
    "category": "Troubleshooting & Optimization",
    "type": "single",
    "prompt": "What is the key move in turning feedback into a durable improvement?",
    "options": [
      "Translate the reaction into a specific instruction or configuration change, then capture it if it will recur",
      "Keep the critique vague so future prompts stay flexible",
      "Move every correction into Memory",
      "Switch to the most capable model after any disappointing result"
    ],
    "correct": [
      0
    ],
    "explanation": "A reaction such as 'too generic' must become a concrete lever, such as adding audience context. If the correction will recur, promote it into the right configuration mechanism."
  },
  {
    "id": 60,
    "category": "Troubleshooting & Optimization",
    "type": "multi",
    "prompt": "Which THREE signals identify removable workflow friction in the optimization framework? Select THREE.",
    "options": [
      "Repetition",
      "Correction",
      "Variance",
      "Disclosure",
      "Reversibility"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The optimization framework looks for Repetition (same setup every run), Correction (same flaw fixed repeatedly), and Variance (different people get inconsistent results). These signals point toward configuration fixes."
  }
];
