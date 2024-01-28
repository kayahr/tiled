import { readFile } from "node:fs/promises";

import { Compression } from "../../main";
import { isTileLayer, isUnencodedTileLayer } from "../../main/layer/AnyLayer";
import { decodeTileLayer } from "../../main/layer/decodeTileLayer";
import { Encoding } from "../../main/layer/Encoding";
import { Map } from "../../main/map/Map";

describe("decodeTileLayer", () => {
    for (const encoding of Object.values(Encoding)) {
        const compressions = encoding === Encoding.CSV ? [ Compression.NONE ] : Object.values(Compression);
        for (const compression of compressions) {
            const type = `${encoding}${compression === Compression.NONE ? "" : "-"}${compression}`;
            it(`can decode '${type}' encoded tile layer data`, async () => {
                const map = JSON.parse(await readFile(`src/test/data/${type}.map.json`, { encoding: "utf-8" })) as Map;
                const tileLayer = map.layers.find(isTileLayer);
                expect(tileLayer).not.toBe(null);
                if (tileLayer != null) {
                    const decodedTileLayer = decodeTileLayer(tileLayer);
                    expect(isUnencodedTileLayer(decodedTileLayer)).toBe(true);
                    expect(decodedTileLayer.data).toEqual([ 1, 2, 3, 4 ]);
                }
            });
            it(`can decode '${type}' encoded chunk data`, async () => {
                const map = JSON.parse(await readFile(`src/test/data/infinite-${type}.map.json`, { encoding: "utf-8" })) as Map;
                const tileLayer = map.layers.find(isTileLayer);
                expect(tileLayer).not.toBe(null);
                if (tileLayer != null) {
                    const decodedTileLayer = decodeTileLayer(tileLayer);
                    expect(isUnencodedTileLayer(decodedTileLayer)).toBe(true);
                    expect(decodedTileLayer.chunks?.[0]?.data).toEqual([ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4 ]);
                    expect(decodedTileLayer.chunks?.[1]?.data).toEqual([ 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4 ]);
                }
            });
        }
    }
});
