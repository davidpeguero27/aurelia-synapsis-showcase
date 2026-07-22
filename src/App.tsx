import {
  Activity,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  FileText,
  Fingerprint,
  Github,
  HandCoins,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageSquareText,
  MousePointer2,
  PlayCircle,
  Radio,
  Route,
  Search,
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

const demoMoments = [
  {
    label: "0-10s",
    title: "Intent",
    text: "The user writes a plain request: find numbers, summarize a page, capture a screenshot, or start a known workflow."
  },
  {
    label: "10-30s",
    title: "Visible Plan",
    text: "Aurelia identifies the active app, shows the next action through the cursor, and explains what it is about to try."
  },
  {
    label: "30-50s",
    title: "Action",
    text: "Only low-risk reversible steps run automatically, with before/after evidence and a stop point for human decisions."
  },
  {
    label: "50-60s",
    title: "Verified",
    text: "The timeline records success, failure, or the next safe repair step so the user and developer can keep improving the flow."
  }
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

const feedbackLinks = [
  {
    icon: <Github />,
    title: "GitHub",
    text: "Open issues, ideas, and implementation discussions for the public showcase.",
    href: "https://github.com/davidpeguero27/aurelia-synapsis-showcase/issues"
  },
  {
    icon: <MessageSquareText />,
    title: "Feedback",
    text: "Share pilot ideas, usability blockers, or workflows that should become verified playbooks.",
    href: "mailto:legacycreator@protonmail.com?subject=Aurelia%20feedback"
  },
  {
    icon: <FileText />,
    title: "Trust docs",
    text: "Read the local-first privacy model and security boundaries before trying a pilot.",
    href: "https://github.com/davidpeguero27/aurelia-synapsis-showcase"
  }
];

const sandboxMessages = [
  {
    author: "Maya",
    text: "I can meet at 458 Harbor Ave at 3:20 PM. The reference code is 742918."
  },
  {
    author: "Rafael",
    text: "Use entrance B near Bay 12. If asked, mention pickup group 3056."
  },
  {
    author: "Aurelia",
    text: "I found 4 numeric references and 1 address. I will highlight them and stop."
  }
];

const sandboxMatches = [
  "458 Harbor Ave",
  "3:20 PM",
  "742918",
  "12",
  "3056"
];

const sandboxTimeline = [
  {
    label: "Before",
    text: "Dummy conversation loaded; no private account, email, phone, or payment data visible."
  },
  {
    label: "Action",
    text: "Aurelia scans the visible text, marks numbers and addresses, and keeps the cursor on the active target."
  },
  {
    label: "After",
    text: "Matches stay highlighted and the next step is user review, not an automatic final action."
  }
];

function highlightSandboxText(text: string) {
  const pattern = new RegExp(`(${sandboxMatches.map((match) => match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    sandboxMatches.includes(part) ? (
      <mark
        className={`matchToken matchToken${sandboxMatches.indexOf(part) + 1}`}
        key={`${part}-${index}`}
      >
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

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
          <p>
            The 60-second demo story is simple: Aurelia receives one intention,
            points at the next visible step, acts only inside safe limits, and
            leaves a verification trail the user can inspect.
          </p>
        </div>
        <div className="demoStrip" aria-label="Aurelia 60 second demo outline">
          <div className="demoLead">
            <PlayCircle aria-hidden="true" />
            <div>
              <h3>60-second demo script</h3>
              <p>
                Show the cursor above another app, send one intention, execute
                one reversible action, then display the verified timeline.
              </p>
            </div>
          </div>
          <div className="demoMoments">
            {demoMoments.map((moment) => (
              <article key={moment.label}>
                <span>{moment.label}</span>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </article>
            ))}
          </div>
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

      <section className="sandbox" id="sandbox">
        <div className="sectionHeader">
          <p className="eyebrow">Local demo sandbox</p>
          <h2>Practice on dummy data before recording</h2>
          <p>
            This screen is made for the safe demo draft. It shows the exact
            behavior Aurelia should demonstrate: understand the current surface,
            point with the cursor, highlight useful entities, and stop with a
            verified timeline.
          </p>
        </div>
        <div className="liveDemoRail" aria-label="Aurelia animated demo status">
          <span>Live loop</span>
          <div className="liveProgress" aria-hidden="true">
            <i />
          </div>
          <strong>Intent {">"} scan {">"} point {">"} verify {">"} safe stop</strong>
        </div>
        <div className="sandboxStage" aria-label="Aurelia demo sandbox with dummy conversation">
          <div className="sandboxPhone">
            <div className="sandboxTopbar">
              <span>Demo Messages</span>
              <Search aria-hidden="true" />
            </div>
            <div className="sandboxIntent">
              <MousePointer2 aria-hidden="true" />
              <span>AURELIA busca codigos numericos</span>
            </div>
            <div className="messageList">
              {sandboxMessages.map((message) => (
                <article className={message.author === "Aurelia" ? "message aureliaMessage" : "message"} key={message.text}>
                  <strong>{message.author}</strong>
                  <p>{highlightSandboxText(message.text)}</p>
                </article>
              ))}
            </div>
            <div className="sandboxCursor" aria-label="Aurelia cursor pointing at highlighted match">
              <MousePointer2 aria-hidden="true" />
            </div>
          </div>
            <div className="sandboxPanel">
              <div className="entitySummary">
              <div className="entityCard entityCard1">
                <Search aria-hidden="true" />
                <span>5 matches found</span>
              </div>
              <div className="entityCard entityCard2">
                <MapPin aria-hidden="true" />
                <span>1 address candidate</span>
              </div>
              <div className="entityCard entityCard3">
                <ShieldCheck aria-hidden="true" />
                <span>Safe stop before external action</span>
              </div>
            </div>
            <div className="timelinePanel">
              {sandboxTimeline.map((item, index) => (
                <article className={`timelineStep timelineStep${index + 1}`} key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="feedback" id="feedback">
        <div className="sectionHeader">
          <p className="eyebrow">Feedback loop</p>
          <h2>Turn outside feedback into verified development work</h2>
          <p>
            Aurelia tracks real comments, pilot requests, and public mentions as
            structured intake. Useful feedback becomes a candidate task with a
            testable acceptance check before it is promoted into the roadmap.
          </p>
        </div>
        <div className="feedbackGrid">
          {feedbackLinks.map((link) => (
            <a className="feedbackCard" href={link.href} target="_blank" rel="noreferrer" key={link.title}>
              <div className="iconWrap">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.text}</p>
            </a>
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
            <span>Unverified outcomes stop as <code>outcome_unknown</code>, block automatic retries, and require observation.</span>
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

      <footer className="siteFooter">
        <span>Aurelia private alpha</span>
        <nav aria-label="Project links">
          <a href="https://github.com/davidpeguero27/aurelia-synapsis-showcase">GitHub</a>
          <a href="https://github.com/davidpeguero27/aurelia-synapsis-showcase/blob/main/PRIVACY.md">Privacy</a>
          <a href="https://github.com/davidpeguero27/aurelia-synapsis-showcase/blob/main/SECURITY.md">Security</a>
          <a href="mailto:legacycreator@protonmail.com?subject=Aurelia%20pilot">Contact</a>
        </nav>
      </footer>
    </main>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
