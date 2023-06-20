export interface Appliance {
    name: string;
    description? : string;
    id?: string;
    icon?: any;

    averageWattage?: number;
    wattage: number;
    averageUsageTime?: number; //hours
    usageTime: number; //hours

    quantity: number;

    applianceGroup?: "kitchen" | "bathroom" | "entertainment" | "bedroom" | "other"

}
