/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface Transformation {
    /** Tiles can be flipped horizontally. */
    hflip: boolean;

    /** Tiles can be flipped vertically */
    vflip: boolean;

    /** Tiles can be rotated in 90-degree increments. */
    rotate: boolean;

    /** Whether untransformed tiles remain preferred, otherwise transformed tiles are used to produce more variations. */
    preferuntransformed: boolean;
}
