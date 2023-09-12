// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from "@/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  if (req.method != "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!priceId) {
    return res.status(400).json({ error: "price not found" });
  }

  const checkOutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });
  return res.status(201).json({
    checkoutUrl: checkOutSession.url,
  });
}
