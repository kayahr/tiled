/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { ObjectGroup } from "../layer/ObjectGroup";
import { AnyProperty } from "../property/AnyProperty";
import { Frame } from "./Frame";

/** Tile definition. */
export interface Tile {
    /** Array of frames if tile is animated. */
    animation?: Frame[];

    /** Local ID of the tile. */
    id: number;

    /** Image representing this tile. Optional, used for image collection tilesets. */
    image?: string;

    /** Height of the tile image in pixels. Only set when {@link image} is set. */
    imageheight?: number;

    /** Width of the tile image in pixels. Only set when {@link image} is set. */
    imagewidth?: number;

    /** The X position of the sub-rectangle representing this tile. Default is 0. */
    x?: number;

    /** The Y position of the sub-rectangle representing this tile. Default is 0. */
    y?: number;

    /** The width of the sub-rectangle representing this tile. Default is the image width. */
    width?: number;

    /** The height of the sub-rectangle representing this tile. Default is the image height. */
    height?: number;

    /** Optional object group layer when collision shapes are specified. */
    objectgroup?: ObjectGroup;

    /** Percentage chance this tile is chosen when competing with others in the editor. Default is 1. */
    probability?: number;

    /** Optional list of custom tile properties. */
    properties?: AnyProperty[];

    /** Optional class of the tile (was saved as `class` in Tiled v1.9). */
    type?: string;
}
