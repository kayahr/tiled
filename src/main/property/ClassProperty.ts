/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Property } from "./Property";
import { PropertyType } from "./PropertyType";

/** A custom class property. */
export type ClassProperty = Property<PropertyType.CLASS>;
