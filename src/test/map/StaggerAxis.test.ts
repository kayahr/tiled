import { StaggerAxis } from "../../main/map/StaggerAxis";

describe("StaggerAxis", () => {
    it("has 2 values", () => {
        expect(Object.keys(StaggerAxis).length).toBe(2);
    });
    it("X has value 'x'", () => {
        expect(StaggerAxis.X).toBe("x");
    });
    it("Y has value 'y'", () => {
        expect(StaggerAxis.Y).toBe("y");
    });
});
