export default function IconBadge({ icon: Icon, tone = "blue" }) {
  const tones = {
    blue: "bg-electric/10 text-electric",
    green: "bg-mint/10 text-[#087f5f]",
    purple: "bg-violet/10 text-violet",
    amber: "bg-sun/20 text-[#9a5a00]",
  };

  return (
    <span
      className={`flex h-11 w-11 items-center justify-center rounded-lg ${tones[tone]}`}
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}
