"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerOrderByWithAggregationInput_1 = require("../../../inputs/PartComputerOrderByWithAggregationInput");
const PartComputerScalarWhereWithAggregatesInput_1 = require("../../../inputs/PartComputerScalarWhereWithAggregatesInput");
const PartComputerWhereInput_1 = require("../../../inputs/PartComputerWhereInput");
const PartComputerScalarFieldEnum_1 = require("../../../../enums/PartComputerScalarFieldEnum");
let GroupByPartComputerArgs = class GroupByPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], GroupByPartComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerOrderByWithAggregationInput_1.PartComputerOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByPartComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarFieldEnum_1.PartComputerScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByPartComputerArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerScalarWhereWithAggregatesInput_1.PartComputerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerScalarWhereWithAggregatesInput_1.PartComputerScalarWhereWithAggregatesInput)
], GroupByPartComputerArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByPartComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByPartComputerArgs.prototype, "skip", void 0);
GroupByPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByPartComputerArgs);
exports.GroupByPartComputerArgs = GroupByPartComputerArgs;
