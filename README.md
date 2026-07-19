# Aurelia — Visible Autonomy

Aurelia is a local-first, supervised automation agent for Android and Windows.
It turns a human intention into a bounded sequence of visible, verifiable
actions while leaving sensitive final decisions under direct human control.

This repository contains only the sanitized public showcase website. It does
not include the private Aurelia runtime, credentials, operational logs, device
diagnostics, financial modules, or private user data.

## Public demo

- Live showcase: https://aurelia-synapsis-showcase.davidpeguero27.chatgpt.site
- GitHub Pages: enabled from the `main` branch through GitHub Actions

## Safety model

Aurelia is designed to automate only low-risk, reversible, observable tasks
after local validation. Credentials, private codes, payments, transfers,
trading, account changes, destructive actions, and final sensitive
confirmations remain human-controlled.

The public demo describes the architecture and interaction model. It does not
connect visitors to a live device, private backend, or external account.

## Run locally

Requirements:

- Node.js 20 or newer
- npm

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Validate a production build

```powershell
npm ci
npm run build
npm run start
```

## Project status

Aurelia is an experimental private-alpha project. The public showcase is
informational and does not imply endorsement, certification, or partnership
with OpenAI or any other model or platform provider.

## Contact

Support Aurelia development through the verified PayPal checkout:
https://www.paypal.com/qrcodes/managed/c9c78910-7802-4090-9c34-a0ac2ef55026?utm_source=aurelia_showcase

For pilot or development-support inquiries:
`legacycreator@protonmail.com`

## License

The showcase source and visual assets are provided under the terms in
[LICENSE](LICENSE). No rights to the private Aurelia runtime are granted.
