/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/**
 * A color in 32 Bit RGB or ARGB hex format (Examples: `#ff0000` for red, `#40e0d0ff` for fully opaque turquoise). Can also be an empty string for no color.
 *
 * @pattern ^(#[0-9a-f]{6,8})?$
 */
export type Color = string;
