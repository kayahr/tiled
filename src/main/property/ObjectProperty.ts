/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Property } from "./Property";
import { PropertyType } from "./PropertyType";

/** A custom object reference property. */
export type ObjectProperty = Property<PropertyType.OBJECT>;
