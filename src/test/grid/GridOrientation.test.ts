import { GridOrientation } from "../../main/grid/GridOrientation";

describe("GridOrientation", () => {
    it("has 2 values", () => {
        expect(Object.keys(GridOrientation).length).toBe(2);
    });
    it("ISOMETRIC has value 'isometric'", () => {
        expect(GridOrientation.ISOMETRIC).toBe("isometric");
    });
    it("ORTHOGONAL has value 'orthogonal'", () => {
        expect(GridOrientation.ORTHOGONAL).toBe("orthogonal");
    });
});
