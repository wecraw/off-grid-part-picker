export interface Appliance {
    name: string;
    id?: string;
    icon?: any;

    averageWattage?: number;
    wattage: number;
    averageUsageTime?: number;
    usageTime: number;

    quantity: number;

    applianceGroup?: "kitchen" | "bathroom" | "entertainment" | "bedroom" | "other"

}
