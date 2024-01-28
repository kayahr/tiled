/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Tile layer encoding. */
export enum Encoding {
    CSV = "csv",
    BASE64 = "base64"
}

export type EncodingDataType<T extends Encoding> =
    T extends Encoding.CSV ? number[] :
    T extends Encoding.BASE64 ? string :
    number[] | string;
