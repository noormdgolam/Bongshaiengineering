/**
 * Bongshai Engineering & Construction - Authoritative Data Store
 * Source: Official Company Profile Document (PDF)
 */

export const COMPANY_INFO = {
  name: "Bongshai Engineering & Construction",
  shortName: "BONGSHAI E&C",
  tagline: "The Ultimate Construction Solution",
  motto: "Name and Fame with customer satisfaction is our motto and achievement.",
  ceo: {
    name: "S. M. Awal",
    title: "CEO & Chief Engineer",
    experienceYears: 20,
    background: "Civil Engineering Graduate with 20+ years of mega infrastructure leadership."
  },
  dates: {
    established: "November 15, 2008",
    businessRegistration: "October 20, 2009",
    constructionLicense: "December 30, 2010",
    companyRegistration: "September 2012"
  },
  contacts: {
    addressMain: "Alordhara, Level 05, House #18, Road #18, Sector #10, Uttara C/A, Dhaka 1230",
    addressBranch: "Alordhara, Level 05, House #18, Road #18, Sector #10, Uttara C/A, Dhaka 1230",
    phone: "01714104940",
    cell: "+88 01714-104940 / +88 01789-949060",
    email: "info@bongshai.com",
    web: "www.bongshaiengineering.com"
  },
  memberships: [
    "Construction Association (bd)",
    "International Contractors Association of Bangladesh",
    "Chamber of Commerce of Dhaka",
    "Construction Financial Co-operative"
  ],
  stats: {
    yearsInBusiness: 18,
    projectsCompleted: 150,
    heavyEquipmentUnits: 50,
    totalWorkforce: 350,
    clientSatisfactionRate: "99.4%"
  }
};

export const BUSINESS_UNITS = [
  {
    id: "civil-infrastructure",
    name: "Civil Infrastructure",
    icon: "infrastructure",
    tagline: "Heavy Groundwork, Piling & Foundation Excellence",
    description: "Comprehensive earthwork, deep foundation, piling, and major public infrastructure works executed with precision engineering.",
    subItems: [
      "Landscaping (Earth & Sand filling)",
      "Cast-in-situ Pile (up to 1200mm dia)",
      "Pre-cast Pile & Driving",
      "Foundation & Heavy Pavement Work",
      "Water Supply & Sanitation Networks",
      "Road and Bridge Construction",
      "Deep Tube Well Installation"
    ]
  },
  {
    id: "rcc-building",
    name: "RCC Building & Architecture",
    icon: "building",
    tagline: "Commercial High-Rises & Architectural Landmarks",
    description: "Turnkey architectural and structural building construction including multi-storied commercial towers, shopping complexes, and residential developments.",
    subItems: [
      "RCC Structural Building",
      "Pre-stressed Flat Slab & Girder Buildings",
      "Industrial Factory Buildings",
      "Commercial Supermarkets & Malls",
      "Multi-storied Residential Apartments"
    ]
  },
  {
    id: "peb-steel",
    name: "Pre-Engineered Steel Structures (PEB)",
    icon: "steel",
    tagline: "Heavy Steel Fabrication, Trusses & Industrial Sheds",
    description: "World-class PEB steel design, fabrication, and high-speed erection for industrial plants, high-rise steel buildings, and long-span warehouses.",
    subItems: [
      "Pre-fabricated Steel Buildings",
      "High-Rise Steel Structures",
      "Pre-Engineered Building (PEB) Systems",
      "Industrial Warehouses & Godowns",
      "Dairy & Poultry Shed Systems",
      "Hot-Rolled Structural Steel Systems",
      "Telecommunication & Power Transmission Towers",
      "Scaffold, Shoring & Tower Crane Solutions",
      "Steel Stairs, Gratings, Platforms & Handrails"
    ]
  },
  {
    id: "industrial",
    name: "Industrial Infrastructure",
    icon: "factory",
    tagline: "Turnkey Garments, Textile & Heavy Manufacturing Plants",
    description: "Specialized engineering tailored for Bangladesh's primary manufacturing sectors with heavy load-bearing floors and vibration isolation.",
    subItems: [
      "Garments Factory Infrastructure",
      "Textile Processing Units",
      "Dyeing & Printing Industrial Plants",
      "Jute Processing Mills",
      "Spinning Industry Facilities"
    ]
  },
  {
    id: "power-energy",
    name: "Power & Energy",
    icon: "power",
    tagline: "Substations, High-Voltage Lines & Solar Generation",
    description: "High and Low Voltage electrical infrastructure, power plant civil works, industrial automation, and renewable solar installations.",
    subItems: [
      "Power Substations (HT/LT)",
      "Electric Power Generator Installation",
      "Solar Power Projects (Roof & Ground)",
      "Power Transmission & Distribution Lines",
      "Industrial & Commercial Building Wiring",
      "High-Mast Lighting Towers",
      "Industrial Automation Systems",
      "Internal & External Electrification"
    ]
  },
  {
    id: "telecom-it",
    name: "IT & Telecommunication",
    icon: "telecom",
    tagline: "Cellular Towers, Fiber Optical Networks & Data Centers",
    description: "Turnkey telecommunication tower fabrication, BTS installation, earthing grids, structured network cabling, and data security infrastructure.",
    subItems: [
      "Tower Fabrication, Erection & Construction",
      "Earthing & Lightning Surge Protection",
      "Microwave Installation & Commissioning",
      "MSC, BSC & BTS Station Commissioning",
      "LAN & Fiber Optic Cabling",
      "EPABX & IP Telephony",
      "CCTV, Access Control & Security Systems",
      "DG Sets & AMF Automatic Panels"
    ]
  },
  {
    id: "electro-mechanical",
    name: "Electro-Mechanical (MEP)",
    icon: "mep",
    tagline: "HVAC Systems, Fire Protection & Heavy Electrical Controls",
    description: "Complete MEP engineering including central air conditioning, automated fire detection/suppression, cable trays, and power factor correction.",
    subItems: [
      "HVAC & Central Air Conditioning",
      "Fire Fighting & Automatic Sprinkler Systems",
      "Fire Alarm & Early Smoke Detection",
      "Power Cable Tray Systems",
      "Power Factor Correction (PFC) Plants",
      "Energy Conservation & Management",
      "Motor Control Centers (MCC) & Power Control Panels"
    ]
  }
];

export const EXECUTED_PROJECTS = [
  {
    id: 1,
    client: "QATAR FERTILIZER COMPANY LTD.",
    principalContractor: "Hyundai E&C",
    project: "QAFCO-5 Mesaieed Industrial City",
    location: "Mesaieed, Qatar",
    typeOfWork: "Steel Structure Fabrication & Erection",
    year: "2008 ~ 2010",
    category: "steel",
    badge: "International Project",
    description: "Structural steel erection for QAFCO-5 mega industrial fertilizer plant complex in Qatar under principal contractor Hyundai E&C.",
    image: "qafco.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 2,
    client: "Bangladesh Army",
    principalContractor: "Direct Contract",
    project: "Military Indoor Stadium Complex",
    location: "Dhaka, Bangladesh",
    typeOfWork: "Civil Works & Structural Steel Roof Trusses",
    year: "2011",
    category: "cantonment",
    badge: "Government / Defense",
    description: "High-capacity indoor stadium featuring clear-span heavy steel roof trusses and high-density civil seating infrastructure.",
    image: "stadium.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 3,
    client: "Bangladesh Army (Rangpur Cantonment)",
    principalContractor: "Direct Contract",
    project: "Multipurpose Defense Complex Building",
    location: "Rangpur Cantonment, Bangladesh",
    typeOfWork: "Civil Works, Steel Structure & Insulated Roof Cladding",
    year: "2012",
    category: "cantonment",
    badge: "Government / Defense",
    description: "Multi-functional administrative and event facility with pre-engineered structural steel and weather-tight roof cladding.",
    image: "rangpur-cantonment.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 4,
    client: "Arab Hospital Ltd",
    principalContractor: "Turnkey EPC Contractor",
    project: "16-Storied Modern Commercial & Medical Center",
    location: "Chattogram, Bangladesh",
    typeOfWork: "Civil Infrastructure & Structural Steel Framework",
    year: "2013",
    category: "commercial",
    badge: "Commercial High-Rise",
    description: "16-story high-rise commercial medical building with reinforced foundation piling and heavy composite steel structure.",
    image: "arab-hospital.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 5,
    client: "Energypac Power Generation Ltd",
    principalContractor: "Bongshai E&C",
    project: "100 MW Heavy Thermal Power Plant",
    location: "Katakhali, Rajshahi, Bangladesh",
    typeOfWork: "Heavy Civil Foundations & Structural Steel Boiler House",
    year: "2014",
    category: "power",
    badge: "Power & Energy",
    description: "Turnkey heavy civil engine foundations, transformer bays, and steel turbine enclosures for a 100 MW power generation station.",
    image: "energypac.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 6,
    client: "Premier Hotel Management Ltd",
    principalContractor: "Bongshai E&C",
    project: "20-Storied Luxury Commercial Hotel Tower",
    location: "Dhaka, Bangladesh",
    typeOfWork: "Deep Piling, Civil, Architectural & Steel Structure",
    year: "2015",
    category: "commercial",
    badge: "Commercial High-Rise",
    description: "20-story architectural commercial hotel featuring pre-stressed slabs, glass curtain facade framing, and heavy steel core structure.",
    image: "premier-hotel.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 7,
    client: "Ghatail Cantonment",
    principalContractor: "Bangladesh Army",
    project: "Cantonment Multipurpose Hall & Facility",
    location: "Tangail, Bangladesh",
    typeOfWork: "Civil Engineering, Steel Structure & Architectural Works",
    year: "2016",
    category: "cantonment",
    badge: "Government / Defense",
    description: "Architecturally detailed multipurpose auditorium building designed for climate resistance and acoustics.",
    image: "ghatail.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 8,
    client: "Saidpur Cantonment",
    principalContractor: "Bangladesh Army",
    project: "Saidpur Military Multipurpose Building",
    location: "Rangpur Division, Bangladesh",
    typeOfWork: "Civil, Steel Structure & Architectural Finishing",
    year: "2016",
    category: "cantonment",
    badge: "Government / Defense",
    description: "High-capacity multipurpose complex built with heavy-duty structural steel trusses and reinforced foundation infrastructure.",
    image: "saidpur.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 9,
    client: "Rakeen Real Estate",
    principalContractor: "Bongshai E&C",
    project: "Mirpur Housing Development Piling",
    location: "Mirpur, Dhaka",
    typeOfWork: "Cast-in-Situ & Precast Foundation Deep Piling",
    year: "2016",
    category: "civil",
    badge: "Deep Piling",
    description: "Large-scale residential community deep piling works using heavy rotary drilling rigs up to 1000mm diameter.",
    image: "rakeen.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 10,
    client: "RAJUK (Rajdhani Unnayan Kartripakkha)",
    principalContractor: "Bongshai E&C",
    project: "100ft Canal Channel & Retaining Piling at 300ft Road",
    location: "Purbachal Express Highway, Dhaka",
    typeOfWork: "Precast & Cast-in-Situ Retaining Wall Piling",
    year: "2018",
    category: "civil",
    badge: "Public Infrastructure",
    description: "Major urban canal channel protection and earth retention piling along the 300ft Purbachal Expressway corridor.",
    image: "rajuk-300ft.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 11,
    client: "Core Logistics Ltd",
    principalContractor: "Bongshai E&C",
    project: "Mega Logistics Warehouse & Laydown Yards",
    location: "Dhaka Division, Bangladesh",
    typeOfWork: "Civil, PEB Steel Structure, Architectural, MEP & Water Supply",
    year: "2019",
    category: "steel",
    badge: "Industrial PEB",
    description: "High-bay clear span PEB steel warehouse with heavy floor slab capacity, fire sprinkler piping, and automated laydown yard.",
    image: "core-logistics.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 12,
    client: "The Wave Resort & Restaurant",
    principalContractor: "Bongshai E&C",
    project: "Luxury Eco Resort Complex & Dining Pavilion",
    location: "Bangladesh",
    typeOfWork: "Civil, Architectural Steel Frame, Sanitary & Complete MEP",
    year: "2023",
    category: "commercial",
    badge: "Hospitality",
    description: "Premium eco-resort featuring custom steel frame guest chalets, elevated dining decks, and full off-grid utility infrastructure.",
    image: "wave-resort.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  },
  {
    id: 13,
    client: "Al Mannar Properties",
    principalContractor: "Bongshai E&C",
    project: "Multistoried Commercial Center Tower",
    location: "Dhaka, Bangladesh",
    typeOfWork: "Civil, Steel Structure, Architectural, MEP & Fire Safety",
    year: "2025",
    category: "commercial",
    badge: "Commercial High-Rise",
    description: "Multi-level modern retail and corporate headquarters featuring PEB composite structural frame and energy-efficient HVAC design.",
    image: "al-mannar.jpg",
    images: ["images/project-placeholder-1.jpg", "images/project-placeholder-2.jpg", "images/project-placeholder-3.jpg", "images/project-placeholder-4.jpg"]
  }
];

export const EQUIPMENT_FLEET = [
  { description: "Kobelco SK 60-5 Heavy Excavator", manufacturer: "Japan", capacity: "0.3 m³/h", count: 1, type: "Civil Heavy Machinery" },
  { description: "Kobelco SK 60-5 Track Excavator", manufacturer: "Japan", capacity: "0.3 m³/h", count: 1, type: "Civil Heavy Machinery" },
  { description: "EK100 Heavy Dumper Truck", manufacturer: "Japan", capacity: "7.0 m³", count: 2, type: "Earth Moving Fleet" },
  { description: "Heavy Duty Earth Compactor", manufacturer: "Japan", capacity: "10 Ton", count: 1, type: "Soil Compaction" },
  { description: "Medium Soil Compactor", manufacturer: "India", capacity: "1 Ton", count: 2, type: "Soil Compaction" },
  { description: "Concrete Mixer Machine", manufacturer: "Local / Heavy Spec", capacity: "10 cft", count: 2, type: "Concreting Fleet" },
  { description: "High-Frequency Vibrator Machine", manufacturer: "China / Industrial", capacity: "5 HP", count: 4, type: "Concreting Fleet" },
  { description: "Wooden Shuttering Set", manufacturer: "Local Heavy Spec", capacity: "20,000 sft", count: "1 Set", type: "Formwork & Shoring" },
  { description: "Steel Shuttering, Props & Jacks", manufacturer: "Local Heavy Spec", capacity: "10,000 sft", count: "1 Set", type: "Formwork & Shoring" },
  { description: "Kobelco Heavy Crawler Crane", manufacturer: "Kobelco, Japan", capacity: "50 Ton", count: 1, type: "Heavy Lifting & Erection" },
  { description: "Hitachi Heavy Crawler Crane", manufacturer: "Hitachi, Japan", capacity: "25 Ton", count: 1, type: "Heavy Lifting & Erection" },
  { description: "Heavy Winch, Hoist & Grabs", manufacturer: "Local / Heavy Spec", capacity: "0.5 m³", count: 1, type: "Heavy Lifting & Erection" },
  { description: "Chain Pulley Lifting Blocks", manufacturer: "China Industrial", capacity: "3 to 5 Ton", count: 6, type: "Heavy Lifting & Erection" },
  { description: "Compacting & Torque Equipment", manufacturer: "Japan", capacity: "1000 Nm", count: 2, type: "Steel Erection" },
  { description: "Rotary Direct / Reverse Drilling Rig", manufacturer: "Local / Custom Rig", capacity: "1200mm x 200m", count: 2, type: "Foundation Deep Piling" },
  { description: "Diesel Pile Hammer H35", manufacturer: "Japan", capacity: "5 Ton Impact", count: 1, type: "Foundation Deep Piling" },
  { description: "Cast-in-Situ Deep Piling Rigs", manufacturer: "Local Heavy Spec", capacity: "1000 mm dia", count: 2, type: "Foundation Deep Piling" }
];

export const MANPOWER_DATA = {
  executives: [
    { role: "Chief Executive Officer (CEO)", qualification: "Civil Engineering Graduate", experience: "20 Years", count: 1 },
    { role: "Project Manager", qualification: "Civil Engineering Graduate", experience: "10 Years", count: 2 },
    { role: "Construction Engineer", qualification: "Civil Engineering Graduate", experience: "5 Years", count: 2 },
    { role: "Civil Engineer", qualification: "Civil Engineering Graduate", experience: "3 Years", count: 2 },
    { role: "Structural Engineer", qualification: "Civil Engineering Graduate", experience: "3 Years", count: 2 },
    { role: "Steel Structure Specialist", qualification: "Civil Engineering Graduate", experience: "3 Years", count: 2 },
    { role: "Senior Architect", qualification: "Architecture Graduate", experience: "2 Years", count: 2 },
    { role: "Electrical Engineer", qualification: "Electrical Engineering Graduate", experience: "3 Years", count: 1 },
    { role: "Mechanical Engineer", qualification: "Mechanical Engineering Graduate", experience: "3 Years", count: 1 },
    { role: "Design Engineer", qualification: "Civil Engineering Graduate", experience: "5 Years", count: 1 }
  ],
  supervisors: [
    { role: "Civil Surveyor", qualification: "Diploma in Civil", experience: "5+ Years", count: 3 },
    { role: "Quantity Surveyor (QS)", qualification: "Diploma in Civil", experience: "3+ Years", count: 4 },
    { role: "AutoCAD Specialist", qualification: "Diploma Architectural", experience: "3+ Years", count: 5 },
    { role: "Civil Construction Supervisor", qualification: "Diploma Civil / Arch", experience: "3+ Years", count: 8 },
    { role: "Finishing Work Supervisor", qualification: "Diploma Architectural", experience: "3+ Years", count: 3 },
    { role: "Electrical Work Supervisor", qualification: "Diploma Electrical", experience: "3+ Years", count: 2 },
    { role: "Mechanical Work Supervisor", qualification: "Diploma Mechanical", experience: "3+ Years", count: 2 },
    { role: "Steel Erection Supervisor", qualification: "Diploma Civil / Mech", experience: "3 Years", count: 3 },
    { role: "Administrative Officer", qualification: "University Graduate", experience: "2+ Years", count: 2 }
  ],
  foremen: [
    { role: "Civil Construction Foreman", education: "SSC / Vocational", experience: "10+ Years", count: 5 },
    { role: "Carpentry Formwork Foreman", education: "SSC / HSC", experience: "8+ Years", count: 4 },
    { role: "Rebar Steel Foreman", education: "SSC / HSC", experience: "6+ Years", count: 4 },
    { role: "Concrete Pouring Foreman", education: "SSC / HSC", experience: "6+ Years", count: 5 },
    { role: "Steel Structure Erector Foreman", education: "SSC / HSC", experience: "5+ Years", count: 3 },
    { role: "Rigger & Heavy Lifting Foreman", education: "SSC / HSC", experience: "5+ Years", count: 2 },
    { role: "Scaffolding Safety Foreman", education: "SSC / HSC", experience: "6+ Years", count: 2 },
    { role: "Finishing & Interior Foreman", education: "SSC / HSC", experience: "5+ Years", count: 4 }
  ],
  workers: [
    { role: "Skilled Carpenters", count: 50 },
    { role: "Rebar Fitters", count: 60 },
    { role: "Masons", count: 60 },
    { role: "Concrete Workers", count: 20 },
    { role: "Painters", count: 10 },
    { role: "Electricians", count: 20 },
    { role: "Steel Erectors", count: 30 },
    { role: "Scaffolders", count: 20 },
    { role: "Riggers", count: 20 },
    { role: "Certified Welders", count: 10 },
    { role: "General Construction Operatives", count: 120 }
  ]
};

export const POLICIES = {
  safety: {
    title: "Health, Safety & Environment (HSE) Policy",
    motto: "Safety First - Fundamental to Our Culture",
    content: "BONGSHAI E&C adheres strictly to national, regional, and international HSE regulations. It is the policy of management to take all reasonably practicable measures to prevent personal injury, property damage, and environmental harm while protecting workers, sub-contractors, and the general public."
  },
  quality: {
    title: "Quality Management System (QMS)",
    motto: "Zero Defect Engineering & International Code Compliance",
    content: "Our Quality Management Plan guarantees that all products, structural fabrications, and construction services conform strictly to client specifications, BNBC codes, AISC standards, and ISO quality frameworks. Continuous on-the-job skill training ensures maximum workforce competence."
  }
};
