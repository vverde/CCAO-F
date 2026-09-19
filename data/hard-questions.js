const HARD_DRILL = {
  "title": "Hard Knowledge Drill",
  "subtitle": "Exam-style conceptual judgment across the full CCAO-F content set",
  "difficulty": "hard",
  "question_count": 60,
  "time_limit_minutes": 120,
  "scoring": "raw percentage; do not map directly to the official 720 scaled score",
  "response_types": {
    "single_select": 48,
    "select_two": 12
  },
  "notes": [
    "No question stem refers to a module number.",
    "Questions are original practice items, not copied from a live exam bank.",
    "Distractors are intentionally plausible and often represent a partially-correct action that fails the stated constraint.",
    "Topic tags are intended for review analytics and need not be shown during the drill."
  ],
  "topic_distribution": {
    "Prompting & Task Execution": 8,
    "Output Evaluation & Validation": 13,
    "Product & Model Selection": 7,
    "Workflow Integration & Solution Design": 10,
    "Configuration & Knowledge Management": 7,
    "Governance, Risk & Responsible Use": 9,
    "Troubleshooting & Optimization": 6
  },
  "questions": [
    {
      "id": "HKD-001",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "A prompt says: “Prepare a recommendation for leadership based on the attached customer research.” Claude produces a polished answer, but it assumes the wrong decision context and recommends against a constraint the team had already agreed. Which change most directly addresses the root problem?",
      "options": [
        "Add a senior-strategy-consultant role so Claude reasons at a higher level.",
        "Add the prior decision, target audience, and non-negotiable constraint to the context.",
        "Specify a two-page memo format with an executive summary.",
        "Ask Claude to be more careful and avoid unsupported assumptions."
      ],
      "correct": [
        1
      ],
      "explanation": "The failure is missing background Claude could not infer. Role and format may improve style, but the decisive fix is to supply the decision context and constraint."
    },
    {
      "id": "HKD-002",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "A team needs Claude to turn a 70-page vendor proposal into a risk assessment, compare it with policy, identify unresolved questions, and draft a negotiation brief. The one-shot prompt produces shallow results. What is the best first redesign?",
      "options": [
        "Increase the requested word count so Claude has room to reason.",
        "Split the work into focused steps whose outputs feed the next step.",
        "Move immediately to the highest-capability model and keep the same prompt.",
        "Ask for three alternative answers and choose the longest one."
      ],
      "correct": [
        1
      ],
      "explanation": "The task combines extraction, comparison, gap analysis, and drafting. Decomposition reduces cognitive load and makes intermediate outputs inspectable."
    },
    {
      "id": "HKD-003",
      "topic": "Prompting & Task Execution",
      "type": "multi",
      "select": 2,
      "question": "A draft prompt produces a useful report, but the recommendations are consistently too generic while the structure and tone are already correct. Which TWO changes best follow disciplined prompt iteration?",
      "options": [
        "Add explicit decision criteria the recommendations must satisfy.",
        "Rewrite the full prompt from scratch to eliminate hidden defects.",
        "Add the missing business constraints that distinguish acceptable recommendations.",
        "Change the output format from report to table before changing anything else.",
        "Change model, tool, role, context, task, constraints, and format together to maximize improvement."
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "The problem is localized to recommendation quality. Tighten the criteria and missing constraints while preserving components that already work. Changing many variables at once hides the cause of improvement."
    },
    {
      "id": "HKD-004",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "Which prompting approach is best matched to an open brainstorming task where novelty matters more than consistency?",
      "options": [
        "Define the goal and guardrails, but leave direction and quantity relatively open.",
        "Specify a strict scoring rubric, narrow criteria, and a fixed three-item answer.",
        "Require citations for every idea before any ideas are generated.",
        "Provide a complete target answer and ask Claude to reproduce its structure exactly."
      ],
      "correct": [
        0
      ],
      "explanation": "Brainstorming benefits from a clear goal and boundaries with more freedom in direction and quantity. Over-constraining suppresses exploration."
    },
    {
      "id": "HKD-005",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "Which prompt is most complete for producing a board-ready decision memo?",
      "options": [
        "Act as a strategy analyst. Review the material and write a good board memo.",
        "Review the attached material. Summarize the main points in a professional tone for the board.",
        "Act as a strategy analyst. Using the attached research and the board’s stated objective, recommend one option. Exclude implementation detail, flag unresolved assumptions, and return a one-page memo with recommendation, evidence, risks, and next step.",
        "Using the attached material, write a one-page board memo with four headings and concise bullets."
      ],
      "correct": [
        2
      ],
      "explanation": "It combines role, context, a specific task, constraints, and output format. The alternatives omit at least one of those elements."
    },
    {
      "id": "HKD-006",
      "topic": "Prompting & Task Execution",
      "type": "multi",
      "select": 2,
      "question": "Claude must answer a precise question from a very long policy document. Which TWO prompt-design choices most directly improve grounding and retrieval from the supplied text?",
      "options": [
        "Place the source material before the final question so the request is close to the answer point.",
        "Ask Claude to first extract verbatim supporting passages before synthesizing the answer.",
        "Put the question first and the full source after it so Claude knows what to look for.",
        "Add a stronger persona because role assignment increases factual recall from long documents.",
        "Ask Claude to use general knowledge when the document is ambiguous so the answer stays complete."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "For long-context work, source-first/question-later placement and quote extraction improve grounding. Inviting general knowledge can create unsupported fill-in."
    },
    {
      "id": "HKD-007",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "A team wants Claude to improve a draft proposal without silently changing claims that are already correct. Which sequence is strongest?",
      "options": [
        "Draft again from memory, compare the two versions, and keep whichever is longer.",
        "Review the draft against explicit criteria, identify specific failures, then revise only against those findings.",
        "Ask Claude to make the proposal more persuasive, then ask it whether the result is better.",
        "Switch models after every revision so each pass uses fresh reasoning."
      ],
      "correct": [
        1
      ],
      "explanation": "A draft → review against criteria → targeted refinement loop is a controlled self-correction pattern. It separates diagnosis from rewriting."
    },
    {
      "id": "HKD-008",
      "topic": "Prompting & Task Execution",
      "type": "single",
      "question": "A prompt already passes the team’s quality checks, but it is too expensive for a high-volume workflow. Which action is most appropriate before further prompt rewriting?",
      "options": [
        "Add more examples so the model has less ambiguity.",
        "Evaluate whether a faster, cheaper model can meet the same success criteria.",
        "Make the prompt longer so fewer retries are needed.",
        "Remove the success criteria because they add tokens without changing the answer."
      ],
      "correct": [
        1
      ],
      "explanation": "When the problem is cost or latency rather than quality, model selection may be the right lever. Prompt changes should target actual failure modes."
    },
    {
      "id": "HKD-009",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Claude summarizes a newly issued regulation and cites “Section 14.3(b)” in a confident, detailed paragraph. What is the strongest validation step before the summary is shared with compliance?",
      "options": [
        "Ask Claude whether it is certain the subsection exists.",
        "Check the cited subsection in the authoritative regulation text and confirm it supports the claim.",
        "Run the same prompt again and accept the citation if Claude repeats it.",
        "Keep the citation but add “verify before relying” to the footer."
      ],
      "correct": [
        1
      ],
      "explanation": "A citation is not verification. The claim and citation must be checked against the authoritative source."
    },
    {
      "id": "HKD-010",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Claude produces a fluent market summary from a dataset that has no data for two regions. The summary never mentions the missing regions and speaks as if coverage were complete. What is the primary failure?",
      "options": [
        "Fabricated specificity",
        "Completeness failure",
        "Capability hallucination",
        "Formatting variance"
      ],
      "correct": [
        1
      ],
      "explanation": "The answer masks missing data by presenting an apparently complete summary. That is a completeness failure even if no explicit number is invented."
    },
    {
      "id": "HKD-011",
      "topic": "Output Evaluation & Validation",
      "type": "multi",
      "select": 2,
      "question": "A high-stakes answer contains several precise factual claims. Which TWO signals should increase suspicion even if the prose is polished?",
      "options": [
        "The answer gives highly specific figures without traceable support.",
        "The answer includes caveats and clearly marks uncertain claims.",
        "Repeated runs produce materially different facts for the same question.",
        "The answer uses a formal tone and complete sentences.",
        "The answer is shorter than the user expected."
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Unsupported precision is a classic hallucination signal, and inconsistency across repeated runs is a useful warning sign. Tone and length are not evidence of factual reliability."
    },
    {
      "id": "HKD-012",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Which situation requires the highest verification threshold?",
      "options": [
        "An internal brainstorming list that will be discarded after a workshop.",
        "A reversible draft of meeting notes seen only by the project team.",
        "A customer-facing eligibility explanation governed by regulation and difficult to reverse once sent.",
        "A private outline for a future presentation with no factual claims."
      ],
      "correct": [
        2
      ],
      "explanation": "Verification intensity should rise with stakes, irreversibility, external audience, and regulatory exposure. This option combines all four."
    },
    {
      "id": "HKD-013",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Claude says it has “submitted the form to the regulator” even though no tool capable of external submission was available. What kind of failure is this?",
      "options": [
        "Capability hallucination",
        "Completeness failure",
        "Confirmation bias",
        "Context degradation"
      ],
      "correct": [
        0
      ],
      "explanation": "Claude is claiming to have performed an external action it could not perform. That is a capability hallucination."
    },
    {
      "id": "HKD-014",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "A user asks Claude to assess whether a proposed strategy is “obviously superior.” Claude selectively highlights supporting evidence and omits credible counter-evidence contained in the same source pack. What is the most accurate diagnosis?",
      "options": [
        "Confirmation bias in the output",
        "Capability hallucination",
        "Context overload",
        "A format constraint failure"
      ],
      "correct": [
        0
      ],
      "explanation": "The answer is framing evidence to support the premise rather than evaluating the evidence even-handedly."
    },
    {
      "id": "HKD-015",
      "topic": "Output Evaluation & Validation",
      "type": "multi",
      "select": 2,
      "question": "Claude must summarize a long internal report without adding facts that are not in the report. Which TWO controls most directly reduce unsupported completion?",
      "options": [
        "Tell Claude to answer “unknown” when the report does not contain the information.",
        "Ask Claude to use only the supplied report and not general knowledge.",
        "Ask Claude to make the summary sound confident and decisive.",
        "Use a more formal output format.",
        "Increase the temperature of brainstorming to surface more possibilities."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Allowing an explicit unknown and restricting the source prevent the model from filling gaps with plausible external knowledge."
    },
    {
      "id": "HKD-016",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "A 4,000-word analysis is factually accurate section by section, but the conclusion contradicts a recommendation stated earlier. Which review method is most important?",
      "options": [
        "Check only the opening summary because it represents the final answer.",
        "Check internal consistency across the full output, especially claims reused in later sections.",
        "Ask for a more confident conclusion so the contradiction is less ambiguous.",
        "Replace the analysis with bullet points, because bullets prevent contradictions."
      ],
      "correct": [
        1
      ],
      "explanation": "Long outputs can contain internal contradictions even when individual sections look plausible. Cross-section consistency is a separate validation requirement."
    },
    {
      "id": "HKD-017",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "A stakeholder says, “Claude provided sources, so this is already fact-checked.” What is the most accurate response?",
      "options": [
        "Correct, because citations are evidence that Claude retrieved the source.",
        "Mostly correct, provided at least three citations are present.",
        "Incorrect. Verification requires checking that the source exists and actually supports the claim.",
        "Incorrect only for current events; older facts can be accepted from model memory."
      ],
      "correct": [
        2
      ],
      "explanation": "Generated citations can be wrong or irrelevant. Verification means checking the source and support directly."
    },
    {
      "id": "HKD-018",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Claude gives three different answers to the same narrow factual question across three fresh runs. What should you infer first?",
      "options": [
        "The majority answer is automatically correct.",
        "The inconsistency is a warning signal that the fact needs external verification.",
        "The model is showing healthy creativity and no further check is needed.",
        "The longest answer is most likely to contain the correct reasoning."
      ],
      "correct": [
        1
      ],
      "explanation": "Best-of-N inconsistency is a warning sign, not a voting mechanism that establishes truth. External verification is still required."
    },
    {
      "id": "HKD-019",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "Claude is asked for the current status of a regulation that changed after its training cutoff. Which validation strategy is strongest?",
      "options": [
        "Ask Claude to reason from the previous version and infer the likely update.",
        "Use a live authoritative source and ground the answer in that source.",
        "Ask Claude to state its confidence and accept the answer above 90%.",
        "Run the prompt with a higher-capability model because newer models remove cutoff risk."
      ],
      "correct": [
        1
      ],
      "explanation": "Post-cutoff or current claims require live sources. Model confidence and capability do not substitute for freshness."
    },
    {
      "id": "HKD-020",
      "topic": "Output Evaluation & Validation",
      "type": "multi",
      "select": 2,
      "question": "A workflow extracts invoice totals and line items into a structured table. Which TWO validation methods are strongest for the numeric fields before downstream use?",
      "options": [
        "Programmatically check that totals reconcile with the extracted line items.",
        "Have a human inspect exceptions that fail validation rules.",
        "Ask Claude whether the arithmetic looks reasonable.",
        "Accept any value that appears in the expected column.",
        "Prefer invoices whose extraction was generated with more verbose reasoning."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Deterministic checks are strong for arithmetic and structure, while human review is appropriate for exceptions and ambiguous source data."
    },
    {
      "id": "HKD-021",
      "topic": "Output Evaluation & Validation",
      "type": "single",
      "question": "A model-generated customer reply is factually correct but repeatedly arrives in a format that the downstream system cannot ingest. What is the most direct quality fix?",
      "options": [
        "Move to a higher-capability model because formatting errors indicate weak reasoning.",
        "Specify and validate the required output structure against the downstream schema.",
        "Ask users to manually reformat the answer before each submission.",
        "Generate several formats and let the operator choose the one that looks closest."
      ],
      "correct": [
        1
      ],
      "explanation": "The quality requirement is structural. Define the required format explicitly and validate it rather than treating it as a model-capability problem."
    },
    {
      "id": "HKD-022",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A team runs a recurring weekly process using the same policy pack, the same reporting structure, and mostly the same stakeholders. Which starting point is the best fit?",
      "options": [
        "A new plain chat each week so context never accumulates.",
        "A Project containing the stable instructions and reference material.",
        "Research mode, because recurring work benefits from broad source discovery.",
        "An Artifact by itself, because the final report is the only context that matters."
      ],
      "correct": [
        1
      ],
      "explanation": "Recurring work with stable context and consistent output is a strong Project fit."
    },
    {
      "id": "HKD-023",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A user needs a separate document that can be refined, reused, and handed off independently from the conversation that produced it. Which feature best matches that need?",
      "options": [
        "Artifact",
        "Memory",
        "Research",
        "Scoped project history"
      ],
      "correct": [
        0
      ],
      "explanation": "Artifacts are designed for reusable, editable deliverables separate from the chat stream."
    },
    {
      "id": "HKD-024",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A company must process 80,000 simple support tickets using a clear classification rubric, with cost and speed as major constraints. Which model strategy is most appropriate to test first?",
      "options": [
        "Use the highest-capability model because volume increases risk.",
        "Use a fast, lower-cost model and validate it against the rubric.",
        "Use the default professional model because it is always the optimal compromise.",
        "Use Research mode so each classification is supported by external sources."
      ],
      "correct": [
        1
      ],
      "explanation": "High-volume, structured, low-complexity work is a strong candidate for a faster, cheaper model, provided it passes defined quality checks."
    },
    {
      "id": "HKD-025",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A legal strategy team has a small number of ambiguous, multi-layered documents where judgment quality matters much more than latency or cost. Which model choice is the best fit?",
      "options": [
        "A fast model optimized for throughput",
        "The balanced default model regardless of task complexity",
        "The highest-capability model appropriate for complex judgment",
        "Any model, because prompt quality fully eliminates model differences"
      ],
      "correct": [
        2
      ],
      "explanation": "Complex, ambiguous, high-stakes judgment is where a higher-capability model is most justified."
    },
    {
      "id": "HKD-026",
      "topic": "Product & Model Selection",
      "type": "multi",
      "select": 2,
      "question": "Which TWO tasks are especially strong candidates for Code Execution rather than relying only on prose reasoning?",
      "options": [
        "Reconciling a CSV and calculating derived metrics across thousands of rows.",
        "Generating a downloadable spreadsheet from structured data.",
        "Deciding whether a hiring candidate should receive an offer.",
        "Interpreting the intent behind an ambiguous executive email.",
        "Choosing the final legal position in a contract dispute."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Code Execution is suited to computation, data processing, and file generation. High-stakes judgment remains human-accountable."
    },
    {
      "id": "HKD-027",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A researcher needs a current, multi-source synthesis of a newly developing market with conflicting public reports. Which feature is the best starting point?",
      "options": [
        "Research mode",
        "Memory",
        "A blank Artifact",
        "A Project with no knowledge sources"
      ],
      "correct": [
        0
      ],
      "explanation": "Research is designed for open-ended, current, multi-source investigation and synthesis."
    },
    {
      "id": "HKD-028",
      "topic": "Product & Model Selection",
      "type": "single",
      "question": "A long-running conversation was initially strong but now misses earlier constraints and repeats already-resolved questions. Which response best addresses the likely issue?",
      "options": [
        "Keep adding reminders to the same thread until Claude recovers.",
        "Preserve the key state, then summarize or restart with cleaner context.",
        "Switch to a more expensive model without changing context.",
        "Move the final answer into an Artifact, which resets the conversation context."
      ],
      "correct": [
        1
      ],
      "explanation": "Quality degradation over a long session points to context overload or rot. Preserve what matters and reduce/reset context."
    },
    {
      "id": "HKD-029",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "A workflow step extracts standard clauses from contracts and labels each clause against a fixed taxonomy. Errors can be corrected before anything is sent externally. How should this step usually be classified?",
      "options": [
        "Human-retained, because all contract work is inherently non-delegable.",
        "AI-appropriate, because the step is mechanical, reversible, and low-stakes when isolated.",
        "Collaborative only, because every AI output always requires a human gate.",
        "Inappropriate for AI unless an Architect redesigns the entire workflow."
      ],
      "correct": [
        1
      ],
      "explanation": "Mechanical, reversible, low-stakes steps are good delegation candidates when evaluated at the step level rather than by the overall domain label."
    },
    {
      "id": "HKD-030",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "Claude drafts a contract redline and a qualified lawyer reviews every change before it can be accepted. What makes this genuinely collaborative rather than effectively automated?",
      "options": [
        "The model used is high capability.",
        "The review gate is real, staffed, and required before the consequential action.",
        "The draft is stored in a Project.",
        "The prompt tells Claude that a lawyer will review the work."
      ],
      "correct": [
        1
      ],
      "explanation": "A collaborative design depends on an actual human judgment gate, not merely stating that review should happen."
    },
    {
      "id": "HKD-031",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "A team wants Claude to approve refunds because the preceding extraction and classification steps have been accurate for three months. What error are they making?",
      "options": [
        "Context degradation",
        "Halo delegation",
        "Stale configuration",
        "Prompt over-specification"
      ],
      "correct": [
        1
      ],
      "explanation": "Strong performance on earlier or lower-risk steps does not justify delegating a later step with different stakes and accountability."
    },
    {
      "id": "HKD-032",
      "topic": "Workflow Integration & Solution Design",
      "type": "multi",
      "select": 2,
      "question": "Which TWO properties most strongly indicate that a workflow step should remain human-retained?",
      "options": [
        "The decision is difficult to reverse once executed.",
        "A named person or role remains accountable for the consequence.",
        "The input is long and contains several documents.",
        "The output requires a consistent template.",
        "The task recurs every week."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Irreversibility and accountability are core delegation criteria. Length, recurrence, and formatting do not by themselves determine who should decide."
    },
    {
      "id": "HKD-033",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "A team is redesigning an existing reporting process. They can either add Claude to two slow drafting steps or replace the entire workflow with a complex autonomous system. The current process is otherwise reliable. What principle points to the better starting approach?",
      "options": [
        "Replace the full workflow so future optimization starts from a clean slate.",
        "Start with the simplest intervention that solves the validated problem, then add complexity only if needed.",
        "Always prefer autonomous systems when more than one step can be delegated.",
        "Choose the option with the largest number of Claude features because integration breadth reduces risk."
      ],
      "correct": [
        1
      ],
      "explanation": "Successful adoption usually starts simple and augments existing tools/processes unless there is evidence that broader redesign is justified."
    },
    {
      "id": "HKD-034",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "Incoming requests are first classified by complexity. Routine cases go to a fast model; unusual cases go to a stronger model. Which workflow pattern is this?",
      "options": [
        "Prompt chaining",
        "Routing",
        "Parallelization",
        "Self-correction"
      ],
      "correct": [
        1
      ],
      "explanation": "Routing classifies inputs and dispatches them to different paths based on the classification."
    },
    {
      "id": "HKD-035",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "A large report is split into independent sections, each section is analyzed separately, and the results are combined at the end. Which pattern best describes this?",
      "options": [
        "Routing",
        "Parallelization by sectioning",
        "Prompt chaining",
        "Memory persistence"
      ],
      "correct": [
        1
      ],
      "explanation": "Independent subtasks that can be processed separately and recombined are a parallelization pattern."
    },
    {
      "id": "HKD-036",
      "topic": "Workflow Integration & Solution Design",
      "type": "multi",
      "select": 2,
      "question": "Which TWO actions best preserve accountability in a Claude-assisted decision workflow?",
      "options": [
        "Define in advance which person or role owns the final decision.",
        "Place a mandatory human approval gate before irreversible external action.",
        "Ask Claude to perform a final self-review before it acts.",
        "Use the highest-capability model so human review can be removed.",
        "Record that Claude produced the recommendation, transferring accountability to the system."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Accountability stays with people or organizations. A real human gate and explicit ownership preserve that responsibility."
    },
    {
      "id": "HKD-037",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "A Claude-generated spreadsheet has become the operational source that several teams use to trigger downstream actions. Changes to its logic now require versioning, testing, and integration controls. What is the most appropriate next step?",
      "options": [
        "Keep prompt-and-iterate because the spreadsheet originally began as an Artifact.",
        "Escalate toward Developer or Architect support because the artifact has become infrastructure.",
        "Move the spreadsheet into Memory so the logic persists reliably.",
        "Use a more powerful model to reduce the need for engineering controls."
      ],
      "correct": [
        1
      ],
      "explanation": "When a Claude-built artifact becomes operational infrastructure, prompt-level iteration has reached its boundary and technical engineering/governance support is appropriate."
    },
    {
      "id": "HKD-038",
      "topic": "Workflow Integration & Solution Design",
      "type": "single",
      "question": "Which step is the clearest example of a human-retained action even if Claude performs all prior analysis correctly?",
      "options": [
        "Extracting line items from a contract",
        "Grouping support tickets by topic",
        "Signing and sending the final regulatory attestation",
        "Drafting alternative wording for a policy"
      ],
      "correct": [
        2
      ],
      "explanation": "Signing and sending an attestation is accountability-bearing and difficult to reverse. It should remain human-retained."
    },
    {
      "id": "HKD-039",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "A team has a permanent rule that every financial figure must include a source, plus a 40-page pricing policy that changes quarterly. Where should these two items primarily live?",
      "options": [
        "Both in standing instructions, because both affect every answer.",
        "The sourcing rule in standing instructions; the pricing policy in the knowledge base.",
        "The sourcing rule in Memory; the pricing policy in a Skill.",
        "Both in a Skill, because a Skill is reusable across projects."
      ],
      "correct": [
        1
      ],
      "explanation": "Behavior rules belong in instructions. Reference facts and documents belong in the knowledge base."
    },
    {
      "id": "HKD-040",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "A recurring five-step operating procedure must be reused across many Projects, while project-specific facts differ. What is the best home for the procedure?",
      "options": [
        "A reusable Skill",
        "Project-scoped Memory",
        "A separate Artifact in every Project",
        "The knowledge base as a reference PDF only"
      ],
      "correct": [
        0
      ],
      "explanation": "Repeatable multi-step procedures are a strong fit for reusable Skills, while project-specific facts remain in project context."
    },
    {
      "id": "HKD-041",
      "topic": "Configuration & Knowledge Management",
      "type": "multi",
      "select": 2,
      "question": "A Project’s answers have gradually become less reliable even though the prompts have not changed. Which TWO configuration checks should happen early?",
      "options": [
        "Confirm that policies and reference files are still current.",
        "Check whether standing instructions still reflect the intended process and priorities.",
        "Immediately replace the default model with the highest-capability model.",
        "Move all project knowledge into one very long standing instruction.",
        "Disable human review so users see the raw model behavior more clearly."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "“It used to work” is a strong stale-configuration signal. Review the currency of reference material and the instructions before escalating model complexity."
    },
    {
      "id": "HKD-042",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "A team connects an entire shared drive to a Project even though only one folder is relevant, then tells Claude to ignore everything else. What is the main design problem?",
      "options": [
        "Claude cannot access connected sources unless they are copied into Memory.",
        "The connector scope is unnecessarily broad, increasing irrelevant context and governance exposure.",
        "Projects cannot use external sources for recurring work.",
        "A connector is appropriate only for public information."
      ],
      "correct": [
        1
      ],
      "explanation": "Connector scope should be minimized to the relevant folders/threads. Telling Claude to ignore irrelevant material is weaker than not exposing it in the first place."
    },
    {
      "id": "HKD-043",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "A Project instruction says “Be concise and comprehensive” and users receive inconsistent results. What is the strongest correction?",
      "options": [
        "Keep both instructions because the model should infer the right trade-off.",
        "State a priority or explicit exception that resolves the conflict.",
        "Move the sentence into the knowledge base so it has less influence.",
        "Add more unrelated style instructions so the model can infer the intended tone."
      ],
      "correct": [
        1
      ],
      "explanation": "Conflicting instructions should be resolved explicitly with a priority or exception rather than leaving the model to guess."
    },
    {
      "id": "HKD-044",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "Which information is the best candidate for scoped project memory rather than a standing instruction or reference document?",
      "options": [
        "The permanent rule that all claims need a source",
        "The company’s approved legal policy PDF",
        "The evolving decision that Priya now owns the rollout and the launch date moved to 18 October",
        "A reusable six-step procedure for quarterly business reviews"
      ],
      "correct": [
        2
      ],
      "explanation": "Memory is suited to evolving project state and continuity, such as decisions, names, and current status."
    },
    {
      "id": "HKD-045",
      "topic": "Configuration & Knowledge Management",
      "type": "single",
      "question": "A team is considering a third-party Skill for processing confidential project material. Which review is most appropriate before enabling it?",
      "options": [
        "Check only whether its output examples look high quality.",
        "Check who published it, what session access it inherits, and whether that reach is appropriate for the task.",
        "Enable it in Incognito so the Skill cannot access session data.",
        "Use it only with the highest-capability model, which limits Skill permissions."
      ],
      "correct": [
        1
      ],
      "explanation": "Skill trust depends on source, reach, and appropriateness. A Skill may inherit broad session access, so provenance and necessity matter."
    },
    {
      "id": "HKD-046",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "A user has a dataset containing regulated health information and proposes uploading it in an Incognito chat because “nothing will persist.” What is the correct judgment?",
      "options": [
        "Acceptable, because Incognito makes regulated data safe to upload.",
        "Acceptable if the user deletes the chat immediately afterward.",
        "Not acceptable on that basis; persistence controls do not override data-handling or organizational policy.",
        "Acceptable if Claude is told not to remember the health information."
      ],
      "correct": [
        2
      ],
      "explanation": "Incognito affects persistence, not whether regulated data is permitted to be shared. Data policy and sensitivity rules still apply."
    },
    {
      "id": "HKD-047",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "Which data handling decision best fits a “stop and escalate” classification?",
      "options": [
        "A public press release",
        "An anonymized survey export",
        "A draft internal memo with no personal data",
        "A file containing employee payroll account details and credentials"
      ],
      "correct": [
        3
      ],
      "explanation": "Credentials and regulated/financial data are high-sensitivity inputs that should trigger escalation rather than routine use."
    },
    {
      "id": "HKD-048",
      "topic": "Governance, Risk & Responsible Use",
      "type": "multi",
      "select": 2,
      "question": "A team wants Claude to help screen job applications. Which TWO controls are most important for responsible use?",
      "options": [
        "Keep a defined human decision gate before candidates are advanced or rejected.",
        "Review the workflow for bias, data sensitivity, and applicable organizational rules.",
        "Ask Claude to explain each recommendation, then allow automatic rejection if the explanation sounds reasonable.",
        "Use Incognito so candidate data automatically becomes low-risk.",
        "Move the workflow to a larger model so governance controls can be reduced."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Candidate screening is consequential and sensitive. Human oversight plus governance/bias/data review are core controls; model self-explanation does not replace them."
    },
    {
      "id": "HKD-049",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "Which use case is most clearly inappropriate for autonomous Claude decision-making?",
      "options": [
        "Formatting a public newsletter",
        "Summarizing an approved internal FAQ",
        "Making the final medical diagnosis for a patient without qualified review",
        "Drafting a customer response that an employee must approve before sending"
      ],
      "correct": [
        2
      ],
      "explanation": "Final medical determinations are high-stakes professional decisions and should not be delegated autonomously."
    },
    {
      "id": "HKD-050",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "A product manager wants to upload named customer interview notes that are not intended to leave the company. How should the data be treated?",
      "options": [
        "As low sensitivity because it is not regulated data",
        "As material that requires review before use because it contains named individuals and internal information",
        "As prohibited in every circumstance regardless of policy or safeguards",
        "As public once it has been summarized by an employee"
      ],
      "correct": [
        1
      ],
      "explanation": "Named individuals and unreleased internal information require review and appropriate policy checks before use."
    },
    {
      "id": "HKD-051",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "A workflow will send customer responses automatically. The team argues that Claude’s final self-check is sufficient oversight. What is the key governance problem?",
      "options": [
        "Self-checking consumes too many tokens.",
        "The same system producing the output is not an independent human accountability gate for consequential external action.",
        "Self-checking is only supported in Projects.",
        "The workflow is safe if the model reports high confidence."
      ],
      "correct": [
        1
      ],
      "explanation": "A model reviewing its own output is not a substitute for required human oversight or accountable approval."
    },
    {
      "id": "HKD-052",
      "topic": "Governance, Risk & Responsible Use",
      "type": "multi",
      "select": 2,
      "question": "A team has a dataset containing customer identifiers that are unnecessary for the analysis. Which TWO actions best reduce governance risk before Claude is used?",
      "options": [
        "Remove or anonymize unnecessary identifiers before upload.",
        "Confirm that the remaining data and intended use comply with organizational policy.",
        "Upload the full dataset and instruct Claude not to look at the identifier columns.",
        "Rely on the model to redact sensitive fields in its final answer.",
        "Put the analysis in an Artifact, which isolates source data from the model."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Data minimization should happen before sharing, and use must still comply with applicable policy. Instructions after upload do not undo disclosure."
    },
    {
      "id": "HKD-053",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "A team evaluates whether to use an unfamiliar Skill in a sensitive workflow. Which question is LEAST sufficient on its own?",
      "options": [
        "Who published the Skill and can the source be trusted?",
        "What data and session context can the Skill access?",
        "Does the task actually require the Skill’s level of capability?",
        "Does the Skill produce an impressive demo on a non-sensitive sample?"
      ],
      "correct": [
        3
      ],
      "explanation": "A good demo says little about provenance, permissions, or appropriateness. Those are the core trust questions."
    },
    {
      "id": "HKD-054",
      "topic": "Governance, Risk & Responsible Use",
      "type": "single",
      "question": "Claude drafts a legal interpretation for a customer-facing notice. Which control best matches responsible use?",
      "options": [
        "Add a disclaimer and send automatically.",
        "Require qualified professional review before the notice is finalized or sent.",
        "Ask Claude to produce two versions and choose the more cautious one.",
        "Use the highest-capability model and remove the review step if outputs are consistent."
      ],
      "correct": [
        1
      ],
      "explanation": "Regulated or professional advice requires appropriate qualified review. Disclaimers, self-review, and model choice are not substitutes."
    },
    {
      "id": "HKD-055",
      "topic": "Troubleshooting & Optimization",
      "type": "single",
      "question": "A new prompt gives the wrong type of answer on the first attempt. The conversation is short, and the task is otherwise a good fit for Claude. What should be checked first?",
      "options": [
        "Whether the prompt is missing role, context, task clarity, constraints, or format.",
        "Whether the entire use case should be abandoned.",
        "Whether project knowledge should be deleted and rebuilt.",
        "Whether the most expensive model should replace the current one."
      ],
      "correct": [
        0
      ],
      "explanation": "The cheapest first diagnostic is under-specification. Broader changes come later if prompt completeness is not the problem."
    },
    {
      "id": "HKD-056",
      "topic": "Troubleshooting & Optimization",
      "type": "single",
      "question": "Outputs are strong at the start of a long session but gradually ignore prior constraints and repeat resolved points. What is the most likely root cause?",
      "options": [
        "Under-specification",
        "Context overload or context rot",
        "An inherently unsuitable task",
        "A missing approval gate"
      ],
      "correct": [
        1
      ],
      "explanation": "Quality degrading over time in the same conversation is a classic context-overload signal."
    },
    {
      "id": "HKD-057",
      "topic": "Troubleshooting & Optimization",
      "type": "single",
      "question": "A team repeatedly asks Claude to add two columns of numbers and occasionally gets arithmetic errors. The prompt is clear and the error pattern is specific and repeatable. What is the best next change?",
      "options": [
        "Add more motivational language to the prompt.",
        "Use Code Execution or another deterministic computation method for the arithmetic.",
        "Restart the chat after every row.",
        "Persist the numbers to Memory so Claude can calculate them consistently."
      ],
      "correct": [
        1
      ],
      "explanation": "A specific computation failure points to using the right tool rather than endlessly refining natural-language instructions."
    },
    {
      "id": "HKD-058",
      "topic": "Troubleshooting & Optimization",
      "type": "multi",
      "select": 2,
      "question": "A team sees the same two operational frictions every week: staff paste the same background text into every run, and they correct the same formatting defect in every output. Which TWO fixes best capture those improvements?",
      "options": [
        "Move the repeated background into saved context or standing instructions.",
        "Change the configuration so the recurring formatting defect is prevented by default.",
        "Tell staff to keep a personal note with the text and continue pasting it manually.",
        "Use a larger model so repeated setup becomes unnecessary.",
        "Leave the fixes in one successful chat so users can copy from it when needed."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Repetition points to saved context/instructions; recurring correction points to configuration. Capturing fixes prevents rediscovery every cycle."
    },
    {
      "id": "HKD-059",
      "topic": "Troubleshooting & Optimization",
      "type": "single",
      "question": "A retry prompt says, “Try again, the answer is wrong,” but Claude keeps repeating the same error. Which retry is more effective?",
      "options": [
        "“Try harder and double-check everything.”",
        "“The line items sum to 145, but your stated total is 150. Recheck the extracted values and total.”",
        "“Use a more confident tone and provide a final answer only.”",
        "“Generate five alternatives and pick whichever appears most plausible.”"
      ],
      "correct": [
        1
      ],
      "explanation": "Concrete validation errors give the model actionable feedback. Generic criticism does not identify what must change."
    },
    {
      "id": "HKD-060",
      "topic": "Troubleshooting & Optimization",
      "type": "single",
      "question": "Claude repeatedly fails to answer a question because the required fact is not present in the supplied source. What is the best next action?",
      "options": [
        "Retry until the model becomes consistent.",
        "Increase model effort because missing information can often be inferred with deeper reasoning.",
        "Obtain the missing source or escalate rather than treating retries as a fix.",
        "Store the failed answers in Memory so later attempts have more context."
      ],
      "correct": [
        2
      ],
      "explanation": "Retries can fix format, structure, or some reasoning errors, but they cannot create missing source information reliably."
    }
  ]
};
