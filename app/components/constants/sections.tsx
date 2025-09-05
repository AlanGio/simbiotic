import { Badge } from "../ui/badge"
import Image from "next/image"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white opacity-50">AI & Martech</Badge>,
    titleBelow: "It's time to make symbiosis.",
    showButton: true,
    buttonText: 'Download our Pitch Deck',
    content: <Image src="/logo.svg" alt="logo" width={500} height={100} />
  },
  {
    id: 'about',
    title: 'Why Us?',
    content: "At Simbiotic, we blend strategy, creativity, and technology to spark business growth. We're a team of passionate innovators driven by results, crafting bespoke solutions that bring brands and people together in the ever- evolving digital world.",
  }, {
    id: 'features',
    title: 'What We Offer',
    content: "Artificial intelligence isn’t a competitive advantage anymore — it’s the new baseline. If you're still treating it as a ‘future technology,’ you're already losing the battle for the next decade of leadership."
  },
  {
    id: 'join',
    title: 'Get Started',
    content: 'Ready to take your side project to the next level? Join our community today and start building your future.',
    showButton: true,
    buttonText: 'Join Now',
    buttonLink: 'mailto:hello@simbiotic.ai'
  },
]
