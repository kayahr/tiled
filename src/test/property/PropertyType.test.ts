import { PropertyType } from "../../main/property/PropertyType";

describe("PropertyType", () => {
    it("has 8 values", () => {
        expect(Object.keys(PropertyType).length).toBe(8);
    });
    it("BOOL has value 'bool'", () => {
        expect(PropertyType.BOOL).toBe("bool");
    });
    it("CLASS has value 'class'", () => {
        expect(PropertyType.CLASS).toBe("class");
    });
    it("COLOR has value 'color'", () => {
        expect(PropertyType.COLOR).toBe("color");
    });
    it("FILE has value 'file'", () => {
        expect(PropertyType.FILE).toBe("file");
    });
    it("FLOAT has value 'float'", () => {
        expect(PropertyType.FLOAT).toBe("float");
    });
    it("INT has value 'int'", () => {
        expect(PropertyType.INT).toBe("int");
    });
    it("OBJECT has value 'object'", () => {
        expect(PropertyType.OBJECT).toBe("object");
    });
    it("STRING has value 'string'", () => {
        expect(PropertyType.STRING).toBe("string");
    });
});
