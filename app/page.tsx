import {
  Activity,
  Bot,
  CheckCircle2,
  Eye,
  Fingerprint,
  LockKeyhole,
  MousePointer2,
  Radio,
  Route,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";

const capabilities = [
  {
    icon: <MousePointer2 />,
    title: "Aurelia Cursor",
    text: "A small overlay cursor becomes Aurelia outside the app, pointing at the active target and opening a compact intent chat."
  },
  {
    icon: <Eye />,
    title: "Situational Vision",
    text: "Accessibility context, OCR, and visible text extraction help Aurelia understand the current app, page, document, or conversation."
  },
  {
    icon: <Workflow />,
    title: "Human Flow",
    text: "Natural-language intentions become step-by-step device actions with before/after checks and a reason for every stop."
  },
  {
    icon: <ShieldCheck />,
    title: "Local Safety Gates",
    text: "Aurelia blocks sensitive final actions and keeps the user as verifier for payments, account changes, final sends, and private data."
  }
];

const timeline = [
  "Receive intention from phone, voice, cursor chat, or PC relay.",
  "Observe the active screen and classify risk before touching anything.",
  "Build a bounded action plan with visual checks and rollback notes.",
  "Execute low-risk reversible steps visibly through Android or PC controls.",
  "Record result, failure reason, and the next safe action."
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Local-first supervised automation agent</p>
          <h1>Aurelia</h1>
          <p className="lead">
            Aurelia turns a human intention into visible, verifiable actions
            across Android and PC while keeping the user in control of every
            sensitive final step.
          </p>
          <div className="heroActions">
            <a href="#demo" className="primaryAction">
              View demo flow
            </a>
            <a href="#safety" className="secondaryAction">
              Safety model
            </a>
          </div>
        </div>
        <div className="deviceStage" aria-label="Aurelia mobile interface preview">
          <img
            src="/aurelia-mobile-redesign-final.png"
            alt="Aurelia Mobile minimal agent interface"
            className="phoneShot"
          />
          <div className="cursorCard">
            <MousePointer2 aria-hidden="true" />
            <span>Visible cursor agent</span>
          </div>
        </div>
      </section>

      <section className="band" id="demo">
        <div className="sectionHeader">
          <p className="eyebrow">How it works</p>
          <h2>Intent in, verified action out</h2>
        </div>
        <div className="flowGrid">
          {timeline.map((item, index) => (
            <article className="flowStep" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities">
        <div className="sectionHeader">
          <p className="eyebrow">Agent capabilities</p>
          <h2>Built for real device work</h2>
        </div>
        <div className="capabilityGrid">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.title}>
              <div className="iconWrap">{capability.icon}</div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split" id="safety">
        <div>
          <p className="eyebrow">Safety architecture</p>
          <h2>Autonomy with a human verifier</h2>
          <p>
            Aurelia is designed around visible autonomy, not hidden automation.
            It can automate low-risk, reversible, observable steps, but stops at
            sensitive confirmations and asks the user to decide.
          </p>
        </div>
        <div className="safetyList">
          <div>
            <LockKeyhole />
            <span>Credentials, payment details, private codes, and final sends stay human-controlled.</span>
          </div>
          <div>
            <Fingerprint />
            <span>Local validators check risk, active app, visible state, and expected result.</span>
          </div>
          <div>
            <Activity />
            <span>Each action can be logged with before/after evidence and failure reason.</span>
          </div>
        </div>
      </section>

      <section className="stack">
        <div className="sectionHeader">
          <p className="eyebrow">System stack</p>
          <h2>Phone, PC, backend, and AI working together</h2>
        </div>
        <div className="stackGrid">
          <span><Smartphone /> Android Accessibility</span>
          <span><Bot /> Codex-assisted development</span>
          <span><Radio /> Remote relay</span>
          <span><Route /> AIP action plans</span>
          <span><CheckCircle2 /> Verified update messages</span>
          <span><ShieldCheck /> Local-first policy engine</span>
        </div>
      </section>
    </main>
  );
}
