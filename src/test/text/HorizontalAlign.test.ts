import { HorizontalAlign } from "../../main/text/HorizontalAlign";

describe("HorizontalAlign", () => {
    it("has 4 values", () => {
        expect(Object.keys(HorizontalAlign).length).toBe(4);
    });
    it("CENTER has value 'center'", () => {
        expect(HorizontalAlign.CENTER).toBe("center");
    });
    it("JUSTIFY has value 'justify'", () => {
        expect(HorizontalAlign.JUSTIFY).toBe("justify");
    });
    it("LEFT has value 'left'", () => {
        expect(HorizontalAlign.LEFT).toBe("left");
    });
    it("RIGHT has value 'right'", () => {
        expect(HorizontalAlign.RIGHT).toBe("right");
    });
});
