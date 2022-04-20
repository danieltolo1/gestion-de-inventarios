"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationOrderByWithAggregationInput_1 = require("../../../inputs/LocationOrderByWithAggregationInput");
const LocationScalarWhereWithAggregatesInput_1 = require("../../../inputs/LocationScalarWhereWithAggregatesInput");
const LocationWhereInput_1 = require("../../../inputs/LocationWhereInput");
const LocationScalarFieldEnum_1 = require("../../../../enums/LocationScalarFieldEnum");
let GroupByLocationArgs = class GroupByLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereInput_1.LocationWhereInput)
], GroupByLocationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationOrderByWithAggregationInput_1.LocationOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLocationArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationScalarFieldEnum_1.LocationScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLocationArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationScalarWhereWithAggregatesInput_1.LocationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationScalarWhereWithAggregatesInput_1.LocationScalarWhereWithAggregatesInput)
], GroupByLocationArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLocationArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLocationArgs.prototype, "skip", void 0);
GroupByLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByLocationArgs);
exports.GroupByLocationArgs = GroupByLocationArgs;
