import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Aurelia - Visible Autonomy",
  description:
    "A local-first supervised agent that turns human intentions into visible, verifiable actions across Android and PC."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
