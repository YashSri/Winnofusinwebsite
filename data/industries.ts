export interface Industry {
    id: string;
    name: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    accentColor: string;
}

export const industries: Industry[] = [
    {
        id: "ind-quick-commerce",
        name: "Quick Commerce",
        description: "Faster last-mile delivery with secure mobile fulfillment operations.",
        iconName: "Truck",
        imageUrl: "https://source.unsplash.com/1200x800/?india,delivery,warehouse",
        accentColor: "#F26522",
    },
    {
        id: "ind-airlines",
        name: "Airlines",
        description: "Connected passenger journeys with reliable airport and fleet operations.",
        iconName: "Cloud",
        imageUrl: "https://source.unsplash.com/1200x800/?india,airline,airport",
        accentColor: "#2563EB",
    },
    {
        id: "ind-police",
        name: "Police Modernization",
        description: "Digital policing with secured field devices and command visibility.",
        iconName: "Landmark",
        imageUrl: "https://source.unsplash.com/1200x800/?india,police,city",
        accentColor: "#0F766E",
    },
    {
        id: "ind-excise",
        name: "Excise",
        description: "Compliance-led monitoring for transparent revenue and enforcement workflows.",
        iconName: "Factory",
        imageUrl: "https://source.unsplash.com/1200x800/?india,government,compliance",
        accentColor: "#B45309",
    },
    {
        id: "ind-women-child",
        name: "Women and Child Care",
        description: "Secure welfare systems enabling better care delivery and outcomes.",
        iconName: "HeartPulse",
        imageUrl: "https://source.unsplash.com/1200x800/?india,women,children,community",
        accentColor: "#DB2777",
    },
    {
        id: "ind-industry-6",
        name: "Industry 6.0",
        description: "Human-centric automation powered by AI, IoT, and resilient systems.",
        iconName: "Factory",
        imageUrl: "https://source.unsplash.com/1200x800/?india,smart-factory,automation",
        accentColor: "#7C3AED",
    },
    {
        id: "ind-banking",
        name: "Banking",
        description: "Protected transactions and fraud-aware operations for digital finance.",
        iconName: "Landmark",
        imageUrl: "https://source.unsplash.com/1200x800/?india,banking,finance",
        accentColor: "#047857",
    },
    {
        id: "ind-logistics",
        name: "Logistic and Transportation",
        description: "Unified visibility across fleets, hubs, and nationwide movement.",
        iconName: "Truck",
        imageUrl: "https://source.unsplash.com/1200x800/?india,logistics,transportation",
        accentColor: "#DC2626",
    },
];
