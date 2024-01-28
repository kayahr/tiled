/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { GridOrientation } from "./GridOrientation";

/** Common grid properties for tiles in a tileset. */
export interface Grid {
    /** The cell height of the tile grid. */
    height: number;

    /** The grid orientation. */
    orientation: GridOrientation;

    /** The cell width of the tile grid. */
    width: number;
}
