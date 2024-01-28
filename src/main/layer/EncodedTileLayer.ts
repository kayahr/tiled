/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Encoding } from "./Encoding";
import { TileLayer } from "./TileLayer";

/** Tile layer. */
export interface EncodedTileLayer extends TileLayer<Exclude<Encoding, Encoding.CSV>> {
    encoding: Exclude<Encoding, Encoding.CSV>;
}
