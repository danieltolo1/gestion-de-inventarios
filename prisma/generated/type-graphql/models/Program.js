"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCount_1 = require("../resolvers/outputs/ProgramCount");
let Program = class Program {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Program.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Program.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Program.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Program.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCount_1.ProgramCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCount_1.ProgramCount)
], Program.prototype, "_count", void 0);
Program = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Program", {
        isAbstract: true
    })
], Program);
exports.Program = Program;
