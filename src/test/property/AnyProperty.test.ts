import { AnyProperty } from "../../main/property/AnyProperty";
import { ColorProperty } from "../../main/property/ColorProperty";
import { PropertyType } from "../../main/property/PropertyType";

describe("AnyProperty", () => {
    it("can be distinguished by checking type property", () => {
        const colorProperty: ColorProperty = { name: "test", type: PropertyType.COLOR, value: "#123456" };
        const property = colorProperty as AnyProperty;
        if (property.type === PropertyType.COLOR || property.type === PropertyType.STRING || property.type === PropertyType.CLASS
                || property.type === PropertyType.FILE) {
            expect(property.value.split).toBeDefined();
        } else if (property.type === PropertyType.FLOAT || property.type === PropertyType.INT || property.type === PropertyType.OBJECT) {
            expect(property.value.toFixed).toBeDefined();
        } else if (property.type === PropertyType.BOOL) {
            expect(!property.value).toBeDefined();
        }
    });
});
