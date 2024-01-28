import { DrawOrder } from "../../main/layer/DrawOrder";

describe("DrawOrder", () => {
    it("has 2 values", () => {
        expect(Object.keys(DrawOrder).length).toBe(2);
    });
    it("INDEX has value 'index'", () => {
        expect(DrawOrder.INDEX).toBe("index");
    });
    it("TOPDOWN has value 'topdown'", () => {
        expect(DrawOrder.TOPDOWN).toBe("topdown");
    });
});
