import { Appliance } from "./appliance";

export interface BuildSpecs {

    buildType: "van" | "cabin";
    setupType: "simple" | "custom";
    appliances: Appliance[]

}
