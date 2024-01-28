import { Encoding } from "../../main/layer/Encoding";

describe("Encoding", () => {
    it("has 2 values", () => {
        expect(Object.keys(Encoding).length).toBe(2);
    });
    it("BASE64 has value 'base64'", () => {
        expect(Encoding.BASE64).toBe("base64");
    });
    it("CSV has value 'csv'", () => {
        expect(Encoding.CSV).toBe("csv");
    });
});
