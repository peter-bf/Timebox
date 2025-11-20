import { Button } from "@/components/ui/button"
import Clock from "@/components/Clock"

export default function HeroSection() {
  return (
    <div className="bg-background pt-20 pb-8 sm:pt-32 sm:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 md:pr-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Manage Your Time with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Timebox</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Store your valuable information securely on the Midnight blockchain. Create time-locked "timeboxes" that
            can only be opened at a specific future date, ensuring your data remains confidential until the moment you
            choose.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Clock />
          </div>
        </div>
      </div>
    </div>
  )
}

