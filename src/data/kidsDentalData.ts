export interface KidService {
  id: string;
  title: string;
  category: string;
  ageScope: string;
  tagline: string;
  clinicalSummary: string;
  biomimeticAdvantage: string;
  protocols: string[];
  image: string;
}

export interface KidAmenity {
  id: string;
  name: string;
  architectureSubtitle: string;
  description: string;
  clinicalImpact: string;
  badge: string;
  iconName: string;
  image: string;
}

export interface AgeTrack {
  id: string;
  code: string;
  ageRange: string;
  stageName: string;
  developmentalFocus: string;
  clinicalScope: string;
  examinationProtocols: string[];
  pediatricianNote: string;
}

export interface KidReview {
  id: string;
  author: string;
  profile: string;
  location: string;
  rating: number;
  highlight: string;
  quote: string;
  clinicalContext: string;
}

export interface KidFAQ {
  id: string;
  question: string;
  answer: string;
  category: 'First Appointments' | 'Sensory & Comfort' | 'Biological Treatments' | 'Insurance & Payments';
}

export const AGE_TRACKS: AgeTrack[] = [
  {
    id: 'infant',
    code: 'STAGE I',
    ageRange: '0 – 24 Months',
    stageName: 'Infant Airway & First Tooth Milestone',
    developmentalFocus: 'Cranial growth, tongue & lip tie mobility, and primary tooth eruption tracking.',
    clinicalScope: 'Unhurried lap-to-lap consultations designed around mother-infant comfort and feeding latch assessment.',
    examinationProtocols: [
      'Neonatal lingual & labial frenulum mobility check (tongue tie audit)',
      'Early Childhood Caries (nursing bottle decay) prevention guidance',
      'Infant airway patency & nocturnal breathing assessment',
      'Gentle fluoride varnish remineralization & natural gum microbiome care'
    ],
    pediatricianNote: 'The Indian Society of Pedodontics and Preventive Dentistry (ISPPD) recommends a first dental visit by age 1 or when the first tooth erupts.'
  },
  {
    id: 'toddler',
    code: 'STAGE II',
    ageRange: '2 – 5 Years',
    stageName: 'Early Childhood & Habit Correction',
    developmentalFocus: 'Habit breaking (thumb sucking, mouth breathing), desensitization, and milk tooth preservation.',
    clinicalScope: 'Tell-Show-Do playful acclimatization with Swiss warm-water airflow polishing and zero instrument fear.',
    examinationProtocols: [
      'Warm-mist Guided Biofilm Therapy (100% vibration-free cleaning)',
      'BPA-free pit & fissure sealants for early molar protection',
      'Habit correction coaching for thumb sucking and pacifier use',
      'Low-radiation digital RVG transillumination diagnostics'
    ],
    pediatricianNote: 'Early friendly visits between ages 2–4 prevent adult dental fear and catch developmental arch narrowing early.'
  },
  {
    id: 'school',
    code: 'STAGE III',
    ageRange: '6 – 11 Years',
    stageName: 'Mixed Dentition & Arch Expansion',
    developmentalFocus: 'Permanent molar eruption, non-invasive cavity arrest, and jaw expansion.',
    clinicalScope: 'No-drill Silver Diamine Fluoride (SDF) and interceptive orthopedic jaw guidance to prevent future crooked teeth.',
    examinationProtocols: [
      'No-drill SDF biological cavity arrest without local injections',
      'Phase I interceptive myofunctional & airway palate expansion',
      'Custom sports mouthguards for cricket, swimming, and martial arts',
      'Digital 3D intraoral optical scanning (zero gagging impression putty)'
    ],
    pediatricianNote: 'Interceptive orthodontic screening at age 7 guides natural jaw growth, often avoiding future permanent tooth extractions.'
  },
  {
    id: 'adolescent',
    code: 'STAGE IV',
    ageRange: '12 – 18 Years',
    stageName: 'Adolescent Orthodontics & Aesthetics',
    developmentalFocus: 'Permanent teeth alignment, wisdom molar monitoring, and adolescent self-confidence.',
    clinicalScope: 'Discreet digital clear aligners, aesthetic biomimetic restorations, and teenage sports protection.',
    examinationProtocols: [
      'Clear aligner digital orthodontic simulation and custom planning',
      'Ultra-low dose digital OPG monitoring of developing wisdom teeth',
      'Enamel-safe bio-compatible polishing and stain micro-abrasion',
      'Teenage oral hygiene coaching for braces and active lifestyles'
    ],
    pediatricianNote: 'Teenagers benefit from empathetic, respectful consultations that empower them to take pride in their oral health.'
  }
];

export const KID_SERVICES: KidService[] = [
  {
    id: 'guided-biofilm',
    title: 'Swiss Airflow® Guided Biofilm Therapy',
    category: 'Preventative Biomimetics',
    ageScope: 'All Ages',
    tagline: 'Warm water kinetic micro-mist — zero mechanical metal scraping.',
    clinicalSummary: 'Engineered in Switzerland, Guided Biofilm Therapy cleans plaque, biofilm, and dietary stains using a gentle 37°C tempered water mist and erythritol powder. It eliminates the cold sensitivity, scraping sounds, and vibration of old-school scaling.',
    biomimeticAdvantage: 'Protects fragile young enamel while providing a soothing spa-like cleaning sensation.',
    protocols: [
      '100% heated 37°C purified warm water mist',
      'Natural erythritol micro-powder with prebiotic xylitol',
      'Zero scraping curettes or enamel scratching',
      'Subgingival biofilm removal in under 15 minutes'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'non-invasive-sdf',
    title: 'No-Drill Biomimetic Cavity Arrest (SDF)',
    category: 'Minimally Invasive Dentistry',
    ageScope: 'Ages 1 – 12',
    tagline: 'Silver Diamine Fluoride & SMART biological remineralization.',
    clinicalSummary: 'For young children, invasive drilling and needle injections cause anxiety. We apply pharmaceutical-grade Silver Diamine Fluoride (SDF) to instantly sterilize active decay and harden tooth structure in 60 seconds without drills or injections.',
    biomimeticAdvantage: 'Completely eliminates needles and rotary drills while preserving natural tooth vitality.',
    protocols: [
      'Topical brush application without rotary drills',
      'Immediate antimicrobial arrest of cavity-causing bacteria',
      'Glass ionomer biomimetic seal (SMART technique)',
      '100% painless and zero post-treatment recovery downtime'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'laser-frenectomy',
    title: 'Infant & Child Soft-Tissue Laser Frenectomy',
    category: 'Specialized Infant Surgery',
    ageScope: 'Ages 0 – 5',
    tagline: 'Gentle, suture-free release of tongue and lip ties.',
    clinicalSummary: 'Conducted using an advanced US FDA-approved dental laser, infant tongue and lip tie releases take less than two minutes with minimal tissue trauma, zero bleeding, no stitches, and instant improvement in nursing latch and speech development.',
    biomimeticAdvantage: 'Immediate return to mother’s breastfeeding within our private mother-and-baby nursing suite.',
    protocols: [
      'Precise light-energy release with zero scalpel cuts',
      'Under 2-minute procedure under gentle topical numbing',
      'Integrated post-release tongue mobility exercises',
      'Private air-conditioned lactation and nursing room'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'habit-appliances',
    title: 'Habit Breaking & Airway Myofunctional Appliances',
    category: 'Facial Growth & Airway',
    ageScope: 'Ages 3 – 12',
    tagline: 'Gentle correction for thumb sucking, mouth breathing & tongue thrusting.',
    clinicalSummary: 'Chronic mouth breathing, pacifier dependence, and thumb sucking disrupt normal jaw growth and cause open bites. Our custom-designed, comfortable habit appliances and myofunctional trainers gently guide natural nasal breathing and proper tongue posture.',
    biomimeticAdvantage: 'Corrects the root muscular causes of crooked teeth without painful force.',
    protocols: [
      'Custom 3D scanned comfortable oral trainers',
      'Nasal breathing and lip seal exercise therapy',
      'Non-punitive positive reinforcement rewards',
      'Prevents severe future skeletal jaw surgery'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'biomimetic-sealants',
    title: 'Pit & Fissure Bio-Shields & Fluoride Varnish',
    category: 'Preventative Biomimetics',
    ageScope: 'Ages 4 – 16',
    tagline: 'Protective resin barrier against deep groove cavities in molars.',
    clinicalSummary: 'Deep natural grooves on milk and permanent molars trap food particles and cause 85% of childhood cavities. We apply flowable, fluoride-releasing sealants that seal grooves completely without any tooth cutting.',
    biomimeticAdvantage: 'Requires zero tooth trimming, creating an impenetrable shield against bacterial decay.',
    protocols: [
      'Painless warm-water surface preparation',
      'BPA-free, biocompatible fluoride-releasing sealant',
      'Instant blue LED curing in under 20 seconds',
      'Proven 80%+ reduction in molar cavities'
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'pulpectomy-zirconia',
    title: 'Single-Visit Pulpectomy & Bio-Zirconia Milk Crowns',
    category: 'Minimally Invasive Dentistry',
    ageScope: 'Ages 2 – 9',
    tagline: 'Natural tooth-colored ceramic crowns for deep cavities.',
    clinicalSummary: 'When decay reaches the nerve of a baby molar, a gentle pulpectomy saves the tooth from extraction. We restore it with aesthetic, metal-free bio-zirconia ceramic crowns that look completely natural and protect the tooth until it falls out naturally.',
    biomimeticAdvantage: 'Metal-free, biocompatible zirconia with superior strength and natural tooth aesthetics.',
    protocols: [
      'Single-visit gentle nerve cleaning under local comfort gel',
      'Antibacterial biocompatible root filling',
      'Pre-formed aesthetic white zirconia crown cementation',
      'Maintains dental arch space for incoming permanent teeth'
    ],
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900'
  }
];

export const SENSORY_AMENITIES: KidAmenity[] = [
  {
    id: 'private-operatory',
    name: 'Private Soundproof Suites with Soft Lighting',
    architectureSubtitle: 'Zero-Overstimulation Operatory Architecture',
    description: 'Each operatory is engineered as a calm, soundproof private suite. No scary medical tools in plain sight, with warm indirect dimmable lighting to prevent optical glare and keep children relaxed.',
    clinicalImpact: 'Reduces clinical anxiety and elevates child comfort within the first 3 minutes.',
    badge: 'Acoustic Architecture',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'ceiling-cinema',
    name: 'Ceiling Cartoon Screen with Wireless Headphones',
    architectureSubtitle: 'Immersive Visual Distraction System',
    description: 'Mounted flush with the ceiling above each pediatric dental chair is a 4K display where children watch their favorite shows (Chhota Bheem, Bluey, Peppa Pig, or Disney) with wireless soft headphones.',
    clinicalImpact: 'Completely redirects cognitive attention away from dental procedures.',
    badge: 'Digital Entertainment',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'therapy-canine',
    name: 'Barnaby — Certified Pediatric Therapy Dog',
    architectureSubtitle: 'Gentle Deep-Pressure Companionship',
    description: 'Barnaby is a certified Golden Retriever therapy dog trained specifically for pediatric clinical environments. Fully vaccinated and hypoallergenic-groomed, he provides gentle lap companionship on request.',
    clinicalImpact: 'Lowers heart rate and stimulates oxytocin for immediate emotional reassurance.',
    badge: 'Therapy Companion',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'parent-chaise',
    name: 'Parent Comfort Chair Beside Child At All Times',
    architectureSubtitle: 'Strict Zero-Separation Policy',
    description: 'We firmly believe children feel safest when parents are by their side. A comfortable armchair is positioned right next to the dental chair for continuous hand-holding and presence.',
    clinicalImpact: 'Maintains parental eye contact throughout the entire consultation.',
    badge: 'Parent Proximity',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'flavor-apothecary',
    name: 'Kid Flavor Apothecary (Strawberry & Bubblegum)',
    architectureSubtitle: 'Dye-Free Delicious Polish Selection',
    description: 'Children pick their favorite organic, chemical dye-free polishing paste flavors including fresh Alphonso mango, strawberry, sweet vanilla, and cool mint.',
    clinicalImpact: 'Gives the child active choice and transforms clinical polishing into a fun sensory treat.',
    badge: 'Flavor Bar',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'reward-atelier',
    name: 'Bravery Coin & Educational Gift Station',
    architectureSubtitle: 'Positive Reinforcement Ritual',
    description: 'After every completed visit, each young patient receives a shiny gold bravery coin to unlock our gift tower featuring puzzles, storybooks, dental superhero badges, and STEM toys.',
    clinicalImpact: 'Creates a positive psychological anchor making kids excited for their 6-month checkups.',
    badge: 'Bravery Rewards',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=900'
  }
];

export const PARENT_TESTIMONIALS: KidReview[] = [
  {
    id: 'rev-1',
    author: 'Dr. Ananya Sengupta, MD (Pediatrician)',
    profile: 'Consultant Pediatrician, Manipal Hospital • Mother of Vivaan (4)',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    highlight: 'A benchmark in Indian pediatric dentistry.',
    quote: 'As a pediatrician, I am extremely particular about child psychology and sterilization standards. Vivaan had a painful experience at a local dental clinic and developed severe fear. Dr. Maya Nair and her team treated him with such patience. The Swiss Airflow cleaning and cartoon ceiling screen made his entire visit effortless. He left smiling!',
    clinicalContext: 'Swiss Airflow & Fluoride Varnish'
  },
  {
    id: 'rev-2',
    author: 'Rajesh & Pooja Kulkarni',
    profile: 'Tech Leaders & Parents of Shanaya (3) and Kabir (7)',
    location: 'Koramangala, Bengaluru',
    rating: 5,
    highlight: 'Saved my daughter from general anesthesia.',
    quote: 'Our 3-year-old had early cavities and another hospital recommended general anesthesia and multiple stainless steel caps. Dr. Maya treated her using non-invasive Silver Diamine Fluoride (SDF) and SMART fillings without a single needle or tear. Truly world-class pediatric care in Bangalore.',
    clinicalContext: 'No-Drill SDF & Milk Tooth Care'
  },
  {
    id: 'rev-3',
    author: 'Col. Vikramaditya Rathore',
    profile: 'Father of Aryan (9) and Meera (13)',
    location: 'Defence Colony, New Delhi',
    rating: 5,
    highlight: 'Flawless hygiene, transparency, and warmth.',
    quote: 'From WhatsApp slot booking to itemized UPI billing and digital OPG x-rays, everything is exceptionally smooth. The clinic adheres to top-grade NABH sterilization. Aryan stopped his thumb-sucking habit within three weeks of using their trainer appliance.',
    clinicalContext: 'Habit Appliance & Interceptive Orthodontics'
  }
];

export const PARENT_FAQS: KidFAQ[] = [
  {
    id: 'faq-1',
    question: 'What makes Little Orbit different from general family dental clinics in India?',
    answer: 'Little Orbit is a dedicated pediatric specialty center led by MDS Pedodontists (specialists with 3 years of exclusive master’s training in child dentistry). Unlike general clinics, our entire infrastructure is designed for children: private soundproof suites, cartoon ceiling displays, pain-free Swiss Airflow cleaning, no-drill cavity arrest (SDF), and a strict zero-separation policy where parents stay alongside their child throughout.',
    category: 'First Appointments'
  },
  {
    id: 'faq-2',
    question: 'How do you manage uncooperative, anxious, or neurodiverse children?',
    answer: 'We follow the evidence-based Tell-Show-Do behavioral technique along with positive reinforcement. We never force or hold down a child. For anxious children, we offer private soundproof rooms, dimmable lights, favorite cartoon streaming, Barnaby the therapy dog, and conscious nitrous oxide relaxation if needed.',
    category: 'Sensory & Comfort'
  },
  {
    id: 'faq-3',
    question: 'Can early milk tooth cavities be treated without drilling or injections?',
    answer: 'Yes! For early and moderate decay in primary teeth, we use US FDA-approved Silver Diamine Fluoride (SDF). This antimicrobial liquid stops cavity progression in 60 seconds without drills, needles, or numbness, and is sealed with a tooth-friendly glass ionomer barrier.',
    category: 'Biological Treatments'
  },
  {
    id: 'faq-4',
    question: 'What is included in the First Consultation & Oral Health Checkup (₹750)?',
    answer: 'The first visit includes a comprehensive examination by an MDS Pediatric Dentist, digital low-dose radiograph (if clinically necessary), bite and airway development screening, dietary counseling for cavity prevention, a custom oral hygiene kit, and a bravery coin gift for your child.',
    category: 'First Appointments'
  },
  {
    id: 'faq-5',
    question: 'Do you accept UPI, Health Insurance reimbursement, and No-Cost EMI?',
    answer: 'Yes. We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and 0% No-Cost EMI on major credit cards and Bajaj Finserv Health. We provide comprehensive itemized digital bills, diagnosis certificates, and claim forms for cashless/reimbursement insurance under OPD dental covers (MediBuddy, Star Health, HDFC ERGO, Bajaj Allianz, Care Health, etc.).',
    category: 'Insurance & Payments'
  }
];

export const CLINIC_CONTACT = {
  name: 'Little Orbit Children’s Dental Clinic & Multispecialty Hospital',
  descriptor: 'Premier Pediatric Dentistry, Airway Growth & Laser Dental Center',
  leadDentist: 'Dr. Maya Nair, BDS, MDS (Pedodontics & Preventive Dentistry)',
  leadCredentials: 'Gold Medalist, Fellow ISPPD, Former Senior Resident AIIMS New Delhi',
  surgicalDirector: 'Dr. Leo Mathew, BDS, MDS (Maxillofacial & Pediatric Sedation)',
  address: 'No. 412, 100 Feet Road, HAL 2nd Stage, Indiranagar',
  landmark: 'Near Indiranagar Metro Station / Opposite Toit',
  city: 'Bengaluru, Karnataka 560038',
  otherCities: 'Bengaluru • New Delhi (South Ext) • Mumbai (Bandra) • Hyderabad (Jubilee Hills)',
  phone: '+91 80 4123 4567',
  mobileLine: '+91 98800 12345',
  whatsapp: '+91 98800 12345',
  whatsappLink: 'https://wa.me/919880012345?text=Hello%20Little%20Orbit%2C%20I%20would%20like%20to%20book%20a%20visit%20for%20my%20child.',
  email: 'care@littleorbitdentistry.in',
  hours: [
    { days: 'Monday – Saturday', time: '09:00 AM – 08:00 PM' },
    { days: 'Sunday Specialist Clinic', time: '09:30 AM – 02:30 PM' }
  ],
  emergencyHelpline: {
    title: 'Emergency Pediatric Trauma Helpline',
    availability: '24/7 On-Call Doctor Support',
    phone: '+91 98800 12345',
    note: 'Priority emergency triage for dental trauma, knocked-out teeth, facial swelling & severe toothache.'
  },
  parking: 'Free Dedicated Basement Parking & Stroller Lift Access.'
};

