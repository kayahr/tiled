/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { EmbeddedTileset } from "./EmbeddedTileset";
import { TilesetRef } from "./TilesetRef";

/** Union of all tileset types. */
export type AnyTileset = EmbeddedTileset | TilesetRef;

/**
 * Checks if given tileset is an embedded tileset.
 *
 * @params tileset - The tileset to check.
 * @returns True if tileset is an embedded tileset, false if not.
 */
export function isEmbeddedTileset(tileset: AnyTileset): tileset is EmbeddedTileset {
    return (tileset as TilesetRef).source == null;
}

/**
 * Checks if given tileset is a external tileset reference.
 *
 * @params tileset - The tileset to check.
 * @returns True if tileset is an external tileset reference, false if not.
 */
export function isTilesetRef(tileset: AnyTileset): tileset is TilesetRef {
    return (tileset as TilesetRef).source != null;
}
