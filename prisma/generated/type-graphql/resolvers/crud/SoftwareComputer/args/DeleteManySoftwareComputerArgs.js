"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerWhereInput_1 = require("../../../inputs/SoftwareComputerWhereInput");
let DeleteManySoftwareComputerArgs = class DeleteManySoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], DeleteManySoftwareComputerArgs.prototype, "where", void 0);
DeleteManySoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManySoftwareComputerArgs);
exports.DeleteManySoftwareComputerArgs = DeleteManySoftwareComputerArgs;
