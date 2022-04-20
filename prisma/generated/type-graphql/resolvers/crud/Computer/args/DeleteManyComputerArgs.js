"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
let DeleteManyComputerArgs = class DeleteManyComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], DeleteManyComputerArgs.prototype, "where", void 0);
DeleteManyComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyComputerArgs);
exports.DeleteManyComputerArgs = DeleteManyComputerArgs;
