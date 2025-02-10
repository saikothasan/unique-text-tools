import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
        >
          Text Tools
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

