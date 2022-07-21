"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramCreateManyInput = class ProgramCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramCreateManyInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManyInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManyInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManyInput.prototype, "license_program", void 0);
ProgramCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateManyInput", {
        isAbstract: true
    })
], ProgramCreateManyInput);
exports.ProgramCreateManyInput = ProgramCreateManyInput;
