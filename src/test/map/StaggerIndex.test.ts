import { StaggerIndex } from "../../main/map/StaggerIndex";

describe("StaggerIndex", () => {
    it("has 2 values", () => {
        expect(Object.keys(StaggerIndex).length).toBe(2);
    });
    it("ODD has value 'odd'", () => {
        expect(StaggerIndex.ODD).toBe("odd");
    });
    it("EVEN has value 'even'", () => {
        expect(StaggerIndex.EVEN).toBe("even");
    });
});
