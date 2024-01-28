import { ObjectAlignment } from "../../main/tileset/ObjectAlignment";

describe("ObjectAlignment", () => {
    it("has 10 values", () => {
        expect(Object.keys(ObjectAlignment).length).toBe(10);
    });
    it("BOTTOM has value 'bottom'", () => {
        expect(ObjectAlignment.BOTTOM).toBe("bottom");
    });
    it("BOTTOMLEFT has value 'bottomleft'", () => {
        expect(ObjectAlignment.BOTTOMLEFT).toBe("bottomleft");
    });
    it("BOTTOMRIGHT has value 'bottomright'", () => {
        expect(ObjectAlignment.BOTTOMRIGHT).toBe("bottomright");
    });
    it("CENTER has value 'center'", () => {
        expect(ObjectAlignment.CENTER).toBe("center");
    });
    it("LEFT has value 'left'", () => {
        expect(ObjectAlignment.LEFT).toBe("left");
    });
    it("RIGHT has value 'right'", () => {
        expect(ObjectAlignment.RIGHT).toBe("right");
    });
    it("TOP has value 'top'", () => {
        expect(ObjectAlignment.TOP).toBe("top");
    });
    it("TOPLEFT has value 'topleft'", () => {
        expect(ObjectAlignment.TOPLEFT).toBe("topleft");
    });
    it("TOPRIGHT has value 'topright'", () => {
        expect(ObjectAlignment.TOPRIGHT).toBe("topright");
    });
    it("UNSPECIFIED has value 'unspecified'", () => {
        expect(ObjectAlignment.UNSPECIFIED).toBe("unspecified");
    });
});
