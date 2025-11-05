export const CONFERENCE_DATA = {
  title: "National Conference",
  acronym: "National Conference 2025",
  date: "December 15-17, 2025",
  venue: "Pune",
  theme: "Theme",
  
  importantDates: [
    { id: 1, event: "Abstract Submission Deadline", date: "October 15, 2025", passed: false },
    { id: 2, event: "Notification of Acceptance", date: "November 1, 2025", passed: false },
    { id: 3, event: "Early Bird Registration", date: "November 15, 2025", passed: false },
    { id: 4, event: "Conference Dates", date: "December 15-17, 2025", passed: false }
  ],

  speakers: [
    {
      id: 1,
      name: "Dr. XYZ",
      title: "about research",
      affiliation: "University",
      image: "/speakers/sarah-johnson.jpg",
      topic: "Advances in Cellular Research"
    },
    {
      id: 2,
      name: "Dr. ABC",
      title: "Director of Research",
      affiliation: "University",
      image: "/speakers/rajesh-kumar.jpg",
      topic: "Sustainable Energy Solutions"
    }
  ],

  committees: {
    organizing: [
      { name: "Dr. ABC", role: "Chair", affiliation: "Conference Host" },
      { name: "Dr. XYZ", role: "Co-Chair", affiliation: "Partner Institute" }
    ],
    scientific: [
      { name: "Dr. PQR", affiliation: "International Advisor" },
      { name: "Dr. MNOP", affiliation: "Technical Program Chair" }
    ]
  },

  sponsors: [
    { name: "Platinum Sponsor", level: "platinum", logos: ["/sponsors/company1.png"] },
    { name: "Gold Sponsors", level: "gold", logos: ["/sponsors/company2.png", "/sponsors/company3.png"] }
  ]
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Speakers", href: "/speakers" },
  { name: "Schedule", href: "/schedule" },
  { name: "Registration", href: "/registration" },
  { name: "Committees", href: "/committees" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" }
];