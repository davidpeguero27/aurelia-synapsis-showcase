import {
  Activity,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  Fingerprint,
  HandCoins,
  HeartHandshake,
  LockKeyhole,
  MousePointer2,
  Radio,
  Route,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    text: "Aurelia binds visible approvals to immutable action previews, blocks changed or replayed parameters, and keeps sensitive final actions human-controlled."
  }
];

const timeline = [
  "Receive intention from phone, voice, cursor chat, or PC relay.",
  "Observe the active screen and classify risk before touching anything.",
  "Build a bounded action plan with visual checks and rollback notes.",
  "Bind approval to the exact preview with a short-lived, single-use digest.",
  "Execute low-risk reversible steps visibly through Android or PC controls.",
  "Record result, failure reason, and the next safe action."
];

const supportPaths = [
  {
    icon: <HeartHandshake />,
    title: "Sponsor development",
    text: "Back local-first agent research, mobile verification, safe remote updates, and the public demo roadmap."
  },
  {
    icon: <BriefcaseBusiness />,
    title: "Private setup services",
    text: "Fund Aurelia by commissioning supervised setup, workflow design, device automation mapping, and safety testing."
  },
  {
    icon: <HandCoins />,
    title: "Pilot partnerships",
    text: "Support focused pilots for small businesses that need visible Android/PC task automation with human validation."
  }
];

function App() {
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
            <a href="#support" className="secondaryAction">
              Support development
            </a>
            <a href="#safety" className="secondaryAction">
              Safety model
            </a>
          </div>
        </div>
        <div className="deviceStage" aria-label="Aurelia mobile interface preview">
          <img
            src="./aurelia-mobile-redesign-final.png"
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
            <span>Short-lived SHA-256 approval digests bind consent to the exact visible action and parameters.</span>
          </div>
          <div>
            <Activity />
            <span>Unverified outcomes stop as outcome unknown, block automatic retries, and require observation.</span>
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

      <section className="support" id="support">
        <div className="sectionHeader">
          <p className="eyebrow">Development fund</p>
          <h2>Help turn Aurelia into a dependable agent platform</h2>
          <p>
            Aurelia is being developed as a private, safety-first automation
            system. Funding goes toward verified mobile builds, remote update
            infrastructure, feedback intake, UX refinement, and documented
            pilot workflows.
          </p>
        </div>
        <div className="supportGrid">
          {supportPaths.map((path) => (
            <article className="supportPath" key={path.title}>
              <div className="iconWrap">{path.icon}</div>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
            </article>
          ))}
        </div>
        <div className="supportPanel">
          <div>
            <h3>Current funding goal</h3>
            <p>
              Build a repeatable private-alpha program: clear onboarding,
              safety checks, support tiers, public progress updates, and a
              feedback-to-backlog loop that keeps the project moving.
            </p>
          </div>
          <div className="supportActions">
            <img
              src="./aurelia-paypal-qr.png?v=1"
              alt="PayPal QR code to support Aurelia development"
              className="paypalQr"
            />
            <a
              href="https://www.paypal.com/qrcodes/managed/c9c78910-7802-4090-9c34-a0ac2ef55026?utm_source=aurelia_showcase"
              className="primaryAction"
              target="_blank"
              rel="noreferrer"
            >
              Open with PayPal
            </a>
            <a
              href="mailto:legacycreator@protonmail.com?subject=Aurelia%20support%20or%20pilot"
              className="secondaryAction"
            >
              Contact about a pilot
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
