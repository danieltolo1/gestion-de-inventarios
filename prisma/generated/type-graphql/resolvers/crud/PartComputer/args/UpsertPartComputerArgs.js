"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateInput_1 = require("../../../inputs/PartComputerCreateInput");
const PartComputerUpdateInput_1 = require("../../../inputs/PartComputerUpdateInput");
const PartComputerWhereUniqueInput_1 = require("../../../inputs/PartComputerWhereUniqueInput");
let UpsertPartComputerArgs = class UpsertPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], UpsertPartComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateInput_1.PartComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateInput_1.PartComputerCreateInput)
], UpsertPartComputerArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateInput_1.PartComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateInput_1.PartComputerUpdateInput)
], UpsertPartComputerArgs.prototype, "update", void 0);
UpsertPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertPartComputerArgs);
exports.UpsertPartComputerArgs = UpsertPartComputerArgs;
