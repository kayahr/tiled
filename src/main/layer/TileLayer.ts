/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Chunk } from "./Chunk";
import { type Compression } from "./Compression";
import { type Encoding, EncodingDataType } from "./Encoding";
import { type Layer } from "./Layer";

/** Tile layer. */
export interface TileLayer<E extends Encoding = Encoding> extends Layer<"tilelayer"> {
    /** Array of chunks. Only set for tile layers in infinite maps. */
    chunks?: Array<Chunk<EncodingDataType<E>>>;

    /** Compression method for base64 encoded data and chunks. Only set when base64 encoding is set. */
    compression?: Compression;

    /** Array of unsigned integers (GIDs) or base64-encoded data. */
    data?: EncodingDataType<E>;

    /**
     * The data encoding. When set to CSV or undefined then {@link data} and data in {@link chunks} are unsigned integers. When set to BASE64 then
     * data is base64 encoded and optionally compressed by the compression method defined in {@link compression}.
     */
    encoding?: E;

    /** Row count. Same as map height for fixed-size maps. */
    height: number;

    /** X coordinate where layer content stats. Only set to infinite maps. */
    startx?: number;

    /** Y coordinate where layer content stats. Only set to infinite maps. */
    starty?: number;

    /** Column count. Same as map width for fixed-size maps.  */
    width: number;
}
