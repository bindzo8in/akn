export interface GalleryProject {
  id: string;
  title: string;
  slug: string;
  category: "Ongoing Sites" | "Residential" | "Commercial" | "Hospital" | "Industrial" | "Interiors" | "3D Elevations";
  location: string;
  area: string;
  year: string;
  image: string;
  gallery: string[];
  videos?: string[];
  tag: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  scope: string;
  technologies: string[];
  platform?: string;
  website?: string;
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
  // 1. Healthcare & Multi-Specialty Hospital
  {
    id: "akn-hsp-01",
    title: "Dr. Ram's Multi-Specialty Maxillofacial & Dental Surgery Hospital",
    slug: "dr-rams-surgery-hospital",
    category: "Hospital",
    location: "Dharmapuri Main Belt",
    area: "8,500 Sq.Ft",
    year: "2025 Handover",
    image: "/images/completed_projects/completed-project-08.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-08.jpeg",
      "/images/projects/akn-project-14.jpg",
      "/images/services/service-healthcare-hospital.jpg",
    ],
    tag: "8,500 Sq.Ft • 5-Storey Healthcare Landmark",
    shortDescription: "A state-of-the-art 5-storey medical surgical hospital facility engineered with IS 456 seismic RCC framing and specialized medical infrastructure.",
    description: "Architectural design and turnkey civil execution of a 5-storey surgical hospital facility for Dr. Ram. Features specialized medical oxygen piping trunking, lead-lined X-ray diagnostic rooms, anti-bacterial epoxy flooring, acoustic ceiling baffles, and double-glazed soundproof glass elevation.",
    highlights: [
      "IS 456 Seismic-resistant M25 grade RCC framing",
      "Lead-lined radiation shielding for dental X-ray suites",
      "Integrated medical oxygen & vacuum suction pipelines",
      "Heavy-duty hospital stretcher elevator shaft & emergency ramp",
      "Illuminated custom signage and warm architectural wood cladding fascia",
    ],
    scope: "Architectural Planning, Structural Engineering, MEP Medical Pipelines & Full Turnkey Fitouts",
    technologies: [
      "Seismic RCC Superstructure",
      "Lead-Lined Diagnostic Rooms",
      "Medical Gas Pipeline System (MGPS)",
      "Antibacterial Epoxy Flooring",
      "Acoustic Interior Paneling",
    ],
  },

  // 2. Commercial & Retail Arcade
  {
    id: "akn-com-01",
    title: "AG Heights Commercial & Retail Arcade",
    slug: "ag-heights-commercial-arcade",
    category: "Commercial",
    location: "Krishnagiri Main Belt",
    area: "12,000 Sq.Ft",
    year: "2025 Handover",
    image: "/images/ongoing_projects/ongoing-site-28.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-28.jpeg",
      "/images/services/service-commercial-arcade.jpg",
      "/images/services/commercial-construction.jpg",
    ],
    videos: [
      "/videos/turnkey-finishing-walkthrough.mp4",
    ],
    tag: "12,000 Sq.Ft • 3-Storey Retail Hub",
    shortDescription: "A prime multi-storey retail and corporate commercial complex with floor-to-ceiling glass showrooms and wooden louver cladding.",
    description: "Engineering and turnkey civil construction of AG Heights, a flagship 3-storey commercial complex in Krishnagiri. Built to accommodate high-footfall retail stores with cantilevered glass bay display windows, structural steel mezzanine framing, fire sprinkler MEP network, and basement car parking access.",
    highlights: [
      "Heavy-load commercial M30 concrete column & beam grid",
      "Structural steel mezzanine floor frame expansion",
      "Double-glazed soundproof glass curtain wall system",
      "Integrated fire sprinkler & smoke evacuation MEP infrastructure",
      "Burma teak wood louver architectural border accents",
    ],
    scope: "DTCP Commercial Approvals, Structural Steel Superstructure, Glass Facade & Turnkey Civil Execution",
    technologies: [
      "M30 Commercial Concrete Grid",
      "Double-Glazed Curtain Wall",
      "Structural Steel Mezzanine",
      "Automated Fire Sprinkler MEP",
      "Architectural Wood Louvers",
    ],
  },

  // 3. Residential Villa & Modular Interiors
  {
    id: "akn-res-01",
    title: "Premium Luxury Duplex Villa & Modular Interior Fitouts",
    slug: "premium-luxury-duplex-villa",
    category: "Residential",
    location: "Krishnagiri Executive Zone",
    area: "4,800 Sq.Ft",
    year: "2025 Handover",
    image: "/images/completed_projects/completed-project-02.jpeg",
    gallery: [
      "/images/completed_projects/completed-project-02.jpeg",
      "/images/completed_projects/completed-project-03.jpeg",
      "/images/completed_projects/completed-project-04.jpeg",
      "/images/completed_projects/completed-project-05.jpeg",
      "/images/completed_projects/completed-project-07.jpeg",
      "/images/interiors/interior-project-01.jpeg",
      "/images/interiors/interior-project-08.jpeg",
      "/images/projects/real-project-site-01.jpg",
    ],
    videos: [
      "/videos/foundation-excavation.mp4",
      "/videos/brick-masonry-execution.mp4",
    ],
    tag: "4,800 Sq.Ft • Luxury Villa & Bespoke Interiors",
    shortDescription: "A custom 2-storey luxury duplex villa featuring double-height glass foyers, high-gloss teal modular kitchens, and hydraulic Murphy bed suites.",
    description: "Complete turnkey design and construction of an opulent duplex villa with full interior customization. Highlights include a double-height living hall with floor-to-ceiling glass wall, customized teal high-gloss acrylic modular kitchen with Blum soft-close hardware, hydraulic space-saving Murphy wall beds, fluted wood wall paneling, and Italian marble flooring.",
    highlights: [
      "100% Vastu-compliant dual-entrance architectural layout",
      "Double-height living foyer with floor-to-ceiling panoramic glass",
      "Teal acrylic high-gloss modular kitchen with quartz countertops",
      "Bespoke bedroom interiors with hydraulic Murphy bed & fluted wardrobes",
      "Private glass balcony and automated teak compound entrance gate",
    ],
    scope: "2D/3D Vastu Design, Civil Framing, Italian Marble Flooring, Modular Kitchen & Interior Woodwork",
    technologies: [
      "Marine-Grade HDMR Plywood",
      "Blum Soft-Close Systems",
      "Hydraulic Wall-Bed Assembly",
      "Italian Marble Flooring",
      "Panoramic Structural Glass",
    ],
  },

  // 4. Live Multi-Storey Civil Site
  {
    id: "akn-ong-01",
    title: "Live Active Multi-Storey Civil Construction Site",
    slug: "live-active-civil-construction-site",
    category: "Ongoing Sites",
    location: "Dharmapuri Main Belt",
    area: "6,800 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-02.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-02.jpeg",
      "/images/ongoing_projects/ongoing-site-03.jpeg",
      "/images/ongoing_projects/ongoing-site-04.jpeg",
      "/images/ongoing_projects/ongoing-site-14.jpeg",
      "/images/ongoing_projects/ongoing-site-26.jpeg",
    ],
    videos: [
      "/videos/rcc-column-beam-casting.mp4",
    ],
    tag: "6,800 Sq.Ft • Live Civil Execution",
    shortDescription: "Active ongoing multi-floor civil construction demonstrating precision RCC column casting, blue steel truss deck shuttering, and quality brickwork.",
    description: "Active high-grade civil construction site under daily engineering supervision. Features M25 RCC structural column casting with mechanical pin vibration, blue steel truss span girders for slab shuttering, precision 1:6 red brick infill masonry, and stage-wise slump cone concrete testing.",
    highlights: [
      "Fe-550D TMT rebar structural column binding & alignment",
      "Blue steel truss span girders & ply shuttering deck preparation",
      "Ultratech Super Cement M25 concrete column casting",
      "Daily engineer site quality audits & slump cone testing",
      "Precision red brick masonry with 1:6 cement-sand mortar",
    ],
    scope: "Soil SBC Testing, RCC Superstructure, Blue Steel Shuttering & Masonry Execution",
    technologies: [
      "Ultratech Super Cement",
      "Fe-550D TMT Steel Binding",
      "Blue Steel Truss Decking",
      "Mechanical Pin Vibrators",
      "1:6 Cement Mortar Masonry",
    ],
  },

  // 5. Villa Footings & Roof Slab Concreting Site
  {
    id: "akn-ong-02",
    title: "Villa Foundation Excavation & Roof Slab Concreting",
    slug: "villa-foundation-roof-slab-concreting",
    category: "Ongoing Sites",
    location: "Dharmapuri Suburban Zone",
    area: "3,400 Sq.Ft",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-33.jpeg",
    gallery: [
      "/images/projects/real-project-site-02.jpg",
      "/images/ongoing_projects/ongoing-site-32.jpeg",
      "/images/ongoing_projects/ongoing-site-33.jpeg",
    ],
    videos: [
      "/videos/real-onsite-progress-01.mp4",
      "/videos/roof-slab-concreting.mp4",
    ],
    tag: "3,400 Sq.Ft • Active Foundation & Slab Pour",
    shortDescription: "Live site progress from JCB footing excavation to readymix concrete pump hose roof slab pouring under chief engineer supervision.",
    description: "Direct on-site progress of a 3,400 Sq.Ft residential villa project. Shows JCB backhoe foundation trenching, isolated RCC footings coated with anti-dampness bitumen, wire-cut red brick wall construction, and live concrete pump hose pouring M25 readymix concrete over two-way slab rebar mat.",
    highlights: [
      "JCB excavator deep foundation footing trenching",
      "Bituminous damp-proof coating over isolated RCC footings",
      "Two-way TMT rebar mat & PVC electrical conduit placement",
      "Concrete pump hose pouring M25 readymix concrete",
      "Live client transparent progress photo & video reporting",
    ],
    scope: "Earth Excavation, Anti-Termite Soil Treatment, RCC Footings, Wire-Cut Masonry & Roof Slab Concreting",
    technologies: [
      "JCB Backhoe Trenching",
      "Bituminous Damp-Proof Coating",
      "Two-Way TMT Rebar Mat",
      "Readymix Concrete Pump Hose",
      "Concealed Electrical PVC Conduit",
    ],
  },

  // 6. Joinery & Carpentry Workshop
  {
    id: "akn-int-01",
    title: "Custom Burma Teak Joinery & Door Frame Craftsmanship",
    slug: "custom-burma-teak-joinery",
    category: "Interiors",
    location: "AKN Joinery Workshop, Krishnagiri",
    area: "Custom Woodworking Unit",
    year: "2026 Active",
    image: "/images/ongoing_projects/ongoing-site-11.jpeg",
    gallery: [
      "/images/ongoing_projects/ongoing-site-06.jpeg",
      "/images/ongoing_projects/ongoing-site-11.jpeg",
      "/images/interiors/interior-project-01.jpeg",
      "/images/interiors/interior-project-08.jpeg",
    ],
    tag: "100% First-Quality Seasoned Teak",
    shortDescription: "In-house custom carpentry unit hand-crafting seasoned Burma teak wood door frames, window shutters, and safety iron grill assemblies.",
    description: "Specialized timber joinery and solid wood fabrication unit supporting AKN projects. Utilizes 100% first-quality seasoned Burma teak wood lumber, hand-cut mortise and tenon joints, custom window frames with integrated iron security grill rods, and natural PU oil seasoning.",
    highlights: [
      "100% Seasoned First-Quality Burma Teakwood (Tectona grandis)",
      "Handcrafted mortise and tenon traditional timber joints",
      "Integrated rust-proof MS safety grill bars in wooden window frames",
      "Termite-resistant oil seasoning and anti-warp kiln drying",
      "Custom main entrance Vastu door designs with brass fittings",
    ],
    scope: "Timber Procurement, Seasoning, Custom Joinery Fabrication, Frame Installation & Finishing",
    technologies: [
      "Burma Teakwood (Tectona Grandis)",
      "Mortise & Tenon Joinery",
      "Integrated MS Safety Grills",
      "Kiln Seasoning & Termite Proofing",
      "PU Clear Protective Coat",
    ],
  },

  // 7. Industrial PEB Warehouse
  {
    id: "akn-ind-01",
    title: "Industrial PEB Logistics & Heavy Storage Warehouse",
    slug: "industrial-peb-logistics-warehouse",
    category: "Industrial",
    location: "Krishnagiri Industrial Belt (SIPCOT)",
    area: "25,000 Sq.Ft",
    year: "2024 Handover",
    image: "/images/services/service-industrial-peb.jpg",
    gallery: [
      "/images/services/service-industrial-peb.jpg",
      "/images/services/industrial-peb.jpg",
    ],
    tag: "25,000 Sq.Ft • PEB Heavy Structure",
    shortDescription: "A high-clearance pre-engineered steel structure (PEB) warehouse facility featuring multiple heavy truck loading bays and VDF concrete flooring.",
    description: "Engineering and construction of a 25,000 Sq.Ft industrial PEB logistics warehouse. Features high-tensile steel portal frames, Galvalume corrugated roof sheeting with skylight panels, 150mm heavy-load vacuum dewatered concrete (VDF) flooring with steel fibers, and forklift loading dock ramps.",
    highlights: [
      "High-tensile ASTM A572 steel portal frame structure",
      "Galvalume 0.5mm roof sheeting with 10% translucent skylights",
      "150mm VDF heavy-load concrete floor with steel fiber reinforcement",
      "Multiple articulated truck loading docks & forklift ramps",
      "Roof turbo ventilators and fire safety hydrant loop",
    ],
    scope: "PEB Structural Engineering, Foundation Concrete, Steel Erection & VDF Flooring",
    technologies: [
      "High-Tensile Steel Portal Frames",
      "Galvalume Corrugated Roof",
      "Vacuum Dewatered Concrete (VDF)",
      "Forklift Ramp Docks",
      "Roof Turbo Ventilators",
    ],
  },

  // 8. Ultra-Modern Modernist Villa Concept
  {
    id: "akn-3d-01",
    title: "Ultra-Modern Modernist Hillside Landmark Villa",
    slug: "ultra-modernist-hillside-landmark-villa",
    category: "3D Elevations",
    location: "Krishnagiri Heights",
    area: "6,500 Sq.Ft",
    year: "2025 Architectural Landmark",
    image: "/images/projects/turnkey-masterpiece-after.png",
    gallery: [
      "/images/projects/turnkey-masterpiece-after.png",
      "/images/projects/raw-foundation-before.png",
      "/images/services/service-3d-elevation.jpg",
      "/images/hero/hero-architectural-3d.jpg",
    ],
    tag: "6,500 Sq.Ft • Architectural Benchmark",
    shortDescription: "An architectural landmark featuring cantilevered glass balconies, infinity swimming pool, and automated warm exterior profile lighting.",
    description: "Comprehensive 3D architectural masterplan and turnkey execution model for a 6,500 Sq.Ft multi-tiered hillside villa. Demonstrates floor-to-ceiling insulated glass walls, wooden louver sunscreens, infinity edge pool, landscaped terraced gardens, and warm LED architectural contour lighting.",
    highlights: [
      "Photorealistic 3D rendering to exact structural execution matching",
      "Cantilevered insulated glass balcony structures with hidden spigots",
      "Infinity-edge swimming pool with automated filtration plant",
      "Warm architectural LED accent lighting integrated into ceiling soffits",
      "Landscaped garden entry driveway with permeable stone paving",
    ],
    scope: "3D Exterior Elevation, Structural Cantilever Engineering, Infinity Pool & Architectural Lighting",
    technologies: [
      "Structural Insulated Glass (IGU)",
      "Cantilevered Steel Frame",
      "Automated Infinity Pool Plant",
      "Architectural LED Lighting Strips",
      "Permeable Stone Paving",
    ],
  },
];

export const aknOnsiteVideos: OnsiteVideo[] = [
  {
    id: "vid-01",
    title: "Master Suite & Attached Luxury Bathroom Walkthrough",
    location: "Krishnagiri Executive Villa",
    phase: "Interior Handover Suite",
    videoUrl: "/videos/foundation-excavation.mp4",
    posterImage: "/images/interiors/interior-project-08.jpeg",
    description: "Authentic video walkthrough of master bedroom interior featuring custom rounded teak platform bed, sliding wardrobe, 3D geometric TV wall unit, and attached luxury floral tile bath with wall-mounted commode.",
  },
  {
    id: "vid-02",
    title: "High-Gloss Teal Modular Kitchen Handover Ceremony",
    location: "Krishnagiri Duplex Villa",
    phase: "Griha Pravesam Housewarming",
    videoUrl: "/videos/brick-masonry-execution.mp4",
    posterImage: "/images/completed_projects/completed-project-04.jpeg",
    description: "Live walkthrough of completed L-shaped modular kitchen with high-gloss teal cabinets, white quartz countertops, Blum hardware, built-in chimney, and traditional housewarming yellow flower decorations.",
  },
  {
    id: "vid-03",
    title: "AG Heights Commercial & Retail Arcade 3D Facade",
    location: "Krishnagiri Main Belt (KGI)",
    phase: "Architectural Commercial Design",
    videoUrl: "/videos/turnkey-finishing-walkthrough.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-28.jpeg",
    description: "Architectural 3D video presentation of AG Heights, a 3-storey commercial building design featuring glass showroom windows, wooden louver cladding, and retail store entrances.",
  },
  {
    id: "vid-04",
    title: "Multi-Storey Slab Steel Reinforcement & Rebar Tying",
    location: "Dharmapuri Civil Site",
    phase: "Structural Slab & Beam Binding",
    videoUrl: "/videos/rcc-column-beam-casting.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-26.jpeg",
    description: "Onsite progress recording of two-way slab TMT rebar mat binding, beam stirrup positioning, and blue steel shuttering span setup under civil engineer supervision.",
  },
  {
    id: "vid-05",
    title: "Residential Footing Excavation & Concrete Casting",
    location: "Dharmapuri Suburban Villa",
    phase: "Foundation Civil Phase",
    videoUrl: "/videos/real-onsite-progress-01.mp4",
    posterImage: "/images/projects/real-project-site-02.jpg",
    description: "Isolated column footing concrete casting with blue steel shuttering forms, diesel concrete mixer, and TMT rebar starters in a coconut grove setting.",
  },
  {
    id: "vid-06",
    title: "Live Roof Slab Readymix Concrete Pump Pouring",
    location: "Dharmapuri Villa Site",
    phase: "Slab Concreting Pour",
    videoUrl: "/videos/roof-slab-concreting.mp4",
    posterImage: "/images/ongoing_projects/ongoing-site-33.jpeg",
    description: "Stage-wise recording of concrete pump hose pouring M25 readymix concrete over two-way slab rebar mat with PVC electrical conduits under engineer quality inspection.",
  },
];
