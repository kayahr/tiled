/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Color } from "../common/Color";
import { Point } from "../common/Point";
import { Grid } from "../grid/Grid";
import { AnyProperty } from "../property/AnyProperty";
import { Tile } from "../tile/Tile";
import { WangSet } from "../wangset/WangSet";
import { FillMode } from "./FillMode";
import { ObjectAlignment } from "./ObjectAlignment";
import { TileRenderSize } from "./TileRenderSize";
import { Transformation } from "./Transformation";

/** Map tileset. */
export interface Tileset {
    /** Optional background color. */
    backgroundcolor?: Color;

    /** Optional class of the tileset. */
    class?: string;

    /** The number of tile columns. */
    columns: number;

    /** The fill mode to use when rendering tiles from this tileset. Default is STRETCH. */
    fillmode?: FillMode;

    /** Optional common grid settings for tiles in this tileset. Default is 32x32 Orthogonal. */
    grid?: Grid;

    /** The image used for tiles in this set. */
    image: string;

    /** Height of the source image in pixels. */
    imageheight: number;

    /** Width of the source image in pixels. */
    imagewidth: number;

    /** Buffer between image edge and first tile in pixels. */
    margin: number;

    /** Name given to this tileset. */
    name: string;

    /** Alignment to use for tile objects. Default is UNSPECIFIED. */
    objectalignment?: ObjectAlignment;

    /** Array of custom properties. */
    properties?: AnyProperty[];

    /** Spacing between adjacent tiles in image (pixels). */
    spacing: number;

    /** The number of tiles in this tileset. */
    tilecount: number;

    /** Maximum height of tiles in this set. */
    tileheight: number;

    /** Optional tile drawing offset in pixels. Positive is right and down. */
    tileoffset?: Point;

    /** Optional size to use when rendering tiles from this tileset on a tile layer. Default is TILE. */
    tilerendersize?: TileRenderSize;

    /** The tiles. */
    tiles?: Tile[];

    /** Maximum width of tiles in this set. */
    tilewidth: number;

    /** Optional allowed transformations. */
    transformations?: Transformation;

    /** Optional transparent color. */
    transparentcolor?: Color;

    /** Optional list of Wang sets. */
    wangsets?: WangSet[];
}
