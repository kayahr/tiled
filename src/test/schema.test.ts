import { readdirSync, readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import ajv from "ajv";

const dataDir = resolve("src/test/data");
const schemaDir = resolve("lib");

function validateFiles(type: string): void {
    const files = readdirSync(dataDir).filter(file => file.endsWith(`.${type}.json`));
    const schemaJSON = JSON.parse((readFileSync(join(schemaDir, `${type}.schema.json`))).toString()) as object;
    const validate = new ajv({ allErrors: true }).compile(schemaJSON);
    for (const file of files) {
        it(file, async () => {
            const json = JSON.parse(await readFile(join(dataDir, file), { encoding: "utf-8" })) as object;
            if (!validate(json)) {
                if (validate.errors == null) {
                    throw new Error("Validation failed but no validation errors found");
                } else {
                    throw new Error("" + JSON.stringify(validate.errors[0], undefined, 4));
                }
            }
        });
    }
}

describe("map.schema.json matches map file", () => {
    validateFiles("map");
});

describe("tileset.schema.json matches tileset file", () => {
    validateFiles("tileset");
});

describe("template.schema.json matches template file", () => {
    validateFiles("template");
});
