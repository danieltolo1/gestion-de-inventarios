"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateInput_1 = require("../../../inputs/ComputerCreateInput");
const ComputerUpdateInput_1 = require("../../../inputs/ComputerUpdateInput");
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
let UpsertComputerArgs = class UpsertComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], UpsertComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateInput_1.ComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateInput_1.ComputerCreateInput)
], UpsertComputerArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateInput_1.ComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateInput_1.ComputerUpdateInput)
], UpsertComputerArgs.prototype, "update", void 0);
UpsertComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertComputerArgs);
exports.UpsertComputerArgs = UpsertComputerArgs;
