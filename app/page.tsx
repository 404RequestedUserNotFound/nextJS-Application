import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>I am from planet earth!</h1>
      <Link href ="/users">UsersPage</Link>
    </main>
  )
}
