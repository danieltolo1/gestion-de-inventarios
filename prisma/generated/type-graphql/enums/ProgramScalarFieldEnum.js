"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ProgramScalarFieldEnum;
(function (ProgramScalarFieldEnum) {
    ProgramScalarFieldEnum["id_program"] = "id_program";
    ProgramScalarFieldEnum["name_program"] = "name_program";
    ProgramScalarFieldEnum["version_program"] = "version_program";
    ProgramScalarFieldEnum["license_program"] = "license_program";
})(ProgramScalarFieldEnum = exports.ProgramScalarFieldEnum || (exports.ProgramScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProgramScalarFieldEnum, {
    name: "ProgramScalarFieldEnum",
    description: undefined,
});
