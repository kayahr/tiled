/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { toByteArray } from "base64-js";
import { decompress } from "fzstd";
import { inflate, ungzip } from "pako";

import { AnyTileLayer, isUnencodedTileLayer } from "./AnyLayer";
import { Compression } from "./Compression";
import { Encoding } from "./Encoding";
import { UnencodedTileLayer } from "./UnencodedTileLayer";

// Decoder implementations
const decoders: Record<Exclude<Encoding, Encoding.CSV>, (data: string) => Uint8Array> = {
    [ Encoding.BASE64 ]: toByteArray
};

// Decompressor implementations
const decompressors: Record<Compression, (data: Uint8Array) => Uint8Array> = {
    [ Compression.NONE ]: (data: Uint8Array) => data,
    [ Compression.ZLIB ]: inflate,
    [ Compression.GZIP ]: ungzip,
    [ Compression.ZSTD ]: decompress
};

/**
 * Decodes the given tile layer (if necessary) and returns the decoded tile layer.
 *
 * @param layer - The tile layer to decode.
 * @returns The decoded tile layer or the original layer if it was not encoded.
 */
export function decodeTileLayer(layer: AnyTileLayer): UnencodedTileLayer {
    if (isUnencodedTileLayer(layer)) {
        // Nothing to decode
        return layer;
    }

    const decode = decoders[layer.encoding];
    const decompress = decompressors[layer.compression ?? Compression.NONE];
    const toArray = (data: Uint8Array): number[] => Array.from(new Uint32Array(data.buffer, data.byteOffset));

    return {
        ...layer,
        compression: Compression.NONE,
        encoding: Encoding.CSV,
        data: layer.data != null ? toArray(decompress(decode(layer.data))) : undefined,
        chunks: layer.chunks?.map(chunk => ({ ...chunk, data: toArray(decompress(decode(chunk.data))) }))
    };
}
