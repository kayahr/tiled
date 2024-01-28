/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Tile animation frame. */
export interface Frame {
    /** Frame duration in milliseconds. */
    duration: number;

    /** Local tile ID representing this frame. */
    tileid: number;
}
