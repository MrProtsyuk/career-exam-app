// The trait space. RIASEC (Holland codes) is the backbone; four
// supplementary axes capture preferences RIASEC alone misses.
// User and career vectors both live on these 10 dimensions, scaled 0..1.
// For the four supplementary axes 0 means the "low" pole and 1 the "high"
// pole (e.g. technical: 0 = purely creative leaning, 1 = purely technical).

export const DIMENSIONS = [
  {
    key: 'R',
    label: 'Realistic',
    group: 'riasec',
    blurb: 'hands-on work with tools, machines, materials, or the outdoors',
  },
  {
    key: 'I',
    label: 'Investigative',
    group: 'riasec',
    blurb: 'analyzing, researching, and solving abstract problems',
  },
  {
    key: 'A',
    label: 'Artistic',
    group: 'riasec',
    blurb: 'creating, designing, and expressing ideas in original forms',
  },
  {
    key: 'S',
    label: 'Social',
    group: 'riasec',
    blurb: 'helping, teaching, and caring for people',
  },
  {
    key: 'E',
    label: 'Enterprising',
    group: 'riasec',
    blurb: 'leading, persuading, and building ventures',
  },
  {
    key: 'C',
    label: 'Conventional',
    group: 'riasec',
    blurb: 'organizing, systematizing, and working with data and detail',
  },
  {
    key: 'people',
    label: 'People-oriented',
    group: 'axis',
    poleLow: 'Things & systems',
    poleHigh: 'People',
    blurb: 'preferring to work with people over things and systems',
  },
  {
    key: 'risk',
    label: 'Risk tolerance',
    group: 'axis',
    poleLow: 'Stability',
    poleHigh: 'Risk-taking',
    blurb: 'comfort with uncertainty, volatility, and high stakes',
  },
  {
    key: 'autonomy',
    label: 'Autonomy',
    group: 'axis',
    poleLow: 'Guided structure',
    poleHigh: 'Independence',
    blurb: 'preferring self-direction over defined structure',
  },
  {
    key: 'technical',
    label: 'Technical',
    group: 'axis',
    poleLow: 'Creative leaning',
    poleHigh: 'Technical leaning',
    blurb: 'gravitating to technical rather than expressive problems',
  },
];

export const DIMENSION_BY_KEY = Object.fromEntries(
  DIMENSIONS.map((d) => [d.key, d])
);
