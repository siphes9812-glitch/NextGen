import { Laptop, Globe, Headphones, Briefcase, CheckCircle2 } from 'lucide-react';

export const SERVICES = [
  {
    title: "Technical Support",
    color: "blue",
    icon: Laptop,
    items: [
      "Computer Repair (Hardware & Software)",
      "Laptop & Desktop Troubleshooting",
      "Virus & Malware Removal",
      "System Upgrades (RAM, SSD)"
    ],
    accentClass: "bg-blue-600",
    borderClass: "border-blue-500/30",
    textClass: "text-blue-400"
  },
  {
    title: "Web & Online Services",
    color: "green",
    icon: Globe,
    items: [
      "Website Design & Development",
      "Domain & Hosting Setup"
    ],
    accentClass: "bg-emerald-600",
    borderClass: "border-emerald-500/30",
    textClass: "text-emerald-400"
  },
  {
    title: "IT Support Services",
    color: "orange",
    icon: Headphones,
    items: [
      "Remote Support",
      "On-site Support"
    ],
    accentClass: "bg-orange-600",
    borderClass: "border-orange-500/30",
    textClass: "text-orange-400"
  },
  {
    title: "Business Solutions",
    color: "purple",
    icon: Briefcase,
    items: [
      "Microsoft 365 Setup",
      "Antivirus Installation",
      "IT Consulting"
    ],
    accentClass: "bg-purple-600",
    borderClass: "border-purple-500/30",
    textClass: "text-purple-400"
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
