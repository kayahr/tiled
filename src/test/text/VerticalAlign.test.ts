import { VerticalAlign } from "../../main/text/VerticalAlign";

describe("VerticalAlign", () => {
    it("has 3 values", () => {
        expect(Object.keys(VerticalAlign).length).toBe(3);
    });
    it("BOTTOM has value 'bottom'", () => {
        expect(VerticalAlign.BOTTOM).toBe("bottom");
    });
    it("CENTER has value 'center'", () => {
        expect(VerticalAlign.CENTER).toBe("center");
    });
    it("TOP has value 'top'", () => {
        expect(VerticalAlign.TOP).toBe("top");
    });
});
