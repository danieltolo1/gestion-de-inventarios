"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramMaxAggregate = class ProgramMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramMaxAggregate.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxAggregate.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxAggregate.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxAggregate.prototype, "license_program", void 0);
ProgramMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramMaxAggregate", {
        isAbstract: true
    })
], ProgramMaxAggregate);
exports.ProgramMaxAggregate = ProgramMaxAggregate;
