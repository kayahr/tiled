/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { BaseTileset } from "./BaseTileset";

/** External tileset reference. */
export interface TilesetRef extends BaseTileset {
    /** The external file that contains this tilesets data. */
    source: string;
}
