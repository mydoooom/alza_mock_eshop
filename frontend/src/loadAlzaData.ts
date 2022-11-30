export default async function loadAlzaData () {
  const res = await fetch('/api')
  const data = await res.json()
  return data?.data as any[]
}
