import { FillMode } from "../../main/tileset/FillMode";

describe("FillMode", () => {
    it("has 2 values", () => {
        expect(Object.keys(FillMode).length).toBe(2);
    });
    it("PRESERVE_ASPECT_FIT has value 'preserve-aspect-fit'", () => {
        expect(FillMode.PRESERVE_ASPECT_FIT).toBe("preserve-aspect-fit");
    });
    it("STRETCH has value 'stretch'", () => {
        expect(FillMode.STRETCH).toBe("stretch");
    });
});
