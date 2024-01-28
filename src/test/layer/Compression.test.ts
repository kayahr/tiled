import { Compression } from "../../main/layer/Compression";

describe("Compression", () => {
    it("has 4 values", () => {
        expect(Object.keys(Compression).length).toBe(4);
    });
    it("NONE has value ''", () => {
        expect(Compression.NONE).toBe("");
    });
    it("GZIP has value 'gzip'", () => {
        expect(Compression.GZIP).toBe("gzip");
    });
    it("ZLIB has value 'zlib'", () => {
        expect(Compression.ZLIB).toBe("zlib");
    });
    it("ZSTD has value 'zstd'", () => {
        expect(Compression.ZSTD).toBe("zstd");
    });
});
