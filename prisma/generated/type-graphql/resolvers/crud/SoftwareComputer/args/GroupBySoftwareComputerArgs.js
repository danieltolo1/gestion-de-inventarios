"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerOrderByWithAggregationInput_1 = require("../../../inputs/SoftwareComputerOrderByWithAggregationInput");
const SoftwareComputerScalarWhereWithAggregatesInput_1 = require("../../../inputs/SoftwareComputerScalarWhereWithAggregatesInput");
const SoftwareComputerWhereInput_1 = require("../../../inputs/SoftwareComputerWhereInput");
const SoftwareComputerScalarFieldEnum_1 = require("../../../../enums/SoftwareComputerScalarFieldEnum");
let GroupBySoftwareComputerArgs = class GroupBySoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], GroupBySoftwareComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerOrderByWithAggregationInput_1.SoftwareComputerOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySoftwareComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerScalarFieldEnum_1.SoftwareComputerScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySoftwareComputerArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerScalarWhereWithAggregatesInput_1.SoftwareComputerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerScalarWhereWithAggregatesInput_1.SoftwareComputerScalarWhereWithAggregatesInput)
], GroupBySoftwareComputerArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySoftwareComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySoftwareComputerArgs.prototype, "skip", void 0);
GroupBySoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupBySoftwareComputerArgs);
exports.GroupBySoftwareComputerArgs = GroupBySoftwareComputerArgs;
