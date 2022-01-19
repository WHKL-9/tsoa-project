"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const specOptions = {
        basePath: "/api",
        entryFile: "./api/server.ts",
        specVersion: 3,
        outputDirectory: "./api/dist",
        controllerPathGlobs: ["./routeControllers/**/*Controller.ts"],
    };
    const routeOptions = {
        basePath: "/api",
        entryFile: "./api/server.ts",
        routesDir: "./api",
    };
    yield (0, tsoa_1.generateSpec)(specOptions);
    yield (0, tsoa_1.generateRoutes)(routeOptions);
}))();
