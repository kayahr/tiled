/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { PropertyType, PropertyValueType } from "./PropertyType";

/** Base data of a custom property. */
export interface Property<T extends PropertyType = PropertyType> {
    /** The name of the property. */
    name: string;

    /** The type of the property. */
    type: T;

    /** The value of the property. */
    value: PropertyValueType<T>;
}
