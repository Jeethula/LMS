import Image from 'next/image'

export default function Home() {
  return (
<div>
  Home
  <UserButton afterSignOutUrl="/"/>
</div>
  )
}