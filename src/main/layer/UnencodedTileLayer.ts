/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Encoding } from "./Encoding";
import { TileLayer } from "./TileLayer";

/** Tile layer. */
export interface UnencodedTileLayer extends TileLayer<Encoding.CSV> {}
