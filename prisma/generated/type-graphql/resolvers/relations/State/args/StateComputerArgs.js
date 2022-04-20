"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByWithRelationInput_1 = require("../../../inputs/ComputerOrderByWithRelationInput");
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
const ComputerScalarFieldEnum_1 = require("../../../../enums/ComputerScalarFieldEnum");
let StateComputerArgs = class StateComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], StateComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerOrderByWithRelationInput_1.ComputerOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], StateComputerArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateComputerArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarFieldEnum_1.ComputerScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateComputerArgs.prototype, "distinct", void 0);
StateComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], StateComputerArgs);
exports.StateComputerArgs = StateComputerArgs;
