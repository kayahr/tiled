describe("map.json", () => {
    it("provides typings for *.map.json files", async () => {
        const map = (await import("../../src/test/data/default.map.json")).default;
        expect(map.layers?.length).toBeGreaterThan(0);
        expect(map.type).toBe("map");
    });
});

describe("tileset.json", () => {
    it("provides typings for *.tileset.json files", async () => {
        const tileset = (await import("../../src/test/data/default.tileset.json")).default;
        expect(tileset.image).toBeDefined();
        expect(tileset.type).toBe("tileset");
    });
});

describe("template.json", () => {
    it("provides typings for *.template.json files", async () => {
        const template = (await import("../../src/test/data/rect.template.json")).default;
        expect(template.object).toBeDefined();
        expect(template.type).toBe("template");
    });
});
