/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Color } from "../common/Color";
import { type Layer } from "./Layer";

/** Image layer. */
export interface ImageLayer extends Layer<"imagelayer"> {
    /** Image used by this layer. */
    image: string;

    /** Whether the image drawn by this layer is repeated along the X axis. Default is false. */
    repeatx?: boolean;

    /** Whether the image drawn by this layer is repeated along the Y axis. Default is false. */
    repeaty?: boolean;

    /** Optional transparent color. */
    transparentcolor?: Color;
}
