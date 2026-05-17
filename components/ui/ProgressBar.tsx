type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="h-2 rounded-full bg-paper-deep">
      <div className="h-2 rounded-full bg-gold" style={{ width: `${safeValue}%` }} />
    </div>
  );
}
