import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BookOpen,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Download,
  Eye,
  FileText,
  Flame,
  GraduationCap,
  Hand,
  Heart,
  Home,
  Languages,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  MessageCircle,
  Mic,
  MoreHorizontal,
  Pencil,
  Play,
  Plus,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRound,
  UsersRound,
  Video,
  Volume2,
  X,
} from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { Role } from "./model";
export const icons = {
  back: ArrowLeft,
  arrow: ArrowRight,
  bell: Bell,
  book: BookOpen,
  bookmark: Bookmark,
  briefcase: BriefcaseBusiness,
  building: Building2,
  calendar: CalendarDays,
  chart: ChartNoAxesColumnIncreasing,
  check: Check,
  read: CheckCheck,
  down: ChevronDown,
  chevron: ChevronRight,
  help: CircleHelp,
  clock: Clock3,
  download: Download,
  eye: Eye,
  file: FileText,
  flame: Flame,
  graduation: GraduationCap,
  hand: Hand,
  heart: Heart,
  home: Home,
  languages: Languages,
  lock: LockKeyhole,
  logout: LogOut,
  mail: Mail,
  menu: Menu,
  message: MessageCircle,
  mic: Mic,
  more: MoreHorizontal,
  pencil: Pencil,
  play: Play,
  plus: Plus,
  search: Search,
  send: Send,
  settings: Settings2,
  shield: ShieldCheck,
  sparkles: Sparkles,
  star: Star,
  target: Target,
  trophy: Trophy,
  user: UserRound,
  users: UsersRound,
  video: Video,
  volume: Volume2,
  close: X,
};
export type IconName = keyof typeof icons;
export function Icon({
  name,
  size = 21,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const C = icons[name];
  return (
    <C size={size} strokeWidth={1.7} aria-hidden="true" className={className} />
  );
}
export const media = (name: string) =>
  `${import.meta.env.BASE_URL}media/${name}`;
export function Brand({
  mascot = false,
  onClick,
}: {
  mascot?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="brand" onClick={onClick} aria-label="Sinalis — início">
      {mascot && <img src={media("brand-mascot.png")} alt="" />}
      <span>
        <strong>
          Sinalis<span className="brand-dot">.</span>
        </strong>
        <small>EDUCAÇÃO QUE CONECTA</small>
      </span>
    </button>
  );
}
export function Mascot({
  role,
  className = "",
}: {
  role: Role;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`Mascote ${role === "surdo" ? "sinalizando" : role === "professor" ? "com livro e óculos" : "fazendo um sinal de positivo"}`}
      className={`mascot mascot-${role} ${className}`}
      style={{ backgroundImage: `url("${media("perfis.png")}")` }}
    />
  );
}
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "orange" | "ghost" | "white";
  children: ReactNode;
}) {
  return (
    <button {...props} className={`button button-${variant} ${className}`}>
      {children}
    </button>
  );
}
export function Title({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="title-block">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
export function Section({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {action}
    </div>
  );
}
export function Progress({ value, label }: { value: number; label?: string }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={label || "Progresso"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
export function Tabs({
  options,
  value,
  onChange,
  label = "Filtrar conteúdos",
}: {
  options: string[];
  value: string;
  onChange: (s: string) => void;
  label?: string;
}) {
  return (
    <div className="tabs" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o}
          aria-pressed={value === o}
          className={value === o ? "active" : ""}
          onClick={() => onChange(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
export function Row({
  icon,
  title,
  detail,
  onClick,
  children,
}: {
  icon?: IconName;
  title: string;
  detail?: string;
  onClick?: () => void;
  children?: ReactNode;
}) {
  return (
    <button className="row" onClick={onClick}>
      {icon && (
        <span className="row-icon">
          <Icon name={icon} />
        </span>
      )}
      <span className="row-copy">
        <strong>{title}</strong>
        {detail && <small>{detail}</small>}
      </span>
      {children || <Icon name="chevron" size={18} />}
    </button>
  );
}
export function Note({
  children,
  icon = "sparkles",
}: {
  children: ReactNode;
  icon?: IconName;
}) {
  return (
    <div className="note">
      <Icon name={icon} />
      <div>{children}</div>
    </div>
  );
}
export function Empty({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <div className="empty">
      <Icon name="book" size={35} />
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </div>
  );
}
export function SearchBox({
  value,
  onChange,
  placeholder = "Buscar conteúdo",
}: {
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="search">
      <Icon name="search" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  );
}
export function Toggle({
  title,
  detail,
  value,
  onChange,
}: {
  title: string;
  detail?: string;
  value: boolean;
  onChange: () => void;
}) {
  return (
    <button
      className="toggle-row"
      role="switch"
      aria-checked={value}
      onClick={onChange}
    >
      <span>
        <strong>{title}</strong>
        {detail && <small>{detail}</small>}
      </span>
      <span className={`toggle ${value ? "on" : ""}`}>
        <i />
      </span>
    </button>
  );
}
