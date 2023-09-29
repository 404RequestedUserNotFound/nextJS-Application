import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/component/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>I am from planet earth!</h1>
      <Link href ="/users">UsersPage</Link>
      <ProductCard />
    </main>
  )
}
