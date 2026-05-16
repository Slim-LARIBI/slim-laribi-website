export function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  )
}