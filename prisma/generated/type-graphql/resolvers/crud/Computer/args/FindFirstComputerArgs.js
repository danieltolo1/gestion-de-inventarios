"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByWithRelationInput_1 = require("../../../inputs/ComputerOrderByWithRelationInput");
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
const ComputerScalarFieldEnum_1 = require("../../../../enums/ComputerScalarFieldEnum");
let FindFirstComputerArgs = class FindFirstComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], FindFirstComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerOrderByWithRelationInput_1.ComputerOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], FindFirstComputerArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstComputerArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarFieldEnum_1.ComputerScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstComputerArgs.prototype, "distinct", void 0);
FindFirstComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstComputerArgs);
exports.FindFirstComputerArgs = FindFirstComputerArgs;
