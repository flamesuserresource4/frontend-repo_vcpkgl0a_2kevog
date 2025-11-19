export default function GlitchText({ children, className = '' }) {
  return (
    <span className={`relative inline-block glitch ${className}`} data-text={children}>
      {children}
    </span>
  );
}
