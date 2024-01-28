import { WangSetType } from "../../main/wangset/WangSetType";

describe("WangSetType", () => {
    it("has 3 values", () => {
        expect(Object.keys(WangSetType).length).toBe(3);
    });
    it("CORNER has value 'corner'", () => {
        expect(WangSetType.CORNER).toBe("corner");
    });
    it("EDGE has value 'edge'", () => {
        expect(WangSetType.EDGE).toBe("edge");
    });
    it("MIXED has value 'mixed'", () => {
        expect(WangSetType.MIXED).toBe("mixed");
    });
});
