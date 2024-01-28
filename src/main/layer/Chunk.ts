/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Used to store the tile layer data for infinite maps. */
export interface Chunk<Data extends string | number[] = string | number[]> {
    /** Array of unsigned integers (GIDs) or base64-encoded data. */
    data: Data;

    /** Height in tiles. */
    height: number;

    /** Width in tiles. */
    width: number;

    /** X coordinate in tiles. */
    x: number;

    /** Y coordinate in tiles. */
    y: number;
}
