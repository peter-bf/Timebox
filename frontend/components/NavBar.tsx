import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors">Timebox</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="shadow-sm hover:shadow-md transition-all">Create Timebox</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

