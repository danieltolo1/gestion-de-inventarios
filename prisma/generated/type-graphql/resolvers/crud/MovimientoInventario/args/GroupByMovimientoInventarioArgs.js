"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioOrderByWithAggregationInput_1 = require("../../../inputs/MovimientoInventarioOrderByWithAggregationInput");
const MovimientoInventarioScalarWhereWithAggregatesInput_1 = require("../../../inputs/MovimientoInventarioScalarWhereWithAggregatesInput");
const MovimientoInventarioWhereInput_1 = require("../../../inputs/MovimientoInventarioWhereInput");
const MovimientoInventarioScalarFieldEnum_1 = require("../../../../enums/MovimientoInventarioScalarFieldEnum");
let GroupByMovimientoInventarioArgs = class GroupByMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], GroupByMovimientoInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioOrderByWithAggregationInput_1.MovimientoInventarioOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMovimientoInventarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarFieldEnum_1.MovimientoInventarioScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMovimientoInventarioArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioScalarWhereWithAggregatesInput_1.MovimientoInventarioScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioScalarWhereWithAggregatesInput_1.MovimientoInventarioScalarWhereWithAggregatesInput)
], GroupByMovimientoInventarioArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMovimientoInventarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMovimientoInventarioArgs.prototype, "skip", void 0);
GroupByMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByMovimientoInventarioArgs);
exports.GroupByMovimientoInventarioArgs = GroupByMovimientoInventarioArgs;
