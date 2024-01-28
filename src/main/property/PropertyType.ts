/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Color } from "../common/Color";

/** Property type. */
export enum PropertyType {
    STRING = "string",
    INT = "int",
    FLOAT = "float",
    BOOL = "bool",
    COLOR = "color",
    FILE = "file",
    OBJECT = "object",
    CLASS = "class"
}

/** Type which maps a property type to a property value type. */
export type PropertyValueType<T> =
    T extends PropertyType.STRING ? string :
    T extends PropertyType.INT ? number :
    T extends PropertyType.FLOAT ? number :
    T extends PropertyType.BOOL ? boolean :
    T extends PropertyType.COLOR ? Color :
    T extends PropertyType.FILE ? string :
    T extends PropertyType.OBJECT ? number :
    T extends PropertyType.CLASS ? string :
    unknown;
