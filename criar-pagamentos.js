import mercadopago from "mercadopago";

// Mantém compatibilidade: exporta a public key para uso em builds
export const MP_PUBLIC_KEY = process.env.MP_PUBLIC_KEY || "";

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const preference = {
      items: [
        {
          title: "Livro Digital",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 5.00
        }
      ],
      back_urls: {
        success: "https://SEU_SITE.vercel.app/sucesso",
        failure: "https://SEU_SITE.vercel.app/erro",
        pending: "https://SEU_SITE.vercel.app/pendente"
      },
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
