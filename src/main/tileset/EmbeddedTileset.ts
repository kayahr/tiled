/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { BaseTileset } from "./BaseTileset";
import { Tileset } from "./Tileset";

/** Embedded tileset. */
export interface EmbeddedTileset extends Tileset, BaseTileset {}
