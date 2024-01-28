/*
 * Copyright (C) 2024 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { BoolProperty } from "./BoolProperty";
import { ClassProperty } from "./ClassProperty";
import { ColorProperty } from "./ColorProperty";
import { FileProperty } from "./FileProperty";
import { FloatProperty } from "./FloatProperty";
import { IntProperty } from "./IntProperty";
import { ObjectProperty } from "./ObjectProperty";
import { StringProperty } from "./StringProperty";

/** Union of all property types. */
export type AnyProperty = BoolProperty | ClassProperty | ColorProperty | FileProperty | FloatProperty | IntProperty | ObjectProperty | StringProperty;
