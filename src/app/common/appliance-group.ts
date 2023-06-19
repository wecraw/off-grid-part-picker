import { Appliance } from "./appliance";

export interface ApplianceGroup {
    name: string;
    id?: string;
    icon?: any;

    appliances: Appliance[]
    
}
