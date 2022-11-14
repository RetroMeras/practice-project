export const post = (url: string, body: object) => fetch(url, {
  method: "POST",
  body: JSON.stringify(body),
  headers: { "content-type": "application/json" },
})