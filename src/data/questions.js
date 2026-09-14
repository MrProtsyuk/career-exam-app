// The question bank. Each session samples FORM_QUOTAS questions per
// category (see engine/form.js) and shuffles each question's options, so
// no two sittings look alike. Each option carries signed weights on the
// trait dimensions in dimensions.js: positive pushes a trait up, negative
// pushes it down. Bipolar axes read as: people (+people / -things),
// risk (+risk-taking / -stability), autonoyour (+independence / -structure),
// technical (+technical / -creative).

export const CATEGORIES = [
  { key: "academic", label: "Academic interests" },
  { key: "values", label: "Life interests & values" },
  { key: "hobbies", label: "Hobbies & activities" },
  { key: "personality", label: "Personality" },
  { key: "workstyle", label: "Work style" },
];

export const QUESTION_BANK = [
  // --------------------------------------------------------- academic (30)
  {
    id: "a1",
    category: "academic",
    text: "Back in school, which class did you always look forward to?",
    options: [
      { label: "Math or physics ⚛️", weights: { I: 2, technical: 2, C: 1 } },
      { label: "English 📖", weights: { A: 2, technical: -2 } },
      { label: "Bio or chem 👩‍🔬", weights: { I: 2, R: 1 } },
      { label: "History 📜", weights: { I: 1, S: 1, people: 1 } },
      { label: "Econ or business 📈", weights: { E: 2, C: 1, risk: 1 } },
    ],
  },
  {
    id: "a2",
    category: "academic",
    text: "You get one free elective, which are you choosing?",
    options: [
      {
        label: "Robotics or shop, building something with your hands 🦾",
        weights: { R: 2, technical: 2 },
      },
      { label: "Psychology 🤔", weights: { I: 1, S: 2, people: 2 } },
      {
        label: "Art 🖼️",
        weights: { A: 2, technical: -2 },
      },
      {
        label: "Data science 📊",
        weights: { I: 2, C: 1, technical: 1 },
      },
      {
        label: "Debate 👨‍⚖️",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "a3",
    category: "academic",
    text: "Which assignment would you actually enjoy?",
    options: [
      {
        label: "A lab experiment where you run the whole thing",
        weights: { I: 2, R: 1 },
      },
      {
        label: "Making the video everyone watches at assembly",
        weights: { A: 2, technical: -1 },
      },
      {
        label: "Planning every detail of the class trip",
        weights: { C: 2, E: 1 },
      },
      {
        label: "Tutoring someone until it finally clicks for them",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Writing a business plan for a fake startup",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a4",
    category: "academic",
    text: "What do you read when nobody’s assigning it?",
    options: [
      {
        label: "Pop science, you want to know how everything works",
        weights: { I: 2 },
      },
      {
        label: "Fiction, novels, stories, the occasional poem",
        weights: { A: 2, technical: -1 },
      },
      {
        label: "Biographies of people who built empires",
        weights: { E: 2, risk: 1 },
      },
      {
        label: "Reviews and teardowns. Is it good, and how’s it made?",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Psychology and self-improvement stuff",
        weights: { I: 1, S: 1, people: 1 },
      },
    ],
  },
  {
    id: "a5",
    category: "academic",
    text: "In group projects, which role did you always end up with?",
    options: [
      {
        label: "The one actually doing the research at 1am",
        weights: { I: 2, technical: 1, people: -1 },
      },
      {
        label: "The one with the shared doc and the deadline reminders",
        weights: { C: 2 },
      },
      { label: "The one presenting", weights: { E: 2, people: 1 } },
      {
        label: "The one keeping everyone from strangling each other",
        weights: { S: 2, people: 2 },
      },
      { label: "The one making the slides look incredible", weights: { A: 2 } },
    ],
  },
  {
    id: "a6",
    category: "academic",
    text: "If every major paid the same, what would you study?",
    options: [
      { label: "Engineering  ⚙️", weights: { R: 2, I: 1, technical: 2 } },
      { label: "Art or design 🖼️", weights: { A: 3, technical: -2 } },
      { label: "Medicine or nursing 👩‍⚕️", weights: { S: 2, I: 1, people: 1 } },
      { label: "Business 📈", weights: { E: 2, risk: 2 } },
      {
        label: "Accounting or info systems 🧮",
        weights: { C: 2, technical: 1, risk: -1 },
      },
    ],
  },
  {
    id: "a7",
    category: "academic",
    text: "Let's say you are watching a documentary tonight, what are you pressing play on?",
    options: [
      {
        label: "Megastructures, huge machines",
        weights: { R: 2, technical: 2 },
      },
      { label: "An unsolved scientific mystery", weights: { I: 2 } },
      {
        label: "A portrait of some wonderfully obsessive artist",
        weights: { A: 2 },
      },
      {
        label: "A community taking on city hall",
        weights: { S: 2, people: 1 },
      },
      {
        label: "The rise and fall of a company",
        weights: { E: 2, C: 1 },
      },
    ],
  },
  {
    id: "a8",
    category: "academic",
    text: "Pick your puzzle:",
    options: [
      {
        label: "Fixing a gadget that stopped working with no instrucitons",
        weights: { R: 2, technical: 2, I: 1 },
      },
      {
        label: "A logic problem that takes up your whole afternoon",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Finding a first sentence for a paper",
        weights: { A: 2, technical: -2 },
      },
      {
        label: "A friend acting weird and you can’t tell why",
        weights: { S: 2, people: 2 },
      },
      {
        label: "A spreadsheet that’s off by exactly $4.17",
        weights: { C: 2, technical: 1 },
      },
    ],
  },
  {
    id: "a9",
    category: "academic",
    text: "Given a totally open-ended final project, what would you turn in?",
    options: [
      {
        label: "A working model, something that moves or lights up",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Original research with data you actually collected",
        weights: { I: 2, C: 1 },
      },
      {
        label: "A short film or magazine",
        weights: { A: 2 },
      },
      {
        label: "A peer-mentoring program you’d genuinely want to run",
        weights: { S: 2, people: 2 },
      },
      {
        label: "A pitch deck, potentially taking real investors",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a10",
    category: "academic",
    text: "Which lecture would you sneak into?",
    options: [
      { label: "Why bridges fall down", weights: { R: 1, I: 1, technical: 2 } },
      {
        label: "The psychology of persuasion",
        weights: { S: 1, E: 1, people: 1 },
      },
      {
        label: "Looking at poetry from the renaissance",
        weights: { A: 2, technical: -1 },
      },
      {
        label: "Startup stories from someone who lost it all",
        weights: { E: 2, risk: 2 },
      },
      {
        label: "Forensics and how to solve crimes with chemistry",
        weights: { I: 2, C: 1 },
      },
    ],
  },
  {
    id: "a11",
    category: "academic",
    text: "Which homework did you always do first?",
    options: [
      {
        label: "Problem sets ➗",
        weights: { I: 2, C: 1, technical: 1 },
      },
      {
        label: "Essays 📝",
        weights: { A: 2, technical: -1 },
      },
      {
        label: "Labs 🧪",
        weights: { R: 2, I: 1 },
      },
      {
        label: "Debate prep 👨‍⚖️",
        weights: { E: 2, people: 1 },
      },
      {
        label: "Normalizing a spreadsheet or dataset 📊",
        weights: { C: 2 },
      },
    ],
  },
  {
    id: "a12",
    category: "academic",
    text: "School clubs: where did you actually show up?",
    options: [
      {
        label: "Robotics, maker club, anything with tools ⚒️",
        weights: { R: 2, technical: 2 },
      },
      {
        label: "Model UN or student government 👨‍⚖️",
        weights: { E: 1, S: 1, people: 1, C: 1 },
      },
      {
        label: "Theatre Arts, On stage or backstage, didn’t matter 🎭",
        weights: { A: 2, people: 1 },
      },
      {
        label: "The local outreach/volunteering one 🤝",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Investment club, Warren Buffet doesn't know what's coming 😤",
        weights: { E: 2, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "a13",
    category: "academic",
    text: "New information sticks best when...",
    options: [
      {
        label: "You can take the thing apart with your hands",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "You can turn it into a system or a diagram",
        weights: { I: 1, C: 2, technical: 1 },
      },
      { label: "There’s a story or an image attached", weights: { A: 2 } },
      {
        label: "You talk it through with someone",
        weights: { S: 1, people: 2 },
      },
      {
        label: "You have to teach it",
        weights: { S: 2, E: 1, people: 1 },
      },
    ],
  },
  {
    id: "a14",
    category: "academic",
    text: "Pick a museum:",
    options: [
      {
        label: "Air and space 🛩️",
        weights: { R: 2, technical: 1 },
      },
      { label: "Natural history 🦕", weights: { I: 2 } },
      {
        label: "Modern art 👨‍🎨",
        weights: { A: 2 },
      },
      {
        label: "The city museum 🏛️",
        weights: { S: 1, I: 1, people: 2 },
      },
    ],
  },
  {
    id: "a15",
    category: "academic",
    text: "Which of these classes would you take now?",
    options: [
      {
        label: "Welding/woodwork 🪵",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Intro to coding 👩‍💻",
        weights: { I: 1, technical: 2 },
      },
      { label: "World mythology 🧙‍♂️", weights: { A: 1, I: 1 } },
      {
        label: "Conflict mediation 🫯",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Personal finance 💰",
        weights: { E: 1, C: 2 },
      },
    ],
  },
  {
    id: "a16",
    category: "academic",
    text: "What's your opinion on maths?",
    options: [
      {
        label: "You love it. Clean rules, right answers",
        weights: { I: 2, C: 1, technical: 2 },
      },
      {
        label: "It’s a tool. You Respect it, but you don’t romanticize it",
        weights: { R: 1, C: 1 },
      },
      { label: "Done well, it’s basically art ⚛", weights: { I: 1, A: 1 } },
      {
        label: "Math... 😬",
        weights: { S: 1, people: 2, technical: -1 },
      },
      {
        label: "You like math best when it’s attached to money 🤑",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a17",
    category: "academic",
    text: "In Language class, what part did you actually like?",
    options: [
      {
        label: "The grammar, It’s a system, and systems are learnable",
        weights: { C: 2, I: 1, technical: 1 },
      },
      {
        label: "Talking with people who actually speak it",
        weights: { S: 1, people: 2 },
      },
      { label: "Reading things in that original language", weights: { A: 2 } },
      {
        label: "Actually using it (ordering food, speaking with a local)",
        weights: { E: 1, risk: 1, people: 1 },
      },
      {
        label: "The etymology (study of a word, and it's history)",
        weights: { I: 2 },
      },
    ],
  },
  {
    id: "a18",
    category: "academic",
    text: "What did your class notes look like?",
    options: [
      { label: "Color-coded and tabbed", weights: { C: 3 } },
      {
        label: "Margins full of doodles, some award-worthy",
        weights: { A: 2 },
      },
      {
        label: "Sparse, you remember better than you write",
        weights: { I: 1, autonomy: 1 },
      },
      {
        label:
          "You photographed someone else’s (no shame, I did that too haha)",
        weights: { people: 1, S: 1, C: -1 },
      },
      {
        label: "Diagrams and arrows connecting everything",
        weights: { I: 1, technical: 1 },
      },
    ],
  },
  {
    id: "a19",
    category: "academic",
    text: "It's the Science fair, which project was most likely yours?",
    options: [
      {
        label: "The rocket, potato battery, maybe a potato rocket launcher?",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "A survey of 200 classmates, properly analyzed",
        weights: { I: 1, S: 1, C: 1, people: 1 },
      },
      {
        label: "The one that won “best poster”",
        weights: { A: 2 },
      },
      {
        label: "You didn’t enter, you were on the events and produciton team",
        weights: { E: 2, risk: 1 },
      },
      {
        label: "The methodical one that wins off of pure precision",
        weights: { I: 2, C: 2 },
      },
    ],
  },
  {
    id: "a20",
    category: "academic",
    text: "It's History class, what hooked you?",
    options: [
      {
        label: "Inventions",
        weights: { R: 1, I: 1, technical: 1 },
      },
      { label: "Big ideas and the fights over them", weights: { I: 2 } },
      { label: "The art and music", weights: { A: 2 } },
      {
        label: "How ordinary people actually got by",
        weights: { S: 2, people: 2 },
      },
      { label: "Empires and trade routes", weights: { E: 2 } },
    ],
  },
  {
    id: "a21",
    category: "academic",
    text: "Which quiz would you ace with zero studying?",
    options: [
      {
        label: "Name that tool and what it’s for",
        weights: { R: 2, technical: 1 },
      },
      { label: "Logic riddles", weights: { I: 2 } },
      { label: "Film and music trivia", weights: { A: 2 } },
      {
        label: "Giving a diagnoses of why two people are arguing",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Price is right style of questions",
        weights: { E: 1, C: 1 },
      },
    ],
  },
  {
    id: "a22",
    category: "academic",
    text: "You are going on a dream field trip tomorrow, where are you going?",
    options: [
      { label: "A working factory floor", weights: { R: 2, technical: 1 } },
      { label: "A research lab with the good equipment", weights: { I: 2 } },
      { label: "Backstage at a real theatre", weights: { A: 2 } },
      { label: "Shadowing rounds at a hospital", weights: { S: 2, people: 1 } },
      {
        label: "A courtroom or a trading floor",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a23",
    category: "academic",
    text: "You get to make one course required for everyone, which one will that be?",
    options: [
      {
        label: "Statistics 📊",
        weights: { I: 2, C: 1, technical: 2 },
      },
      {
        label: "Personal finance 💰",
        weights: { C: 2, E: 1 },
      },
      {
        label: "Public speaking 💭",
        weights: { E: 2, people: 2 },
      },
      {
        label: "Ethics 🤔",
        weights: { I: 1, S: 2, people: 1 },
      },
      {
        label: "Basic repair 👨‍🔧",
        weights: { R: 2, technical: 1 },
      },
    ],
  },
  {
    id: "a24",
    category: "academic",
    text: "Which textbook would you actually read after the semester?",
    options: [
      {
        label:
          "The thick reference you know you would use to look things up in",
        weights: { C: 2, technical: 1 },
      },
      {
        label: "The one that was all case studies about people",
        weights: { S: 2, people: 2 },
      },
      { label: "The art book", weights: { A: 2, technical: -2 } },
      {
        label: "The problem set book with the brutal ones in the back",
        weights: { I: 2, technical: 2 },
      },
      {
        label: "The one about how companies got built",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a25",
    category: "academic",
    text: "SURPRISE! You have to teach a class tomorrow, what is it on?",
    options: [
      {
        label: "Something hands-on where they build a real thing",
        weights: { R: 2, technical: 1 },
      },
      {
        label:
          "A discussion seminar. You oversee the students and be the guide in the discussion",
        weights: { S: 2, people: 2 },
      },
      {
        label:
          "A workshop where everyone makes something of their own (art, poetry, writing, building)",
        weights: { A: 2 },
      },
      {
        label: "A lecture you have researched into the ground",
        weights: { I: 2, C: 1 },
      },
      {
        label: "A pitch competition, and the winner gets fast food",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "a26",
    category: "academic",
    text: "Which research question would keep you up at night?",
    options: [
      {
        label: "How does this system actually work under the hood?",
        weights: { I: 2, technical: 2 },
      },
      {
        label: "Why do people act like that in groups?",
        weights: { I: 1, S: 2, people: 2 },
      },
      {
        label: "What makes a thing beautiful instead of just fine?",
        weights: { A: 2, technical: -2 },
      },
      {
        label: "Could this be built cheaper and faster?",
        weights: { R: 1, E: 2 },
      },
      {
        label: "What is in this data that nobody has noticed yet?",
        weights: { I: 2, C: 2 },
      },
    ],
  },
  {
    id: "a27",
    category: "academic",
    text: "You're invited to a study group, you...",
    options: [
      {
        label: "Skip it. You work better on your own",
        weights: { autonomy: 2, people: -2 },
      },
      { label: "Run it, because someone has to", weights: { E: 2, people: 1 } },
      {
        label: "Join it for the arguing, mostly",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Build the shared notes doc everyone ends up living in",
        weights: { C: 2, S: 1 },
      },
      {
        label: "Turn up with the hard problems already done",
        weights: { I: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "a28",
    category: "academic",
    text: "If grades stop existing tomorrow, your pace of studying would...",
    options: [
      {
        label: "Barely change because you study what interests you anyway",
        weights: { I: 2, autonomy: 2 },
      },
      {
        label: "Get a lot more experimental",
        weights: { A: 2, risk: 1, autonomy: 1 },
      },
      {
        label: "Fall apart, you need the structure",
        weights: { C: 2, autonomy: -2 },
      },
      {
        label: "Shift to whatever actually gets you hired",
        weights: { E: 2, C: 1 },
      },
    ],
  },
  {
    id: "a29",
    category: "academic",
    text: "Pick the skill you wish you had already mastered.",
    options: [
      {
        label: "Real fluency in another language",
        weights: { A: 1, S: 1, people: 2 },
      },
      {
        label: "Writing code that does whatever you imagine",
        weights: { I: 2, technical: 2 },
      },
      {
        label: "Building or fixing anything with your hands",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Drawing what you can see in your head",
        weights: { A: 2, technical: -2 },
      },
      {
        label: "Reading a room the second you walk in",
        weights: { E: 2, people: 2 },
      },
    ],
  },
  {
    id: "a30",
    category: "academic",
    text: "Test option: Open book or closed book?",
    options: [
      {
        label: "Open book, the point is using the material",
        weights: { I: 1, autonomy: 2 },
      },
      {
        label: "Closed book, you like knowing that you know it",
        weights: { C: 2, autonomy: -1 },
      },
      {
        label: "Neither, you'd rather do a project and leave be left alone",
        weights: { A: 2, autonomy: 2 },
      },
      {
        label: "Group exam",
        weights: { S: 2, people: 2 },
      },
    ],
  },

  // ----------------------------------------------------------- values (30)
  {
    id: "v1",
    category: "values",
    text: "What matters most in a career?",
    options: [
      {
        label: "Security. You want to be able to sleep at night",
        weights: { C: 1, risk: -2 },
      },
      { label: "Actually helping people", weights: { S: 2, people: 2 } },
      { label: "Creative freedom", weights: { A: 2, autonomy: 2 } },
      {
        label: "Building something that’s yours",
        weights: { E: 2, risk: 2, autonomy: 1 },
      },
      { label: "Getting scary-good at something hard", weights: { I: 2 } },
    ],
  },
  {
    id: "v2",
    category: "values",
    text: "What do you want to leave behind?",
    options: [
      {
        label: "Things that work. Used daily, built to last",
        weights: { R: 2, technical: 1 },
      },
      { label: "Knowledge that outlives you", weights: { I: 2 } },
      {
        label: "Something beautiful that didn’t exist before",
        weights: { A: 2 },
      },
      {
        label: "People doing better because you showed up",
        weights: { S: 2, people: 2 },
      },
      { label: "A thing that keeps running without you", weights: { E: 2 } },
    ],
  },
  {
    id: "v3",
    category: "values",
    text: "Which trade would you actually take?",
    options: [
      { label: "Lower pay, total job security", weights: { risk: -2, C: 1 } },
      {
        label: "Wild swings in pay for a real shot at the upside",
        weights: { risk: 2, E: 1 },
      },
      {
        label: "Lower pay for work that matters",
        weights: { S: 2, people: 1 },
      },
      {
        label: "Lower pay for full creative control",
        weights: { A: 1, autonomy: 2 },
      },
      {
        label: "A rigid 9-to-5 for excellent money",
        weights: { C: 2, autonomy: -2 },
      },
    ],
  },
  {
    id: "v4",
    category: "values",
    text: "Do you want to be your own boss?",
    options: [
      {
        label: "Yes, you need to run your own show",
        weights: { autonomy: 3, E: 1, risk: 1 },
      },
      {
        label: "Someday yes, but it's not urgent",
        weights: { autonomy: 1, E: 1 },
      },
      {
        label: "Not really, you genuinely like having a good manager",
        weights: { autonomy: -2, C: 1 },
      },
      {
        label: "No, you want a big and stable institution around you",
        weights: { autonomy: -2, risk: -2, C: 1 },
      },
      {
        label:
          "You care more about who you work with rather than positional titles",
        weights: { S: 1, people: 2 },
      },
    ],
  },
  {
    id: "v5",
    category: "values",
    text: "Which compliment would you secretly frame?",
    options: [
      {
        label: "“You built this? It still works perfectly.”",
        weights: { R: 2, technical: 1 },
      },
      { label: "“Your research changed how we do this.”", weights: { I: 2 } },
      { label: "“Your work made you cry.”", weights: { A: 2 } },
      {
        label: "“You changed your life, Thank you.”",
        weights: { S: 2, people: 2 },
      },
      {
        label: "“I read about your company this morning.”",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "v6",
    category: "values",
    text: "Money v.s. passion:",
    options: [
      {
        label: "Maximize the income, passion can be a weekend thing",
        weights: { E: 2, C: 1 },
      },
      {
        label: "Balanced, but leaning passion",
        weights: { A: 1, autonomy: 1 },
      },
      {
        label: "Passion first, money finds good work eventually",
        weights: { A: 2, autonomy: 1, risk: 1 },
      },
      {
        label: "Whichever one helps more people",
        weights: { S: 2, people: 1 },
      },
      {
        label: "Steady middle path",
        weights: { C: 2, risk: -2 },
      },
    ],
  },
  {
    id: "v7",
    category: "values",
    text: "A perfect workday ends with...",
    options: [
      { label: "Something physical, finished, and working", weights: { R: 2 } },
      {
        label: "A hard problem finally cracking open",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Something new existing that didn’t this morning",
        weights: { A: 2 },
      },
      {
        label: "Someone’s day going better because of you",
        weights: { S: 2, people: 2 },
      },
      {
        label: "A deal closed or a milestone hit",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "v8",
    category: "values",
    text: "What would make you quit a well-paying job?",
    options: [
      {
        label: "Mind-numbing repetition 😵‍💫",
        weights: { A: 1, autonomy: 1, risk: 1 },
      },
      {
        label: "A boss who micromanages your every move 🥲",
        weights: { autonomy: 2 },
      },
      {
        label: "Realizing the work helps absolutely no one 🙃",
        weights: { S: 2, people: 1 },
      },
      { label: "No path to move up the ladder 🪜", weights: { E: 2 } },
      {
        label: "Constant chaos 💥",
        weights: { C: 2, risk: -2 },
      },
    ],
  },
  {
    id: "v9",
    category: "values",
    text: "Twenty years out, you’d love to be described as...",
    options: [
      { label: "The one who could fix anything 👩‍🔧", weights: { R: 2 } },
      {
        label: "Brilliant 🧙‍♂️",
        weights: { I: 2 },
      },
      {
        label: "An original ☝️",
        weights: { A: 2 },
      },
      {
        label: "Genuinely kind 🕊️",
        weights: { S: 2, people: 1 },
      },
      {
        label: "An unstoppable force 😤",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "v10",
    category: "values",
    text: "You run a charity for one day, which one is it?",
    options: [
      { label: "A housing build 🏡", weights: { R: 2, S: 1 } },
      { label: "A disease research fund 🧪", weights: { I: 2 } },
      {
        label: "An arts program for kids 🎨",
        weights: { A: 1, S: 1, people: 1 },
      },
      { label: "A crisis hotline ☎️", weights: { S: 2, people: 2 } },
      {
        label: "A microloan fund for tiny businesses 💰",
        weights: { E: 2, C: 1 },
      },
    ],
  },
  {
    id: "v11",
    category: "values",
    text: "“Security” means...",
    options: [
      {
        label: "Skills nobody can take away from you",
        weights: { R: 1, I: 1 },
      },
      {
        label: "Savings, a plan, and a backup plan",
        weights: { C: 2, risk: -2 },
      },
      {
        label: "People who’d catch you if you fell",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Owning your own thing outright",
        weights: { E: 1, autonomy: 2, risk: 1 },
      },
      {
        label: "Having security is a little boring",
        weights: { risk: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "v12",
    category: "values",
    text: "Your ideal boss...",
    options: [
      {
        label: "Points at the problem and gets out of your way",
        weights: { autonomy: 2, I: 1 },
      },
      {
        label: "Teaches you something every single week",
        weights: { I: 1, S: 1 },
      },
      {
        label: "Gives crystal-clear expectations and honest reviews",
        weights: { C: 2, autonomy: -1 },
      },
      {
        label: "Fights for the team when it counts",
        weights: { S: 2, people: 1 },
      },
      {
        label: "Is you",
        weights: { E: 2, autonomy: 2, risk: 1 },
      },
    ],
  },
  {
    id: "v13",
    category: "values",
    text: "$50k lands in your account, which option would you choose?",
    options: [
      {
        label: "Workshop. Tools. Maybe a truck",
        weights: { R: 2, technical: 1 },
      },
      { label: "A year off to study whatever you want", weights: { I: 2 } },
      {
        label: "Funding the creative project you keep postponing",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "Taking care of people you love",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Seed money. You’ve been waiting for this",
        weights: { E: 2, risk: 2 },
      },
    ],
  },
  {
    id: "v14",
    category: "values",
    text: "Which headline about yourself would you screenshot?",
    options: [
      {
        label: "“Local legend repairs 100-year-old clock tower”",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "“Researcher answers question that stumped field for decades”",
        weights: { I: 2 },
      },
      {
        label: "“The artist everyone will pretend they discovered first”",
        weights: { A: 2 },
      },
      {
        label: "“The mentor behind a generation of graduates”",
        weights: { S: 2, people: 2 },
      },
      {
        label: "“The founder who did it without investors”",
        weights: { E: 2, autonomy: 1, risk: 1 },
      },
    ],
  },
  {
    id: "v15",
    category: "values",
    text: "What’s worth losing sleep over?",
    options: [
      { label: "Finishing the build", weights: { R: 2 } },
      {
        label: "A problem that followed you home in your head",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "A 2am creative streak",
        weights: { A: 2, autonomy: 1 },
      },
      {
        label: "A friend who needed to talk until late",
        weights: { S: 2, people: 2 },
      },
      { label: "Launch night", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "v16",
    category: "values",
    text: "Which news do you read first?",
    options: [
      {
        label: "New tech that works",
        weights: { I: 1, technical: 2 },
      },
      { label: "A genuine scientific discovery", weights: { I: 2 } },
      {
        label: "Film, books, music, the discourse",
        weights: { A: 2 },
      },
      {
        label: "A human story that restores some faith",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Markets, deals, who’s buying whom",
        weights: { E: 1, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "v17",
    category: "values",
    text: "Fairness mostly means...",
    options: [
      {
        label: "Same rules for everyone, applied the same way",
        weights: { C: 2 },
      },
      { label: "Decisions based on evidence, not vibes", weights: { I: 2 } },
      {
        label: "Everyone actually getting heard",
        weights: { S: 1, people: 2 },
      },
      { label: "Rewards matching results", weights: { E: 2, risk: 1 } },
      { label: "Freedom to do it your own way", weights: { autonomy: 2 } },
    ],
  },
  {
    id: "v18",
    category: "values",
    text: "Retirement daydream:",
    options: [
      {
        label: "A workshop, endless projects, zero deadlines",
        weights: { R: 2, autonomy: 1 },
      },
      { label: "Reading and learning forever", weights: { I: 2 } },
      { label: "Making art somewhere with good light", weights: { A: 2 } },
      {
        label: "A big table, full of people, every Sunday",
        weights: { S: 2, people: 2 },
      },
      {
        label: "“Retirement.” I’ll still have a deal going",
        weights: { E: 2 },
      },
    ],
  },
  {
    id: "v19",
    category: "values",
    text: "Rules, generally speaking, are...",
    options: [
      {
        label: "There for good reasons, usually learned the hard way",
        weights: { C: 2, risk: -1 },
      },
      {
        label: "Worth questioning, politely but relentlessly",
        weights: { I: 1, autonomy: 1 },
      },
      {
        label: "Suggestions with good PR",
        weights: { A: 1, risk: 1, autonomy: 1 },
      },
      {
        label: "How we keep things fair for everyone",
        weights: { S: 1, C: 1, people: 1 },
      },
      {
        label: "Obstacles for people without imagination",
        weights: { E: 1, risk: 2 },
      },
    ],
  },
  {
    id: "v20",
    category: "values",
    text: "Which single word makes you lean in?",
    options: [
      { label: "“Build”", weights: { R: 2 } },
      { label: "“Why”", weights: { I: 2 } },
      { label: "“Imagine”", weights: { A: 2 } },
      { label: "“Together”", weights: { S: 1, people: 2 } },
      { label: "“Opportunity”", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "v21",
    category: "values",
    text: "Scenario: you get double the pay, but every call goes through a committee. You...",
    options: [
      {
        label: "Pass, running your own decisions is the whole point",
        weights: { autonomy: 2, risk: 1 },
      },
      {
        label: "Take it, the money buys freedom somewhere else",
        weights: { E: 2, C: 1, autonomy: -1 },
      },
      {
        label: "Negotiate for one area that is fully yours",
        weights: { E: 2, autonomy: 1 },
      },
      {
        label: "Take it, as long as the committee knows its stuff",
        weights: { C: 2, autonomy: -2 },
      },
    ],
  },
  {
    id: "v22",
    category: "values",
    text: "Which failure would you rather explain later?",
    options: [
      {
        label: "You bet big and it did not pay off",
        weights: { E: 2, risk: 2 },
      },
      {
        label: "You played it safe and stayed a few years too long",
        weights: { C: 1, risk: -2 },
      },
      {
        label: "You made something almost nobody understood",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "You kept helping someone who did not want it",
        weights: { S: 2, people: 2 },
      },
    ],
  },
  {
    id: "v23",
    category: "values",
    text: "What would you want a stranger to notice about your work?",
    options: [
      { label: "That it was rigorous", weights: { I: 2, C: 1, technical: 1 } },
      { label: "That it was original", weights: { A: 2 } },
      { label: "That it helped somebody", weights: { S: 2, people: 2 } },
      { label: "That it was built to last", weights: { R: 2, C: 1 } },
      { label: "That it was bold", weights: { E: 2, risk: 2 } },
    ],
  },
  {
    id: "v24",
    category: "values",
    text: "Your job goes fully remote and nobody checks in. You feel...",
    options: [
      { label: "Free 😌", weights: { autonomy: 2, people: -2 } },
      {
        label: "Adrift 😔",
        weights: { C: 2, autonomy: -2 },
      },
      {
        label: "Fine, but you miss having people around 🤷‍♂️",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Good, until you need a room to pitch in 🤷‍♀️",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "v25",
    category: "values",
    text: "Pick the legacy:",
    options: [
      {
        label: "A tool people still reach for",
        weights: { R: 2, technical: 2 },
      },
      { label: "An idea people still argue about", weights: { I: 2, A: 1 } },
      {
        label: "People you trained who went further than you did",
        weights: { S: 2, people: 2 },
      },
      { label: "A company that outlasted you", weights: { E: 2, risk: 1 } },
      {
        label: "A body of work with your fingerprints all over it",
        weights: { A: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "v26",
    category: "values",
    text: "Stability v.s. upside:",
    options: [
      { label: "Salary. Every time", weights: { C: 2, risk: -2 } },
      { label: "Less salary, real equity", weights: { E: 2, risk: 2 } },
      {
        label: "Contract work, you set the terms",
        weights: { autonomy: 2, risk: 1 },
      },
      {
        label: "Whatever leaves your evenings alone",
        weights: { C: 1, risk: -1, autonomy: 1 },
      },
    ],
  },
  {
    id: "v27",
    category: "values",
    text: "How much should work know about your life?",
    options: [
      {
        label: "Close to nothing, you keep the two apart",
        weights: { people: -2, autonomy: 1 },
      },
      {
        label: "Enough that they treat you like a person",
        weights: { S: 2, people: 2 },
      },
      {
        label: "They are some of your closest friends",
        weights: { S: 1, E: 1, people: 2 },
      },
      {
        label: "Depends entirely on the manager",
        weights: { C: 1, people: 1 },
      },
    ],
  },
  {
    id: "v28",
    category: "values",
    text: "Which is a cause you would give a full year to?",
    options: [
      { label: "Getting people housed and fed", weights: { S: 2, people: 2 } },
      {
        label: "Building infrastructure that actually works",
        weights: { R: 2, technical: 2 },
      },
      {
        label: "Making the research public and correct",
        weights: { I: 2, C: 1 },
      },
      {
        label: "Funding people with unreasonable ideas",
        weights: { E: 2, risk: 2 },
      },
      {
        label: "Keeping something beautiful from being lost",
        weights: { A: 2 },
      },
    ],
  },
  {
    id: "v29",
    category: "values",
    text: "The word “professional” makes you picture...",
    options: [
      { label: "Reliable, prepared, on time", weights: { C: 2, autonomy: -1 } },
      {
        label: "Someone who genuinely knows the craft",
        weights: { I: 1, R: 1, technical: 2 },
      },
      {
        label: "Someone who reads the room perfectly",
        weights: { E: 2, people: 2 },
      },
      {
        label: "A costume you would rather not put on",
        weights: { A: 2, C: -1, autonomy: 2 },
      },
    ],
  },
  {
    id: "v30",
    category: "values",
    text: "Ten years in, what tells you that you chose right?",
    options: [
      {
        label: "You are genuinely good at something difficult",
        weights: { I: 1, R: 1, technical: 2 },
      },
      { label: "You control your own time", weights: { autonomy: 2 } },
      {
        label: "The people you work with would follow you anywhere",
        weights: { E: 2, S: 1, people: 2 },
      },
      { label: "The work still surprises you", weights: { I: 1, A: 2 } },
      {
        label: "You are secure and nothing keeps you up at night",
        weights: { C: 2, risk: -2 },
      },
    ],
  },

  // ---------------------------------------------------------- hobbies (30)
  {
    id: "h1",
    category: "hobbies",
    text: "You have a free Saturday with zero obligations. Which of these would most likely happen?",
    options: [
      {
        label: "I’m elbow-deep in some project by 10am",
        weights: { R: 2, technical: 2 },
      },
      {
        label: "A research rabbit hole that eats up my entire day",
        weights: { I: 2 },
      },
      {
        label: "Something gets made, maybe a drawing, a song, a loaf",
        weights: { A: 2, technical: -1 },
      },
      {
        label:
          "Spending time with people, brunch, long calls, or a walk with a friend",
        weights: { S: 2, people: 2 },
      },
      {
        label: "The side hustle gets some love",
        weights: { E: 2, risk: 1, autonomy: 1 },
      },
    ],
  },
  {
    id: "h2",
    category: "hobbies",
    text: "You are taking an evening class, purely for fun. Which of these would you choose?",
    options: [
      { label: "Woodworking or 3D printing", weights: { R: 2, technical: 1 } },
      { label: "Astronomy", weights: { I: 2 } },
      { label: "Photography", weights: { A: 2 } },
      { label: "Coaching or first aid", weights: { S: 2, people: 1 } },
      {
        label: "Investing",
        weights: { E: 1, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "h3",
    category: "hobbies",
    text: "Your kind of game:",
    options: [
      { label: "Anything outdoors", weights: { R: 2 } },
      {
        label: "Heavy strategy",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Creative sandboxes",
        weights: { A: 2 },
      },
      {
        label: "Party games",
        weights: { S: 1, E: 1, people: 2 },
      },
      {
        label: "Ranked or competitive",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h4",
    category: "hobbies",
    text: "Which videos do you actually watch to the end?",
    options: [
      {
        label: "Restorations",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Science explainers",
        weights: { I: 2 },
      },
      {
        label: "Breakdowns of how a film or album got made",
        weights: { A: 2 },
      },
      {
        label: "Psychology, relationships, why we do what we do",
        weights: { S: 2, people: 1 },
      },
      {
        label: "Founder interviews and market breakdowns",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h5",
    category: "hobbies",
    text: "Suppose you’re volunteering at a festival, which job would you take?",
    options: [
      { label: "Stage rigging and sound", weights: { R: 2, technical: 2 } },
      {
        label: "Creating the master schedule",
        weights: { C: 2 },
      },
      { label: "Posters and merch design", weights: { A: 2 } },
      {
        label: "Guest help. Lost kids, first aid, directions",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Sponsorships, you’ll come back with money",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "h6",
    category: "hobbies",
    text: "Which personal project would you actually finish?",
    options: [
      { label: "Restoring a bike, a chair, a whole van 🚐", weights: { R: 2 } },
      {
        label: "A tracking project, with data on something you love 📊",
        weights: { I: 1, C: 1, technical: 2 },
      },
      {
        label: "A magazine, a short film, a four-song EP 🎶",
        weights: { A: 2, technical: -1 },
      },
      {
        label: "A monthly meetup people actually attend 🙋‍♂️",
        weights: { S: 1, E: 1, people: 2 },
      },
      {
        label: "Flipping things for profit 💵",
        weights: { E: 2, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "h7",
    category: "hobbies",
    text: "Your ideal vacation:",
    options: [
      {
        label: "Backcountry hiking and camping ⛺️",
        weights: { R: 2, autonomy: 1 },
      },
      {
        label: "Museums and old libraries in a rainy city 🏛️",
        weights: { I: 1, A: 1 },
      },
      {
        label: "An arts festival somewhere new 🏟️",
        weights: { A: 2, people: 1 },
      },
      {
        label: "The group trip you organized 🎒",
        weights: { S: 1, E: 1, C: 1, people: 2 },
      },
      {
        label: "Booked the flight with no plan ✈️",
        weights: { risk: 2, autonomy: 2 },
      },
    ],
  },
  {
    id: "h8",
    category: "hobbies",
    text: "Most-used app category:",
    options: [
      { label: "DIY", weights: { R: 2, technical: 1 } },
      { label: "Podcasts or wiki", weights: { I: 2 } },
      { label: "Photo, music, or writing apps", weights: { A: 2 } },
      {
        label: "Messages",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Marketplace and finance apps",
        weights: { E: 1, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "h9",
    category: "hobbies",
    text: "Your friend is moving apartments, you’re the one who...",
    options: [
      {
        label: "Rents the truck and solves the couch-vs-stairwell geometry",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Labels every box and builds the unpacking system",
        weights: { C: 2 },
      },
      {
        label: "Shows up with the playlist and the good snacks",
        weights: { A: 1, people: 1 },
      },
      {
        label: "Keeps morale up through hour six",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Negotiated their deposit back before lunch",
        weights: { E: 2 },
      },
    ],
  },
  {
    id: "h10",
    category: "hobbies",
    text: "It's game night and you bring...",
    options: [
      {
        label: "The heavy strategy game nobody’s brave enough to learn",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Charades energy",
        weights: { A: 1, S: 1, people: 2 },
      },
      { label: "Poker", weights: { E: 1, risk: 2 } },
      {
        label: "A co-op game",
        weights: { S: 1, people: 1 },
      },
      { label: "Puzzles", weights: { I: 1, C: 1 } },
    ],
  },
  {
    id: "h11",
    category: "hobbies",
    text: "It's Sunday morning and you have a coffee in hand:",
    options: [
      {
        label: "Spend it in the garage or garden until lunch",
        weights: { R: 2 },
      },
      { label: "A long read you’ve been saving", weights: { I: 2 } },
      { label: "Sketchbook, journal, or piano", weights: { A: 2 } },
      {
        label: "A long call with someone you love",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Reviewing and planning for the week ahead",
        weights: { C: 2 },
      },
    ],
  },
  {
    id: "h12",
    category: "hobbies",
    text: "Pick your Friday night:",
    options: [
      { label: "Climbing gym or a long ride", weights: { R: 2, risk: 1 } },
      {
        label: "Trivia night",
        weights: { I: 1, S: 1, people: 1 },
      },
      {
        label: "Open mic",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "Dinner party at your place",
        weights: { S: 2, people: 2 },
      },
      {
        label: "That networking thing. Free drinks, future contacts",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "h13",
    category: "hobbies",
    text: "What do you collect, or would you?",
    options: [
      { label: "Tools", weights: { R: 2 } },
      { label: "Books", weights: { I: 2 } },
      { label: "Vinyl, prints, vintage objects", weights: { A: 2 } },
      {
        label: "Postcards and letters from people",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Assets",
        weights: { E: 2, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "h14",
    category: "hobbies",
    text: "Your camera roll is mostly...",
    options: [
      {
        label: "Projects mid-progress, for reference",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Screenshots of interesting things you’ll “read later”",
        weights: { I: 2 },
      },
      {
        label: "Shots where the light did something worth keeping",
        weights: { A: 2 },
      },
      { label: "Friends mid-laugh", weights: { S: 1, people: 2 } },
      {
        label: "Whiteboards, receipts, and one gym selfie",
        weights: { E: 1, C: 2 },
      },
    ],
  },
  {
    id: "h15",
    category: "hobbies",
    text: "Pick a podcast for the drive:",
    options: [
      {
        label: "How it’s made, but audio",
        weights: { R: 1, I: 1, technical: 1 },
      },
      { label: "Unsolved scientific mysteries", weights: { I: 2 } },
      { label: "Serialized fiction", weights: { A: 2 } },
      {
        label: "Long interviews about people’s actual lives",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Founders describing their worst year",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h16",
    category: "hobbies",
    text: "You own a houseplant. It...",
    options: [
      {
        label: "Is hooked to a watering system you engineered",
        weights: { R: 2, technical: 2 },
      },
      {
        label: "Is an ongoing experiment, there’s a control plant",
        weights: { I: 2 },
      },
      {
        label: "Was chosen entirely for the aesthetic",
        weights: { A: 2 },
      },
      {
        label: "Was a gift, which is why it must not die",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Died...",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h17",
    category: "hobbies",
    text: "Suppose your group chat wants to take a trip. You immediately...",
    options: [
      { label: "Own the gear list and the route", weights: { R: 1, C: 1 } },
      {
        label: "Produce an itinerary",
        weights: { I: 1, C: 2 },
      },
      {
        label: "Find the weird, wonderful spots no list mentions",
        weights: { A: 2 },
      },
      {
        label: "Make sure everyone can afford it and no one’s left out",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Book it before the chat overthinks itself to death",
        weights: { E: 1, risk: 2 },
      },
    ],
  },
  {
    id: "h18",
    category: "hobbies",
    text: "Rainy afternoon and all of a sudden the power’s out.",
    options: [
      {
        label: "That side project still gets fixed by flashlight",
        weights: { R: 2 },
      },
      { label: "Reading by the window like a Victorian", weights: { I: 2 } },
      { label: "Candles and a sketchbook", weights: { A: 2 } },
      {
        label: "Board games with whoever’s stuck inside with you",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Planning in a notebook",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h19",
    category: "hobbies",
    text: "Your workout of choice:",
    options: [
      { label: "Real labor. Chop, haul, dig, build 🪓", weights: { R: 2 } },
      {
        label: "Long solo runs where the thinking happens 🏃",
        weights: { I: 1, autonomy: 1, people: -1 },
      },
      { label: "Dance 💃🕺", weights: { A: 1, people: 1 } },
      {
        label: "Team sports 🏈",
        weights: { S: 1, E: 1, people: 2 },
      },
      { label: "Anything with a leaderboard 💯", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "h20",
    category: "hobbies",
    text: "You are in a new city for only 48 hours. What is your first stop:",
    options: [
      {
        label: "The historic harbor/trainstation.",
        weights: { R: 2, technical: 1 },
      },
      { label: "The downtown museum", weights: { I: 2 } },
      { label: "A famous neighborhood with the murals", weights: { A: 2 } },
      {
        label: "Wherever locals hang out",
        weights: { S: 1, people: 2 },
      },
      {
        label: "The famous market",
        weights: { E: 2, people: 1, risk: 1 },
      },
    ],
  },
  {
    id: "h21",
    category: "hobbies",
    text: "Something in the house breaks, what is your first instinct?",
    options: [
      {
        label: "Open it up/diagnose the situation, to see what went wrong",
        weights: { R: 2, technical: 2 },
      },
      { label: "Search until you find the exact fix", weights: { I: 2, C: 1 } },
      {
        label: "Call someone who can fix this properly",
        weights: { C: 1, people: 1, technical: -2 },
      },
      {
        label: "Improvise something that technically holds",
        weights: { R: 1, A: 2, risk: 1 },
      },
    ],
  },
  {
    id: "h22",
    category: "hobbies",
    text: "A side project with no deadline and no audience.",
    options: [
      {
        label: "Automate something that annoys you daily",
        weights: { I: 2, technical: 2, autonomy: 1 },
      },
      { label: "Build furniture", weights: { R: 2, technical: 1 } },
      {
        label: "Write the thing you keep circling back to",
        weights: { A: 2, autonomy: 2 },
      },
      {
        label: "Start a regular event for your friends",
        weights: { E: 2, people: 2 },
      },
      {
        label: "Learn one cuisine properly, start to finish",
        weights: { R: 1, C: 2 },
      },
    ],
  },
  {
    id: "h23",
    category: "hobbies",
    text: "You are spending the weekend somewhere with no signal. Your thoughts?",
    options: [
      { label: "Bliss", weights: { autonomy: 2, people: -2 } },
      {
        label: "Fine, as long as there are people there",
        weights: { S: 2, people: 2 },
      },
      { label: "You would bring a couple books", weights: { I: 2 } },
      {
        label: "You would find something to build or fix",
        weights: { R: 2, technical: 1 },
      },
      { label: "Mild panic, then relief", weights: { people: 1, risk: -1 } },
    ],
  },
  {
    id: "h24",
    category: "hobbies",
    text: "Your saved links are mostly...",
    options: [
      {
        label: "Documentation and how-tos",
        weights: { I: 2, C: 1, technical: 2 },
      },
      { label: "Recipes and projects to try", weights: { R: 2 } },
      {
        label: "Design and photography you want to be inspired by",
        weights: { A: 2, technical: -2 },
      },
      { label: "Long reads about people", weights: { I: 1, S: 1, people: 2 } },
      { label: "Markets, deals, and who bought whom", weights: { E: 2, C: 1 } },
    ],
  },
  {
    id: "h25",
    category: "hobbies",
    text: "Team sport or solo sport?",
    options: [
      { label: "Team", weights: { S: 2, people: 2 } },
      {
        label: "Solo",
        weights: { autonomy: 2, people: -2 },
      },
      {
        label: "Either",
        weights: { E: 2, risk: 1 },
      },
      {
        label: "Neither",
        weights: { A: 1, autonomy: 1 },
      },
    ],
  },
  {
    id: "h26",
    category: "hobbies",
    text: "You inherit a garage packed with tools.",
    options: [
      { label: "Best day of your life", weights: { R: 2, technical: 2 } },
      {
        label: "Sell it off, carefully and profitably",
        weights: { E: 2, C: 1 },
      },
      { label: "Clear it out and make it a studio", weights: { A: 2 } },
      {
        label: "Catalogue everything",
        weights: { C: 2, technical: 1 },
      },
    ],
  },
  {
    id: "h27",
    category: "hobbies",
    text: "You are flying for 12 hours, which of these would you most likely do?",
    options: [
      { label: "A crossword", weights: { A: 1, I: 1, C: 1 } },
      { label: "Sudoku", weights: { C: 2, technical: 2 } },
      {
        label: "Talk to whoever is next to you",
        weights: { E: 2, people: 2 },
      },
      {
        label: "A strategy game against the machine",
        weights: { I: 2, technical: 1 },
      },
      { label: "Sketching out the window", weights: { A: 2, technical: -2 } },
    ],
  },
  {
    id: "h28",
    category: "hobbies",
    text: "How do you value music?",
    options: [
      { label: "You play an instrument", weights: { R: 1, A: 2 } },
      {
        label: "You make playlists like it is a craft",
        weights: { A: 1, C: 2 },
      },
      { label: "Background noise while you work", weights: { I: 1, C: 1 } },
      {
        label: "Live shows, crowds, the whole business",
        weights: { E: 2, people: 2 },
      },
      {
        label: "You have strong opinions about audio gear",
        weights: { R: 1, technical: 2 },
      },
    ],
  },
  {
    id: "h29",
    category: "hobbies",
    text: "A friend asks you to help plan their wedding.",
    options: [
      {
        label: "Spreadsheet, timeline, vendor list",
        weights: { C: 2, technical: 1 },
      },
      {
        label: "You will handle the people and the toasts",
        weights: { E: 2, S: 1, people: 2 },
      },
      {
        label: "You will do the invitations and the whole look",
        weights: { A: 2 },
      },
      {
        label: "Let them tell you what to carry and when",
        weights: { R: 2, people: 1 },
      },
      {
        label: "You would rather send an excellent gift",
        weights: { people: -2, autonomy: 1 },
      },
    ],
  },
  {
    id: "h30",
    category: "hobbies",
    text: "How do you pick up a brand new hobby?",
    options: [
      {
        label: "Buy the gear and flail until it works",
        weights: { R: 2, risk: 2 },
      },
      { label: "Read everything about it first", weights: { I: 2, C: 1 } },
      {
        label: "Take a class with other beginners",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Find one person who is great and copy them",
        weights: { E: 1, C: 1, people: 1 },
      },
      {
        label: "Work out your own way of doing it",
        weights: { A: 2, autonomy: 2 },
      },
    ],
  },

  // ------------------------------------------------------ personality (30)
  {
    id: "p1",
    category: "personality",
    text: "New ideas and unfamiliar experiences...",
    options: [
      {
        label: "Are the whole point of life",
        weights: { A: 1, I: 1, risk: 1, autonomy: 1 },
      },
      { label: "Are great in reasonable doses", weights: { A: 1 } },
      {
        label: "Are fine, but refining what works beats chasing what’s new",
        weights: { C: 2, risk: -1 },
      },
      {
        label: "Earn your trust slowly, it needs to prove itself",
        weights: { I: 1, C: 1, risk: -1 },
      },
      {
        label: "Thrill you in art, food, and music",
        weights: { A: 2 },
      },
    ],
  },
  {
    id: "p2",
    category: "personality",
    text: "How does your desk/file system look?",
    options: [
      {
        label: "Immaculate, everything has a place",
        weights: { C: 3, technical: 1 },
      },
      {
        label: "Organized where it counts, feral elsewhere",
        weights: { C: 1 },
      },
      {
        label: "Creative chaos, you can find anything",
        weights: { A: 1, C: -2, autonomy: 1 },
      },
      {
        label: "Minimal, you own little and delete constantly",
        weights: { I: 1, autonomy: 1 },
      },
      {
        label: "Built as a shared system so the whole team benefits",
        weights: { S: 1, C: 1, people: 1 },
      },
    ],
  },
  {
    id: "p3",
    category: "personality",
    text: "A full day of back-to-back meetings leaves you...",
    options: [
      {
        label: "Flattened, you need silence and a closed door",
        weights: { people: -2, I: 1 },
      },
      {
        label: "Fine, if it was with people you actually like",
        weights: { S: 1 },
      },
      { label: "Buzzing. People are fuel", weights: { S: 1, E: 1, people: 2 } },
      {
        label: "Depends: did we make something, or just talk?",
        weights: { R: 1, technical: 1 },
      },
      {
        label: "Great, especially the ones you ran",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "p4",
    category: "personality",
    text: "Mid-argument, your instinct is to...",
    options: [
      {
        label: "Cool the room and find the overlap",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Keep asking for evidence until the truth shows up",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Win.",
        weights: { E: 2, risk: 1 },
      },
      {
        label: "Step back and let the process settle it",
        weights: { C: 1, risk: -1, people: -1 },
      },
      {
        label: "Zoom out: both sides are probably asking the wrong question",
        weights: { A: 1, autonomy: 1 },
      },
    ],
  },
  {
    id: "p5",
    category: "personality",
    text: "Under real pressure and big stakes, you...",
    options: [
      {
        label: "Come alive, the adrenaline is the good part",
        weights: { risk: 2, E: 1 },
      },
      {
        label: "Stay calm, because you prepared for exactly this",
        weights: { C: 2, risk: -1 },
      },
      {
        label:
          "Would honestly rather not. You'd rather have low stakes, done well",
        weights: { risk: -2, C: 1 },
      },
      {
        label: "Go quiet and turn into pure focus",
        weights: { I: 1, technical: 1 },
      },
      {
        label: "Start checking on everyone else first",
        weights: { S: 1, E: 1, people: 2 },
      },
    ],
  },
  {
    id: "p6",
    category: "personality",
    text: "People who love you describe you as...",
    options: [
      {
        label: "Practical and reliable",
        weights: { R: 2, C: 1 },
      },
      {
        label: "Curious, always asking the second question",
        weights: { I: 2 },
      },
      { label: "Imaginative, seeing things sideways", weights: { A: 2 } },
      { label: "Warm, the one people call", weights: { S: 2, people: 2 } },
      {
        label: "Driven, exhausting but in an inspiring way",
        weights: { E: 2 },
      },
    ],
  },
  {
    id: "p7",
    category: "personality",
    text: "Your plans just changed last minute:",
    options: [
      {
        label: "You hate it, you planned for a reason",
        weights: { C: 2, risk: -1, autonomy: -1 },
      },
      {
        label: "You love it, the detour is the trip",
        weights: { risk: 2, autonomy: 1 },
      },
      {
        label: "Fine, once someone explains the why",
        weights: { S: 1, people: 1 },
      },
      {
        label: "You're already improvising something better",
        weights: { A: 1, E: 1, risk: 1 },
      },
      {
        label: "You're quietly recalculating what this costs us",
        weights: { I: 1, C: 1 },
      },
    ],
  },
  {
    id: "p8",
    category: "personality",
    text: "Friends call you specifically when...",
    options: [
      {
        label: "Something’s broken",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "They need advice",
        weights: { I: 1, S: 1 },
      },
      {
        label: "They need someone with a good opinion",
        weights: { A: 2 },
      },
      {
        label: "They need to vent to someone",
        weights: { S: 2, people: 2 },
      },
      { label: "They need a push to finally do the thing", weights: { E: 2 } },
    ],
  },
  {
    id: "p9",
    category: "personality",
    text: "A crisis hits, you’re the one who...",
    options: [
      {
        label: "Grabs the fire extinguisher",
        weights: { R: 2, risk: 1 },
      },
      { label: "Reconstructs what actually happened", weights: { I: 2 } },
      {
        label: "Keeps morale high",
        weights: { A: 1, S: 1, people: 1 },
      },
      {
        label: "Does the round of “are you okay?”s",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Starts giving orders nobody voted on but everyone needed",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "p10",
    category: "personality",
    text: "In your opinion, small talk is:",
    options: [
      {
        label: "Painful",
        weights: { I: 1, people: -1, autonomy: 1 },
      },
      { label: "Nice, with the right person", weights: { S: 1 } },
      {
        label: "Meh, you steer it somewhere fun immediately",
        weights: { A: 1, E: 1, people: 1 },
      },
      {
        label: "Great, you kind of love it",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Just networking with extra steps",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "p11",
    category: "personality",
    text: "You lose all track of time when...",
    options: [
      {
        label: "Your hands are physically busy",
        weights: { R: 2 },
      },
      { label: "You’re deep in a rabbit hole", weights: { I: 2 } },
      { label: "You’re making something", weights: { A: 2 } },
      {
        label: "A conversation goes deep",
        weights: { S: 1, people: 2 },
      },
      {
        label: "You’re closing in on a goal",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "p12",
    category: "personality",
    text: "Deadlines:",
    options: [
      {
        label: "Get beaten early",
        weights: { C: 2, risk: -1 },
      },
      { label: "Make the final 10% happen", weights: { E: 1, risk: 1 } },
      {
        label: "Are arbitrary",
        weights: { A: 1, autonomy: 2 },
      },
      {
        label: "Get met",
        weights: { S: 1, C: 1, people: 1 },
      },
      {
        label: "Work best when you set them yourself",
        weights: { autonomy: 2, E: 1 },
      },
    ],
  },
  {
    id: "p13",
    category: "personality",
    text: "What is your appetite for risk like?",
    options: [
      { label: "Measure twice, cut once", weights: { R: 1, C: 1, risk: -1 } },
      {
        label: "You’ll take any odds you’ve done the math on",
        weights: { I: 2, risk: 1 },
      },
      { label: "You take that leap", weights: { A: 1, risk: 2 } },
      {
        label: "Never with other people’s wellbeing",
        weights: { S: 1, people: 1, risk: -1 },
      },
      { label: "No risk, no story", weights: { E: 1, risk: 2 } },
    ],
  },
  {
    id: "p14",
    category: "personality",
    text: "What happens when you turn out to be wrong?",
    options: [
      {
        label: "It shows you where your blindspot are, and you fix it",
        weights: { R: 1, I: 1 },
      },
      {
        label: "You need to know exactly why, or it’ll happen again",
        weights: { I: 2, C: 1 },
      },
      {
        label: "It stings, then it fuels the next attempt",
        weights: { A: 1, risk: 1 },
      },
      {
        label: "You apologize properly",
        weights: { S: 1, people: 2 },
      },
      {
        label: "You pivot so fast it looks intentional",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "p15",
    category: "personality",
    text: "How would you compliment your own brain?",
    options: [
      {
        label: "Spatial: you see how parts fit before touching them",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "Logical: things are always well thought out",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Associative: everything reminds you of something useful",
        weights: { A: 2 },
      },
      {
        label: "Empathic: you are always able to read the room",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Strategic: Three moves ahead, and patient about it",
        weights: { E: 2 },
      },
    ],
  },
  {
    id: "p16",
    category: "personality",
    text: "Clutter:",
    options: [
      {
        label: "your bench is chaos but your system is not",
        weights: { R: 1, autonomy: 1 },
      },
      { label: "Mental clutter is the real enemy", weights: { I: 2 } },
      {
        label: "It’s compost, as in, you'll ideas grow in it",
        weights: { A: 2 },
      },
      {
        label: "You do a proper reset when people come over",
        weights: { S: 1, people: 1, C: 1 },
      },
      { label: "Delegation exists for a reason", weights: { E: 2 } },
    ],
  },
  {
    id: "p17",
    category: "personality",
    text: "Being told what to do:",
    options: [
      {
        label: "Is fine, if they clearly know their stuff",
        weights: { R: 1, C: 1 },
      },
      { label: "Is fine, if they can explain the why", weights: { I: 2 } },
      {
        label: "You are mildly allergic to it",
        weights: { A: 1, autonomy: 2 },
      },
      {
        label: "Is fine, a boat needs rowers, and you are good at rowing",
        weights: { S: 1, C: 1, people: 1 },
      },
      {
        label: "You’d rather be doing the telling",
        weights: { E: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "p18",
    category: "personality",
    text: "A whole weekend alone sounds...",
    options: [
      {
        label: "Genuinely perfect",
        weights: { I: 1, autonomy: 1, people: -2 },
      },
      {
        label: "Good, though you’d miss people by Sunday",
        weights: { S: 1, people: 1 },
      },
      { label: "Productive, things will get made", weights: { A: 1, R: 1 } },
      {
        label: "Lonely",
        weights: { S: 1, E: 1, people: 2 },
      },
      {
        label: "Unlikely, you’ve already filled it with plans",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "p19",
    category: "personality",
    text: "What kind of feedback do you actually want?",
    options: [
      { label: "Just show you what’s broken", weights: { R: 1, technical: 1 } },
      {
        label: "Rigorous and specific, with examples",
        weights: { I: 2, C: 1 },
      },
      { label: "Tell you what it made you feel", weights: { A: 2 } },
      { label: "Kind first, but always honest", weights: { S: 2, people: 2 } },
      { label: "Fast and blunt", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "p20",
    category: "personality",
    text: "Nobody tells you what to do for an entire month. You...",
    options: [
      {
        label: "Thrive, you've got a list of things to do",
        weights: { I: 1, autonomy: 2 },
      },
      {
        label: "Drift for two weeks, then panic",
        weights: { C: 1, autonomy: -2 },
      },
      {
        label: "Start three things but only finish one",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "Go and find people to work with",
        weights: { S: 2, people: 2 },
      },
    ],
  },
  {
    id: "p21",
    category: "personality",
    text: "An unfamiliar machine in front of you, what is your instinct?",
    options: [
      {
        label: "Press things and find out",
        weights: { R: 2, risk: 2, technical: 1 },
      },
      { label: "Read the manual first", weights: { C: 2, technical: 1 } },
      { label: "Watch somebody else do it once", weights: { S: 1, people: 1 } },
      {
        label: "Ask why it was designed the way it was",
        weights: { I: 2, technical: 1 },
      },
    ],
  },
  {
    id: "p22",
    category: "personality",
    text: "Which compliment lands hardest?",
    options: [
      { label: "“You worked that out fast”", weights: { I: 2, technical: 1 } },
      { label: "“You made that feel easy”", weights: { S: 2, people: 2 } },
      { label: "“I have never seen anything like it”", weights: { A: 2 } },
      { label: "“You got it done”", weights: { R: 1, C: 2 } },
      { label: "“You were right to push”", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "p23",
    category: "personality",
    text: "When a rule makes no sense to you, you...",
    options: [
      { label: "Quietly ignore it", weights: { C: -1, autonomy: 2 } },
      {
        label: "Follow it, rules tend to exist for a reason",
        weights: { C: 2, autonomy: -2 },
      },
      { label: "Argue with why it is there", weights: { E: 2, people: 1 } },
      { label: "Find out who wrote it and why", weights: { I: 2 } },
    ],
  },
  {
    id: "p24",
    category: "personality",
    text: "You are given a blank page and a week to fill it:",
    options: [
      { label: "Exhilarating", weights: { A: 2, autonomy: 2 } },
      { label: "Awful", weights: { C: 2, autonomy: -2 } },
      { label: "Research first, then write", weights: { I: 2 } },
      {
        label: "You would ask three people what they need written",
        weights: { S: 2, people: 2 },
      },
    ],
  },
  {
    id: "p25",
    category: "personality",
    text: "Under a real deadline you turn...",
    options: [
      { label: "Calm and systematic", weights: { C: 2 } },
      { label: "Fast and reckless", weights: { E: 1, risk: 2 } },
      {
        label: "Into the one keeping everyone else steady",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Quiet and completely heads-down",
        weights: { I: 1, autonomy: 2, people: -2 },
      },
    ],
  },
  {
    id: "p26",
    category: "personality",
    text: "How much detail is too much detail?",
    options: [
      { label: "No such thing", weights: { C: 2, technical: 2 } },
      {
        label: "Anything past the actual point of it",
        weights: { A: 1, E: 1 },
      },
      { label: "Depends who is reading", weights: { S: 1, people: 2 } },
      {
        label: "You want all of it",
        weights: { I: 2, technical: 1 },
      },
    ],
  },
  {
    id: "p27",
    category: "personality",
    text: "How do you feel about someone watching over your shoulder while you work?",
    options: [
      { label: "Fine", weights: { E: 2, people: 2 } },
      { label: "Ruins it completely", weights: { autonomy: 2, people: -2 } },
      {
        label: "Depends whether they are helping",
        weights: { S: 1, people: 1 },
      },
      {
        label: "You would rather just show the finished thing",
        weights: { A: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "p28",
    category: "personality",
    text: "How is your relationship with routine?",
    options: [
      {
        label: "It is the foundation of everything else",
        weights: { C: 2, risk: -2 },
      },
      {
        label: "It suffocates you inside a month",
        weights: { A: 2, risk: 2, autonomy: 2 },
      },
      {
        label: "You want a frame, not necessarily a cage",
        weights: { C: 1, autonomy: 1 },
      },
      {
        label: "You have never once kept one going",
        weights: { A: 1, risk: 1 },
      },
    ],
  },
  {
    id: "p29",
    category: "personality",
    text: "A coworker has one hard truth for you. How do you want to hear it?",
    options: [
      {
        label: "Straight with no cushion",
        weights: { E: 2, technical: 1, people: -1 },
      },
      {
        label: "Kindly, with some context around it",
        weights: { S: 2, people: 2 },
      },
      {
        label: "In writing, so you can sit with it",
        weights: { I: 1, C: 2, people: -1 },
      },
      { label: "With a plan for fixing it attached", weights: { R: 1, C: 2 } },
    ],
  },
  {
    id: "p30",
    category: "personality",
    text: "You come across something that has you truly stuck. You...",
    options: [
      {
        label: "Go quiet and grind at it alone",
        weights: { I: 1, autonomy: 2, people: -2 },
      },
      {
        label: "Talk it out with whoever is nearby",
        weights: { S: 2, people: 2 },
      },
      { label: "Do something physical until it loosens", weights: { R: 2 } },
      {
        label: "Throw it out and come at it sideways",
        weights: { A: 2, risk: 1 },
      },
      { label: "Break it down into a checklist", weights: { C: 2 } },
    ],
  },

  // -------------------------------------------------------- workstyle (30)
  {
    id: "w1",
    category: "workstyle",
    text: "Your ideal to-do list:",
    options: [
      {
        label: "Clear specs, clear deadlines, zero ambiguity",
        weights: { C: 2, autonomy: -1 },
      },
      {
        label: "The goal is set, how you get there is up to you",
        weights: { autonomy: 2, I: 1 },
      },
      {
        label: "A blank page you get to define yourself",
        weights: { A: 1, autonomy: 2, risk: 1 },
      },
      {
        label: "Whatever the team decided together",
        weights: { S: 1, people: 2 },
      },
      {
        label: "Whatever wins the customer this week",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "w2",
    category: "workstyle",
    text: "Your best work happens...",
    options: [
      {
        label: "Alone, headphones on, door closed",
        weights: { autonomy: 2, people: -2, I: 1 },
      },
      {
        label: "In a small team that’s basically a friend group",
        weights: { S: 1, people: 1 },
      },
      { label: "When you're leading the charge", weights: { E: 2, people: 2 } },
      {
        label: "On a crew, building something you can stand on",
        weights: { R: 2, people: 1 },
      },
      {
        label: "Near others, but on your own track",
        weights: { C: 1, autonomy: 1 },
      },
    ],
  },
  {
    id: "w3",
    category: "workstyle",
    text: "It's a perfect workday and you’d spend it...",
    options: [
      {
        label: "Making: something with your tools out",
        weights: { R: 3, technical: 1 },
      },
      {
        label: "Thinking: modeling, analyzing, calculating",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Creating: sketches, drafts, storyboards",
        weights: { A: 2, technical: -2 },
      },
      {
        label: "Connecting: conversations that actually move people",
        weights: { S: 2, people: 2, technical: -1 },
      },
      {
        label: "Deciding: negotiations, calls, the big swing",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "w4",
    category: "workstyle",
    text: "You check you email and you have four offers, all with the same pay. Which do you sign?",
    options: [
      {
        label: "The established firm with the clear ladder",
        weights: { C: 2, risk: -2, autonomy: -1 },
      },
      {
        label: "The beloved nonprofit with the mission",
        weights: { S: 2, people: 1, risk: -1 },
      },
      {
        label: "The chaotic startup with the equity",
        weights: { E: 2, risk: 3, autonomy: 1 },
      },
      {
        label: "Freelance: your clients, your hours, your rules",
        weights: { autonomy: 3, risk: 2, A: 1 },
      },
      {
        label: "The research institute pushing a frontier",
        weights: { I: 2, risk: -1 },
      },
    ],
  },
  {
    id: "w5",
    category: "workstyle",
    text: "Where do you feel most at home?",
    options: [
      {
        label: "A workshop, a lab bench, or outside entirely",
        weights: { R: 2 },
      },
      {
        label: "A quiet office, headphones on, deep focus",
        weights: { I: 1, C: 1, people: -1 },
      },
      {
        label: "In a studio mid-project, beautiful mess everywhere",
        weights: { A: 2 },
      },
      {
        label: "A clinic, classroom, or community space",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Anywhere with a scoreboard",
        weights: { E: 2, people: 1, risk: 1 },
      },
    ],
  },
  {
    id: "w6",
    category: "workstyle",
    text: "The work rhythm you actually want:",
    options: [
      {
        label: "Predictable hours. Predictable weeks. Bliss",
        weights: { C: 2, risk: -2 },
      },
      {
        label: "Seasons. An intense push, then true rest",
        weights: { A: 1, autonomy: 1 },
      },
      { label: "Sprints and big swings, always", weights: { E: 1, risk: 2 } },
      {
        label: "Steady casework with people who need you",
        weights: { S: 2, people: 1 },
      },
      {
        label: "Follow the problem. Hours vary. Focus doesn’t",
        weights: { I: 1, autonomy: 1 },
      },
    ],
  },
  {
    id: "w7",
    category: "workstyle",
    text: "You trust decisions made by...",
    options: [
      {
        label: "testing it for real and watching what breaks",
        weights: { R: 2, technical: 1 },
      },
      {
        label: "evidence, data, and someone who did the reading",
        weights: { I: 2, C: 1, technical: 1 },
      },
      {
        label: "trained instinct and good taste",
        weights: { A: 2, autonomy: 1 },
      },
      {
        label: "the people who’ll live with the consequences",
        weights: { S: 2, people: 2 },
      },
      {
        label: "gut plus market signal, decided before lunch",
        weights: { E: 2, risk: 2 },
      },
    ],
  },
  {
    id: "w8",
    category: "workstyle",
    text: "Meetings:",
    options: [
      {
        label: "As few as legally possible",
        weights: { autonomy: 2, people: -1 },
      },
      { label: "Fine with an agenda. Criminal without one", weights: { C: 2 } },
      {
        label: "The brainstorm ones are actually great",
        weights: { A: 2, people: 1 },
      },
      {
        label: "Where the real work happens. Alignment IS work",
        weights: { S: 1, people: 2 },
      },
      { label: "your favorite arena", weights: { E: 2, people: 1 } },
    ],
  },
  {
    id: "w9",
    category: "workstyle",
    text: "Your ideal calendar looks like...",
    options: [
      {
        label: "big, empty, fiercely protected blocks",
        weights: { autonomy: 2, I: 1, people: -1 },
      },
      {
        label: "color-coded precision, planned Sunday night",
        weights: { C: 3 },
      },
      {
        label: "loose, until inspiration says otherwise",
        weights: { A: 1, autonomy: 2, risk: 1 },
      },
      {
        label: "full of one-on-ones and check-ins",
        weights: { S: 2, people: 2 },
      },
      {
        label: "back-to-back, and honestly? Thriving",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "w10",
    category: "workstyle",
    text: "The project phase you secretly love:",
    options: [
      { label: "The making, when it starts existing", weights: { R: 2 } },
      {
        label: "The figuring out, before anyone knows the answer",
        weights: { I: 2 },
      },
      {
        label: "The imagining, when it could still be anything",
        weights: { A: 2 },
      },
      {
        label: "The handoff. Watching someone use the thing",
        weights: { S: 1, people: 2 },
      },
      {
        label: "The close. Signatures, launch, scoreboard",
        weights: { E: 2, risk: 1 },
      },
    ],
  },
  {
    id: "w11",
    category: "workstyle",
    text: "Documentation:",
    options: [
      {
        label: "I’d rather just show you, hands on",
        weights: { R: 2, people: 1 },
      },
      { label: "Thorough, or it didn’t happen", weights: { I: 1, C: 2 } },
      {
        label: "Mine has jokes in it. People actually read it",
        weights: { A: 2, people: 1 },
      },
      {
        label: "Written so the newest person can pick it up",
        weights: { S: 1, C: 1, people: 1 },
      },
      { label: "Docs don’t close deals", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "w12",
    category: "workstyle",
    text: "A junior teammate is drowning. You...",
    options: [
      {
        label: "pull up a chair and do it alongside them",
        weights: { R: 1, S: 1, people: 1 },
      },
      {
        label: "diagnose the actual gap in their understanding",
        weights: { I: 2 },
      },
      {
        label: "tell them how you learned it your own weird way",
        weights: { A: 1, autonomy: 1 },
      },
      {
        label: "check how they’re doing. Human first, task second",
        weights: { S: 2, people: 2 },
      },
      {
        label: "move them onto what they’re actually good at",
        weights: { E: 1, C: 1 },
      },
    ],
  },
  {
    id: "w13",
    category: "workstyle",
    text: "Pick your workspace:",
    options: [
      { label: "The shop floor", weights: { R: 2 } },
      {
        label: "A lab with the good instruments",
        weights: { I: 2, technical: 1 },
      },
      { label: "A studio with a wall I’m allowed to paint", weights: { A: 2 } },
      { label: "Wherever the team is", weights: { S: 1, people: 2 } },
      {
        label: "A corner office with a door and a view",
        weights: { E: 2, autonomy: 1 },
      },
    ],
  },
  {
    id: "w14",
    category: "workstyle",
    text: "Success this year  means ...",
    options: [
      {
        label: "something real exists that didn’t in January",
        weights: { R: 2 },
      },
      {
        label: "I understand something you couldn’t before",
        weights: { I: 2 },
      },
      { label: "I made your best thing yet", weights: { A: 2 } },
      {
        label: "specific people are better off because of you",
        weights: { S: 2, people: 2 },
      },
      {
        label: "the number went up, and you can prove why",
        weights: { E: 2, C: 1, risk: 1 },
      },
    ],
  },
  {
    id: "w15",
    category: "workstyle",
    text: "How do you want to be managed?",
    options: [
      {
        label: "Clear targets, clear rules, no surprises",
        weights: { C: 2, autonomy: -1 },
      },
      {
        label: "Hand you a problem, not a process",
        weights: { I: 1, autonomy: 2 },
      },
      {
        label: "Protect your focus and I’ll amaze you",
        weights: { A: 1, autonomy: 1, people: -1 },
      },
      {
        label: "Regular, honest, human check-ins",
        weights: { S: 1, people: 2 },
      },
      { label: "Point you at the biggest fire", weights: { E: 2, risk: 2 } },
    ],
  },
  {
    id: "w16",
    category: "workstyle",
    text: "Multitasking:",
    options: [
      {
        label: "One thing. Done properly. Then the next thing",
        weights: { R: 1, C: 2 },
      },
      { label: "Context-switching murders your depth", weights: { I: 2 } },
      {
        label: "I have seventeen tabs open and they’re all ideas",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "I juggle, because people need things at people-speed",
        weights: { S: 1, people: 2 },
      },
      { label: "It’s called leverage", weights: { E: 2, risk: 1 } },
    ],
  },
  {
    id: "w17",
    category: "workstyle",
    text: "Grab one tool for the crisis:",
    options: [
      { label: "The right wrench", weights: { R: 2, technical: 1 } },
      { label: "A whiteboard", weights: { I: 2 } },
      { label: "A blank page", weights: { A: 2 } },
      {
        label: "Two coffees. One’s for you. Talk to you",
        weights: { S: 1, people: 2 },
      },
      { label: "your phone. Two calls fix this", weights: { E: 2, people: 1 } },
    ],
  },
  {
    id: "w18",
    category: "workstyle",
    text: "Ambiguity at work makes you...",
    options: [
      {
        label: "want to prototype until it becomes clear",
        weights: { R: 1, I: 1, technical: 1 },
      },
      { label: "start asking sharper questions", weights: { I: 2 } },
      {
        label: "thrive. That’s where the good stuff hides",
        weights: { A: 1, risk: 1, autonomy: 1 },
      },
      {
        label: "want everyone aligned before we move",
        weights: { S: 1, C: 1, people: 1 },
      },
      { label: "smell opportunity", weights: { E: 2, risk: 2 } },
    ],
  },
  {
    id: "w19",
    category: "workstyle",
    text: "Pick your pressure:",
    options: [
      {
        label: "Physical stakes. Real things that must not fall",
        weights: { R: 2, risk: 1 },
      },
      {
        label: "Intellectual stakes. Hard problems, high ceilings",
        weights: { I: 2 },
      },
      {
        label: "Creative stakes. your taste, on the record",
        weights: { A: 2, risk: 1 },
      },
      {
        label: "Human stakes. Someone’s counting on you",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Financial stakes. Skin in the game",
        weights: { E: 2, risk: 2 },
      },
    ],
  },
  {
    id: "w20",
    category: "workstyle",
    text: "How much of your week should be unstructured?",
    options: [
      {
        label: "Most of it. you will structure it myself",
        weights: { autonomy: 2 },
      },
      { label: "Very little. Book you solid", weights: { C: 2, autonomy: -2 } },
      {
        label: "Half. Mornings mine, afternoons theirs",
        weights: { C: 1, autonomy: 1 },
      },
      {
        label: "None. you want to be wherever the people are",
        weights: { S: 2, people: 2 },
      },
    ],
  },
  {
    id: "w21",
    category: "workstyle",
    text: "The one tool you would fight to keep:",
    options: [
      { label: "your editor and a terminal", weights: { I: 1, technical: 2 } },
      { label: "A big whiteboard", weights: { A: 1, S: 1, people: 1 } },
      { label: "The shared tracker where everything lives", weights: { C: 2 } },
      { label: "your phone. you run on calls", weights: { E: 2, people: 2 } },
      { label: "Actual physical tools", weights: { R: 2, technical: 1 } },
    ],
  },
  {
    id: "w22",
    category: "workstyle",
    text: "A process everyone follows and nobody likes. You...",
    options: [
      {
        label: "Rewrite it and propose the replacement",
        weights: { E: 2, C: 1, autonomy: 1 },
      },
      { label: "Follow it. Not your hill", weights: { C: 2, autonomy: -2 } },
      { label: "Quietly do it your own way", weights: { autonomy: 2 } },
      {
        label: "Ask the team what they would change first",
        weights: { S: 2, people: 2 },
      },
    ],
  },
  {
    id: "w23",
    category: "workstyle",
    text: "Your ideal team size:",
    options: [
      { label: "Just you", weights: { autonomy: 2, people: -2 } },
      {
        label: "Two or three, tight",
        weights: { S: 1, people: 1, autonomy: 1 },
      },
      {
        label: "Eight or ten, with real momentum",
        weights: { S: 2, people: 2 },
      },
      {
        label: "Big enough that you am running it",
        weights: { E: 2, people: 1 },
      },
    ],
  },
  {
    id: "w24",
    category: "workstyle",
    text: "Specialist or generalist?",
    options: [
      {
        label: "Specialist. World-class at one thing",
        weights: { I: 2, technical: 2 },
      },
      {
        label: "Generalist. you want the whole picture",
        weights: { A: 1, E: 1, risk: 1 },
      },
      { label: "Specialist now, generalist later", weights: { I: 1, C: 1 } },
      { label: "Whatever the work needs that week", weights: { R: 1, C: 1 } },
    ],
  },
  {
    id: "w25",
    category: "workstyle",
    text: "How should your work be youasured?",
    options: [
      { label: "By what actually shipped", weights: { R: 2, C: 1 } },
      { label: "By whether the numbers moved", weights: { E: 2, C: 2 } },
      {
        label: "By whether people ended up better off",
        weights: { S: 2, people: 2 },
      },
      { label: "By whether it was any good", weights: { A: 2, technical: 1 } },
      {
        label: "By whether it was correct",
        weights: { I: 2, C: 1, technical: 2 },
      },
    ],
  },
  {
    id: "w26",
    category: "workstyle",
    text: "You inherit a system nobody ever documented.",
    options: [
      {
        label: "Read the source until you understand all of it",
        weights: { I: 2, technical: 2 },
      },
      {
        label: "Track down whoever built it and ask",
        weights: { S: 1, people: 2 },
      },
      { label: "Document it as you go", weights: { C: 2 } },
      {
        label: "Rebuild the part you need, your way",
        weights: { R: 2, risk: 1, autonomy: 2 },
      },
    ],
  },
  {
    id: "w27",
    category: "workstyle",
    text: "Working hours, if it were genuinely up to you:",
    options: [
      {
        label: "Early mornings, finished by two",
        weights: { C: 2, autonomy: 1 },
      },
      {
        label: "Late nights, alone with it",
        weights: { A: 1, autonomy: 2, people: -2 },
      },
      {
        label: "In bursts, whenever the work is hot",
        weights: { A: 1, risk: 2, autonomy: 2 },
      },
      {
        label: "Same hours as everyone else. Easier to coordinate",
        weights: { C: 2, people: 1, autonomy: -2 },
      },
    ],
  },
  {
    id: "w28",
    category: "workstyle",
    text: "A client wants something you think is wrong.",
    options: [
      {
        label: "Say so plainly, then build it their way",
        weights: { C: 1, people: 1 },
      },
      {
        label: "Refuse. your name is on this",
        weights: { A: 1, risk: 2, autonomy: 2 },
      },
      {
        label: "Show them data until they move",
        weights: { I: 2, technical: 1 },
      },
      {
        label: "Find the version we can both live with",
        weights: { E: 1, S: 2, people: 2 },
      },
    ],
  },
  {
    id: "w29",
    category: "workstyle",
    text: "First week at a new place. You...",
    options: [
      { label: "Read every document there is", weights: { I: 2, C: 2 } },
      { label: "Get lunch with everyone", weights: { E: 2, S: 1, people: 2 } },
      {
        label: "Ship something small on day three",
        weights: { R: 2, risk: 2 },
      },
      {
        label: "Work out how the place really operates",
        weights: { I: 1, E: 1, C: 1 },
      },
    ],
  },
  {
    id: "w30",
    category: "workstyle",
    text: "What would actually make you leave a job you like?",
    options: [
      { label: "Losing control of your own time", weights: { autonomy: 2 } },
      { label: "The work stopped being hard", weights: { I: 2, technical: 1 } },
      { label: "The people changed", weights: { S: 2, people: 2 } },
      { label: "A better offer with more upside", weights: { E: 2, risk: 2 } },
      { label: "Constant instability", weights: { C: 2, risk: -2 } },
    ],
  },
];
