type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-[1.7rem] font-black leading-tight text-ink">{title}</h2>
      {copy ? <p className="max-w-[19rem] text-sm leading-7 text-muted">{copy}</p> : null}
    </div>
  );
}
