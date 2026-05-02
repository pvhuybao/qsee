import type { ReactNode } from "react";

const CONTACT = {
  email: "/#contact",
  phone: "tel:+84966266578",
  zalo: "https://zalo.me/84966266578",
} as const;

export default function ContactSticky() {
  return (
    <div
      className="flex flex-col items-center gap-3"
      role="navigation"
      aria-label="Liên hệ nhanh"
    >
      <RingLink href={CONTACT.email} label="Gửi email" tone="blue">
        <IconMail className="text-white" />
      </RingLink>
      <RingLink href={CONTACT.zalo} label="Chat Zalo" tone="blue">
        <img
          src="/images/contact/zalo-icon-2.png"
          alt="Zalo"
          className="h-[26px] w-[26px]"
        />
      </RingLink>
      <RingLink href={CONTACT.phone} label="Gọi hotline" tone="red">
        <IconPhone className="text-white" />
      </RingLink>
    </div>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

type RingTone = "blue" | "red";

function RingLink({
  href,
  label,
  tone,
  children,
}: {
  href: string;
  label: string;
  tone: RingTone;
  children: ReactNode;
}) {
  const outer =
    tone === "blue"
      ? "bg-[#2598f4]/20 shadow-[0_0_0_1px_rgba(0,86,179,0.08)]"
      : "bg-[#ff3728]/20 shadow-[0_0_0_1px_rgba(220,38,38,0.08)]";
  const mid = tone === "blue" ? "bg-[#0056b3]/28" : "bg-[#dc2626]/28";
  const core =
    tone === "blue"
      ? "bg-[#2598f4] shadow-[0_4px_14px_rgba(0,86,179,0.45)] hover:bg-[#004a9a]"
      : "bg-[#ff3728] shadow-[0_4px_14px_rgba(225,29,72,0.45)] hover:bg-[#be123c]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`group relative flex h-15 w-15 shrink-0 items-center justify-center transition-transform duration-200 outline-none hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-offset-2 ${
        tone === "blue"
          ? "focus-visible:ring-[#0056b3]"
          : "focus-visible:ring-[#e11d48]"
      }`}
    >
      <span
        className={`contact-sticky-pulse absolute h-full w-full rounded-full ${outer}`}
        aria-hidden
      />
      <span
        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors duration-200 ${core}`}
      >
        {children}
      </span>
    </a>
  );
}
