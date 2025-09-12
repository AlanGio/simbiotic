import { Badge } from "../ui/badge";
import Image from "next/image";

export const sections = [
  {
    id: "hero",
    subtitle: (
      <Badge variant="outline" className="text-white border-white opacity-50">
        AI & Martech
      </Badge>
    ),
    titleBelow: <p className="text-[#D0C13B]">Tiempo de hacer simbiosis.</p>,
    showButton: false,
    content: <Image src="/logo.svg" alt="logo" width={490} height={100} />,
  },
  {
    id: "features",
    title:
      "El marketing ya no es intuición, es ciencia aumentada por creatividad.",
    content:
      "Aportamos <b>Martech, AI, Analytics, Ad Operations, y Gen AI Content.</b>\n\nTenemos ADN de emprendedores tecnológicos y experiencia en transformar negocios a partir de growth models desde la estrategia hasta la última línea de código.\n\nEn definitiva: hacemos que la <b>tecnología para marketing</b> deje de ser una promesa y se convierta en un motor real de crecimiento.",
    image: (
      <Image
        src="/assets/simbiotic-slide.svg"
        alt="Simbiotic slide"
        width={900}
        height={800}
        style={{
          fill: "#D0C13B",
        }}
      />
    ),
  },
  {
    id: "way",
    image: (
      <div className="w-full h-full mx-auto">
        <Image
          src="/assets/simbiotic-slide2.svg"
          alt="Simbiotic slide"
          width={1200}
          height={1000}
          style={{
            fill: "#D0C13B",
          }}
        />
      </div>
    ),
  },
  {
    id: "profiles",
    image: (
      <div className="w-full h-full mx-auto">
        <Image
          src="/assets/simbiotic-profiles.svg"
          alt="Simbiotic slide"
          width={1200}
          height={1000}
          style={{
            fill: "#D0C13B",
          }}
        />
      </div>
    ),
  },
  {
    id: "tools",
    image: (
      <div className="w-full h-full mx-auto">
        <Image
          src="/assets/last.svg"
          alt="Simbiotic slide"
          width={1200}
          height={1000}
          style={{
            fill: "#D0C13B",
          }}
        />
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contactanos",
    content: "Hagamos Simbiosis.",
    showButton: true,
    buttonText: "hola@simbiotic.io",
    buttonLink: "mailto:hola@simbiotic.io",
  },
];
