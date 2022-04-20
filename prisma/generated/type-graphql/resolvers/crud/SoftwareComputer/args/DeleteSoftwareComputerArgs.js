"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerWhereUniqueInput_1 = require("../../../inputs/SoftwareComputerWhereUniqueInput");
let DeleteSoftwareComputerArgs = class DeleteSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], DeleteSoftwareComputerArgs.prototype, "where", void 0);
DeleteSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteSoftwareComputerArgs);
exports.DeleteSoftwareComputerArgs = DeleteSoftwareComputerArgs;
