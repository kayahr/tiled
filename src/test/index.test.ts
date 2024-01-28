import { GridOrientation } from "../main/grid/GridOrientation";
import * as tiled from "../main/index";
import { isEncodedTileLayer, isGroup, isImageLayer, isObjectGroup, isTileLayer, isUnencodedTileLayer } from "../main/layer/AnyLayer";
import { Compression } from "../main/layer/Compression";
import { decodeTileLayer } from "../main/layer/decodeTileLayer";
import { DrawOrder } from "../main/layer/DrawOrder";
import { Encoding } from "../main/layer/Encoding";
import { MapOrientation } from "../main/map/MapOrientation";
import { MapRenderOrder } from "../main/map/MapRenderOrder";
import { StaggerAxis } from "../main/map/StaggerAxis";
import { StaggerIndex } from "../main/map/StaggerIndex";
import { PropertyType } from "../main/property/PropertyType";
import { HorizontalAlign } from "../main/text/HorizontalAlign";
import { VerticalAlign } from "../main/text/VerticalAlign";
import { isEmbeddedTileset, isTilesetRef } from "../main/tileset/AnyTileset";
import { FillMode } from "../main/tileset/FillMode";
import { ObjectAlignment } from "../main/tileset/ObjectAlignment";
import { TileRenderSize } from "../main/tileset/TileRenderSize";
import { WangSetType } from "../main/wangset/WangSetType";

describe("index", () => {
    it("exports all functions", () => {
        expect(tiled.decodeTileLayer).toBe(decodeTileLayer);
    });

    it("exports all type guards", () => {
        expect(tiled.isEmbeddedTileset).toBe(isEmbeddedTileset);
        expect(tiled.isTilesetRef).toBe(isTilesetRef);
        expect(tiled.isEncodedTileLayer).toBe(isEncodedTileLayer);
        expect(tiled.isGroup).toBe(isGroup);
        expect(tiled.isImageLayer).toBe(isImageLayer);
        expect(tiled.isObjectGroup).toBe(isObjectGroup);
        expect(tiled.isTileLayer).toBe(isTileLayer);
        expect(tiled.isUnencodedTileLayer).toBe(isUnencodedTileLayer);
    });

    it("exports all enums", () => {
        expect(tiled.Compression).toBe(Compression);
        expect(tiled.DrawOrder).toBe(DrawOrder);
        expect(tiled.Encoding).toBe(Encoding);
        expect(tiled.FillMode).toBe(FillMode);
        expect(tiled.GridOrientation).toBe(GridOrientation);
        expect(tiled.HorizontalAlign).toBe(HorizontalAlign);
        expect(tiled.MapOrientation).toBe(MapOrientation);
        expect(tiled.ObjectAlignment).toBe(ObjectAlignment);
        expect(tiled.PropertyType).toBe(PropertyType);
        expect(tiled.RenderOrder).toBe(MapRenderOrder);
        expect(tiled.StaggerAxis).toBe(StaggerAxis);
        expect(tiled.StaggerIndex).toBe(StaggerIndex);
        expect(tiled.TileRenderSize).toBe(TileRenderSize);
        expect(tiled.VerticalAlign).toBe(VerticalAlign);
        expect(tiled.WangSetType).toBe(WangSetType);
    });

    it("exports all type defs", () => {
        // Type existence can only be checked by compiler, not by Jest
        expect({} as tiled.AnyLayer).toBeDefined();
        expect({} as tiled.AnyTileset).toBeDefined();
        expect({} as tiled.AnyProperty).toBeDefined();
        expect({} as tiled.AnyTileLayer).toBeDefined();
        expect({} as tiled.Color).toBeDefined();
        expect({} as tiled.EncodingDataType<Encoding.CSV>).toBeDefined();
        expect({} as tiled.PropertyValueType<PropertyType.STRING>).toBeDefined();
    });

    it("exports all interfaces", () => {
        // Interface existence can only be checked by compiler, not by Jest
        expect({} as tiled.BaseTileset).toBeDefined();
        expect({} as tiled.BaseMapObject).toBeDefined();
        expect({} as tiled.BoolProperty).toBeDefined();
        expect({} as tiled.Chunk).toBeDefined();
        expect({} as tiled.ClassProperty).toBeDefined();
        expect({} as tiled.ColorProperty).toBeDefined();
        expect({} as tiled.EncodedTileLayer).toBeDefined();
        expect({} as tiled.EmbeddedTileset).toBeDefined();
        expect({} as tiled.ExternalTileset).toBeDefined();
        expect({} as tiled.FileProperty).toBeDefined();
        expect({} as tiled.FloatProperty).toBeDefined();
        expect({} as tiled.Frame).toBeDefined();
        expect({} as tiled.Grid).toBeDefined();
        expect({} as tiled.Group).toBeDefined();
        expect({} as tiled.ImageLayer).toBeDefined();
        expect({} as tiled.IntProperty).toBeDefined();
        expect({} as tiled.Layer<"group">).toBeDefined();
        expect({} as tiled.Map).toBeDefined();
        expect({} as tiled.MapObject).toBeDefined();
        expect({} as tiled.ObjectGroup).toBeDefined();
        expect({} as tiled.ObjectProperty).toBeDefined();
        expect({} as tiled.ObjectTemplate).toBeDefined();
        expect({} as tiled.Point).toBeDefined();
        expect({} as tiled.Property).toBeDefined();
        expect({} as tiled.StringProperty).toBeDefined();
        expect({} as tiled.Text).toBeDefined();
        expect({} as tiled.Tile).toBeDefined();
        expect({} as tiled.TileLayer).toBeDefined();
        expect({} as tiled.Tileset).toBeDefined();
        expect({} as tiled.TilesetRef).toBeDefined();
        expect({} as tiled.Transformation).toBeDefined();
        expect({} as tiled.WangColor).toBeDefined();
        expect({} as tiled.WangSet).toBeDefined();
        expect({} as tiled.WangTile).toBeDefined();
    });
});
