import { Appliance } from "./appliance";

export interface BuildSpecs {

    buildType: "van" | "cabin" | null;
    setupType: "simple" | "custom" | null;
    appliances: Appliance[]

}
