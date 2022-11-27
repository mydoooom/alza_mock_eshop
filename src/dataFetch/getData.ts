import alzaBody from './alzaBody.json'

export const loadAlzaData = async () => {
  const res = await fetch('https://www.alza.cz/Services/RestService.svc/v2/products ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alzaBody),
  })
  const data = await res.json()
  return data?.data as any[]
}
