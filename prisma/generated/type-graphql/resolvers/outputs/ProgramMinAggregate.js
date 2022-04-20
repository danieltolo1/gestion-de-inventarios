"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramMinAggregate = class ProgramMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramMinAggregate.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinAggregate.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinAggregate.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinAggregate.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramMinAggregate.prototype, "softwarecomputerId", void 0);
ProgramMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramMinAggregate", {
        isAbstract: true
    })
], ProgramMinAggregate);
exports.ProgramMinAggregate = ProgramMinAggregate;
