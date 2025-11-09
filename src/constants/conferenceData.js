import ASHWINIRAMEKAR from "../assets/speakers/ASHWINIRAMEKAR.jpg";
import DEBOJYOTICHKRABORTY from "../assets/speakers/DEBOJYOTICHKRABORTY.jpg";
import JITENDRAKUMAR from "../assets/speakers/JITENDRAKUMAR.jpg";
import MAHESHDHARNE from "../assets/speakers/MAHESHDHARNE.jpg";
import NAVEENKUMAR from "../assets/speakers/NAVEENKUMAR.jpg";
import PANKAJKUMAR from "../assets/speakers/PANKAJSHARMA.jpg";
import RADHARANGARAJAN from "../assets/speakers/RADHARANGARAJAN.jpg";
import RAJESHGOKHALE from "../assets/speakers/RAJESHGOKHALE.jpg";
import RAJESHKARYAKARTE from "../assets/speakers/RAJESHKARYAKARTE.jpg";
import RAJIVBHAL from "../assets/speakers/RAJIVBHAL.jpg";
import RAKESHMISHRA from "../assets/speakers/RAKESHMISHRA.jpg";
import RICHAKARMAKAR from "../assets/speakers/RICHAKARMAKAR.jpg";
import SOUVIKMAITI from "../assets/speakers/SOUVIKMAITI.jpg";
import TARUNSHARMA from "../assets/speakers/TARUNSHARMA.jpg";
import VINAYAKNANDICOORI from "../assets/speakers/VINAYKNANDICOORI.jpg";

export const CONFERENCE_DATA = {
  title: "National Conference on Integrative One Health Approach for Tackling Antimicrobial Resistance (AMR):Focus on Surveillance, Diagnostics and Therapeutics",
  acronym: "National Conference 2025",
  date: "February 11 to 12, 2026",
  venue: "Pune",
  theme: "Theme",

  importantDates: [
    { id: 1, event: "Registration Begin", date: "15th November 2025", passed: false },
    { id: 2, event: "Abstract Submissions closes", date: "15th December 2025", passed: false },
    { id: 3, event: "Communication of Abstract acceptance", date: "24th Dec 2025", passed: false },
    { id: 4, event: "Early Bird Registration closes", date: "9th Jan 2026 ", passed: false },
    { id: 5, event: "Late Registration", date: "10th Jan 2026 to 9th Feb 2026", passed: false },
    { id: 6, event: "Spot Registration", date: "10, 11, and 12th Feb 2026", passed: false }
  ],

  speakers: [
    // {
    //   id: 1,
    //   name: "Dr. XYZ",
    //   title: "about research",
    //   affiliation: "University",
    //   image: "/speakers/sarah-johnson.jpg",
    //   topic: "Advances in Cellular Research"
    // },
    {
      id: 1,
      name: "Dr. Rajiv Bahl",
      image: RAJIVBHAL
    }, {
      id: 2,
      name: "Dr. Rajesh Gokhale",
      image: RAJESHGOKHALE
    }, {
      id: 3,
      name: "Dr. Jitendra Kumar",
      image: JITENDRAKUMAR
    }, {
      id: 4,
      name: "Dr. Naveen Kumar",
      image: NAVEENKUMAR
    }, {
      id: 5,
      name: "Dr. Rajesh Karyakarte",
      image: RAJESHKARYAKARTE
    }, {
      id: 6,
      name: "Dr. Vinay K Nandicoori",
      image: VINAYAKNANDICOORI
    }, {
      id: 7,
      name: "Dr. Souvik Maiti",
      image: SOUVIKMAITI
    }, {
      id: 8,
      name: "Dr Radha Rangarajan",
      image: RADHARANGARAJAN
    }, {
      id: 9,
      name: "Dr. Rakesh Mishra",
      image: RAKESHMISHRA
    }, {
      id: 10,
      name: "Dr. Mahesh Dharne",
      image: MAHESHDHARNE
    }, {
      id: 11,
      name: "Dr. Tarun Sharma",
      image: TARUNSHARMA
    }, {
      id: 12,
      name: "Dr. Pankaj Suman",
      image: PANKAJKUMAR
    }, {
      id: 13,
      name: "Dr Ashwini Ramekar",
      image: ASHWINIRAMEKAR
    }, {
      id: 14,
      name: "Prof. Richa Karmakar",
      image: RICHAKARMAKAR
    }, {
      id: 15,
      name: "Dr. Debojyoti Chakraborty",
      image: DEBOJYOTICHKRABORTY
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