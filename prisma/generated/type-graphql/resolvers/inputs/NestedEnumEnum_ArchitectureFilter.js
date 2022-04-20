"use strict";
var NestedEnumEnum_ArchitectureFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_ArchitectureFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
let NestedEnumEnum_ArchitectureFilter = NestedEnumEnum_ArchitectureFilter_1 = class NestedEnumEnum_ArchitectureFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_ArchitectureFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_ArchitectureFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_ArchitectureFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter)
], NestedEnumEnum_ArchitectureFilter.prototype, "not", void 0);
NestedEnumEnum_ArchitectureFilter = NestedEnumEnum_ArchitectureFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_ArchitectureFilter", {
        isAbstract: true
    })
], NestedEnumEnum_ArchitectureFilter);
exports.NestedEnumEnum_ArchitectureFilter = NestedEnumEnum_ArchitectureFilter;
