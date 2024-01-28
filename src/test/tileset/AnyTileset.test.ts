import { AnyTileset, isEmbeddedTileset, isTilesetRef } from "../../main/tileset/AnyTileset";
import { EmbeddedTileset } from "../../main/tileset/EmbeddedTileset";
import { TilesetRef } from "../../main/tileset/TilesetRef";

const embeddedTileset: EmbeddedTileset = {
    firstgid: 1,
    columns: 1,
    image: "tileset.png",
    imageheight: 100,
    imagewidth: 100,
    margin: 0,
    name: "",
    spacing: 0,
    tilecount: 10,
    tileheight: 50,
    tilewidth: 50
};

const tilesetRef: TilesetRef = {
    firstgid: 1,
    source: "test.tileset.json"
};

describe("isEmbeddedTileset", () => {
    it("returns true for an embedded tileset", () => {
        const tileset = embeddedTileset as AnyTileset;
        expect(isEmbeddedTileset(tileset)).toBe(true);
        if (isEmbeddedTileset(tileset)) {
            // Check if function works as type guard during compile-time
            expect(tileset.image).toBeDefined();
        }
    });
    it("returns false for an external tileset reference", () => {
        const tileset = tilesetRef as AnyTileset;
        expect(isEmbeddedTileset(tileset)).toBe(false);
    });
});

describe("isTilesetRef", () => {
    it("returns true for an external tileset reference", () => {
        const tileset = tilesetRef as AnyTileset;
        expect(isTilesetRef(tileset)).toBe(true);
        if (isTilesetRef(tileset)) {
            // Check if function works as type guard during compile-time
            expect(tileset.source).toBeDefined();
        }
    });
    it("returns false for an embedded tileset", () => {
        const tileset = embeddedTileset as AnyTileset;
        expect(isTilesetRef(tileset)).toBe(false);
    });
});
