export const post = (url: string, body: object) => fetch(url, {
  method: "POST",
  body: JSON.stringify(body),
  headers: { "content-type": "application/json" },
})

export const put = (url: string, body: object) => fetch(url, {
  method: "PUT",
  body: JSON.stringify(body),
  headers: { "content-type": "application/json" },
})


export const get = (url: string) => fetch(url, {
  method: "GET",
})

export const deleteReq = (url: string) => fetch(url, {
  method: "DELETE",
})