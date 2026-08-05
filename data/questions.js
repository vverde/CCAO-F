const ALL_QUESTIONS = [

// ────────────────── MODULE 1 (8 q) ──────────────────
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "A consultant prepares weekly client status reports. Every Monday she re-pastes the same project background, team structure, and format instructions. Which entry point should she use instead?",
  options: ["Chat with Memory enabled","Project","Artifact","Research"],
  correct: [1],
  explanation: "<strong>Project</strong> is the right choice. Recurring work with stable context requirements belongs in a Project — standing instructions and knowledge base are set once and persist across every conversation."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "Which of the following is the BEST use case for the Research entry point?",
  options: ["Drafting a quick email reply","Formatting a spreadsheet","Synthesising current information from multiple sources across the web","Storing a company policy document for future reference"],
  correct: [2],
  explanation: "<strong>Research</strong> runs multi-step searches across multiple sources and synthesises them — designed for deep investigation requiring current, multi-source information."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "You need to classify 5,000 support tickets overnight. Which model tier is most appropriate?",
  options: ["Opus — highest quality","Sonnet — balanced","Haiku — fast and efficient for structured volume tasks","Research — multi-source"],
  correct: [2],
  explanation: "<strong>Haiku</strong> is optimised for structured, high-volume tasks where speed matters and the cost of an imperfect output is low. At 5,000 tickets, the speed advantage compounds."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "A senior lawyer needs Claude to review a complex 80-page merger agreement with multi-layered legal interdependencies and deliver a nuanced risk summary. Which model tier fits?",
  options: ["Haiku","Sonnet","Opus","Any tier — model choice doesn't affect quality"],
  correct: [2],
  explanation: "<strong>Opus</strong> handles complex judgment, ambiguous multi-layered inputs, and high-stakes output where quality outranks speed. This is a textbook Opus use case."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "multi",
  q: "Which THREE conditions should ALL be true before building a Project instead of using Chat?",
  options: ["The task recurs","The background context is stable across sessions","The output format is consistent","The model tier is Opus","The task takes more than 2 hours"],
  correct: [0,1,2],
  explanation: "The Project test: <strong>recurs · stable context · consistent format</strong>. Model tier and time spent are not criteria."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "Claude stopped following instructions it followed correctly at the start of a 90-minute session. What is the most likely cause?",
  options: ["The model was switched mid-session","Context overload — earlier instructions were compressed as the window filled","The Project's standing instructions were deleted","Haiku was selected instead of Opus"],
  correct: [1],
  explanation: "<strong>Context overload.</strong> As a session grows, Claude.ai automatically summarises earlier content to make room. Detailed instructions from the first 10 minutes can lose force by the end."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "You want to produce a formatted report that the recipient will open and read as a document. Which entry point or output type fits?",
  options: ["Chat — inline response","Research","Artifact","Project knowledge base"],
  correct: [2],
  explanation: "<strong>Artifacts</strong> are the right format when the result is a deliverable — they appear as a separate, editable block the recipient can open, not flowing into the chat thread."
},
{
  module: 1, tag: "M1 · Product & Model Selection", type: "single",
  q: "Which statement about Skills is correct?",
  options: ["Skills live inside a specific Project and only apply there","Skills live at the account level and are invoked automatically across any conversation","Skills replace the need for human review","Skills eliminate output variance entirely"],
  correct: [1],
  explanation: "<strong>Skills live at the account level</strong>, not inside any one Project. They are auto-invoked whenever relevant, inside or outside a Project — and they reduce variance but never eliminate it."
},

// ────────────────── MODULE 2 (9 q) ──────────────────
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "A prompt returns generic output that could describe any company. Which component is most likely missing?",
  options: ["Role","Context","Constraints","Output format"],
  correct: [1],
  explanation: "<strong>Context</strong> is the component professionals most often omit. Claude cannot see your org chart, inbox, or project history — anything in your head is a context gap."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "A draft email came back accurate but 3× too long and too formal. Which is the most efficient fix?",
  options: ["Rewrite the entire prompt from scratch","Switch to a more capable model","Adjust the constraints (length) and output format (tone), then resend","Accept it and cut manually"],
  correct: [2],
  explanation: "Adjust only the components that failed — <strong>constraint (length)</strong> and <strong>format/tone</strong>. Rewriting everything discards what worked and makes the cause of improvement untraceable."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "You need to evaluate five vendors and recommend one. What is the most reliable prompting approach?",
  options: ["Ask for evaluation and recommendation in one prompt","Ask Claude to recommend first, then justify afterward","Decompose: derive criteria → score each → identify trade-offs → recommend","Run five separate conversations, one per vendor"],
  correct: [2],
  explanation: "<strong>Decomposition</strong> breaks a complex task into ordered steps with checkable intermediate results. The criteria are verified before scoring; the recommendation is grounded in reasoning."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "You are prompting for a brainstorming session on campaign angles. How should you calibrate constraints?",
  options: ["Apply tight constraints: exact tone, word count, approved terminology","State the goal and a few guardrails only — ask for volume and range before filtering","Specify the single best direction so Claude stays on message","Use Opus to maximise creativity"],
  correct: [1],
  explanation: "<strong>Brainstorming wants latitude.</strong> Tight up-front constraints suppress the divergence you are after. Filter after generating, not before."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "A calculation in a Claude response looks subtly wrong. What is the correct fix?",
  options: ["Trust it — Claude is usually accurate on arithmetic","Ask Claude to recalculate three times and average the results","Add a constraint to use Code Execution so the figure is computed, not generated","Switch to Opus for better maths"],
  correct: [2],
  explanation: "<strong>Code Execution</strong> returns a verified computed result. Claude generating prose produces plausible-looking numbers that may not be accurate — including on arithmetic."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "multi",
  q: "Which TWO statements about decomposition are correct?",
  options: ["Keep sequential steps that build on each other in one conversation","Always split every step into a separate conversation","Move to a separate conversation when the session context is degrading","Never decompose — pack everything into one prompt for efficiency"],
  correct: [0,2],
  explanation: "<strong>Sequential steps that depend on each other stay in one conversation</strong> so each sees prior results. Move to a new conversation when context has grown long enough to degrade — a judgment call connecting to Module 1 context management."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "When iterating on a prompt, what signals that you should stop?",
  options: ["After exactly 3 rounds","When further rounds produce marginal change rather than improvement","When the output is grammatically perfect","When you have tried all 5 components"],
  correct: [1],
  explanation: "<strong>Diminishing returns</strong> is the signal. When each additional round produces marginal change, further prompting yields less than a quick manual edit."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "Which prompt component is described as 'the background Claude cannot know unless you provide it'?",
  options: ["Role","Task","Context","Constraints"],
  correct: [2],
  explanation: "<strong>Context</strong> is the background — audience, situation, prior decisions, source material. Unless connected via a Connector, Claude cannot see your inbox, org chart, or any data outside the session."
},
{
  module: 2, tag: "M2 · Prompting & Task Execution", type: "single",
  q: "A communications manager must turn one policy document into an internal announcement, an FAQ, and an executive briefing. What is the correct first step?",
  options: ["Draft the executive briefing first — it is highest priority","Draft all three in parallel in one prompt","Extract and verify the substantive changes from the policy document before building any deliverable","Ask Claude to choose which deliverable to produce first"],
  correct: [2],
  explanation: "<strong>Extract the verified foundation first.</strong> All three deliverables draw on the same change list — drafting any of them before it is confirmed risks propagating the same misreading into three documents."
},

// ────────────────── MODULE 3 (8 q) ──────────────────
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "A consultant pasted Claude's market-sizing statistics directly into a client deck. One figure was fabricated. What principle did she violate?",
  options: ["She used the wrong model tier","She failed to use Code Execution","She did not apply Diligence — she is accountable for every claim regardless of who generated it","She should have used Research instead of Chat"],
  correct: [2],
  explanation: "<strong>Diligence</strong>: you own everything you ship. A fabricated statistic reads with the same fluency as a verified one. Accountaility does not transfer to the tool."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "Which of the following is always true about Claude's tone?",
  options: ["A more confident tone means the answer is more accurate","Tone varies based on model tier","Claude writes with consistent fluency regardless of whether the answer is correct","Opus produces less confident output than Haiku"],
  correct: [2],
  explanation: "<strong>Confident tone is not a signal of accuracy.</strong> A fabricated statistic reads with the same assurance as a verified one — fluency is not a reliability indicator."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "You ask Claude for three competitor statistics and it returns them with source citations. What should you do before including them in a report?",
  options: ["Trust them — Claude cited sources so they are verified","Verify the citations independently, especially if they came from training memory rather than a live search","Accept them if the tone is confident","Use Code Execution to rerun the search"],
  correct: [1],
  explanation: "<strong>Citations from training memory</strong> can look equally confident as grounded ones. Always verify independently — grounded sources (web search, Research) are more reliable but still warrant a check."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "Which scenario most clearly requires human review before the output is used?",
  options: ["Drafting an internal FAQ from approved policy docs","Summarising a public press release","A financial summary that feeds an investment decision","Brainstorming campaign names"],
  correct: [2],
  explanation: "A <strong>financial summary feeding a decision</strong> is consequential — an unverified error can cause material harm. High-stakes outputs with numbers always require human review."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "multi",
  q: "Which TWO competencies from the AI Fluency Framework anchor Module 3?",
  options: ["Description","Discernment","Diligence","Delegation"],
  correct: [1,2],
  explanation: "<strong>Discernment</strong> (critical evaluation of output) and <strong>Diligence</strong> (ownership and verification) are the two anchoring competencies for Module 3."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "A configured Skill reduces output variance. Which statement about review is therefore correct?",
  options: ["Human review is no longer necessary once a Skill is configured","Review stays in the workflow regardless of how well the Skill is configured","Opus-tier Skills eliminate the need for review","Only the first output from a new Skill needs review"],
  correct: [1],
  explanation: "<strong>Review is always structural</strong>. Skills reduce variance but do not eliminate it — every feature, including Skills, produces different outputs run to run."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "What is the practical risk of Claude's training knowledge cutoff?",
  options: ["Claude will refuse to answer questions about current events","Claude's responses about post-cutoff information may be inaccurate or absent without a connected live source","Claude cannot generate text about topics after the cutoff","Only Opus is affected by the training cutoff"],
  correct: [1],
  explanation: "<strong>Knowledge cutoff</strong>: information after the training date is outside Claude's reliable knowledge unless you connect a live source (web search, Research, or a Connector)."
},
{
  module: 3, tag: "M3 · Evaluating & Validating Output", type: "single",
  q: "Discernment is best described as:",
  options: ["Deciding what tasks to delegate to Claude","Critically evaluating Claude's output against requirements, sources, and standards","Setting up Projects and Skills correctly","Owning and verifying the output before it is used"],
  correct: [1],
  explanation: "<strong>Discernment</strong> is the skill of critically evaluating output. Diligence is the ownership/verification stance. Delegation is workflow mapping. Description is prompting."
},

// ────────────────── MODULE 4 (9 q) ──────────────────
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "A team redesigned their contract-review workflow. They let Claude approve low-risk clauses unsupervised. One clause created an obligation nobody caught. What went wrong?",
  options: ["They used the wrong model tier","They over-delegated — an irreversible, accountability-bearing step was given to AI","The Skill was not configured correctly","They should have used Research instead"],
  correct: [1],
  explanation: "<strong>Over-delegation.</strong> Approving contract changes is irreversible and carries legal accountability — both criteria demand human retention. Drafting quality is not a license to delegate the decision."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "In a contract-review workflow, 'extracting clauses from the document' is classified as:",
  options: ["Human-retained — too high stakes for AI","Collaborative — AI drafts, human judges","AI-appropriate — reversible, low stakes, mechanical","Inappropriate — legal documents must always be human-processed"],
  correct: [2],
  explanation: "<strong>AI-appropriate.</strong> Extraction is reversible, low-stakes, and mechanical — exactly the profile for delegation. The judgment steps (approve, sign) stay human."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "What is 'halo delegation'?",
  options: ["Delegating a step because the prior step went well","Delegating all steps in a workflow at once","Using the most capable model for all steps","Letting Claude set its own scope"],
  correct: [0],
  explanation: "<strong>Halo delegation</strong>: a step is handed to AI because the previous step went well. Each step must be evaluated on its own criteria — drafting quality is not evidence the next step is safe to delegate."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "A Claude-built dashboard artifact started as an internal helper. Three departments now rely on it for daily reporting. What does this signal?",
  options: ["Nothing — keep iterating by prompt","It has become infrastructure and should be escalated to Developer or Architect expertise","Switch to a more capable model","Move it into Incognito mode"],
  correct: [1],
  explanation: "<strong>Escalation signal.</strong> When people rely on a solution as infrastructure — with uptime, security, or integration requirements — it has outgrown Associate scope."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "Which description of a contract-review workflow BEST builds stakeholder trust?",
  options: ["'Our AI reviews contracts automatically.'","'Claude drafts the redline; our legal lead reviews and approves every change before sending.'","'Claude handles all the legal work now.'","'The AI is fully autonomous — no legal review needed.'"],
  correct: [1],
  explanation: "<strong>Accurate capability claims</strong> with named human gates are what earn stakeholder trust. 'Automatically' and 'fully autonomous' overstate and invite the credibility hit the first visible error delivers."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "multi",
  q: "Which TWO steps in a workflow should ALWAYS be human-retained?",
  options: ["Extracting clauses from a document","Drafting the redline","Approving or rejecting each change","Signing and sending the contract","Computing financial exposure with code execution"],
  correct: [2,3],
  explanation: "<strong>Approve/reject</strong> (high stakes, accountability) and <strong>sign and send</strong> (irreversible, legally binding, external) must be human-retained. The other steps can be AI-appropriate or collaborative."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "A planning workflow depends on growth figures from an uploaded dataset. How should those figures be produced?",
  options: ["Ask Claude to estimate in prose","Use code execution to compute them, then synthesise the plan from verified numbers","Use Research to find industry averages","Have Claude recall typical figures from training data"],
  correct: [1],
  explanation: "<strong>Code execution for numbers.</strong> A plan built on a guessed utilisation rate is a guess. Code execution computes a verified result — the recommendation is only as trustworthy as the figures under it."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "The Delegation competency is the skill of:",
  options: ["Writing precise prompts","Critically evaluating Claude's output","Deciding which steps Claude does, which stays human, and which are collaborative","Configuring Projects and Skills"],
  correct: [2],
  explanation: "<strong>Delegation</strong> is the workflow and governance judgment: deciding what is right for AI, what stays with a person, and what they do together. The criteria are reversibility, stakes, and accountability."
},
{
  module: 4, tag: "M4 · Workflow Integration", type: "single",
  q: "'Collapsing collaborative into automate' means:",
  options: ["Building a Skill where a prompt would do","'AI drafts, human reviews' becoming 'AI drafts' when no one actually reviews","Switching from Sonnet to Haiku for speed","Using Research when Chat would suffice"],
  correct: [1],
  explanation: "<strong>Collapsing collaborative.</strong> A review gate that is never staffed is not a review gate — it is automation. The mapping error is labelling a step 'collaborative' without actually putting a human in the loop."
},

// ────────────────── MODULE 5 (9 q) ──────────────────
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "Every report in a Project should follow a specific multi-step formatting procedure. Which configuration mechanism fits?",
  options: ["A standing instruction describing the format in prose","A Skill — repeatable multi-step procedures belong in Skills","A document in the knowledge base","A Memory entry"],
  correct: [1],
  explanation: "<strong>Skills</strong> carry repeatable procedures. Instructions govern behaviour (rules), the knowledge base holds facts (references), Memory holds evolving project state. Procedures → Skills."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "Where do Skills live in Claude's configuration hierarchy?",
  options: ["Inside a specific Project's settings","At the account level under Customize — reusable across any Project","In the Project's knowledge base","In a Memory entry"],
  correct: [1],
  explanation: "<strong>Skills live at the account level</strong>, not inside any one Project. A Skill built once is available to every Project that needs it — making it reusable rather than re-configuring each time."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "An analyst covers two competing companies. Which setup correctly prevents context bleed between them?",
  options: ["One Project for both, separated by careful prompting","A separate Project per company, each with its own scoped Memory","Turn Memory off entirely","Use Incognito for all sessions"],
  correct: [1],
  explanation: "<strong>Separate Projects with scoped Memory</strong> is the correct isolation mechanism. One shared Project risks bleed regardless of how careful the prompting; turning Memory off loses continuity."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "Which standing instruction is most likely to ACTUALLY change output?",
  options: ["'Be professional and accurate.'","'Make the reports good.'","'For every figure, state its source. Mark unverified figures as such. Lead each report with a one-sentence headline.'","'Write clearly and concisely.'"],
  correct: [2],
  explanation: "<strong>Precision</strong> is what makes instructions stick. Vague instructions fail silently. The test: would two different people read it the same way? Only option C passes."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "A recurring report Project starts producing subtly wrong output with no error message. Standing instructions still reference a metric renamed last quarter. What is this?",
  options: ["A model tier problem","A prompt specification failure","Stale configuration — the standing instruction drifted out of date","A context overload issue"],
  correct: [2],
  explanation: "<strong>Stale configuration</strong> degrades output silently — no error, just drift. The fix is maintenance: update the instruction to match the current metric name, not a new prompt."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "The pairing rule states that a behavior rule and the facts it acts on belong:",
  options: ["Both in standing instructions","Both in the knowledge base","In separate mechanisms — rule in instructions, facts in knowledge base","In Memory"],
  correct: [2],
  explanation: "<strong>The pairing rule</strong>: 'Always cite sources' (instruction) needs the documents it cites (knowledge base). Neither works alone — the instruction has nothing to cite, the documents get used inconsistently."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "How often should active Projects be reviewed for configuration drift?",
  options: ["Once at setup — configurations don't need updating","Weekly — configurations change daily","Monthly is the recommended cadence for active Projects","Only when output quality visibly drops"],
  correct: [2],
  explanation: "<strong>Monthly</strong> is the recommended cadence for active Projects. Waiting until output quality drops means drift has already reached deliverables."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "Scoped Memory in a Project is described as holding:",
  options: ["Stable reference facts that never change","Evolving project state — decisions, stakeholder names, standing preferences — isolated per Project","Global information shared across all Projects","Uploaded documents and files"],
  correct: [1],
  explanation: "<strong>Scoped Memory</strong> holds what the Project has already settled: evolving records of decisions, stakeholder names, preferences. The 'scoped' part means it is isolated — Client A's context never appears in Client B's Project."
},
{
  module: 5, tag: "M5 · Configuration & Knowledge Management", type: "single",
  q: "Which is the correct quick test for where a configuration fix belongs?",
  options: ["Any fix can go in standing instructions for simplicity","Rule → instructions · Reference → knowledge base · Procedure → Skill","Procedure → instructions · Reference → Skill · Rule → Memory","All configuration goes in the knowledge base"],
  correct: [1],
  explanation: "<strong>Rule → instructions · Reference → knowledge base · Procedure → Skill.</strong> Putting a fix in the wrong home is why some 'optimisations' don't stick."
},

// ────────────────── MODULE 6 (8 q) ──────────────────
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "A team proposes using Claude to generate final, unreviewed eligibility determinations for a benefits programme. How should this be classified?",
  options: ["Fully appropriate — it saves time","Appropriate with light human review","Inappropriate — irreversible consequence and non-transferable accountability require human ownership","Appropriate if a more capable model is used"],
  correct: [2],
  explanation: "<strong>Inappropriate.</strong> Final determinations affecting individuals carry irreversible consequences and professional accountability that cannot transfer to a model."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "A colleague shares a Skill from a public forum. The publisher is unknown. What is the correct action?",
  options: ["Enable it — a colleague vouched for it","Evaluate source and permissions; unknown source + session-wide access = escalate to organisational review before enabling","Enable it and monitor for the first week","Enable it — Skills only access what the task needs"],
  correct: [1],
  explanation: "<strong>Escalate.</strong> A Skill inherits the full session's access — not just what the task needs. Unknown source + potentially disproportionate access = organisational review first. 'Colleague vouched' is not vetting."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "Which data tier should trigger 'stop and escalate to your admin' before any upload?",
  options: ["Green — published, anonymised material","Yellow — confidential internal documents","Red — regulated data (health, financial, government)","All data requires admin approval"],
  correct: [2],
  explanation: "<strong>Red data.</strong> Regulated data requires confirming an approved, compliant path exists before any upload — not just Incognito. Incognito controls persistence, not whether the upload was allowed."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "A defined review gate for an 'appropriate with review' use case must specify:",
  options: ["The model tier and token budget","Who reviews · what they verify · when in the workflow","That 'a human will check it'","The Skill that runs the review step"],
  correct: [1],
  explanation: "<strong>Who / what / when.</strong> 'Someone will check it' is not a gate. A gate names the role with accountability, the specific risk it exists to catch, and when it happens before the output is used."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "Incognito mode keeps a session out of Memory and chat history. What does it NOT do?",
  options: ["Prevent the session from appearing in chat history","Keep the session out of Memory","Confirm that the uploaded data was allowed in this entry point","Prevent activity from surfacing in organisational data exports if retention is configured"],
  correct: [2],
  explanation: "<strong>Incognito does not confirm data was allowed.</strong> It controls persistence — not compliance. Organisational data retention policies still apply regardless of Incognito."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "A hiring coordinator uses Claude to screen résumés and forwards the shortlist to the hiring manager who only interviews those candidates. Which ethical concern is MOST directly raised?",
  options: ["Disclosure — applicants were not told AI was used","Bias — automated exclusion of candidates with no human review of who was dropped","Intellectual property — résumés may contain copyrighted material","Accountability transfer — Claude is now responsible for hiring"],
  correct: [1],
  explanation: "<strong>Bias.</strong> An automated screen removes candidates with no human review of the exclusions — a systematic disadvantage can go completely undetected. Accountability cannot transfer to a tool."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "The principle of least privilege in feature enablement means:",
  options: ["Always use the lowest-tier model","Grant the narrowest access that lets the job get done, and revisit when the job changes","Only enable Anthropic-built Skills","Disable all connectors by default"],
  correct: [1],
  explanation: "<strong>Least privilege:</strong> grant the narrowest access the job requires. The same principle applies to connectors, tools, and integrations — not just Skills."
},
{
  module: 6, tag: "M6 · Governance, Risk & Responsible Use", type: "single",
  q: "A team lead's monthly usage audit finds people pasting confidential drafts into a personal Claude account because the approved workspace is slower. What does this represent?",
  options: ["An acceptable workaround — the work gets done","A Diligence gap — friction in the compliant path is driving non-compliant behaviour; fix the friction","A reason to ban Claude organisation-wide","Only the individuals who took the shortcut are responsible"],
  correct: [1],
  explanation: "<strong>Diligence gap.</strong> When the compliant path is harder, people drift to the easy option. The durable fix is making the approved route the path of least resistance — not banning the tool."
},

// ────────────────── MODULE 7 (7 q) ──────────────────
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "A brand-new chat opens. The first response to a vendor-renewal email prompt is generic and misses the two key contract terms. What is the most likely root cause?",
  options: ["Context overload — conversation neared its limit","Stale configuration — standing instruction drifted","Under-specification — the prompt never named the terms or context that mattered","Wrong model tier"],
  correct: [2],
  explanation: "<strong>Under-specification.</strong> Wrong on the very first response in a fresh chat — nothing has had time to degrade. The prompt simply never carried the information it needed."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "Every analysis response stays shallow even after adding more context. You are using a speed-tier model. What is the diagnosis?",
  options: ["Under-specification — keep adding context","Wrong model tier — switch to a more capable model built for deep analysis","Context overload — restart from a summary","Stale configuration — knowledge source has drifted"],
  correct: [1],
  explanation: "<strong>Wrong model tier.</strong> Persistently shallow output on a task needing depth, on a speed-tier model, is a tier mismatch. More context will not buy depth a lightweight tier cannot produce."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "A recurring report needed the same manual correction every week for six months. The analyst never captured the fix. What is the cost?",
  options: ["None — manual corrections are part of the workflow","The fix is rediscovered every week by everyone who runs the task — a repeated cost that configuration would convert to a one-time cost","The model tier needs to be upgraded","The Project knowledge base needs to be rebuilt"],
  correct: [1],
  explanation: "<strong>Uncaptured fixes multiply.</strong> Each rediscovery costs the same time as the first, multiplied by every person and every cycle. Promoting the fix into a standing instruction converts a repeated cost to a one-time cost."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "What is the correct order of the diagnostic sequence?",
  options: ["Switch model → restart context → check specification → question fit","Check specification → check context → check feature/model → check configuration → question fit","Question fit → check specification → check context → check feature","Restart → check specification → switch model → question fit"],
  correct: [1],
  explanation: "<strong>Cheapest fix first.</strong> Re-reading the prompt costs seconds (specification), then check context length, then feature/model, then configuration maintenance. 'This task is impossible' is last — it's the most expensive conclusion."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "Three analysts run the same monthly report and produce three different formatted outputs. Which optimisation delivers the biggest gain?",
  options: ["Upgrade the model tier so each section is drafted faster","Create one shared Skill with a single formatting template so all three sections arrive in the same style","Ask the analysts to compare their outputs before submitting","Add a second reviewer to reconcile styles"],
  correct: [1],
  explanation: "<strong>Shared Skill for formatting.</strong> The bottleneck is inconsistency — a shared Skill removes it at the source, driving reconciliation time toward zero. Speed upgrades and extra reviewers don't fix the root cause."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "An output failure presents as 'it used to work last month, now it's subtly off with no error message.' Which failure pattern is this?",
  options: ["Under-specification","Context overload","Wrong model tier","Stale configuration"],
  correct: [3],
  explanation: "<strong>Stale configuration.</strong> 'It used to work' is the signature signal. Something the output depends on — an instruction, knowledge source, or Skill — drifted out of date. Fix: run the Module 5 maintenance checklist."
},
{
  module: 7, tag: "M7 · Troubleshooting & Optimization", type: "single",
  q: "You promote a repeated context-paste into the Project knowledge base. Three runs later the outputs are worse. What should you do?",
  options: ["Keep the new setup — optimisations always take time to settle","Upgrade to Opus to compensate","Revert to the previous approach while you diagnose; optimisations should be proven over a few cycles before committing","Clear all Memory and start fresh"],
  correct: [2],
  explanation: "<strong>Prove before committing.</strong> Optimisations should be tested over a few cycles with the old approach still available. A bad change baked into a shared workflow compounds cost — catch it before it ships repeatedly."
},

// ────────────────── MODULE 8 (2 q) ──────────────────
{
  module: 8, tag: "M8 · Course Summary", type: "single",
  q: "The AI Fluency Framework has four competencies. Which one describes 'telling Claude precisely what you want'?",
  options: ["Discernment","Diligence","Delegation","Description"],
  correct: [3],
  explanation: "<strong>Description</strong> is the prompting discipline — making each prompt component explicit rather than assuming Claude will infer it. It is the backbone of Module 2."
},
{
  module: 8, tag: "M8 · Course Summary", type: "single",
  q: "A practitioner builds a Claude-powered solution that now requires API integration and tool development beyond prompt-and-iterate. What is the correct action?",
  options: ["Keep building — this is within Associate scope","Switch to Opus for more capability","Escalate to a Claude Developer, who has the relevant API and SDK expertise","Rebuild the solution as an Artifact"],
  correct: [2],
  explanation: "<strong>Escalate to a Claude Developer.</strong> API integration, agent building, and tool development are Developer-tier scope. Recognising that boundary and escalating across it is itself an Associate-level skill."
}

]; // end ALL_QUESTIONS
