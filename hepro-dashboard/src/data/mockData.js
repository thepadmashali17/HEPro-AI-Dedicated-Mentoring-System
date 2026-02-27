// ──────────────────────────────────────────────
//  HEPro AI+ Mock Data
// ──────────────────────────────────────────────

export const kpiData = {
  totalStudents: 500,
  highRiskStudents: 116,
  averageSRI: 59.5,
  mentorsAssigned: 6,
};

export const riskCategoryData = {
  labels: ["🔴 Red (At-Risk)", "🟡 Yellow", "🔵 Blue", "🟢 Green"],
  values: [116, 270, 112, 2],
  colors: ["#ef4444", "#f59e0b", "#3b82f6", "#10b981"],
};

export const clusterData = {
  labels: [
    "Cluster 0 — At-Risk",
    "Cluster 1 — Transitional",
    "Cluster 2 — High Performers",
    "Cluster 3 — Specialized",
  ],
  values: [147, 124, 124, 105],
  colors: [
    "rgba(239,68,68,0.85)",
    "rgba(245,158,11,0.85)",
    "rgba(16,185,129,0.85)",
    "rgba(59,130,246,0.85)",
  ],
};

export const averageScoresData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "APS",
      data: [72.1, 73.4, 74.0, 74.5, 74.8, 74.9],
      color: "#6366f1",
    },
    {
      label: "WWS",
      data: [49.0, 50.1, 51.0, 51.5, 51.8, 51.9],
      color: "#10b981",
    },
    {
      label: "PTMS",
      data: [46.5, 47.2, 48.0, 48.5, 48.8, 49.0],
      color: "#f59e0b",
    },
    {
      label: "CRS",
      data: [52.0, 53.1, 54.0, 55.0, 55.5, 55.7],
      color: "#3b82f6",
    },
  ],
};

export const studentsTableData = [
  {
    id: "S0002",
    sri: 47.94,
    risk: "Red",
    cluster: 0,
    mentor: "Ms. Carol White",
    intervention: "Stress counseling & wellbeing sessions",
  },
  {
    id: "S0012",
    sri: 47.55,
    risk: "Red",
    cluster: 0,
    mentor: "Ms. Carol White",
    intervention: "Stress counseling & wellbeing sessions",
  },
  {
    id: "S0031",
    sri: 46.00,
    risk: "Red",
    cluster: 0,
    mentor: "Ms. Eva Green",
    intervention: "Stress counseling & wellbeing sessions",
  },
  {
    id: "S0052",
    sri: 41.80,
    risk: "Red",
    cluster: 0,
    mentor: "Ms. Eva Green",
    intervention: "Stress counseling & wellbeing sessions",
  },
  {
    id: "S0053",
    sri: 43.94,
    risk: "Red",
    cluster: 0,
    mentor: "Ms. Carol White",
    intervention: "Stress counseling & wellbeing sessions",
  },
  {
    id: "S0007",
    sri: 80.94,
    risk: "Green",
    cluster: 2,
    mentor: "Dr. David Brown",
    intervention: "General mentoring support",
  },
  {
    id: "S0010",
    sri: 70.03,
    risk: "Blue",
    cluster: 2,
    mentor: "Ms. Eva Green",
    intervention: "General mentoring support",
  },
  {
    id: "S0013",
    sri: 60.23,
    risk: "Yellow",
    cluster: 1,
    mentor: "Dr. Alice Smith",
    intervention: "Weekly academic review & study plan",
  },
  {
    id: "S0025",
    sri: 67.39,
    risk: "Blue",
    cluster: 2,
    mentor: "Ms. Eva Green",
    intervention: "General mentoring support",
  },
  {
    id: "S0033",
    sri: 71.33,
    risk: "Blue",
    cluster: 1,
    mentor: "Dr. David Brown",
    intervention: "General mentoring support",
  },
  {
    id: "S0004",
    sri: 58.07,
    risk: "Yellow",
    cluster: 3,
    mentor: "Mr. Bob Jones",
    intervention: "Career guidance & skill roadmap",
  },
  {
    id: "S0006",
    sri: 53.03,
    risk: "Yellow",
    cluster: 3,
    mentor: "Mr. Frank Miller",
    intervention: "Career guidance & skill roadmap",
  },
  {
    id: "S0001",
    sri: 63.14,
    risk: "Yellow",
    cluster: 1,
    mentor: "Dr. Alice Smith",
    intervention: "General mentoring support",
  },
  {
    id: "S0027",
    sri: 76.97,
    risk: "Blue",
    cluster: 2,
    mentor: "Mr. Frank Miller",
    intervention: "General mentoring support",
  },
  {
    id: "S0481",
    sri: 82.99,
    risk: "Green",
    cluster: 2,
    mentor: "Mr. Frank Miller",
    intervention: "General mentoring support",
  },
];

export const alertsData = studentsTableData
  .filter((s) => s.risk === "Red")
  .map((s) => ({
    ...s,
    message: "Immediate mentoring required",
  }));

export const mentorData = [
  { id: "M001", name: "Dr. Alice Smith",  expertise: "Academic",  specialization: "Higher Education & Study Strategies", rating: 4.8 },
  { id: "M002", name: "Mr. Bob Jones",    expertise: "Career",    specialization: "Corporate Relations & Placement",     rating: 4.5 },
  { id: "M003", name: "Ms. Carol White",  expertise: "Wellness",  specialization: "Mental Health & Stress Management",  rating: 4.9 },
  { id: "M004", name: "Dr. David Brown",  expertise: "Academic",  specialization: "STEM Education & Research",           rating: 4.7 },
  { id: "M005", name: "Ms. Eva Green",    expertise: "Wellness",  specialization: "Holistic Wellbeing & Lifestyle",      rating: 4.6 },
  { id: "M006", name: "Mr. Frank Miller", expertise: "Career",    specialization: "Entrepreneurship & Skill Dev.",       rating: 5.0 },
];
