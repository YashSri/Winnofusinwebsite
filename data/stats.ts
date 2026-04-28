export interface Stat {
    id: string;
    value: number;
    suffix: string;
    label: string;
}

export const stats: Stat[] = [
    {
        id: "stat-customers",
        value: 100,
        suffix: "+",
        label: "Happy Customers",
    },
    {
        id: "stat-devices",
        value: 600,
        suffix: "k+",
        label: "Devices Managed",
    },
    {
        id: "stat-locations",
        value: 50,
        suffix: "",
        label: "Prime Locations",
    },
    {
        id: "stat-patents",
        value: 12,
        suffix: "",
        label: "Patents Pending",
    },
    {
        id: "stat-research",
        value: 2,
        suffix: "",
        label: "Research Projects",
    },
];
