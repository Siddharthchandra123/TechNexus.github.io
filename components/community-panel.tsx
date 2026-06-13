"use client";

import { motion } from "framer-motion";
import {
  CheckCheck,
  Code2,
  Flame,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";

const messages = [
  {
    initials: "AK",
    color: "blue",
    name: "Aarav",
    text: "Just cleared the frontend internship round 🎉",
    time: "10:42",
  },
  {
    initials: "MS",
    color: "violet",
    name: "Meera",
    text: "Dropping my DP notes + today's problem breakdown.",
    time: "10:44",
  },
  {
    initials: "RV",
    color: "cyan",
    name: "Rohan",
    text: "Need 2 builders for the weekend hackathon. Who's in?",
    time: "10:47",
  },
];

export function CommunityPanel() {
  return (
    <motion.div
      className="community-panel"
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
    >
      <div className="panel-topbar">
        <div className="traffic-lights">
          <i />
          <i />
          <i />
        </div>
        <span>launchpad / community-hub</span>
        <div className="live-pill">
          <b /> LIVE
        </div>
      </div>
      <div className="panel-body">
        <aside className="panel-sidebar">
          <LogoGlyph />
          <span className="side-active">
            <MessageCircle size={17} />
          </span>
          <span>
            <Code2 size={17} />
          </span>
          <span>
            <Trophy size={17} />
          </span>
          <span>
            <Users size={17} />
          </span>
          <div className="side-avatar">Y</div>
        </aside>
        <div className="chat-area">
          <div className="chat-header">
            <div>
              <b># general</b>
              <small>1,248 students building together</small>
            </div>
            <div className="avatar-stack">
              <i>R</i>
              <i>M</i>
              <i>A</i>
              <span>+1.2k</span>
            </div>
          </div>
          <div className="messages">
            {messages.map((message, index) => (
              <motion.div
                className="message"
                key={message.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.18 }}
              >
                <div className={`message-avatar ${message.color}`}>
                  {message.initials}
                </div>
                <div>
                  <p>
                    <b>{message.name}</b> <time>{message.time}</time>
                  </p>
                  <span>{message.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="typing">
            <span>+</span>
            Message #general
            <i>
              <b />
              <b />
              <b />
            </i>
          </div>
        </div>
        <aside className="streak-card">
          <div className="streak-title">
            <span>
              <Flame size={15} /> DSA streak
            </span>
            <b>12 days</b>
          </div>
          <div className="streak-grid">
            {Array.from({ length: 28 }, (_, i) => (
              <i
                key={i}
                className={i < 22 ? (i % 5 === 0 ? "hot" : "done") : ""}
              />
            ))}
          </div>
          <div className="rank">
            <Trophy size={16} />
            <span>
              Weekly rank <b>#08</b>
            </span>
          </div>
          <div className="challenge">
            <small>TODAY&apos;S CHALLENGE</small>
            <b>Longest Increasing Subsequence</b>
            <span>
              Medium <CheckCheck size={14} />
            </span>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function LogoGlyph() {
  return (
    <div className="panel-logo">
      <span />
      <span />
      <span />
    </div>
  );
}
