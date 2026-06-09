import {
  HeartHandshake,
  Rocket,
  Building2,
  ShieldCheck,
  Sparkles,
  Globe2,
  GraduationCap,
  Smile,
  MonitorPlay,
  FlaskConical,
  Library,
  Trees,
  Dumbbell,
  AirVent,
  Bus,
  Stethoscope,
  Award,
  TrendingUp,
  Handshake,
  Brain,
  Users,
  Phone,
  MapPin,
  FileText,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  HeartHandshake,
  Rocket,
  Building2,
  ShieldCheck,
  Sparkles,
  Globe2,
  GraduationCap,
  Smile,
  MonitorPlay,
  FlaskConical,
  Library,
  Trees,
  Dumbbell,
  AirVent,
  Bus,
  Stethoscope,
  Award,
  TrendingUp,
  Handshake,
  Brain,
  Users,
  Phone,
  MapPin,
  FileText,
  CheckCircle2,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
