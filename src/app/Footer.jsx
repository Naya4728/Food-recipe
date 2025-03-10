import Link from "next/link";


export default function Footer() {
  return (
    <footer className="h=[40vh] bg-slate-800/55 text-white flex flex-col px-16 py-8">
        <h2>All rights reserved &copy;<Link href="https://www.linkedin.com/in/olayinka-adenaya-b92462267/" target="blank">Coderite</Link>{new Date().getFullYear()}</h2>
    </footer>
  )
}
