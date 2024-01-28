/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { BaseMapObject } from "./BaseMapObject";

/** A map object. */
export interface MapObject extends BaseMapObject {
    /** X coordinate in pixels. */
    x: number;

    /** Y coordinate in pixels. */
    y: number;
}
