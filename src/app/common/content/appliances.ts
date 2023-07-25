//kitchen

import { Appliance } from "../interfaces/appliance";

export const appliances: Appliance[] = [
    {
        name: "Toaster",
        wattage: 1200,
        averageWattage: 1200,
        averageUsageTime: 0.2,
        usageTime: 0.2,
        quantity: 1,
        applianceGroup: 'kitchen',
        id: "1"
    },
    {
        name: "Microwave",
        wattage: 1000,
        averageWattage: 1000,
        averageUsageTime: 0.3,
        usageTime: 0.3,
        quantity: 1,
        applianceGroup: 'kitchen',
        id: "2"
    },
    {
        name: "Fridge",
        description: '20 cu. ft.',
        wattage: 353,
        averageWattage: 353,
        averageUsageTime: 4,
        usageTime: 4,
        quantity: 1,
        applianceGroup: 'kitchen',
        id: "3"
    },
    {
        name: "Freezer",
        description: '15 cu. ft.',
        wattage: 270,
        averageWattage: 270,
        averageUsageTime: 0.3,
        usageTime: 0.3,
        quantity: 1,
        applianceGroup: 'kitchen',
        id: "4"
    },
    {
        name: "Coffee machine",
        wattage: 1000,
        averageWattage: 1000,
        averageUsageTime: 0.2,
        usageTime: 0.2,
        quantity: 1,
        applianceGroup: 'kitchen',
        id: "5"
    },


]