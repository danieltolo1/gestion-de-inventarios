"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramAvgAggregate_1 = require("../outputs/ProgramAvgAggregate");
const ProgramCountAggregate_1 = require("../outputs/ProgramCountAggregate");
const ProgramMaxAggregate_1 = require("../outputs/ProgramMaxAggregate");
const ProgramMinAggregate_1 = require("../outputs/ProgramMinAggregate");
const ProgramSumAggregate_1 = require("../outputs/ProgramSumAggregate");
let ProgramGroupBy = class ProgramGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramGroupBy.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramGroupBy.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramGroupBy.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramGroupBy.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCountAggregate_1.ProgramCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCountAggregate_1.ProgramCountAggregate)
], ProgramGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramAvgAggregate_1.ProgramAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramAvgAggregate_1.ProgramAvgAggregate)
], ProgramGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramSumAggregate_1.ProgramSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramSumAggregate_1.ProgramSumAggregate)
], ProgramGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMinAggregate_1.ProgramMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMinAggregate_1.ProgramMinAggregate)
], ProgramGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMaxAggregate_1.ProgramMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMaxAggregate_1.ProgramMaxAggregate)
], ProgramGroupBy.prototype, "_max", void 0);
ProgramGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramGroupBy", {
        isAbstract: true
    })
], ProgramGroupBy);
exports.ProgramGroupBy = ProgramGroupBy;
