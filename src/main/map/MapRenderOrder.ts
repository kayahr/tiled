/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Map render order. */
export enum MapRenderOrder {
    /** Default right-down render order. */
    RIGHT_DOWN = "right-down",

    /** Right-up render order. */
    RIGHT_UP = "right-up",

    /** Left-down render order. */
    LEFT_DOWN = "left-down",

    /** Left-up render order. Currently only supported for orthogonal maps. */
    LEFT_UP = "left-up"
}
