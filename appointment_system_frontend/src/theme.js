//
// Ocean Professional Elegant Theme configuration and helpers
//

// PUBLIC_INTERFACE
export const styleThemeData = {
  name: "Ocean Professional",
  description: "Elegant theme with soft pastels, gentle gradients, refined, rounded components.",
  primary: "#F472B6", // rose-400
  secondary: "#F59E0B", // amber-500
  success: "#10B981",
  error: "#EF4444",
  gradientFrom: "#FFF1F2", // rose-50
  gradientTo: "#FAF5FF", // purple-50
  background: "#FDF2F8", // rose-100-ish
  surface: "#FFFFFF",
  text: "#374151", // gray-700
  textSecondary: "#6B7280", // gray-500
  border: "rgba(55, 65, 81, 0.08)", // light gray
  shadow: "0 10px 30px rgba(16, 24, 40, 0.08)",
  radiusLg: "16px",
  radiusMd: "12px",
  radiusSm: "10px",
  spacing: 16,
};

// PUBLIC_INTERFACE
export function applyCSSVariables() {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", styleThemeData.primary);
  root.style.setProperty("--color-secondary", styleThemeData.secondary);
  root.style.setProperty("--color-success", styleThemeData.success);
  root.style.setProperty("--color-error", styleThemeData.error);
  root.style.setProperty("--gradient-from", styleThemeData.gradientFrom);
  root.style.setProperty("--gradient-to", styleThemeData.gradientTo);
  root.style.setProperty("--bg", styleThemeData.background);
  root.style.setProperty("--surface", styleThemeData.surface);
  root.style.setProperty("--text", styleThemeData.text);
  root.style.setProperty("--text-secondary", styleThemeData.textSecondary);
  root.style.setProperty("--border", styleThemeData.border);
  root.style.setProperty("--shadow", styleThemeData.shadow);
  root.style.setProperty("--radius-lg", styleThemeData.radiusLg);
  root.style.setProperty("--radius-md", styleThemeData.radiusMd);
  root.style.setProperty("--radius-sm", styleThemeData.radiusSm);
}

// PUBLIC_INTERFACE
export const brandGradient = `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`;

// PUBLIC_INTERFACE
export const cardStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--shadow)",
};

// PUBLIC_INTERFACE
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
