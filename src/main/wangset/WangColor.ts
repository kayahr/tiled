/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Color } from "../common/Color";
import { AnyProperty } from "../property/AnyProperty";

/** Wang color. */
export interface WangColor {
    /** Optional class of the Wang color. */
    class?: string;

    /** The color. */
    color: Color;

    /** The name. */
    name: string;

    /** Probability used when randomizing. */
    probability: number;

    /** Optional custom properties. */
    properties?: AnyProperty[];

    /** Local ID of tile representing the Wang color. */
    tile: number;
}
