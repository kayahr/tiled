/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Wang tile. */
export interface WangTile {
    /** Local ID of the tile. */
    tileid: number;

    /** Array of Wang color indices. */
    wangid: [ number, number, number, number, number, number, number, number ];
}
