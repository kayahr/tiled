/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Tileset } from "./Tileset";

/** Tileset in an external JSON file. */
export interface ExternalTileset extends Tileset {
    /** The Tiled version used to save the file. */
    tiledversion: string;

    /** Always "tileset" */
    type: "tileset";

    /** The JSON format version. */
    version: string;
}
