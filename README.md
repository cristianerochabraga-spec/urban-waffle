Automação para expor MP_PUBLIC_KEY ao front-end

1. Instale dependências:

```bash
npm install
```

2. Gere o arquivo público com a chave (lê `.env.local`):

```bash
npm run generate-config
```

Isso cria `public-config.json` com o campo `publicKey`. No front-end, você pode carregar esse JSON e inicializar o SDK do MercadoPago com `publicKey`.
