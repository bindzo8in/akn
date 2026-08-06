export interface GalleryProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospital" | "Industrial" | "Interiors" | "3D Elevations";
  location: string;
  area: string;
  year: string;
  image: string;
  gallery: string[];
  tag: string;
  description: string;
  highlights: string[];
  scope: string;
}

export interface OnsiteVideo {
  id: string;
  title: string;
  location: string;
  phase: string;
  videoUrl: string;
  posterImage: string;
  description: string;
}

export const aknGalleryProjects: GalleryProject[] = [
  {
    id: "akn-01",
    title: "Sri Lakshmi Contemporary Luxury Villa",
    category: "Residential",
    location: "Dharmapuri Town",
    area: "3,850 Sq.Ft",
    year: "2024",
    image: "/images/projects/residential-luxury-villa.jpg",
    gallery: [
      "/images/projects/residential-luxury-villa.jpg",
      "/images/projects/akn-project-02.jpg",
      "/images/projects/akn-project-03.jpg",
      "/images/projects/akn-project-04.jpg",
    ],
    tag: "3,850 Sq.Ft • Turnkey Duplex",
    description:
      "A flagship multi-storey contemporary residential villa engineered with 100% scientific Vastu orientation, Fe-550D primary TMT reinforcement, double-height living foyer, Italian marble flooring, and customized German modular kitchen.",
    highlights: [
      "100% Vastu-compliant 2D & 3D architectural plan",
      "M25 grade ready-mix concrete with Dr. Fixit waterproofing",
      "Teak wood entrance door & soundproof UPVC sliding systems",
      "Solar rooftop integration and rainwater harvesting recharge pit",
    ],
    scope: "End-to-End Architectural Planning, DTCP Approval, Civil Construction & Luxury Interiors",
  },
  {
    id: "akn-02",
    title: "Grand Multi-Storey Commercial Complex",
    category: "Commercial",
    location: "Krishnagiri Junction",
    area: "14,500 Sq.Ft",
    year: "2024",
    image: "/images/projects/commercial-complex.jpg",
    gallery: [
      "/images/projects/commercial-complex.jpg",
      "/images/projects/akn-project-06.jpg",
      "/images/projects/akn-project-07.jpg",
      "/images/projects/akn-project-08.jpg",
    ],
    tag: "14,500 Sq.Ft • G+3 Commercial Hub",
    description:
      "Engineered for high footfall commercial retail and corporate offices with structural silicone glazing, heavy-duty RCC frame, high-capacity passenger lift shaft, and dedicated basement parking.",
    highlights: [
      "High-tensile structural framework engineered for seismic resilience",
      "Heat-reflective structural glass facade & ACP exterior cladding",
      "Underground sump with 50,000L fire safety water reservoir",
      "Full compliance with local municipal building bylaws & fire NOC",
    ],
    scope: "Structural Engineering Design, Commercial Approvals, Civil Construction & Facade Execution",
  },
  {
    id: "akn-03",
    title: "Modern Minimalist Elevation Villa",
    category: "Residential",
    location: "Harur Road, Dharmapuri",
    area: "2,600 Sq.Ft",
    year: "2024",
    image: "/images/projects/residential-duplex.jpg",
    gallery: [
      "/images/projects/residential-duplex.jpg",
      "/images/projects/akn-project-10.jpg",
      "/images/projects/akn-project-11.jpg",
      "/images/projects/akn-project-12.jpg",
    ],
    tag: "2,600 Sq.Ft • Premium Residence",
    description:
      "A modern custom residence featuring cantilevered floating balconies, textured exterior plastering, smart ambient facade lighting, and open-concept living-dining spaces.",
    highlights: [
      "Precision RCC column framing with zero structural cracks",
      "Custom CNC exterior louvers and weather-shield silicone paint",
      "Granite staircase with seamless toughened glass railings",
      "Concealed Finolex multi-strand wiring and Legrand modular switches",
    ],
    scope: "Architectural 3D Elevation, Structural Framing, MEP & Turnkey Finishing",
  },
  {
    id: "akn-04",
    title: "Multi-Specialty Healthcare Facility",
    category: "Hospital",
    location: "Dharmapuri Bypass",
    area: "22,000 Sq.Ft",
    year: "2023",
    image: "/images/projects/hospital-building.jpg",
    gallery: [
      "/images/projects/hospital-building.jpg",
      "/images/projects/akn-project-14.jpg",
      "/images/projects/akn-project-15.jpg",
      "/images/projects/akn-project-16.jpg",
    ],
    tag: "22,000 Sq.Ft • 50-Bed Hospital",
    description:
      "Engineered to stringent healthcare standards with cleanroom operation theatre infrastructure, medical gas pipeline systems (MGPS), reinforced radiography suites, and smooth bed-lift access.",
    highlights: [
      "NABH-compliant zoning and sterile corridor layouts",
      "Anti-bacterial seamless vinyl flooring in ICU and OT wards",
      "Dedicated 250 kVA silent diesel generator backup integration",
      "Universal wheelchair & stretcher ramps with safety handrails",
    ],
    scope: "Healthcare Facility Civil Construction, Structural Glazing & MEP Execution",
  },
  {
    id: "akn-05",
    title: "Heavy Industrial PEB Warehouse & Factory",
    category: "Industrial",
    location: "Krishnagiri SIPCOT Corridor",
    area: "32,000 Sq.Ft",
    year: "2023",
    image: "/images/projects/industrial-warehouse.jpg",
    gallery: [
      "/images/projects/industrial-warehouse.jpg",
      "/images/projects/akn-project-18.jpg",
      "/images/projects/akn-project-19.jpg",
      "/images/projects/akn-project-20.jpg",
    ],
    tag: "32,000 Sq.Ft • PEB Steel Shed",
    description:
      "State-of-the-art pre-engineered building (PEB) structure with high-bay clear spans, laser-screed FM2 grade industrial concrete flooring, multiple hydraulic loading docks, and ridge ventilation.",
    highlights: [
      "High-grade ASTM steel trusses with Galvalume weatherproof roofing",
      "Tremix laser-screed heavy-load concrete floor (5-ton/m² load capacity)",
      "Automated rolling shutters and dock leveler integration",
      "Complete perimeter stormwater drainage and industrial green buffer",
    ],
    scope: "PEB Steel Structural Design, Foundation Casting, Industrial Flooring & Handover",
  },
  {
    id: "akn-06",
    title: "Bespoke Luxury Residence Interiors",
    category: "Interiors",
    location: "Dharmapuri",
    area: "3,200 Sq.Ft",
    year: "2024",
    image: "/images/projects/interior-luxury-fitout.jpg",
    gallery: [
      "/images/projects/interior-luxury-fitout.jpg",
      "/images/projects/akn-project-22.jpg",
      "/images/projects/akn-project-23.jpg",
      "/images/projects/akn-project-24.jpg",
    ],
    tag: "Turnkey Interior Fitout",
    description:
      "Bespoke turnkey interior architecture featuring anti-fingerprint acrylic modular kitchen, magnetic track lighting, veneer wall panelling, and customized master bedroom walk-in wardrobes.",
    highlights: [
      "Hafele & Hettich German soft-close hardware throughout",
      "Gyproc false ceilings with layered warm ambient COB spotlights",
      "Custom PU finished TV unit with concealed wire conduits",
      "Kalinga quartz kitchen countertop with high-grade sink",
    ],
    scope: "3D Interior Design, Space Planning, Custom Joinery & Lighting Installation",
  },
  {
    id: "akn-07",
    title: "Contemporary 3D Elevation & Frontage",
    category: "3D Elevations",
    location: "Palacode, Dharmapuri",
    area: "2,900 Sq.Ft",
    year: "2024",
    image: "/images/projects/architectural-3d-elevation.jpg",
    gallery: [
      "/images/projects/architectural-3d-elevation.jpg",
      "/images/projects/akn-project-26.jpg",
      "/images/projects/akn-project-27.jpg",
      "/images/projects/akn-project-28.jpg",
    ],
    tag: "3D Photorealistic Exterior",
    description:
      "Photorealistic 3D exterior design and subsequent exact execution featuring vertical louvers, stone cladding accents, warm LED profile lighting, and automated security gate.",
    highlights: [
      "100% execution matching approved 3D architectural renders",
      "Natural stone exterior wall cladding with weather sealant",
      "Toughened glass balcony railings with 304-grade stainless steel base",
      "Landscaped garden entry with automated drip irrigation",
    ],
    scope: "3D Exterior Elevation, Structural Detailing & Turnkey Execution",
  },
  {
    id: "akn-08",
    title: "Engineered Duplex Villa at Kaveripattinam",
    category: "Residential",
    location: "Kaveripattinam, Krishnagiri",
    area: "2,450 Sq.Ft",
    year: "2024",
    image: "/images/projects/akn-project-29.jpg",
    gallery: [
      "/images/projects/akn-project-29.jpg",
      "/images/projects/akn-project-30.jpg",
      "/images/projects/akn-project-31.jpg",
      "/images/projects/akn-project-32.jpg",
    ],
    tag: "2,450 Sq.Ft • Turnkey Duplex",
    description:
      "Precision structural execution featuring column-beam RCC superstructure, red brick masonry, waterproofed terrace with cool-roof ceramic tiling, and modular electrical layouts.",
    highlights: [
      "Ultratech Super Cement & Tata Tiscon Fe-550D reinforcement",
      "Anti-termite soil treatment with 10-year warranty guarantee",
      "Granite kitchen platform with 2ft dado tiles & exhaust points",
      "Vastu-aligned pooja room with handcrafted teakwood frames",
    ],
    scope: "Complete Turnkey Construction from Soil Testing to Key Handover",
  },
  {
    id: "akn-09",
    title: "Executive Commercial Showroom & Offices",
    category: "Commercial",
    location: "Dharmapuri Main Bazaar",
    area: "8,500 Sq.Ft",
    year: "2023",
    image: "/images/projects/akn-project-33.jpg",
    gallery: [
      "/images/projects/akn-project-33.jpg",
      "/images/projects/akn-project-34.jpg",
      "/images/projects/akn-project-35.jpg",
      "/images/projects/akn-project-36.jpg",
    ],
    tag: "8,500 Sq.Ft • Retail Showroom",
    description:
      "Engineered for brand visibility with double-height showroom display glass, reinforced mezzanine flooring, central air-conditioning ducting, and power backup provisions.",
    highlights: [
      "12mm clear toughened glass display front",
      "Heavy load bearing structural steel mezzanine floor",
      "LED panel lighting and commercial electrical board integration",
      "Fire extinguisher systems & compliant escape staircases",
    ],
    scope: "Commercial Renovation, Structural Strengthening & Interior Fitouts",
  },
];

export const aknOnsiteVideos: OnsiteVideo[] = [
  {
    id: "vid-01",
    title: "RCC Column & Beam Superstructure Casting",
    location: "Dharmapuri Main Town",
    phase: "Civil Superstructure",
    videoUrl: "/videos/rcc-column-beam-casting.mp4",
    posterImage: "/images/projects/residential-luxury-villa.jpg",
    description:
      "Live footage of machine-mixed M25 concrete pouring, needle vibration, and structural engineer inspection ensuring 0% honeycombing.",
  },
  {
    id: "vid-02",
    title: "Roof Slab Shuttering & Fe-550D Rebar Binding",
    location: "Krishnagiri Project Site",
    phase: "Roof Slab Execution",
    videoUrl: "/videos/roof-slab-concreting.mp4",
    posterImage: "/images/projects/commercial-complex.jpg",
    description:
      "Quality audit of two-way slab rebar spacing, electrical conduit laying, and cover block placement prior to continuous concrete casting.",
  },
  {
    id: "vid-03",
    title: "Foundation Excavation & Certified Soil Compaction",
    location: "Harur Road, Dharmapuri",
    phase: "Substructure Phase",
    videoUrl: "/videos/foundation-excavation.mp4",
    posterImage: "/images/projects/residential-duplex.jpg",
    description:
      "Heavy equipment trench excavation, PCC bed casting, and certified anti-termite subterranean soil treatment.",
  },
  {
    id: "vid-04",
    title: "Precision Brick Masonry & Lintel Level Casting",
    location: "Palacode Site",
    phase: "Masonry & Framing",
    videoUrl: "/videos/brick-masonry-execution.mp4",
    posterImage: "/images/projects/architectural-3d-elevation.jpg",
    description:
      "First-class wire-cut brick masonry with plumb-line verification, door-window lintel casting, and seismic tie bands.",
  },
  {
    id: "vid-05",
    title: "Terrace Waterproofing & Multi-Layer Chemical Coating",
    location: "Dharmapuri Villa",
    phase: "Waterproofing & Protection",
    videoUrl: "/videos/terrace-waterproofing.mp4",
    posterImage: "/images/projects/akn-project-29.jpg",
    description:
      "Comprehensive Dr. Fixit 5-layer elastomeric polymer coating and ponding water leak testing over 72 hours.",
  },
  {
    id: "vid-06",
    title: "Turnkey Finishing & Interior Modular Assembly",
    location: "Krishnagiri Luxury Residence",
    phase: "Finishing & Handover",
    videoUrl: "/videos/turnkey-finishing-walkthrough.mp4",
    posterImage: "/images/projects/interior-luxury-fitout.jpg",
    description:
      "Final touch-ups, Italian marble floor polishing, false ceiling illumination test, and client walkthrough celebration.",
  },
];
