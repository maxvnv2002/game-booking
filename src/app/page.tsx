import { createClientServer } from '@/utils/supabase'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClientServer(cookieStore)

  let data = await supabase.from('users').select('*')
  console.log(data)
  return <div></div>
}
