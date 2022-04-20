"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
let DeleteComputerArgs = class DeleteComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], DeleteComputerArgs.prototype, "where", void 0);
DeleteComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteComputerArgs);
exports.DeleteComputerArgs = DeleteComputerArgs;
