import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Carrega .env.local se existir
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const publicKey = process.env.MP_PUBLIC_KEY || '';
const out = { publicKey };

const outPath = path.resolve(process.cwd(), 'public-config.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), { encoding: 'utf8' });
console.log(`Arquivo gerado: ${outPath}`);
