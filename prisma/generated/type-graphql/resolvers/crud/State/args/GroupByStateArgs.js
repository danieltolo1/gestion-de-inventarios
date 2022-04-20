"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateOrderByWithAggregationInput_1 = require("../../../inputs/StateOrderByWithAggregationInput");
const StateScalarWhereWithAggregatesInput_1 = require("../../../inputs/StateScalarWhereWithAggregatesInput");
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
const StateScalarFieldEnum_1 = require("../../../../enums/StateScalarFieldEnum");
let GroupByStateArgs = class GroupByStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], GroupByStateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateOrderByWithAggregationInput_1.StateOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByStateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateScalarFieldEnum_1.StateScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByStateArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateScalarWhereWithAggregatesInput_1.StateScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateScalarWhereWithAggregatesInput_1.StateScalarWhereWithAggregatesInput)
], GroupByStateArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByStateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByStateArgs.prototype, "skip", void 0);
GroupByStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByStateArgs);
exports.GroupByStateArgs = GroupByStateArgs;
