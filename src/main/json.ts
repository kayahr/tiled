declare module "*.map.json" {
    const value: import("./map/Map").Map;
    export default value;
}

declare module "*.tileset.json" {
    const value: import("./tileset/ExternalTileset").ExternalTileset;
    export default value;
}

declare module "*.template.json" {
    const value: import("./object/ObjectTemplate").ObjectTemplate;
    export default value;
}
