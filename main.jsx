import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  // CUSTOMIZE THESE THREE LINES
  const wifeName = "My Love";
  const fromName = "Your Forever Person";
  const message = "You make my world more beautiful. May your year be filled with happiness, laughter and endless love.";

  const [started, setStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blossoms = Array.from({ length: 76 }, (_, i) => {
    // Points distributed inside a heart silhouette.
    const t = (i / 76) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    const spread = 0.45 + ((i * 17) % 53) / 100;
    return { left: 50 + x * spread + (((i*7)%9)-4)*0.55, top: 37 + y * spread + (((i*11)%9)-4)*0.45, delay: (i%18)*0.075, size: 12 + (i%4)*3 };
  });

  return (
    <main className="page">
      <div className="glow glow-one"/><div className="glow glow-two"/>
      {!started ? (
        <section className="intro">
          <p className="eyebrow">a little something for you</p>
          <button className="heart-button" onClick={() => setStarted(true)} aria-label="Open your surprise">♥</button>
          <p className="hint">TAP THE HEART TO BEGIN</p>
          <div className="tiny-hearts">♡　♡　♡</div>
        </section>
      ) : (
        <section className="celebration">
          <p className="eyebrow">today is all about you</p>
          <h1>Happy Birthday</h1>
          <h2>{wifeName}</h2>
          <div className="tree-scene" aria-label="A flowering heart-shaped tree">
            <div className="trunk"/>
            <div className="branch branch-left"/>
            <div className="branch branch-right"/>
            <div className="branch branch-mid"/>
            <div className="heart-canopy">
              {blossoms.map((b,i)=><span key={i} className="blossom" style={{left:`${b.left}%`,top:`${b.top}%`,animationDelay:`${b.delay}s`,fontSize:`${b.size}px`}}>{i%5===0?"🌼":i%3===0?"🌸":"🌷"}</span>)}
            </div>
            <div className="falling">✿　♡　✿　♡　✿</div>
          </div>
          <p className="wish">May your life bloom with love</p>
          <button className="message-button" onClick={() => setShowMessage(v=>!v)}>{showMessage ? "Close my message" : "Open my message ♥"}</button>
          {showMessage && <div className="letter"><p>Dear {wifeName},</p><p>{message}</p><p className="signature">With all my love,<br/>{fromName} ♥</p></div>}
          <button className="replay" onClick={()=>{setStarted(false);setShowMessage(false)}}>Replay surprise</button>
        </section>
      )}
      <footer>MADE WITH ♥ JUST FOR YOU</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);