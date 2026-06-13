export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="Launchpad home">
      <span className="brand-mark">
        <span />
        <span />
        <span />
      </span>
      {!compact && (
        <span className="brand-word">
          Tech<span>Nexus</span>
        </span>
      )}
    </span>
  );
}
