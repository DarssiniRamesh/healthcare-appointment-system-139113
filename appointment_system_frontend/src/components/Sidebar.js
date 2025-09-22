import React from "react";
import { cx } from "../theme";

/**
 * PUBLIC_INTERFACE
 * Sidebar showing the booking steps and current progress
 */
export default function Sidebar({ currentStep, steps }) {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="brand" aria-label="Brand">
        <div className="brand-logo" />
        <div>
          <div className="brand-title">Aurelia Health</div>
          <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>
            Ocean Professional
          </div>
        </div>
      </div>

      <nav className="nav-section" aria-label="Booking steps">
        <ul className="nav-steps">
          {steps.map((label, index) => {
            const stepIndex = index + 1;
            const isActive = currentStep === stepIndex;
            const isCompleted = currentStep > stepIndex;
            return (
              <li
                key={label}
                className={cx(
                  "nav-step",
                  isActive && "active",
                  isCompleted && "completed"
                )}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${stepIndex}: ${label}${
                  isActive ? " (current)" : isCompleted ? " (completed)" : ""
                }`}
              >
                <span className="badge">
                  {isCompleted ? "✓" : stepIndex}
                </span>
                <span style={{ fontWeight: isActive ? 700 : 600 }}>{label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      <div style={{ marginTop: 24, color: "var(--text-secondary)", fontSize: 12 }}>
        Elegant, luxurious care experience.
      </div>
    </aside>
  );
}
