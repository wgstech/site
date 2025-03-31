"use server";

import dedent from "dedent";
import { v4 as uuid } from "uuid";
import { env } from "../services/env";
import { resend } from "../services/resend";

interface Data {
  name: string;
  phone: string;
  details: string;
}

const destinations: Record<typeof env.NODE_ENV, string> = {
  development: "delivered@resend.dev",
  test: "delivered@resend.dev", // "bounced@resend.dev" or "complained@resend.dev" to test errors
  production: "leonardogurgelmf@gmail.com",
};

const to = destinations[env.NODE_ENV];

export async function sendContactFormEmail(data: Data) {
  const response = await resend.emails.send({
    from: "WGS Tech Landing Page <wgstech@gurgel.io>",
    to,
    subject: `Novo Lead: ${data.name}`,
    text: dedent`
      Um novo lead foi gerado através do formulário de contato do site:

      Nome: ${data.name}
      Telefone: ${data.phone}

      "${data.details}"
    `,
    headers: {
      "X-Entity-Ref-ID": uuid(),
    },
  });

  if (response.error) throw response.error;

  return response.data;
}
