/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Color } from "../common/Color";
import { AnyProperty } from "../property/AnyProperty";

/** Map layer. */
export interface Layer<T extends string = string> {
    /** The class of the layer. */
    class?: string;

    /** Incremental ID. Unique across all layers. */
    id: number;

    /** Whether layer is locked in the editor. Default is false. */
    locked?: boolean;

    /** The layer's name. */
    name: string;

    /** Optional horizontal layer offset in pixels. Default is 0. */
    offsetx?: number;

    /** Optional vertical layer offset in pixels. Default is 0.  */
    offsety?: number;

    /** Layer opacity between 0 and 1. */
    opacity: number;

    /** Horizontal parallax factor. Default is 1. */
    parallaxx?: number;

    /** Vertical parallax factor. Default is 1. */
    parallaxy?: number;

    /** Array of properties. Empty if not set. */
    properties?: AnyProperty[];

    /** Optional tint color that is multiplied with any graphics drawn by this layer or any child layer. */
    tintcolor?: Color;

    /** The layer type. */
    type: T;

    /** Whether layer is shown or hidden in editor. */
    visible: boolean;

    /** Horizontal layer offset in tiles. Always 0. */
    x: number;

    /** Vertical layer offset in tiles. Always 0. */
    y: number;
}
