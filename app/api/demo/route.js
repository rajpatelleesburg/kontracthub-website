import nodemailer from "nodemailer";

async function postToSlack(payload) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return { ok: false, skipped: true, reason: "SLACK_WEBHOOK_URL not set" };

  const text =
`📩 *KontractHub Demo Request*
• Name: ${payload.name || "-"}
• Email: ${payload.email}
• Brokerage: ${payload.brokerage || "-"}
• Message: ${payload.message || "-"}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  return { ok: res.ok, status: res.status };
}

async function sendEmail(payload) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.DEMO_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    return { ok: false, skipped: true, reason: "SMTP_HOST/SMTP_USER/SMTP_PASS/DEMO_TO_EMAIL not set" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `KontractHub Demo Request — ${payload.email}`;
  const text =
`KontractHub Demo Request

Name: ${payload.name || "-"}
Email: ${payload.email}
Brokerage: ${payload.brokerage || "-"}
Message: ${payload.message || "-"}`;

  await transporter.sendMail({
    from: process.env.MAIL_FROM || user,
    to,
    subject,
    text,
  });

  return { ok: true };
}

export async function POST(req) {
  try {
    const form = await req.formData();
    const payload = {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      brokerage: (form.get("brokerage") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };

    if (!payload.email) {
      return new Response(JSON.stringify({ ok: false, error: "Missing email" }), { status: 400 });
    }

    const [slack, email] = await Promise.allSettled([postToSlack(payload), sendEmail(payload)]);

    return new Response(JSON.stringify({
      ok: true,
      slack: slack.status === "fulfilled" ? slack.value : { ok: false, error: String(slack.reason) },
      email: email.status === "fulfilled" ? email.value : { ok: false, error: String(email.reason) },
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    console.error("demo route error", e);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
