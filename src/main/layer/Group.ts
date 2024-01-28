/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { AnyLayer } from "./AnyLayer";
import { type Layer } from "./Layer";

/** Group layer. */
export interface Group extends Layer<"group"> {
    /** Array of layers. */
    layers: AnyLayer[];
}
