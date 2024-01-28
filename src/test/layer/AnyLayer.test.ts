import { AnyLayer, AnyTileLayer, isGroup, isImageLayer, isObjectGroup, isTileLayer } from "../../main/layer/AnyLayer";
import { DrawOrder } from "../../main/layer/DrawOrder";
import { Group } from "../../main/layer/Group";
import { ImageLayer } from "../../main/layer/ImageLayer";
import { ObjectGroup } from "../../main/layer/ObjectGroup";

const tileLayer: AnyTileLayer = {
    type: "tilelayer",
    id: 1,
    name: "",
    opacity: 1,
    visible: true,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    data: []
};

const objectGroup: ObjectGroup = {
    type: "objectgroup",
    id: 1,
    name: "",
    opacity: 1,
    visible: true,
    x: 0,
    y: 0,
    draworder: DrawOrder.TOPDOWN,
    objects: []
};

const imageLayer: ImageLayer = {
    type: "imagelayer",
    id: 1,
    name: "",
    opacity: 1,
    visible: true,
    x: 0,
    y: 0,
    image: "image.png"
};

const group: Group = {
    type: "group",
    id: 1,
    name: "",
    opacity: 1,
    visible: true,
    x: 0,
    y: 0,
    layers: []
};

describe("isTileLayer", () => {
    it("returns true for a tile layer", () => {
        const layer = tileLayer as AnyLayer;
        expect(isTileLayer(layer)).toBe(true);
        if (isTileLayer(layer)) {
            // Check if function works as type guard during compile-time
            expect(layer.data).toBeDefined();
        }
    });
    it("returns false for other layer types", () => {
        expect(isTileLayer(objectGroup)).toBe(false);
        expect(isTileLayer(imageLayer)).toBe(false);
        expect(isTileLayer(group)).toBe(false);
    });
});

describe("isObjectGroup", () => {
    it("returns true for an object group", () => {
        const layer = objectGroup as AnyLayer;
        expect(isObjectGroup(layer)).toBe(true);
        if (isObjectGroup(layer)) {
            // Check if function works as type guard during compile-time
            expect(layer.objects).toBeDefined();
        }
    });
    it("returns false for other layer types", () => {
        expect(isObjectGroup(tileLayer)).toBe(false);
        expect(isObjectGroup(imageLayer)).toBe(false);
        expect(isObjectGroup(group)).toBe(false);
    });
});

describe("isImageLayer", () => {
    it("returns true for an image layer", () => {
        const layer = imageLayer as AnyLayer;
        expect(isImageLayer(layer)).toBe(true);
        if (isImageLayer(layer)) {
            // Check if function works as type guard during compile-time
            expect(layer.image).toBeDefined();
        }
    });
    it("returns false for other layer types", () => {
        expect(isImageLayer(tileLayer)).toBe(false);
        expect(isImageLayer(objectGroup)).toBe(false);
        expect(isImageLayer(group)).toBe(false);
    });
});

describe("isGroup", () => {
    it("returns true for group", () => {
        const layer = group as AnyLayer;
        expect(isGroup(layer)).toBe(true);
        if (isGroup(layer)) {
            // Check if function works as type guard during compile-time
            expect(layer.layers).toBeDefined();
        }
    });
    it("returns false for other layer types", () => {
        expect(isGroup(tileLayer)).toBe(false);
        expect(isGroup(objectGroup)).toBe(false);
        expect(isGroup(imageLayer)).toBe(false);
    });
});
