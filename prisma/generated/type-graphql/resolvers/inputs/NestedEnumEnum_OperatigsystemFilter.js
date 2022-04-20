"use strict";
var NestedEnumEnum_OperatigsystemFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_OperatigsystemFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let NestedEnumEnum_OperatigsystemFilter = NestedEnumEnum_OperatigsystemFilter_1 = class NestedEnumEnum_OperatigsystemFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_OperatigsystemFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_OperatigsystemFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_OperatigsystemFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter)
], NestedEnumEnum_OperatigsystemFilter.prototype, "not", void 0);
NestedEnumEnum_OperatigsystemFilter = NestedEnumEnum_OperatigsystemFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_OperatigsystemFilter", {
        isAbstract: true
    })
], NestedEnumEnum_OperatigsystemFilter);
exports.NestedEnumEnum_OperatigsystemFilter = NestedEnumEnum_OperatigsystemFilter;
