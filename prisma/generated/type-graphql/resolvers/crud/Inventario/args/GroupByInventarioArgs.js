"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioOrderByWithAggregationInput_1 = require("../../../inputs/InventarioOrderByWithAggregationInput");
const InventarioScalarWhereWithAggregatesInput_1 = require("../../../inputs/InventarioScalarWhereWithAggregatesInput");
const InventarioWhereInput_1 = require("../../../inputs/InventarioWhereInput");
const InventarioScalarFieldEnum_1 = require("../../../../enums/InventarioScalarFieldEnum");
let GroupByInventarioArgs = class GroupByInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], GroupByInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioOrderByWithAggregationInput_1.InventarioOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByInventarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioScalarFieldEnum_1.InventarioScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByInventarioArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioScalarWhereWithAggregatesInput_1.InventarioScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioScalarWhereWithAggregatesInput_1.InventarioScalarWhereWithAggregatesInput)
], GroupByInventarioArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByInventarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByInventarioArgs.prototype, "skip", void 0);
GroupByInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByInventarioArgs);
exports.GroupByInventarioArgs = GroupByInventarioArgs;
