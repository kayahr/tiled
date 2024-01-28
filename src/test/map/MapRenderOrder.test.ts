import { MapRenderOrder } from "../../main/map/MapRenderOrder";

describe("MapRenderOrder", () => {
    it("has 4 values", () => {
        expect(Object.keys(MapRenderOrder).length).toBe(4);
    });
    it("RIGHT_DOWN has value 'right-down'", () => {
        expect(MapRenderOrder.RIGHT_DOWN).toBe("right-down");
    });
    it("RIGHT_UP has value 'right-up'", () => {
        expect(MapRenderOrder.RIGHT_UP).toBe("right-up");
    });
    it("LEFT_DOWN has value 'left-down'", () => {
        expect(MapRenderOrder.LEFT_DOWN).toBe("left-down");
    });
    it("LEFT_UP has value 'left-up'", () => {
        expect(MapRenderOrder.LEFT_UP).toBe("left-up");
    });
});
