import { Laptop, Globe, Headphones, Briefcase, Palette, Code } from 'lucide-react';

export const LOGO_URL = "https://lh3.googleusercontent.com/d/1-vuuu5yAf2CM8IhXl9G1FKfSKlzOT7bt";

export const SERVICES = [
  {
    title: "Technical Support",
    color: "blue",
    icon: Laptop,
    price: "From R150",
    items: [
      { name: "Computer Repair (Hardware & Software)", price: "R300 - R800" },
      { name: "Laptop & Desktop Troubleshooting", price: "R250 - R500" },
      { name: "Virus & Malware Removal", price: "R200 - R450" },
      { name: "System Upgrades (RAM/SSD) (excl. parts)", price: "R150 - R350" },
      { name: "Basic PC Clean & Speed Boost", price: "R250" },
      { name: "Full System Service (Cleanup + Updates + Security)", price: "R450" },
      { name: "Monthly IT Support (Small Business)", price: "From R1,000/mo" }
    ],
    accentClass: "bg-blue-600",
    borderClass: "border-blue-100",
    textClass: "text-blue-600"
  },
  {
    title: "Web & Online Services",
    color: "green",
    icon: Globe,
    price: "From R500",
    items: [
      { name: "Website Design & Development", price: "R1,500 - R5,000" },
      { name: "Domain Registration & Hosting Setup", price: "R500 - R1,200" }
    ],
    accentClass: "bg-emerald-600",
    borderClass: "border-emerald-100",
    textClass: "text-emerald-600"
  },
  {
    title: "System Development",
    color: "indigo",
    icon: Code,
    price: "From R2500",
    items: [
      { name: "POS (Point of Sale System)", price: "From R3,500" },
      { name: "Custom Software Solutions", price: "Enquire" },
      { name: "Inventory Management Systems", price: "Enquire" }
    ],
    accentClass: "bg-indigo-600",
    borderClass: "border-indigo-100",
    textClass: "text-indigo-600"
  },
  {
    title: "IT Support Services",
    color: "orange",
    icon: Headphones,
    price: "From R150",
    items: [
      { name: "Remote Support", price: "R150/session or R300/hr" },
      { name: "On-site Support", price: "R350 - R600/visit" }
    ],
    accentClass: "bg-orange-600",
    borderClass: "border-orange-100",
    textClass: "text-orange-600"
  },
  {
    title: "Business Solutions",
    color: "purple",
    icon: Briefcase,
    price: "From R150",
    items: [
      { name: "Business Registration (CIPC)", price: "From R650" },
      { name: "Microsoft 365 Setup & Configuration", price: "R500 - R1,200" },
      { name: "Antivirus Installation", price: "R150 - R300" },
      { name: "IT Consulting", price: "R300 - R700/session" }
    ],
    accentClass: "bg-purple-600",
    borderClass: "border-purple-100",
    textClass: "text-purple-600"
  },
  {
    title: "Creative & Design Services",
    color: "pink",
    icon: Palette,
    price: "From R200",
    items: [
      { name: "Poster Design", price: "From R200" },
      { name: "Invoice Templates", price: "From R150" },
      { name: "Letterhead Templates", price: "From R150" },
      { name: "Quotation Templates", price: "From R150" },
      { name: "Business Plans & Profiles", price: "From R500" },
      { name: "Professional Business Templates", price: "From R250" }
    ],
    accentClass: "bg-pink-600",
    borderClass: "border-pink-100",
    textClass: "text-pink-600"
  }
];

export const CONTACTS = [
  {
    name: "Siphe",
    phone: "063 797 2251",
    note: "(Calls & WhatsApp)",
    whatsapp: "27637972251"
  },
  {
    name: "Lizo",
    phone: "076 869 9399",
    note: "(WhatsApp Only)",
    whatsapp: "27768699399"
  }
];
