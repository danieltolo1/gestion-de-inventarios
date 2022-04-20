"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
let FindUniqueComputerArgs = class FindUniqueComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], FindUniqueComputerArgs.prototype, "where", void 0);
FindUniqueComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueComputerArgs);
exports.FindUniqueComputerArgs = FindUniqueComputerArgs;
