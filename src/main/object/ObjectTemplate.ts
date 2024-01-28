/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { TilesetRef } from "../tileset/TilesetRef";
import { BaseMapObject } from "./BaseMapObject";

/** External map object template. */
export interface ObjectTemplate {
    type: "template";

    /** Optional external tileset used byt the template. */
    tileset?: TilesetRef;

    /** The object instantiated by this template. */
    object: BaseMapObject;
}
