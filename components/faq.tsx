"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  [
    "Who is this community for?",
    "Launchpad is for college students and recent graduates who want structured, practical support with internships, DSA, coding, hackathons, and early career growth.",
  ],
  [
    "Is the community free to join?",
    "Yes. The core WhatsApp community, weekly challenges, curated opportunities, and peer discussions are completely free.",
  ],
  [
    "How active is the community?",
    "There are focused activities throughout the week, daily peer conversations, opportunity drops, problem-solving threads, and weekend event collaboration.",
  ],
  [
    "Will I get personal internship referrals?",
    "We share verified openings, application strategies, resume feedback, and referral opportunities when members make them available. We never promise placements.",
  ],
  [
    "How do you keep discussions useful?",
    "Clear topic channels, weekly programming, community moderators, and a strong no-spam policy keep the signal high and the conversation welcoming.",
  ],
];

export function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => (
        <div className={`faq-item ${active === index ? "active" : ""}`} key={question}>
          <button onClick={() => setActive(active === index ? -1 : index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{question}</b>
            <Plus size={20} />
          </button>
          <AnimatePresence initial={false}>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
