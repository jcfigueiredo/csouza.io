"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    const banner = `
 ██████╗███████╗ ██████╗ ██╗   ██╗███████╗ █████╗    ██╗ ██████╗
██╔════╝██╔════╝██╔═══██╗██║   ██║╚══███╔╝██╔══██╗   ██║██╔═══██╗
██║     ███████╗██║   ██║██║   ██║  ███╔╝ ███████║   ██║██║   ██║
██║     ╚════██║██║   ██║██║   ██║ ███╔╝  ██╔══██║   ██║██║   ██║
╚██████╗███████║╚██████╔╝╚██████╔╝███████╗██║  ██║██╗██║╚██████╔╝
 ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝ ╚═════╝`;

    const resumeUrl = `${window.location.origin}/resume.md`;

    console.log(
      `%c${banner}`,
      "color: #6366f1; font-size: 10px; font-family: monospace; line-height: 1.1;",
    );

    console.log(
      "%c👋 Hey, fellow developer! Welcome to my website.",
      "color: #22d3ee; font-size: 16px; font-weight: bold; padding: 8px 0;",
    );

    console.log(
      `%c🎁 As an Easter egg for you — here's a link to my resume's summary, in Markdown. Have fun, and reach out!\n%c${resumeUrl}`,
      "color: #a78bfa; font-size: 14px; padding: 4px 0;",
      "color: #facc15; font-size: 14px; font-weight: bold; padding: 4px 0;",
    );

    console.log(
      "%c📬 Reach out on LinkedIn → https://www.linkedin.com/in/claudiofsouza",
      "color: #34d399; font-size: 13px; font-weight: bold; padding: 4px 0;",
    );

    console.log(
      "%c💻 Or make a commit → https://github.com/jcfigueiredo",
      "color: #34d399; font-size: 13px; font-weight: bold; padding: 4px 0;",
    );

    console.log(
      "%c😊 I hope you're having a nice day! :)",
      "color: #fb923c; font-size: 14px; font-weight: bold; padding: 8px 0;",
    );
  }, []);

  return null;
}
