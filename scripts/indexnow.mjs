// Avisa a IndexNow (Bing, Yandex, Naver, Seznam) de las URLs del sitemap.
// Uso, después de cada deploy:  node scripts/indexnow.mjs
const HOST = "www.revolvergaraje.com";
const KEY = "08b9212ac735ed19b3cecb42097f9092"; // público a propósito: vive en /public/<llave>.txt

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("El sitemap no trae URLs");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} para ${urlList.length} URL(s)`);
if (res.status >= 400) process.exit(1);
