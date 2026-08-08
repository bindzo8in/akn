export interface GalleryProject {
  id: string;
  title: string;
  category: "Ongoing Sites" | "Residential" | "Commercial" | "Hospital" | "Industrial" | "Interiors" | "3D Elevations";
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
  // ── ONGOING SITES ──────────────────────────────────────────
  {
    id: "akn-ong-01",
    title: "Live Active Villa Site Construction",
    category: "Ongoing Sites",
    location: "Dharmapuri District",
    area: "3,400 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-01.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-01.jpeg",
      "/images/ongoing_projects/ongoing-site-02.jpeg",
      "/images/ongoing_projects/ongoing-site-03.jpeg",
      "/images/ongoing_projects/ongoing-site-04.jpeg",
    ],
    tag: "3,400 Sq.Ft • Live Civil Execution",
    description:
      "Active ongoing residential villa site undergoing structural framing, column reinforcement casting, and precision masonry under direct supervision of Er. Kumar.",
    highlights: [
      "Fe-550D TMT rebar structural column binding",
      "Ultratech Super Cement M25 concrete casting",
      "Daily engineer site audit and quality testing",
      "Live client progress photo & video reporting",
    ],
    scope: "Architectural Planning, RCC Framing & Turnkey Civil Execution",
  },
  {
    id: "akn-ong-02",
    title: "Commercial Arcade Live Site Progress",
    category: "Ongoing Sites",
    location: "Hosur Corridor",
    area: "11,200 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-05.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-05.jpeg",
      "/images/ongoing_projects/ongoing-site-06.jpeg",
      "/images/ongoing_projects/ongoing-site-07.jpeg",
      "/images/ongoing_projects/ongoing-site-08.jpeg",
    ],
    tag: "11,200 Sq.Ft • Commercial Slab Phase",
    description:
      "Ongoing multi-floor commercial complex active construction with shuttering scaffolding, beam reinforcement, and electrical conduit routing.",
    highlights: [
      "Heavy load commercial RCC beam casting",
      "High-tensile steel shuttering & safety staging",
      "Concealed electrical conduit placement",
      "DTCP approved structural compliance",
    ],
    scope: "Commercial Approvals, Structural Steel & RCC Superstructure",
  },
  {
    id: "akn-ong-03",
    title: "Turnkey Residence Brickwork & Finishing",
    category: "Ongoing Sites",
    location: "Krishnagiri Town",
    area: "2,800 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-09.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-09.jpeg",
      "/images/ongoing_projects/ongoing-site-10.jpeg",
      "/images/ongoing_projects/ongoing-site-11.jpeg",
      "/images/ongoing_projects/ongoing-site-12.jpeg",
    ],
    tag: "2,800 Sq.Ft • Masonry & Plastering Phase",
    description:
      "Ongoing luxury residence progressing through first-class red brick masonry, lintel level tie bands, and internal cement plastering.",
    highlights: [
      "Plumb-line verified red brick wall construction",
      "Seismic lintel band RCC reinforcement",
      "Waterproofing plaster additive application",
      "Custom teakwood door frame anchoring",
    ],
    scope: "Superstructure Masonry, Plumbing, MEP & Finishing",
  },
  {
    id: "akn-ong-04",
    title: "Contemporary Villa Elevation & Terrace Work",
    category: "Ongoing Sites",
    location: "Pennagaram Road, Dharmapuri",
    area: "3,100 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-13.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-13.jpeg",
      "/images/ongoing_projects/ongoing-site-14.jpeg",
      "/images/ongoing_projects/ongoing-site-15.jpeg",
      "/images/ongoing_projects/ongoing-site-16.jpeg",
    ],
    tag: "3,100 Sq.Ft • Terrace & Facade Phase",
    description:
      "Active site execution focusing on 3D elevation feature wall louvers, terrace parapet masonry, and Dr. Fixit chemical waterproofing.",
    highlights: [
      "5-layer elastomeric terrace leakproof treatment",
      "Custom CNC balcony railing & louver fitting",
      "Vastu-compliant entrance elevation crafting",
    ],
    scope: "3D Facade Realization, Waterproofing & Finishing",
  },
  {
    id: "akn-ong-05",
    title: "Krishnagiri Villa Structural & Interior Fitout Progress",
    category: "Ongoing Sites",
    location: "Krishnagiri Town",
    area: "4,200 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-29.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-29.jpeg",
      "/images/ongoing_projects/ongoing-site-30.jpeg",
      "/images/ongoing_projects/ongoing-site-31.jpeg",
    ],
    tag: "4,200 Sq.Ft • Structural Framing & Interior Phase",
    description:
      "Live active construction site in Krishnagiri undergoing column reinforcement, slab concreting, electrical conduit layout, and preliminary modular interior ceiling staging.",
    highlights: [
      "Ultratech M25 concrete casting with machine vibrators",
      "Fe-550D TMT column & beam reinforcement binding",
      "Concealed electrical & plumbing pipe alignment audit",
      "Vastu-compliant interior wall partition alignment",
    ],
    scope: "Turnkey Civil Superstructure, Electrical MEP & Bespoke Interior Staging",
  },
  {
    id: "akn-ong-06",
    title: "Krishnagiri Commercial & Interior Active Site",
    category: "Ongoing Sites",
    location: "Krishnagiri Main Belt",
    area: "9,500 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-32.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-32.jpeg",
      "/images/ongoing_projects/ongoing-site-33.jpeg",
      "/images/ongoing_projects/ongoing-site-34.jpeg",
    ],
    tag: "9,500 Sq.Ft • Commercial Slab & Fitout Phase",
    description:
      "Active multi-floor commercial site progress featuring heavy shuttering staging, mezzanine structural framing, and central HVAC duct routing under engineer supervision.",
    highlights: [
      "Heavy load RCC beam & slab shuttering staging",
      "High-tensile steel structural reinforcement check",
      "Commercial showroom display wall framing",
      "Safety netting & strict structural engineering audits",
    ],
    scope: "Commercial Superstructure, Mezzanine Framing & Interior Infrastructure",
  },

  // ── RESIDENTIAL VILLAS ─────────────────────────────────────
  {
    id: "akn-res-01",
    title: "Sri Lakshmi Contemporary Luxury Villa",
    category: "Residential",
    location: "Dharmapuri Town",
    area: "3,850 Sq.Ft",
    year: "2024",
    image: "/images/completed_projects/completed-project-01.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-01.jpeg",
      "/images/completed_projects/completed-project-02.jpeg",
      "/images/completed_projects/completed-project-03.jpeg",
      "/images/completed_projects/completed-project-04.jpeg",
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
    id: "akn-res-02",
    title: "Engineered Duplex Villa at Kaveripattinam",
    category: "Residential",
    location: "Kaveripattinam, Krishnagiri",
    area: "2,450 Sq.Ft",
    year: "2024",
    image: "/images/completed_projects/completed-project-08.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-08.jpeg",
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/completed_projects/completed-project-06.jpeg",
      "/images/completed_projects/completed-project-05.jpeg",
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
    id: "akn-res-03",
    title: "Modern Minimalist Elevation Villa",
    category: "Residential",
    location: "Harur Road, Dharmapuri",
    area: "2,600 Sq.Ft",
    year: "2024",
    image: "/images/completed_projects/completed-project-02.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-02.jpeg",
      "/images/completed_projects/completed-project-03.jpeg",
      "/images/completed_projects/completed-project-04.jpeg",
      "/images/completed_projects/completed-project-01.jpeg",
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

  // ── COMMERCIAL & RETAIL ────────────────────────────────────
  {
    id: "akn-com-01",
    title: "Grand Multi-Storey Commercial Complex",
    category: "Commercial",
    location: "Krishnagiri Junction",
    area: "14,500 Sq.Ft",
    year: "2024",
    image: "/images/completed_projects/completed-project-05.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-05.jpeg",
      "/images/completed_projects/completed-project-06.jpeg",
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/completed_projects/completed-project-08.jpeg",
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
    id: "akn-com-02",
    title: "Executive Commercial Showroom & Offices",
    category: "Commercial",
    location: "Krishnagiri Main Bazaar, Krishnagiri",
    area: "8,500 Sq.Ft",
    year: "2023",
    image: "/images/completed_projects/completed-project-05.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-05.jpeg",
      "/images/completed_projects/completed-project-06.jpeg",
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/completed_projects/completed-project-08.jpeg",
    ],
    tag: "8,500 Sq.Ft • Retail Showroom & Office",
    description:
      "Engineered for brand visibility in prime Krishnagiri commercial hub with double-height showroom display glass, reinforced mezzanine flooring, central air-conditioning ducting, executive interior office fitouts, and power backup provisions.",
    highlights: [
      "12mm clear toughened glass display front",
      "Heavy load bearing structural steel mezzanine floor",
      "LED panel lighting and commercial electrical board integration",
      "Fire extinguisher systems & compliant escape staircases",
    ],
    scope: "Commercial Renovation, Structural Strengthening & Interior Fitouts",
  },

  // ── HOSPITAL & HEALTHCARE ──────────────────────────────────
  {
    id: "akn-hosp-01",
    title: "Multi-Specialty Healthcare Facility",
    category: "Hospital",
    location: "Dharmapuri Bypass",
    area: "22,000 Sq.Ft",
    year: "2023",
    image: "/images/completed_projects/completed-project-06.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-06.jpeg",
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/completed_projects/completed-project-08.jpeg",
      "/images/completed_projects/completed-project-05.jpeg",
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

  // ── INDUSTRIAL PEB ─────────────────────────────────────────
  {
    id: "akn-ind-01",
    title: "Heavy Industrial PEB Warehouse & Factory",
    category: "Industrial",
    location: "Krishnagiri SIPCOT Corridor",
    area: "32,000 Sq.Ft",
    year: "2023",
    image: "/images/completed_projects/completed-project-07.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/completed_projects/completed-project-08.jpeg",
      "/images/completed_projects/completed-project-05.jpeg",
      "/images/completed_projects/completed-project-06.jpeg",
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

  // ── INTERIORS ──────────────────────────────────────────────
  {
    id: "akn-int-01",
    title: "Sage Green High-Gloss Modular Kitchen",
    category: "Interiors",
    location: "Krishnagiri Town",
    area: "2,200 Sq.Ft Residence",
    year: "2025 Completed",
    image: "/images/interiors/interior-project-03.jpeg",
    gallery: [
      "/images/interiors/interior-project-03.jpeg",
      "/images/interiors/interior-project-05.jpeg",
      "/images/interiors/interior-project-06.jpeg",
    ],
    tag: "Modular Kitchen • High-Gloss Acrylic",
    description:
      "Bespoke turnkey sage-green high-gloss acrylic modular kitchen featuring handleless soft-close tandem drawers, fluted glass wall cabinets, integrated wicker basket pull-outs, built-in chimney, and seamless white quartz countertops.",
    highlights: [
      "100% BWP Marine Plywood with anti-fingerprint acrylic laminate",
      "Hettich / Hafele German soft-close hydraulic pull-out tandem system",
      "Integrated wicker basket drawers & built-in tall pantry cabinet",
      "Kalinga quartz countertop with seamless under-mount 304 SS sink",
    ],
    scope: "End-to-End 3D Interior Design, Space Planning, Custom Factory Joinery & Turnkey Installation",
  },
  {
    id: "akn-int-02",
    title: "Master Suite Wardrobe & Space-Saving Murphy Bed",
    category: "Interiors",
    location: "Krishnagiri",
    area: "1,850 Sq.Ft Residence",
    year: "2025 Completed",
    image: "/images/interiors/interior-project-04.jpeg",
    gallery: [
      "/images/interiors/interior-project-04.jpeg",
      "/images/interiors/interior-project-01.jpeg",
      "/images/interiors/interior-project-08.jpeg",
      "/images/interiors/interior-project-09.jpeg",
    ],
    tag: "Master Suite • Murphy Bed & Wardrobes",
    description:
      "Modern bedroom interior featuring custom hydraulic fold-down Murphy wall bed mechanism, geometric fluted sliding wardrobes, padded leatherette headboard, teak wood bed frame, and acoustic wall panelling.",
    highlights: [
      "Custom engineered hydraulic wall-mounted Murphy bed mechanism",
      "Geometric louvered sliding wardrobes with internal sensor lighting",
      "Vertical padded headboard with acoustic wall fluting & vanity mirror",
      "Concealed LED cove ceiling lighting and custom floating side tables",
    ],
    scope: "Interior Space Optimization, Custom Furniture Engineering & Turnkey Joinery",
  },
  {
    id: "akn-int-03",
    title: "Luxury Bathroom Suite & Marble Wall Cladding",
    category: "Interiors",
    location: "Krishnagiri Town",
    area: "850 Sq.Ft Residence",
    year: "2025 Completed",
    image: "/images/interiors/interior-project-02.jpeg",
    gallery: [
      "/images/interiors/interior-project-02.jpeg",
    ],
    tag: "Luxury Bath • Marble Cladding",
    description:
      "High-end bathroom interior featuring dark blue and gold vein marble tile wall cladding, concealed flush tank with wall-hung ceramic WC, granite shelf ledge, and premium chrome sanitaryware.",
    highlights: [
      "Full-height dark blue & gold vein marble vitrified tile wall cladding",
      "Concealed dual-flush cistern with wall-hung ceramic WC",
      "Grohe / Kohler premium single-lever diverter fittings",
      "Granite vanity ledge & anti-skid floor tiling",
    ],
    scope: "Sanitaryware Layout, Concealed Plumbing, Tile Fitting & Waterproofing",
  },
  {
    id: "akn-int-04",
    title: "Executive Showroom Reception & Glass Lobby Fitout",
    category: "Interiors",
    location: "Krishnagiri Main Bazaar",
    area: "4,500 Sq.Ft Commercial",
    year: "2025 Completed",
    image: "/images/interiors/interior-project-07.jpeg",
    gallery: [
      "/images/interiors/interior-project-07.jpeg",
    ],
    tag: "Commercial Interior • Showroom Lobby",
    description:
      "Commercial showroom entrance lobby interior featuring double-height structural glass wall, polished granite staircase with stainless steel handrails, elevator lobby cladding, and indoor garden seating.",
    highlights: [
      "12mm clear toughened glass facade wall integration",
      "Polished dark granite staircase with 304 SS safety handrails",
      "Elevator lobby granite wall cladding & ambient lighting",
      "Integrated indoor planter beds & acoustic tile ceiling",
    ],
    scope: "Commercial Interior Architecture, Glazing, Marble Cladding & Lighting",
  },

  // ── 3D ELEVATIONS ──────────────────────────────────────────
  {
    id: "akn-3d-01",
    title: "Contemporary 3D Elevation & Frontage",
    category: "3D Elevations",
    location: "Palacode, Dharmapuri",
    area: "2,900 Sq.Ft",
    year: "2024",
    image: "/images/completed_projects/completed-project-04.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-04.jpeg",
      "/images/completed_projects/completed-project-01.jpeg",
      "/images/completed_projects/completed-project-02.jpeg",
      "/images/completed_projects/completed-project-03.jpeg",
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
];

export const aknOnsiteVideos: OnsiteVideo[] = [
  {
    id: "vid-ong-01",
    title: "Live Active Concrete Pouring & Superstructure Vibration",
    location: "Dharmapuri Ongoing Site",
    phase: "Active Slab Casting",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-01.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-01.jpeg",
    description:
      "Live footage recording active machine-mixed concrete pouring and mechanical vibration during ongoing slab casting.",
  },
  {
    id: "vid-ong-02",
    title: "Ongoing Column Rebar Binding & Alignment Check",
    location: "Krishnagiri Active Construction",
    phase: "Column Framing",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-02.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-02.jpeg",
    description:
      "Direct site recording of chief civil engineer verifying column stirrup spacing and plumb alignment.",
  },
  {
    id: "vid-ong-03",
    title: "Substructure Trench Excavation & PCC Bedding",
    location: "Hosur Belt Site",
    phase: "Substructure Phase",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-03.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-03.jpeg",
    description:
      "Heavy JCB machinery excavation and plain cement concrete (PCC) foundation bedding for ongoing villa project.",
  },
  {
    id: "vid-ong-04",
    title: "Live Brickwork Masonry & Mortar Quality Audit",
    location: "Dharmapuri Site",
    phase: "Superstructure Masonry",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-04.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-04.jpeg",
    description:
      "Artisan bricklaying with 1:6 cement-sand mortar ratio inspection and door frame anchoring.",
  },
  {
    id: "vid-ong-05",
    title: "Roof Shuttering & Electrical Conduit Placement",
    location: "Harur Road Site",
    phase: "Slab Shuttering",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-05.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-05.jpeg",
    description:
      "Plywood shuttering staging audit with PVC electrical conduit layout before slab rebar binding.",
  },
  {
    id: "vid-ong-06",
    title: "Turnkey Finishing & Interior Plastering Inspection",
    location: "Palacode Ongoing Project",
    phase: "Finishing Phase",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-06.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-06.jpeg",
    description:
      "Smooth wall plastering application, edge angle installation, and client progress inspection.",
  },
  {
    id: "vid-ong-07",
    title: "Live Structural Load Testing & Quality Walkthrough",
    location: "Dharmapuri Site",
    phase: "Quality Audit",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-07.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-07.jpeg",
    description:
      "Comprehensive structural check, concrete cube compression test record, and site walkthrough.",
  },
  {
    id: "vid-ong-08",
    title: "Live Krishnagiri Site Structural & Interior Framing Walkthrough",
    location: "Krishnagiri Active Site",
    phase: "RCC Structural & Interior Framing",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-08.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-29.jpeg",
    description:
      "On-site video documenting live RCC column concrete vibration, beam alignment, and interior wall partition framing in Krishnagiri.",
  },
  {
    id: "vid-ong-09",
    title: "Ongoing Active Site Inspection & Interior Finishing Audit",
    location: "Krishnagiri Town Site",
    phase: "Slab Shuttering & Electrical MEP",
    videoUrl: "/videos/ongoing_projects/ongoing-site-video-09.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-32.jpeg",
    description:
      "Engineer quality inspection of slab shuttering staging, electrical conduit routing, plumbing lines, and interior plastering preparation.",
  },
  {
    id: "vid-01",
    title: "Onsite Construction & Structural Execution Footage",
    location: "Dharmapuri Site Project",
    phase: "Civil Superstructure",
    videoUrl: "/videos/completed_projects/completed-site-video-01.mp4",
    posterImage: "/images/completed_projects/completed-project-01.jpeg",
    description:
      "Direct recorded on-site footage of active RCC structural framing, concrete vibration, and engineer site supervision.",
  },
  {
    id: "vid-02",
    title: "Turnkey Site Progress & Finishing Supervision",
    location: "Krishnagiri Site Location",
    phase: "Finishing & Quality Inspection",
    videoUrl: "/videos/completed_projects/completed-site-video-02.mp4",
    posterImage: "/images/completed_projects/completed-project-02.jpeg",
    description:
      "Live site documentation of masonry alignment, lintel level inspection, and turnkey finishing progress.",
  },
];
