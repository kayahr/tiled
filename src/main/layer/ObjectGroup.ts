/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type MapObject } from "../object/MapObject";
import { type DrawOrder } from "./DrawOrder";
import { type Layer } from "./Layer";

/** Object group. */
export interface ObjectGroup extends Layer<"objectgroup"> {
    /** The object group draw order */
    draworder: DrawOrder;

    /** Array of map objects. */
    objects: MapObject[];
}
