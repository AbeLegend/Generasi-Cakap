import { figtree, muli } from "@/lib";

export default function Home() {
  return (
    <main className="w-fit">
      <h1>Home Default</h1>
      <h1 className={figtree.className}>Home Figtree</h1>
      <h1 className={muli.className}>Home Muli</h1>
    </main>
  );
}
