import type { Metadata } from "next";
import { exo, interTight, eduHand, montserrat, raleway, manrope, quicksand } from "./fonts";
import "./globals.css";

const baseKeywords = [
  "behavior space clinic",
  "behavior space",
  "behavioral health clinic",
  "behavioral therapy center",
  "applied behavior analysis",
  "aba therapy",
  "aba therapy services",
  "aba therapists",
  "aba therapy clinic",
  "autism therapy clinic",
  "autism support center",
  "autism behavior therapy",
  "child behavioral therapy",
  "child development clinic",
  "child psychology services",
  "child counseling clinic",
  "speech and behavior therapy",
  "occupational therapy support",
  "sensory integration therapy",
  "parent coaching",
  "family therapy support",
  "behavior intervention services",
  "social skills training",
  "special needs therapy",
  "developmental therapy",
  "behavior consultation",
  "functional behavior assessment",
  "positive behavior support",
  "behavioral health support",
  "evidence based therapy",
  "clinical psychologists",
  "clinical behavior analysts",
  "board certified behavior analyst",
  "registered behavior technicians",
  "behavioral health specialists",
  "early intervention services",
  "school readiness therapy",
  "inclusive education support",
  "behavior modification clinic",
  "pediatric behavior therapy",
  "neurodiversity support",
  "adhd coaching",
  "asperger support",
  "autism spectrum services",
  "behavioral telehealth",
  "teletherapy for autism",
  "hybrid therapy programs",
  "custom behavior plans",
  "family centered therapy",
  "home based aba",
  "community behavior services",
  "behavior therapy india",
  "behavior therapy bangalore",
  "behavior therapy bengaluru",
  "behavior therapy karnataka",
  "therapy for children india",
  "therapy for autism india",
  "behavioral support services",
  "behavioral therapy professionals",
  "behavior coaching",
  "behavior assessments",
  "parent mediated intervention",
  "therapy progress tracking",
  "behavior data analysis",
  "behavioral health coaching",
  "clinical behavior therapy",
  "behavior wellness programs",
  "holistic behavior care",
  "multi disciplinary therapy",
  "interdisciplinary behavior team",
  "speech therapy collaboration",
  "occupational therapy collaboration",
  "behavior therapy outcomes",
  "behavior therapy research based",
  "behavior therapy evidence based",
  "autism education support",
  "behavior therapy strategies",
  "behavior parenting strategies",
  "behavioral health plans",
  "behavior reduction plans",
  "skill acquisition plans",
  "behavior therapy workshops",
  "behavior therapy seminars",
  "clinical supervision aba",
  "behavior therapy mentors",
  "behavior therapy case management",
  "therapeutic play therapy",
  "sensory regulation therapy",
  "behavior therapy clinic",
  "applied behavior analysis india",
  "behavior support specialists",
  "behavior goals",
  "behavior therapy outcomes tracking",
  "behavior therapy success stories",
  "autism success stories",
  "therapy testimonials",
  "inclusive therapy clinic",
  "compassionate therapy team",
  "family empowerment coaching",
  "therapeutic parenting support",
  "behavior therapy intake",
  "behavior therapy assessment",
  "multilingual therapists",
  "behavior therapy english",
  "behavior therapy kannada",
  "behavior therapy hindi",
  "therapy goal setting",
  "behavior therapy roadmap",
];

const serviceQualifiers = [
  "near me",
  "services",
  "programs",
  "plans",
  "experts",
  "specialists",
  "professionals",
  "team",
  "assessment",
  "assessments",
  "consultation",
  "consultations",
  "support",
  "supports",
  "treatment",
  "treatments",
  "intervention",
  "interventions",
  "coaching",
  "training",
  "counseling",
  "therapy plan",
  "therapy plans",
  "care",
  "care plans",
  "telehealth",
  "online",
  "hybrid",
  "virtual",
  "in person",
  "home based",
  "school based",
  "community based",
  "evidence based",
  "personalized",
  "custom",
  "comprehensive",
  "integrated",
  "collaborative",
  "holistic",
  "family centered",
  "parent training",
  "social skills",
  "sensory support",
  "behavior plans",
  "behavior intervention",
  "functional analysis",
  "progress tracking",
  "case management",
  "workshops",
  "seminars",
  "resources",
  "guides",
  "checklists",
  "toolkits",
  "curriculum",
  "mentoring",
  "supervision",
  "consulting",
  "continuing education",
  "professional development",
  "certification support",
  "implementation",
  "best practices",
  "clinical support",
  "research based",
  "data driven",
  "outcome driven",
  "goal oriented",
  "family support",
  "child centered",
  "youth support",
  "adult support",
  "teen services",
  "school collaboration",
  "teacher training",
  "care coordination",
  "community outreach",
  "awareness programs",
  "empowerment",
  "advocacy",
  "transition planning",
  "life skills",
  "behavior coaching",
  "behavior monitoring",
  "progress reviews",
  "behavior strategies",
  "daily living skills",
  "communication skills",
  "adaptive skills",
  "play therapy",
  "group therapy",
  "individual therapy",
  "family therapy",
  "parent support",
  "caregiver support",
];

const locationQualifiers = [
  "in bengaluru",
  "in bangalore",
  "in karnataka",
  "in india",
  "in south india",
  "in indiranagar",
  "in koramangala",
  "in whitefield",
  "in electronic city",
  "in hsr layout",
  "in bellandur",
  "in jp nagar",
  "in jayanagar",
  "in hebbal",
  "in yelahanka",
  "in marathahalli",
  "in sarjapur",
  "in banashankari",
  "in malleshwaram",
  "in frazer town",
  "in rajajinagar",
  "in mg road",
  "in brigade road",
  "in basavanagudi",
  "in rt nagar",
  "in mathikere",
  "in vijayanagar",
  "in nagarbhavi",
  "in kalyan nagar",
  "in horamavu",
  "in hbr layout",
  "in kasturi nagar",
  "in hennur",
  "in btm layout",
  "in domlur",
  "in cv raman nagar",
  "in mahadevapura",
  "in arekere",
  "in attibele",
  "in devanahalli",
  "in nelamangala",
  "in hoskote",
  "in kanakapura",
  "in mysuru",
  "in chennai",
  "in hyderabad",
  "in pune",
  "in mumbai",
  "in delhi",
  "in gurugram",
  "in noida",
  "in kolkata",
  "in kochi",
];

const audienceQualifiers = [
  "for autism",
  "for asperger",
  "for adhd",
  "for add",
  "for developmental delay",
  "for speech delay",
  "for sensory issues",
  "for sensory processing",
  "for challenging behavior",
  "for behavior issues",
  "for school readiness",
  "for early intervention",
  "for toddlers",
  "for preschoolers",
  "for school age children",
  "for teens",
  "for young adults",
  "for adults",
  "for families",
  "for parents",
  "for caregivers",
  "for educators",
  "for teachers",
  "for professionals",
  "for therapists",
  "for clinicians",
  "for counselors",
  "for psychologists",
  "for pediatricians",
  "for speech therapists",
  "for occupational therapists",
  "for social workers",
  "for corporate",
  "for hr teams",
  "for healthcare",
  "for community",
  "for schools",
  "for learning centers",
  "for special schools",
  "for inclusive schools",
  "for higher education",
  "for colleges",
  "for universities",
  "for therapy centers",
  "for clinics",
  "for hospitals",
  "for pediatric clinics",
  "for daycare",
  "for play schools",
  "for nurseries",
  "for early childhood",
  "for kindergartens",
  "for primary schools",
  "for secondary schools",
  "for special educators",
  "for behavior specialists",
  "for inclusive classrooms",
  "for learning support",
  "for aba therapists",
  "for bcba",
  "for rbt",
];

const modalityQualifiers = [
  "one on one",
  "group sessions",
  "intensive program",
  "afternoon program",
  "weekend program",
  "weekday program",
  "after school",
  "school break",
  "holiday camp",
  "summer camp",
  "winter camp",
  "spring camp",
  "evening sessions",
  "morning sessions",
  "half day",
  "full day",
  "short term",
  "long term",
  "six month",
  "twelve month",
  "custom schedule",
  "intensive support",
  "coaching package",
  "assessment package",
  "evaluation package",
  "therapy bundle",
  "consulting package",
  "subscription",
  "membership",
  "premium support",
  "standard support",
  "comprehensive plan",
  "accelerated plan",
  "introduction plan",
  "starter plan",
  "growth plan",
  "empowerment plan",
  "success plan",
  "outcome plan",
  "goal plan",
  "family plan",
  "child plan",
  "teen plan",
  "adult plan",
  "inclusive plan",
  "support plan",
  "skill building",
  "behavior shaping",
  "milestone tracking",
  "progress review",
  "parent review",
  "case review",
  "coaching sessions",
  "therapy sessions",
  "training sessions",
  "multidisciplinary",
  "collaborative care",
  "clinical care",
  "home program",
  "school program",
  "community program",
  "clinic program",
  "remote support",
  "virtual support",
  "tele support",
  "mobile support",
  "outreach program",
];

const createSeoKeywords = (): string[] => {
  const results: string[] = [];
  const seen = new Set<string>();

  const push = (value: string): boolean => {
    const normalized = value.trim().toLowerCase();
    if (!normalized || seen.has(normalized)) {
      return results.length >= 1000;
    }
    seen.add(normalized);
    results.push(normalized);
    return results.length >= 1000;
  };

  for (const base of baseKeywords) {
    if (push(base)) {
      break;
    }

    for (const service of serviceQualifiers) {
      if (push(`${base} ${service}`)) {
        return results;
      }
    }

    for (const location of locationQualifiers) {
      if (push(`${base} ${location}`)) {
        return results;
      }
    }

    for (const audience of audienceQualifiers) {
      if (push(`${base} ${audience}`)) {
        return results;
      }
    }

    for (const modality of modalityQualifiers) {
      if (push(`${base} ${modality}`)) {
        return results;
      }
    }

    for (const service of serviceQualifiers) {
      for (const location of locationQualifiers) {
        if (push(`${base} ${service} ${location}`)) {
          return results;
        }
      }
    }

    for (const service of serviceQualifiers) {
      for (const audience of audienceQualifiers) {
        if (push(`${base} ${service} ${audience}`)) {
          return results;
        }
      }
    }

    for (const service of serviceQualifiers) {
      for (const modality of modalityQualifiers) {
        if (push(`${base} ${service} ${modality}`)) {
          return results;
        }
      }
    }

    for (const location of locationQualifiers) {
      for (const audience of audienceQualifiers) {
        if (push(`${base} ${location} ${audience}`)) {
          return results;
        }
      }
    }

    for (const location of locationQualifiers) {
      for (const modality of modalityQualifiers) {
        if (push(`${base} ${location} ${modality}`)) {
          return results;
        }
      }
    }

    for (const audience of audienceQualifiers) {
      for (const modality of modalityQualifiers) {
        if (push(`${base} ${audience} ${modality}`)) {
          return results;
        }
      }
    }
  }

  return results.slice(0, 1000);
};

const seoKeywords = createSeoKeywords();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.behaviorspace.co"),
  title: {
    default: "Behavior Space Clinic",
    template: "%s | Behavior Space Clinic",
  },
  description:
    "Behavior Space Clinic delivers evidence-based behavioral therapies, personalized treatment plans, and expert clinicians to help families achieve lasting progress.",
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
      "Behavior Space Clinic offers comprehensive behavioral health services designed to empower children and families with evidence-based support.",
    siteName: "Behavior Space Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior Space Clinic",
    description:
      "Discover behavioral health specialists delivering personalized treatment plans for children and families at Behavior Space Clinic.",
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
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
