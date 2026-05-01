import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const ADMIN_EMAIL = "pvhuybao2210@gmail.com";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 },
    );
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  } = {};
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !message || !email) {
    return NextResponse.json(
      {
        error: "Vui lòng cung cấp họ tên, email và nội dung cần tư vấn.",
      },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "QSEE <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: `Yêu cầu liên hệ mới từ ${name}`,
      html: `<p><strong>Họ tên:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Số điện thoại:</strong> ${escapeHtml(phone)}</p><p><strong>Nội dung cần tư vấn:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json(
      { error: "Không thể gửi email. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
