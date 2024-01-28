/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { EncodedTileLayer } from "./EncodedTileLayer";
import { Encoding } from "./Encoding";
import { type Group } from "./Group";
import { type ImageLayer } from "./ImageLayer";
import { type ObjectGroup } from "./ObjectGroup";
import { UnencodedTileLayer } from "./UnencodedTileLayer";

/** Union of all tile layer types. */
export type AnyTileLayer = EncodedTileLayer | UnencodedTileLayer;

/** Union of all layer types. */
export type AnyLayer = AnyTileLayer | ObjectGroup | ImageLayer | Group;

/**
 * Checks if given layer is a tile layer.
 *
 * @param layer - The layer to check.
 * @returns True if layer is a tile layer, false if not.
 */
export function isTileLayer(layer: AnyLayer): layer is EncodedTileLayer | UnencodedTileLayer {
    return layer.type === "tilelayer";
}

/**
 * Checks if given layer is an encoded tile layer.
 *
 * @param layer - The layer to check.
 * @returns True if layer is an encoded tile layer, false if not.
 */
export function isEncodedTileLayer(layer: AnyLayer): layer is EncodedTileLayer {
    return layer.type === "tilelayer" && layer.encoding !== Encoding.CSV;
}

/**
 * Checks if given layer is an encoded tile layer.
 *
 * @param layer - The layer to check.
 * @returns True if layer is an unencoded tile layer, false if not.
 */
export function isUnencodedTileLayer(layer: AnyLayer): layer is UnencodedTileLayer {
    return layer.type === "tilelayer" && (layer.encoding == null || layer.encoding === Encoding.CSV);
}

/**
 * Checks if given layer is an object group.
 *
 * @param layer - The layer to check.
 * @returns True if layer is an object group, false if not.
 */
export function isObjectGroup(layer: AnyLayer): layer is ObjectGroup {
    return layer.type === "objectgroup";
}

/**
 * Checks if given layer is an image layer.
 *
 * @param layer - The layer to check.
 * @returns True if layer is an image layer, false if not.
 */
export function isImageLayer(layer: AnyLayer): layer is ImageLayer {
    return layer.type === "imagelayer";
}

/**
 * Checks if given layer is a group.
 *
 * @param layer - The layer to check.
 * @returns True if layer is a group, false if not.
 */
export function isGroup(layer: AnyLayer): layer is Group {
    return layer.type === "group";
}
