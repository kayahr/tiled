/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Point } from "../common/Point";
import { AnyProperty } from "../property/AnyProperty";
import { Text } from "../text/Text";

/** Base data for map objects. */
export interface BaseMapObject {
    /** True if object is an ellipse. False or undefined if not. */
    ellipse?: boolean;

    /** Global tile ID, only if object represents a tile. */
    gid?: number;

    /** Height in pixels. Always 0 for points. Default is 0. */
    height?: number;

    /** Incremental ID, unique across all objects. */
    id: number;

    /** The name assigned to this object. Default is empty. */
    name?: string;

    /** True if object is a point. False or undefined if not. */
    point?: boolean;

    /** Array of points if object is a polygon. */
    polygon?: Point[];

    /** Array of points if object is a polyline. */
    polyline?: Point[];

    /** Array of object properties. */
    properties?: AnyProperty[];

    /** Rotation angle in degrees clockwise. Default is 0. */
    rotation?: number;

    /** Reference to a template file, in case object is a template instance. */
    template?: string;

    /** Text data if object is a text. */
    text?: Text;

    /** The class of the object. Was saved as `class` in older Tiled v1.9. Default is empty. */
    type?: string;

    /** Whether object is shown in editor. Default is true. */
    visible?: boolean;

    /** Width in pixels. Always 0 for points. Default is 0. */
    width?: number;
}
