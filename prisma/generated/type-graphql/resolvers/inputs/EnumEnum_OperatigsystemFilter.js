"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_OperatigsystemFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_OperatigsystemFilter_1 = require("../inputs/NestedEnumEnum_OperatigsystemFilter");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let EnumEnum_OperatigsystemFilter = class EnumEnum_OperatigsystemFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_OperatigsystemFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_OperatigsystemFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_OperatigsystemFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter)
], EnumEnum_OperatigsystemFilter.prototype, "not", void 0);
EnumEnum_OperatigsystemFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_OperatigsystemFilter", {
        isAbstract: true
    })
], EnumEnum_OperatigsystemFilter);
exports.EnumEnum_OperatigsystemFilter = EnumEnum_OperatigsystemFilter;
