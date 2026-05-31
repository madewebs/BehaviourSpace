import type { Metadata } from "next";
import { exo, interTight, eduHand, montserrat, raleway, manrope, quicksand } from "./fonts";
import "./globals.css";

const seoKeywords = [
  "#1 Behavioral Health Clinic",
  "behavior space clinic bangalore",
  "behavior space clinic kerala",
  "behavior space clinic kozhikode",
  "best behavioral therapist near me in kerala",
  "psychologist in bangalore",
  "psychologist in kozhikode",
  "anxiety treatment center kerala",
  "panic attack therapy bangalore",
  "panic attack therapy kozhikode",
  "how to stop overthinking",
  "burnout recovery therapist",
  "best child therapist in bangalore",
  "best child therapist in kozhikode",
  "ADHD treatment for children near me",
  "autism support clinic kerala",
  "ODD therapy for kids",
  "learning disabilities support near me",
  "evidence-based behavioral therapy",
  "therapy for children and adults",
  "Autism spectrum disorder (ASD) therapy",
  "Autism clinic",
  "ADHD assessment",
  "ADHD behavior therapy",
  "Child behavioral therapy",
  "Oppositional Defiant Disorder (ODD) treatment",
  "Sensory processing disorder clinic",
  "Anger management for children/teens",
  "ABA therapy (Applied Behavior Analysis)",
  "Cognitive Behavioral Therapy (CBT) for behavior",
  "Speech and occupational therapy",
  "Behavioral psychologist near me",
  "Board Certified Behavior Analyst (BCBA)",
  "Pediatric behavioral counselor",
  "Behavior clinic in Kozhikode",
  "Autism center near me",
  "Child behavior clinic Kozhikode",
  "In-home behavioral therapy"
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.behaviorspace.co"),
  title: {
    default: "Leading Behavioral Health Clinic in Kozhikode | Behavior Space Clinic",
    template: "%s | Behavior Space Clinic",
  },
  description:
    "Behavior Space Clinic provides evidence-based behavioral therapy through the A.B.T. Reset Framework to help you overcome anxiety, panic, and overthinking. We also offer specialized support for behavioral and learning challenges in children (ADHD, ASD, ODD).",
  keywords: seoKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IND",
    url: "https://www.behaviorspace.co/",
    title: "Behavior Space Clinic",
    description:
      "Find calm and clarity with evidence-based behavioral therapy at Behavior Space Clinic. We help adults break free from burnout and support children with academic or developmental challenges.",
    siteName: "Behavior Space Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior Space Clinic",
    description:
      "Find calm and clarity with evidence-based behavioral therapy at Behavior Space Clinic. We help adults break free from burnout and support children with academic or developmental challenges.",
    creator: "@behaviorspace",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${exo.className} ${eduHand.className}`}
      style={{
        "--font-inter-tight": interTight.style.fontFamily,
        "--font-exo": exo.style.fontFamily,
        "--font-edu-hand": eduHand.style.fontFamily,
        "--font-montserrat": montserrat.style.fontFamily,
        "--font-raleway": raleway.style.fontFamily,
        "--font-manrope": manrope.style.fontFamily,
        "--font-quicksand": quicksand.style.fontFamily,
      } as React.CSSProperties}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'BehaviorSpace',
                  url: 'https://www.behaviorspace.co/',
                },
                {
                  '@type': 'MedicalClinic',
                  name: 'Behavior Space Clinic',
                  url: 'https://www.behaviorspace.co/',
                  telephone: '+917907961350',
                  priceRange: '₹₹',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    addressCountry: 'IN',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '120',
                    bestRating: '5',
                    worstRating: '1',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
