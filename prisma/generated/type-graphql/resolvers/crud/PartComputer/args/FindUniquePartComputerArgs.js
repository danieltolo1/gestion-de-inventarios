"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerWhereUniqueInput_1 = require("../../../inputs/PartComputerWhereUniqueInput");
let FindUniquePartComputerArgs = class FindUniquePartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], FindUniquePartComputerArgs.prototype, "where", void 0);
FindUniquePartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniquePartComputerArgs);
exports.FindUniquePartComputerArgs = FindUniquePartComputerArgs;
