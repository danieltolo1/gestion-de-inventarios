"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByWithAggregationInput_1 = require("../../../inputs/ComputerOrderByWithAggregationInput");
const ComputerScalarWhereWithAggregatesInput_1 = require("../../../inputs/ComputerScalarWhereWithAggregatesInput");
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
const ComputerScalarFieldEnum_1 = require("../../../../enums/ComputerScalarFieldEnum");
let GroupByComputerArgs = class GroupByComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], GroupByComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerOrderByWithAggregationInput_1.ComputerOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarFieldEnum_1.ComputerScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByComputerArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerScalarWhereWithAggregatesInput_1.ComputerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerScalarWhereWithAggregatesInput_1.ComputerScalarWhereWithAggregatesInput)
], GroupByComputerArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByComputerArgs.prototype, "skip", void 0);
GroupByComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByComputerArgs);
exports.GroupByComputerArgs = GroupByComputerArgs;
