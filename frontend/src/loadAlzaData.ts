export default async function loadAlzaData () {
  const res = await fetch('/api', {
    method: 'POST',
  })
  const data = await res.json()
  return data?.data as any[]
}
