/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { WangColor } from "./WangColor";
import { WangSetType } from "./WangSetType";
import { WangTile } from "./WangTile";

/** Wang set. */
export interface WangSet {
    /** Optional class of the Wang set. */
    class?: string;

    /** Array of Wang colors. */
    colors: WangColor[];

    /** Name of the Wang set. */
    name: string;

    /** Local ID of tile representing the Wang set. */
    tile: number;

    /** The type of Wang set. */
    type: WangSetType;

    /** Array of Wang tiles. */
    wangtiles: WangTile[];
}
