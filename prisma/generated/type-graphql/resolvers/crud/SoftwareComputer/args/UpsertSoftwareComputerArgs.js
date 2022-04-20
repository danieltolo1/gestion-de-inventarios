"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateInput_1 = require("../../../inputs/SoftwareComputerCreateInput");
const SoftwareComputerUpdateInput_1 = require("../../../inputs/SoftwareComputerUpdateInput");
const SoftwareComputerWhereUniqueInput_1 = require("../../../inputs/SoftwareComputerWhereUniqueInput");
let UpsertSoftwareComputerArgs = class UpsertSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], UpsertSoftwareComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateInput_1.SoftwareComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateInput_1.SoftwareComputerCreateInput)
], UpsertSoftwareComputerArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateInput_1.SoftwareComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateInput_1.SoftwareComputerUpdateInput)
], UpsertSoftwareComputerArgs.prototype, "update", void 0);
UpsertSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertSoftwareComputerArgs);
exports.UpsertSoftwareComputerArgs = UpsertSoftwareComputerArgs;
