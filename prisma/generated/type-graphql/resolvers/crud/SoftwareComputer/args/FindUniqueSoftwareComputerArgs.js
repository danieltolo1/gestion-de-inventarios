"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerWhereUniqueInput_1 = require("../../../inputs/SoftwareComputerWhereUniqueInput");
let FindUniqueSoftwareComputerArgs = class FindUniqueSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], FindUniqueSoftwareComputerArgs.prototype, "where", void 0);
FindUniqueSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueSoftwareComputerArgs);
exports.FindUniqueSoftwareComputerArgs = FindUniqueSoftwareComputerArgs;
