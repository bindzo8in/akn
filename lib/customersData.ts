export interface Customer {
  id: string;
  sNo: number;
  name: string;
  location: string;
  district: string;
  status: "Completed Project" | "Ongoing Project";
  projectType: string;
  badgeText?: string;
  notes?: string;
}

export const existingCustomers: Customer[] = [
  {
    id: "cust-01",
    sNo: 1,
    name: "Rajashkannan Amm",
    location: "Hosur",
    district: "Krishnagiri District",
    status: "Completed Project",
    projectType: "Residential Villa",
    badgeText: "Handed Over",
  },
  {
    id: "cust-02",
    sNo: 2,
    name: "Jp @ Jayaprakash",
    location: "Hosur",
    district: "Krishnagiri District",
    status: "Completed Project",
    projectType: "Residential Construction",
    badgeText: "Handed Over",
  },
  {
    id: "cust-03",
    sNo: 3,
    name: "Dr. Molugan",
    location: "Dharmapuri",
    district: "Dharmapuri District",
    status: "Completed Project",
    projectType: "Healthcare / Residential Villa",
    badgeText: "Handed Over",
  },
  {
    id: "cust-04",
    sNo: 4,
    name: "Dr. Ram Mohan",
    location: "Krishnagiri",
    district: "Krishnagiri District",
    status: "Completed Project",
    projectType: "Multi-Specialty Hospital & Commercial Building",
    badgeText: "Handed Over",
  },
  {
    id: "cust-06",
    sNo: 6,
    name: "M/s Gowri Alagesan",
    location: "Bangar Krishnagiri",
    district: "Krishnagiri District",
    status: "Ongoing Project",
    projectType: "Commercial / Residential Site Execution",
    badgeText: "Active Construction",
  },
  {
    id: "cust-07",
    sNo: 7,
    name: "Mr. Arun",
    location: "Krishnagiri",
    district: "Krishnagiri District",
    status: "Ongoing Project",
    projectType: "Turnkey Residential Villa",
    badgeText: "Active Construction",
  },
  {
    id: "cust-08",
    sNo: 8,
    name: "Mr. Vengatasan",
    location: "Krishnagiri",
    district: "Krishnagiri District",
    status: "Ongoing Project",
    projectType: "Civil Foundation & Superstructure",
    badgeText: "Active Construction",
  },
  {
    id: "cust-09",
    sNo: 9,
    name: "Mr. Sathish",
    location: "Krishnagiri",
    district: "Krishnagiri District",
    status: "Ongoing Project",
    projectType: "Residential Construction Site",
    badgeText: "Active Construction",
  },
  {
    id: "cust-10",
    sNo: 10,
    name: "Mr. Varun",
    location: "Krishnagiri",
    district: "Krishnagiri District",
    status: "Ongoing Project",
    projectType: "Turnkey Villa & Framing",
    badgeText: "Active Construction",
  },
];
