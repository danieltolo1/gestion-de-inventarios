"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_ArchitectureFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_ArchitectureFilter_1 = require("../inputs/NestedEnumEnum_ArchitectureFilter");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
let EnumEnum_ArchitectureFilter = class EnumEnum_ArchitectureFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_ArchitectureFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_ArchitectureFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_ArchitectureFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter)
], EnumEnum_ArchitectureFilter.prototype, "not", void 0);
EnumEnum_ArchitectureFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_ArchitectureFilter", {
        isAbstract: true
    })
], EnumEnum_ArchitectureFilter);
exports.EnumEnum_ArchitectureFilter = EnumEnum_ArchitectureFilter;
