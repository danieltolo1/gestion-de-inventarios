"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Architecture = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_Architecture;
(function (Enum_Architecture) {
    Enum_Architecture["bits_32"] = "bits_32";
    Enum_Architecture["bits_64"] = "bits_64";
})(Enum_Architecture = exports.Enum_Architecture || (exports.Enum_Architecture = {}));
TypeGraphQL.registerEnumType(Enum_Architecture, {
    name: "Enum_Architecture",
    description: undefined,
});
