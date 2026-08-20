// Career database. Every vector scores the same 10 dimensions as the user
// profile, on 0..1: R I A S E C (Holland/RIASEC interest fit), then
// people (things 0 → people 1), risk (stability 0 → risk-taking 1),
// autonomy (structured 0 → independent 1), technical (creative 0 → technical 1).
// Profiles are informed by O*NET-style interest codes for each occupation.

export const CAREERS = [
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    description:
      'Designs, builds, and maintains software systems — turning fuzzy requirements into precise, working logic.',
    titles: ['Backend Developer', 'Full-Stack Engineer', 'Mobile Developer'],
    education: 'CS degree or a strong self-taught/bootcamp portfolio',
    vector: { R: 0.5, I: 0.85, A: 0.35, S: 0.2, E: 0.3, C: 0.6, people: 0.25, risk: 0.45, autonomy: 0.6, technical: 0.9 },
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    description:
      'Extracts patterns and predictions from messy data, blending statistics, programming, and domain sense.',
    titles: ['ML Engineer', 'Data Analyst', 'Quantitative Analyst'],
    education: 'Degree in statistics, CS, math, or a quantitative field',
    vector: { R: 0.3, I: 0.95, A: 0.3, S: 0.2, E: 0.35, C: 0.65, people: 0.3, risk: 0.4, autonomy: 0.55, technical: 0.9 },
  },
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    description:
      'Designs and tests physical machines and products, from engines to consumer hardware.',
    titles: ['Design Engineer', 'Manufacturing Engineer', 'R&D Engineer'],
    education: 'Mechanical engineering degree; PE license for some roles',
    vector: { R: 0.85, I: 0.8, A: 0.3, S: 0.15, E: 0.3, C: 0.55, people: 0.2, risk: 0.3, autonomy: 0.45, technical: 0.95 },
  },
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    description:
      'Plans and oversees infrastructure — bridges, roads, water systems — that entire cities depend on.',
    titles: ['Structural Engineer', 'Site Engineer', 'Transportation Engineer'],
    education: 'Civil engineering degree; PE license',
    vector: { R: 0.8, I: 0.7, A: 0.25, S: 0.25, E: 0.35, C: 0.6, people: 0.3, risk: 0.3, autonomy: 0.4, technical: 0.85 },
  },
  {
    id: 'electrician',
    name: 'Electrician',
    description:
      'Installs and troubleshoots electrical systems in homes, factories, and job sites — skilled hands, real stakes.',
    titles: ['Journeyman Electrician', 'Industrial Electrician', 'Master Electrician'],
    education: 'Apprenticeship (4–5 years) plus licensing',
    vector: { R: 0.95, I: 0.4, A: 0.15, S: 0.25, E: 0.3, C: 0.5, people: 0.3, risk: 0.35, autonomy: 0.6, technical: 0.85 },
  },
  {
    id: 'carpenter',
    name: 'Carpenter / Furniture Maker',
    description:
      'Builds and finishes structures and furniture from raw material — craft you can stand on and touch.',
    titles: ['Finish Carpenter', 'Cabinetmaker', 'Timber Framer'],
    education: 'Apprenticeship or trade school; portfolio of work',
    vector: { R: 0.95, I: 0.3, A: 0.5, S: 0.15, E: 0.3, C: 0.35, people: 0.2, risk: 0.4, autonomy: 0.7, technical: 0.6 },
  },
  {
    id: 'chef',
    name: 'Chef',
    description:
      'Runs a kitchen: creating dishes, leading a crew under pressure, and shipping a service every single night.',
    titles: ['Sous Chef', 'Head Chef', 'Pastry Chef'],
    education: 'Culinary school or years working up the kitchen line',
    vector: { R: 0.8, I: 0.35, A: 0.7, S: 0.4, E: 0.5, C: 0.45, people: 0.5, risk: 0.5, autonomy: 0.55, technical: 0.4 },
  },
  {
    id: 'physician',
    name: 'Physician',
    description:
      'Diagnoses and treats illness — deep science applied one human being at a time.',
    titles: ['Family Doctor', 'Internist', 'Emergency Physician'],
    education: 'Medical school + residency (11+ years total)',
    vector: { R: 0.45, I: 0.9, A: 0.2, S: 0.75, E: 0.4, C: 0.55, people: 0.8, risk: 0.35, autonomy: 0.5, technical: 0.7 },
  },
  {
    id: 'nurse',
    name: 'Registered Nurse',
    description:
      'Delivers hands-on patient care and coordinates treatment — the person patients actually see the most.',
    titles: ['ICU Nurse', 'ER Nurse', 'Nurse Practitioner (with further study)'],
    education: 'Nursing degree (BSN) + licensure',
    vector: { R: 0.5, I: 0.55, A: 0.2, S: 0.9, E: 0.3, C: 0.6, people: 0.9, risk: 0.3, autonomy: 0.35, technical: 0.55 },
  },
  {
    id: 'physical-therapist',
    name: 'Physical Therapist',
    description:
      'Rebuilds people’s movement and strength after injury — anatomy expertise plus daily coaching.',
    titles: ['Sports PT', 'Orthopedic PT', 'Rehab Specialist'],
    education: 'Doctor of Physical Therapy (DPT)',
    vector: { R: 0.6, I: 0.55, A: 0.25, S: 0.85, E: 0.35, C: 0.45, people: 0.85, risk: 0.25, autonomy: 0.5, technical: 0.5 },
  },
  {
    id: 'psychologist',
    name: 'Psychologist / Therapist',
    description:
      'Helps people understand and change their own minds — listening as a rigorous, trained skill.',
    titles: ['Clinical Psychologist', 'Counselor', 'Marriage & Family Therapist'],
    education: 'Master’s or doctorate in psychology + licensure',
    vector: { R: 0.1, I: 0.7, A: 0.35, S: 0.9, E: 0.3, C: 0.4, people: 0.95, risk: 0.3, autonomy: 0.6, technical: 0.3 },
  },
  {
    id: 'teacher',
    name: 'K-12 Teacher',
    description:
      'Turns subjects into understanding for a room of very different minds, every day.',
    titles: ['Elementary Teacher', 'High School Science Teacher', 'Special Education Teacher'],
    education: 'Teaching degree + certification',
    vector: { R: 0.2, I: 0.45, A: 0.45, S: 0.95, E: 0.4, C: 0.5, people: 0.95, risk: 0.2, autonomy: 0.4, technical: 0.3 },
  },
  {
    id: 'professor',
    name: 'Professor / Academic Researcher',
    description:
      'Pushes a field’s frontier while teaching the next generation — long autonomy, long timelines.',
    titles: ['Assistant Professor', 'Lecturer', 'Research Fellow'],
    education: 'PhD + postdoctoral work',
    vector: { R: 0.25, I: 0.95, A: 0.4, S: 0.5, E: 0.35, C: 0.5, people: 0.45, risk: 0.35, autonomy: 0.75, technical: 0.65 },
  },
  {
    id: 'research-scientist',
    name: 'Research Scientist (Lab)',
    description:
      'Designs experiments and chases reproducible results in biotech, materials, pharma, or physics labs.',
    titles: ['Lab Scientist', 'R&D Scientist', 'Biotech Researcher'],
    education: 'MS or PhD in a natural science',
    vector: { R: 0.5, I: 0.97, A: 0.3, S: 0.2, E: 0.25, C: 0.55, people: 0.2, risk: 0.35, autonomy: 0.6, technical: 0.85 },
  },
  {
    id: 'veterinarian',
    name: 'Veterinarian',
    description:
      'Medicine for patients who can’t describe their symptoms — science, surgery, and calming anxious owners.',
    titles: ['Small Animal Vet', 'Equine Vet', 'Veterinary Surgeon'],
    education: 'Doctor of Veterinary Medicine (DVM)',
    vector: { R: 0.7, I: 0.75, A: 0.2, S: 0.6, E: 0.35, C: 0.45, people: 0.5, risk: 0.35, autonomy: 0.55, technical: 0.7 },
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    description:
      'The last checkpoint between a prescription and a patient — precision work with real consequences.',
    titles: ['Clinical Pharmacist', 'Retail Pharmacist', 'Hospital Pharmacist'],
    education: 'Doctor of Pharmacy (PharmD)',
    vector: { R: 0.3, I: 0.7, A: 0.15, S: 0.5, E: 0.35, C: 0.75, people: 0.55, risk: 0.15, autonomy: 0.35, technical: 0.7 },
  },
  {
    id: 'dentist',
    name: 'Dentist',
    description:
      'Fine motor surgery, diagnostics, and patient reassurance — a hands-on health practice you can own.',
    titles: ['General Dentist', 'Orthodontist', 'Oral Surgeon'],
    education: 'Doctor of Dental Surgery (DDS)',
    vector: { R: 0.6, I: 0.7, A: 0.3, S: 0.55, E: 0.45, C: 0.5, people: 0.7, risk: 0.3, autonomy: 0.6, technical: 0.75 },
  },
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    description:
      'Gives ideas a visual voice — identity systems, layouts, and imagery that make messages land.',
    titles: ['Brand Designer', 'Visual Designer', 'Art Director (senior)'],
    education: 'Design degree or a portfolio that speaks for itself',
    vector: { R: 0.3, I: 0.35, A: 0.9, S: 0.25, E: 0.35, C: 0.4, people: 0.35, risk: 0.45, autonomy: 0.65, technical: 0.35 },
  },
  {
    id: 'ux-designer',
    name: 'UX / Product Designer',
    description:
      'Shapes how software feels to use — research, flows, and interfaces that respect people’s attention.',
    titles: ['Product Designer', 'Interaction Designer', 'UX Researcher'],
    education: 'Design/HCI degree or bootcamp + portfolio',
    vector: { R: 0.2, I: 0.6, A: 0.75, S: 0.45, E: 0.4, C: 0.45, people: 0.55, risk: 0.4, autonomy: 0.55, technical: 0.55 },
  },
  {
    id: 'architect',
    name: 'Architect',
    description:
      'Designs buildings where art meets load-bearing math — and shepherds them through to construction.',
    titles: ['Design Architect', 'Project Architect', 'Landscape Architect'],
    education: 'Architecture degree (B.Arch/M.Arch) + licensure',
    vector: { R: 0.6, I: 0.6, A: 0.75, S: 0.3, E: 0.4, C: 0.5, people: 0.35, risk: 0.4, autonomy: 0.55, technical: 0.7 },
  },
  {
    id: 'writer',
    name: 'Writer / Author',
    description:
      'Builds worlds, arguments, and voices out of nothing but language — solitary, self-directed craft.',
    titles: ['Novelist', 'Essayist', 'Screenwriter'],
    education: 'No fixed path — reading, writing, and relentless revision',
    vector: { R: 0.1, I: 0.5, A: 0.95, S: 0.3, E: 0.3, C: 0.3, people: 0.3, risk: 0.6, autonomy: 0.9, technical: 0.15 },
  },
  {
    id: 'journalist',
    name: 'Journalist',
    description:
      'Finds what’s true and makes it public — interviews, investigation, and writing on deadline.',
    titles: ['Investigative Reporter', 'News Editor', 'Feature Writer'],
    education: 'Journalism/communications degree or a strong clip record',
    vector: { R: 0.2, I: 0.7, A: 0.6, S: 0.5, E: 0.5, C: 0.4, people: 0.65, risk: 0.55, autonomy: 0.6, technical: 0.3 },
  },
  {
    id: 'filmmaker',
    name: 'Filmmaker / Video Producer',
    description:
      'Turns scripts and footage into stories — creative direction plus the logistics of a small army.',
    titles: ['Director', 'Video Producer', 'Editor / Colorist'],
    education: 'Film school or self-taught with a reel',
    vector: { R: 0.4, I: 0.35, A: 0.9, S: 0.35, E: 0.5, C: 0.3, people: 0.5, risk: 0.6, autonomy: 0.65, technical: 0.5 },
  },
  {
    id: 'musician',
    name: 'Musician / Composer',
    description:
      'Writes, performs, or produces music — pure craft in an unforgiving but deeply rewarding market.',
    titles: ['Performer', 'Composer', 'Music Producer'],
    education: 'Conservatory, lessons, or ten thousand hours',
    vector: { R: 0.3, I: 0.25, A: 0.95, S: 0.35, E: 0.35, C: 0.25, people: 0.4, risk: 0.75, autonomy: 0.85, technical: 0.3 },
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    description:
      'Figures out why people buy and builds campaigns that move the needle — half psychology, half spreadsheet.',
    titles: ['Brand Manager', 'Growth Marketer', 'Content Strategist'],
    education: 'Marketing/business degree or proven campaign record',
    vector: { R: 0.15, I: 0.4, A: 0.55, S: 0.4, E: 0.8, C: 0.45, people: 0.6, risk: 0.5, autonomy: 0.5, technical: 0.35 },
  },
  {
    id: 'sales-executive',
    name: 'Sales / Account Executive',
    description:
      'Builds relationships and closes deals — performance-paid, people-powered, scoreboard always on.',
    titles: ['Account Executive', 'Sales Engineer', 'Business Development Manager'],
    education: 'Any degree; track record matters most',
    vector: { R: 0.2, I: 0.3, A: 0.25, S: 0.45, E: 0.9, C: 0.35, people: 0.85, risk: 0.6, autonomy: 0.6, technical: 0.25 },
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur / Founder',
    description:
      'Starts and runs your own venture — total ownership of the upside, the downside, and everything between.',
    titles: ['Startup Founder', 'Small Business Owner', 'Independent Consultant'],
    education: 'No gatekeeper — capital, customers, and resilience',
    vector: { R: 0.3, I: 0.5, A: 0.4, S: 0.4, E: 0.95, C: 0.35, people: 0.6, risk: 0.95, autonomy: 0.95, technical: 0.45 },
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    description:
      'Decides what gets built and why — translating between users, engineers, and the business.',
    titles: ['Product Owner', 'Technical PM', 'Head of Product (senior)'],
    education: 'Any degree + domain credibility; often via engineering or design',
    vector: { R: 0.2, I: 0.6, A: 0.4, S: 0.5, E: 0.7, C: 0.5, people: 0.65, risk: 0.5, autonomy: 0.55, technical: 0.55 },
  },
  {
    id: 'management-consultant',
    name: 'Management Consultant',
    description:
      'Parachutes into companies’ hardest problems — frameworks, analysis, and boardroom persuasion.',
    titles: ['Strategy Consultant', 'Operations Consultant', 'Engagement Manager'],
    education: 'Business or any rigorous degree; MBA common',
    vector: { R: 0.15, I: 0.7, A: 0.3, S: 0.4, E: 0.75, C: 0.55, people: 0.6, risk: 0.45, autonomy: 0.45, technical: 0.5 },
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    description:
      'Builds the models behind investment and business decisions — markets, valuations, and forecasts.',
    titles: ['Investment Analyst', 'FP&A Analyst', 'Portfolio Analyst'],
    education: 'Finance/economics degree; CFA for investment roles',
    vector: { R: 0.15, I: 0.7, A: 0.15, S: 0.2, E: 0.55, C: 0.75, people: 0.3, risk: 0.45, autonomy: 0.4, technical: 0.7 },
  },
  {
    id: 'accountant',
    name: 'Accountant / Auditor',
    description:
      'Keeps the books true — the discipline every organization quietly depends on.',
    titles: ['CPA', 'Tax Accountant', 'Internal Auditor'],
    education: 'Accounting degree + CPA exam',
    vector: { R: 0.2, I: 0.4, A: 0.1, S: 0.25, E: 0.3, C: 0.95, people: 0.3, risk: 0.1, autonomy: 0.35, technical: 0.6 },
  },
  {
    id: 'actuary',
    name: 'Actuary',
    description:
      'Prices risk itself — deep probability applied to insurance, pensions, and uncertainty at scale.',
    titles: ['Pricing Actuary', 'Pension Actuary', 'Risk Modeler'],
    education: 'Math/actuarial degree + professional exam series',
    vector: { R: 0.15, I: 0.85, A: 0.1, S: 0.15, E: 0.3, C: 0.8, people: 0.2, risk: 0.15, autonomy: 0.4, technical: 0.85 },
  },
  {
    id: 'lawyer',
    name: 'Lawyer',
    description:
      'Argues, drafts, and advises within the machinery of law — language wielded with precision.',
    titles: ['Litigator', 'Corporate Counsel', 'Public Defender'],
    education: 'Law degree (JD) + bar exam',
    vector: { R: 0.1, I: 0.7, A: 0.3, S: 0.4, E: 0.65, C: 0.6, people: 0.6, risk: 0.45, autonomy: 0.5, technical: 0.4 },
  },
  {
    id: 'paralegal',
    name: 'Paralegal',
    description:
      'The research and drafting engine of a legal team — organized, exact, indispensable.',
    titles: ['Litigation Paralegal', 'Corporate Paralegal', 'Legal Assistant'],
    education: 'Paralegal certificate or associate degree',
    vector: { R: 0.15, I: 0.5, A: 0.2, S: 0.4, E: 0.3, C: 0.8, people: 0.45, risk: 0.15, autonomy: 0.3, technical: 0.4 },
  },
  {
    id: 'hr-manager',
    name: 'Human Resources Manager',
    description:
      'Builds the people systems of a company — hiring, growth, conflict, and culture.',
    titles: ['HR Business Partner', 'Talent Acquisition Lead', 'People Operations Manager'],
    education: 'HR/business/psychology degree',
    vector: { R: 0.1, I: 0.35, A: 0.25, S: 0.7, E: 0.6, C: 0.6, people: 0.9, risk: 0.25, autonomy: 0.4, technical: 0.25 },
  },
  {
    id: 'social-worker',
    name: 'Social Worker',
    description:
      'Stands beside people in their hardest moments and navigates systems on their behalf.',
    titles: ['Case Manager', 'Clinical Social Worker', 'School Social Worker'],
    education: 'Social work degree (BSW/MSW) + licensure',
    vector: { R: 0.15, I: 0.4, A: 0.3, S: 0.95, E: 0.3, C: 0.4, people: 0.95, risk: 0.25, autonomy: 0.4, technical: 0.15 },
  },
  {
    id: 'firefighter-paramedic',
    name: 'Firefighter / Paramedic',
    description:
      'Runs toward the emergency — physical skill, medical judgment, and a crew you trust with your life.',
    titles: ['Firefighter', 'Paramedic', 'EMT'],
    education: 'Fire academy / EMT-paramedic certification',
    vector: { R: 0.85, I: 0.35, A: 0.1, S: 0.7, E: 0.4, C: 0.4, people: 0.7, risk: 0.8, autonomy: 0.35, technical: 0.5 },
  },
  {
    id: 'pilot',
    name: 'Commercial Pilot',
    description:
      'Flies aircraft through checklists, weather, and judgment calls — procedure and skill at altitude.',
    titles: ['Airline Pilot', 'Cargo Pilot', 'Flight Instructor'],
    education: 'Flight school + commercial license and hours',
    vector: { R: 0.8, I: 0.55, A: 0.15, S: 0.3, E: 0.4, C: 0.6, people: 0.3, risk: 0.6, autonomy: 0.4, technical: 0.85 },
  },
  {
    id: 'logistics-manager',
    name: 'Logistics / Supply Chain Manager',
    description:
      'Choreographs goods, warehouses, and timelines so everything arrives where it should, when it should.',
    titles: ['Supply Chain Analyst', 'Operations Manager', 'Warehouse Director'],
    education: 'Business/logistics degree or operations experience',
    vector: { R: 0.45, I: 0.45, A: 0.1, S: 0.3, E: 0.55, C: 0.75, people: 0.4, risk: 0.3, autonomy: 0.4, technical: 0.6 },
  },
  {
    id: 'construction-pm',
    name: 'Construction Project Manager',
    description:
      'Turns blueprints into buildings — budgets, crews, safety, and schedule pressure on real ground.',
    titles: ['Site Manager', 'General Contractor', 'Superintendent'],
    education: 'Construction management degree or trade experience + certs',
    vector: { R: 0.6, I: 0.4, A: 0.2, S: 0.4, E: 0.65, C: 0.65, people: 0.55, risk: 0.45, autonomy: 0.5, technical: 0.6 },
  },
  {
    id: 'environmental-scientist',
    name: 'Environmental Scientist',
    description:
      'Measures how ecosystems respond to us — fieldwork, lab analysis, and policy-shaping evidence.',
    titles: ['Ecologist', 'Environmental Consultant', 'Conservation Scientist'],
    education: 'Environmental science/biology degree; MS common',
    vector: { R: 0.65, I: 0.8, A: 0.3, S: 0.35, E: 0.3, C: 0.45, people: 0.3, risk: 0.35, autonomy: 0.5, technical: 0.75 },
  },
  {
    id: 'park-ranger',
    name: 'Park Ranger / Conservation Officer',
    description:
      'Protects wild places and the people visiting them — stewardship with boots on the trail.',
    titles: ['Park Ranger', 'Wildlife Officer', 'Interpretive Ranger'],
    education: 'Natural resources degree or ranger academy',
    vector: { R: 0.85, I: 0.55, A: 0.25, S: 0.45, E: 0.25, C: 0.35, people: 0.4, risk: 0.4, autonomy: 0.6, technical: 0.5 },
  },
  {
    id: 'farmer',
    name: 'Farmer / Agronomist',
    description:
      'Runs a living production system — soil, seasons, machinery, and markets, all on your own land and call.',
    titles: ['Farm Owner-Operator', 'Agronomist', 'Ranch Manager'],
    education: 'Agronomy degree or generational/hands-on experience',
    vector: { R: 0.9, I: 0.5, A: 0.2, S: 0.2, E: 0.45, C: 0.4, people: 0.2, risk: 0.6, autonomy: 0.85, technical: 0.6 },
  },
  {
    id: 'statistician',
    name: 'Statistician',
    description:
      'Designs studies and quantifies uncertainty — the person who says what the data can honestly claim.',
    titles: ['Biostatistician', 'Survey Statistician', 'Statistical Consultant'],
    education: 'MS/PhD in statistics or mathematics',
    vector: { R: 0.15, I: 0.9, A: 0.15, S: 0.15, E: 0.25, C: 0.7, people: 0.2, risk: 0.25, autonomy: 0.5, technical: 0.9 },
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst',
    description:
      'Defends systems against adversaries who are actively trying to win — puzzles with a pulse.',
    titles: ['Security Engineer', 'Penetration Tester', 'SOC Analyst'],
    education: 'CS/security degree or certifications (Security+, OSCP)',
    vector: { R: 0.45, I: 0.8, A: 0.2, S: 0.2, E: 0.35, C: 0.65, people: 0.2, risk: 0.5, autonomy: 0.5, technical: 0.95 },
  },
  {
    id: 'sysadmin',
    name: 'Systems / Network Administrator',
    description:
      'Keeps the digital infrastructure alive — servers, networks, and the 2 a.m. page nobody else can fix.',
    titles: ['SysAdmin', 'Network Engineer', 'DevOps Engineer'],
    education: 'IT degree or certifications + homelab experience',
    vector: { R: 0.55, I: 0.65, A: 0.2, S: 0.3, E: 0.25, C: 0.7, people: 0.3, risk: 0.3, autonomy: 0.45, technical: 0.9 },
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    description:
      'Engineers fun — systems, rules, and moments that make millions of strangers feel something.',
    titles: ['Level Designer', 'Systems Designer', 'Narrative Designer'],
    education: 'Game design/CS degree or shipped indie work',
    vector: { R: 0.3, I: 0.6, A: 0.8, S: 0.3, E: 0.4, C: 0.35, people: 0.35, risk: 0.6, autonomy: 0.6, technical: 0.6 },
  },
  {
    id: 'interior-designer',
    name: 'Interior Designer',
    description:
      'Shapes how spaces feel and function — materials, light, and layout in service of the people inside.',
    titles: ['Residential Designer', 'Commercial Interior Designer', 'Set Decorator'],
    education: 'Interior design degree + portfolio; NCIDQ in some regions',
    vector: { R: 0.35, I: 0.3, A: 0.85, S: 0.4, E: 0.5, C: 0.4, people: 0.55, risk: 0.45, autonomy: 0.6, technical: 0.3 },
  },
  {
    id: 'event-planner',
    name: 'Event Planner',
    description:
      'Produces weddings, conferences, and launches — a thousand details resolving into one good night.',
    titles: ['Wedding Planner', 'Conference Producer', 'Experiential Marketing Manager'],
    education: 'Hospitality/communications degree or portfolio of events',
    vector: { R: 0.2, I: 0.2, A: 0.5, S: 0.6, E: 0.7, C: 0.6, people: 0.85, risk: 0.5, autonomy: 0.5, technical: 0.2 },
  },
  {
    id: 'real-estate-agent',
    name: 'Real Estate Agent',
    description:
      'Guides people through the biggest purchase of their lives — hustle, trust, and market feel.',
    titles: ['Realtor', 'Broker', 'Commercial Agent'],
    education: 'Licensing course + exam; commission-driven from day one',
    vector: { R: 0.25, I: 0.2, A: 0.3, S: 0.5, E: 0.85, C: 0.4, people: 0.85, risk: 0.7, autonomy: 0.8, technical: 0.2 },
  },
  {
    id: 'financial-advisor',
    name: 'Financial Advisor',
    description:
      'Helps families plan money across decades — part analyst, part counselor, fully trusted.',
    titles: ['Wealth Manager', 'Financial Planner (CFP)', 'Retirement Specialist'],
    education: 'Finance degree + CFP/securities licenses',
    vector: { R: 0.1, I: 0.5, A: 0.15, S: 0.55, E: 0.7, C: 0.6, people: 0.8, risk: 0.5, autonomy: 0.6, technical: 0.5 },
  },
  {
    id: 'dietitian',
    name: 'Dietitian / Nutritionist',
    description:
      'Translates nutrition science into plans real people can live with — health coaching with evidence.',
    titles: ['Clinical Dietitian', 'Sports Nutritionist', 'Community Dietitian'],
    education: 'Dietetics degree + registration (RD)',
    vector: { R: 0.3, I: 0.6, A: 0.25, S: 0.7, E: 0.35, C: 0.5, people: 0.75, risk: 0.2, autonomy: 0.45, technical: 0.5 },
  },
  {
    id: 'speech-pathologist',
    name: 'Speech-Language Pathologist',
    description:
      'Helps people find their voice — literally — after stroke, in childhood, or across a lifetime.',
    titles: ['SLP', 'Pediatric Speech Therapist', 'Voice Specialist'],
    education: 'Master’s in speech-language pathology + licensure',
    vector: { R: 0.15, I: 0.6, A: 0.3, S: 0.85, E: 0.25, C: 0.45, people: 0.9, risk: 0.2, autonomy: 0.5, technical: 0.4 },
  },
  {
    id: 'urban-planner',
    name: 'Urban Planner',
    description:
      'Designs how cities grow — zoning, transit, housing, and the long game of public space.',
    titles: ['City Planner', 'Transportation Planner', 'Community Development Planner'],
    education: 'Master’s in urban planning',
    vector: { R: 0.3, I: 0.65, A: 0.5, S: 0.5, E: 0.45, C: 0.55, people: 0.5, risk: 0.3, autonomy: 0.45, technical: 0.55 },
  },
  {
    id: 'librarian',
    name: 'Librarian / Archivist',
    description:
      'Organizes human knowledge and helps people find exactly what they need — quiet, deep service.',
    titles: ['Public Librarian', 'Research Librarian', 'Digital Archivist'],
    education: 'Master’s in library & information science (MLIS)',
    vector: { R: 0.15, I: 0.6, A: 0.35, S: 0.5, E: 0.2, C: 0.7, people: 0.5, risk: 0.1, autonomy: 0.4, technical: 0.35 },
  },
  {
    id: 'translator',
    name: 'Translator / Interpreter',
    description:
      'Carries meaning across languages without dropping it — precision craft with words, often freelance.',
    titles: ['Literary Translator', 'Conference Interpreter', 'Localization Specialist'],
    education: 'Language degree or certified fluency + specialization',
    vector: { R: 0.1, I: 0.55, A: 0.55, S: 0.5, E: 0.25, C: 0.5, people: 0.6, risk: 0.35, autonomy: 0.7, technical: 0.3 },
  },
  {
    id: 'biomedical-engineer',
    name: 'Biomedical Engineer',
    description:
      'Builds the devices medicine runs on — prosthetics, imaging, implants — where engineering meets biology.',
    titles: ['Medical Device Engineer', 'Clinical Engineer', 'Tissue Engineer'],
    education: 'Biomedical engineering degree; MS for R&D roles',
    vector: { R: 0.7, I: 0.85, A: 0.3, S: 0.25, E: 0.3, C: 0.5, people: 0.25, risk: 0.35, autonomy: 0.5, technical: 0.95 },
  },
  {
    id: 'photographer',
    name: 'Photographer',
    description:
      'Sees what others walk past and fixes it in a frame — art, gear, and running your own small business.',
    titles: ['Portrait Photographer', 'Photojournalist', 'Commercial Photographer'],
    education: 'Self-taught or art school; the portfolio is the credential',
    vector: { R: 0.45, I: 0.25, A: 0.9, S: 0.35, E: 0.45, C: 0.25, people: 0.5, risk: 0.65, autonomy: 0.85, technical: 0.45 },
  },
  {
    id: 'operations-research-analyst',
    name: 'Operations Research Analyst',
    description:
      'Optimizes the world’s messy systems — schedules, routes, inventories — with mathematical models.',
    titles: ['Optimization Analyst', 'Decision Scientist', 'Industrial Engineer'],
    education: 'Degree in OR, industrial engineering, or applied math',
    vector: { R: 0.3, I: 0.85, A: 0.15, S: 0.2, E: 0.4, C: 0.75, people: 0.25, risk: 0.3, autonomy: 0.45, technical: 0.85 },
  },
  {
    id: 'ceramicist-craft-artist',
    name: 'Craft Artist / Ceramicist',
    description:
      'Makes functional art with your hands — studio practice, markets, and a signature style.',
    titles: ['Ceramicist', 'Jeweler', 'Textile Artist'],
    education: 'BFA or studio apprenticeship; sales channels matter',
    vector: { R: 0.7, I: 0.2, A: 0.95, S: 0.2, E: 0.35, C: 0.2, people: 0.3, risk: 0.65, autonomy: 0.9, technical: 0.25 },
  },
  {
    id: 'flight-attendant',
    name: 'Flight Attendant',
    description:
      'Safety professional and host at 35,000 feet — service, calm, and a new city every week.',
    titles: ['Cabin Crew', 'Purser', 'Corporate Flight Attendant'],
    education: 'Airline training program; languages help',
    vector: { R: 0.35, I: 0.15, A: 0.25, S: 0.75, E: 0.45, C: 0.5, people: 0.9, risk: 0.45, autonomy: 0.3, technical: 0.2 },
  },
  {
    id: 'insurance-underwriter',
    name: 'Insurance Underwriter',
    description:
      'Decides what risks are worth taking and at what price — judgment formalized into policy.',
    titles: ['Commercial Underwriter', 'Life Underwriter', 'Risk Analyst'],
    education: 'Business/finance degree + industry designations',
    vector: { R: 0.1, I: 0.6, A: 0.1, S: 0.25, E: 0.4, C: 0.85, people: 0.3, risk: 0.2, autonomy: 0.35, technical: 0.6 },
  },
  {
    id: 'sports-coach',
    name: 'Coach / Athletic Trainer',
    description:
      'Builds athletes and teams — technique, psychology, and standards enforced with care.',
    titles: ['Team Coach', 'Strength & Conditioning Coach', 'Athletic Trainer'],
    education: 'Kinesiology degree or certifications + playing experience',
    vector: { R: 0.65, I: 0.35, A: 0.2, S: 0.8, E: 0.55, C: 0.4, people: 0.85, risk: 0.4, autonomy: 0.5, technical: 0.35 },
  },
];
