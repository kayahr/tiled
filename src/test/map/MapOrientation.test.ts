import { MapOrientation } from "../../main/map/MapOrientation";

describe("MapOrientation", () => {
    it("has 4 values", () => {
        expect(Object.keys(MapOrientation).length).toBe(4);
    });
    it("ORTHOGONAL has value 'orthogonal'", () => {
        expect(MapOrientation.ORTHOGONAL).toBe("orthogonal");
    });
    it("ISOMETRIC has value 'isometric'", () => {
        expect(MapOrientation.ISOMETRIC).toBe("isometric");
    });
    it("STAGGERED has value 'staggered'", () => {
        expect(MapOrientation.STAGGERED).toBe("staggered");
    });
    it("HEXAGONAL has value 'hexagonal'", () => {
        expect(MapOrientation.HEXAGONAL).toBe("hexagonal");
    });
});
