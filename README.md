tiled
=====

[GitHub] | [NPM] | [API Doc]

A set of TypeScript interfaces, types and enums, API documentation, JSON file typings, JSON schema and helper functions to work with JSON files created by the [Tiled] map editor.

Installation
------------

```sh
npm install @kayahr/tiled
```

Types
-----

You can use the provided interfaces and enums to work with Tiled JSON data in a type-safe way:

```typescript
import * as tiled from "@kayahr/tiled";

const response = await fetch("main.map.json");
const mainMap = (await response.json()) as tiled.Map;
const layers = mainMap.layers;
```

Type guards
-----------

The Tiled JSON format contains some union types where you may want to use provided Type Guard functions to distinguish between them:

### Tilesets

```typescript
if (tiled.isTilesetRef(tileset)) {
    // tileset is reference to an external tileset file
    console.log(tileset.source);
}
if (tiles.isEmbeddedTileset(tileset)) {
    // tileset is an embedded tileset
    console.log(tileset.tilecount);
}
```

### Layers

```typescript
if (tiled.isTileLayer(layer)) {
    // layer is a tile layer
    console.log(layer.data);
}
if (tiled.isObjectGroup(layer)) {
    // layer is an object group
    console.log(layer.objects);
}
if (tiled.isImageLayer(layer)) {
    // layer is an image layer
    console.log(layer.image);
}
if (tiled.isGroup(layer)) {
    // layer is a group
    console.log(layer.layers);
}
```

Tile layers can further be distinguished into encoded or unencoded tile layers:

```typescript
if (tiled.isEncodedTileLayer(layer)) {
    // Layer and chunk data is an encoded string
    console.log(layer.data);
}
if (tiled.isUnencodedTileLayer(layer)) {
    // Layer and chunk data is an unencoded array of global tile IDs
    console.log(layer.data);
}
```

Decoding tile layers
--------------------

When a tile layer is encoded then you can decode it like this:

```typescript
const decodedTileLayer = tiled.decodeTileLayer(tileLayer);
```

The decoder function uses [base64-js] for base64 decoding, [pako] for decompressing *zlib* and *gzip* compressed data and [fzstd] for decompressing *zstd* compressed data. All these libraries are pure JavaScript libraries so decoding works in Node.js and in web browsers.


JSON file typings
-----------------

This project provides typings for JSON files with the file pattern `*.map.json`, `*.tileset.json` and `*.template.json`. So when you name your JSON files like this and your module loader supports importing JSON files then you can import the JSON files right away and TypeScript already knows the type and can validate your code:

```typescript
import mainMap from "../maps/main.map.json";
const layers = mainMap.layers;
```

Note that you have to import `@kayahr/tiled` somewhere in your application at least once or otherwise TypeScript doesn't load the typings for Tiles JSON files. If you don't actually need to import an actual type then simply do `import "@kayahr/tiled"` somewhere in your code or add `node_modules/@kayahr/tiled/lib/main/map.json.d.ts` (or one of the other two) to the include list in your `tsconfig.json`.

JSON schema
-----------

In case you want to validate Tiled JSON files or benefit from completion while editing these files there are also JSON schema files which are automatically generated from the TypeScript types:

* [map.schema.json](https://kayahr.github.io/tiled/map.schema.json)
* [tileset.schema.json](https://kayahr.github.io/tiled/tileset.schema.json)
* [template.schema.json](https://kayahr.github.io/tiled/template.schema.json)

You can also access the schema file via your module loader by importing them:

```typescript
import mapSchema from "@kayahr/tiled/map.schema.json";
import tilesetSchema from "@kayahr/tiled/tileset.schema.json";
import templateSchema from "@kayahr/tiled/template.schema.json";
```

API documentation
-----------------

The types describing the Tiled JSON formats are documented so VSCode displays the documentation during completion and in tooltips. There is also a [HTML API documentation](https://kayahr.github.io/tiled/).

[API Doc]: https://kayahr.github.io/tiled/
[GitHub]: https://github.com/kayahr/tiled/
[NPM]: https://www.npmjs.com/package/@kayahr/tiled/
[Tiled]: https://www.mapeditor.org/
[base64-js]: https://www.npmjs.com/package/base64-js
[pako]: https://www.npmjs.com/package/pako
[fzstd]: https://www.npmjs.com/package/fzstd
