import Image from 'next/image';

export function AwsBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-card text-card-foreground shadow-sm p-3 mt-4">
      <Image
        src="/aws-certified-solutions-architect-associate.png"
        alt="AWS Certified Solutions Architect - Associate"
        width={40}
        height={40}
      />
      <div>
        <p className="text-sm font-semibold">AWS Certified</p>
        <p className="text-xs text-muted-foreground">Solutions Architect - Associate</p>
      </div>
    </div>
  );
} 