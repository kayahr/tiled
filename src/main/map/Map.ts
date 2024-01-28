/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Color } from "../common/Color";
import { type AnyLayer } from "../layer/AnyLayer";
import { AnyProperty } from "../property/AnyProperty";
import { AnyTileset } from "../tileset/AnyTileset";
import { type MapOrientation } from "./MapOrientation";
import { type MapRenderOrder } from "./MapRenderOrder";
import { type StaggerAxis } from "./StaggerAxis";
import { type StaggerIndex } from "./StaggerIndex";

/** Tiled map. This is the root type in a Tiled JSON file. */
export interface Map {
    /** Optional background color. */
    backgroundcolor?: Color;

    /** Optional class of the map. */
    class?: string;

    /** The compression level to use for tile layer data. Defaults to -1, which means to use the algorithm default. */
    compressionlevel: number;

    /** Irrelevant editor-specific settings. */
    editorsettings?: unknown;

    /** Number of tile rows. */
    height: number;

    /** Length of the side of a hex tile in pixels. Only set for hexagonal maps. */
    hexsidelength?: number;

    /** Whether the map has infinite dimensions. */
    infinite: boolean;

    /** Array of layers. */
    layers: AnyLayer[];

    /** Auto-increments for each layer. */
    nextlayerid: number;

    /** Auto-increments for each placed object. */
    nextobjectid: number;

    /** The map orientation. */
    orientation: MapOrientation;

    /** X coordinate of the parallax origin in pixels. 0 if not set. */
    parallaxoriginx?: number;

    /** Y coordinate of the parallax origin in pixels. 0 if not set. */
    parallaxoriginy?: number;

    /** Array of properties. Empty if not set. */
    properties?: AnyProperty[];

    /** The map render order. */
    renderorder: MapRenderOrder;

    /** The stagger axis. Only set for staggered / hexagonal maps. */
    staggeraxis?: StaggerAxis;

    /** The stagger index. Only set for staggered / hexagonal maps. */
    staggerindex?: StaggerIndex;

    /** The Tiled version used to save the file. */
    tiledversion: string;

    /** Map grid height. */
    tileheight: number;

    /** Array of tilesets. Empty if not set. */
    tilesets?: AnyTileset[];

    /** Map grid width. */
    tilewidth: number;

    /** Always "map". */
    type: "map";

    /** The JSON format version. */
    version: string;

    /** Number of tile columns. */
    width: number;
}
