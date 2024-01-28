import { TileRenderSize } from "../../main/tileset/TileRenderSize";

describe("TileRenderSize", () => {
    it("has 2 values", () => {
        expect(Object.keys(TileRenderSize).length).toBe(2);
    });
    it("GRID has value 'grid'", () => {
        expect(TileRenderSize.GRID).toBe("grid");
    });
    it("TILE has value 'tile'", () => {
        expect(TileRenderSize.TILE).toBe("tile");
    });
});
