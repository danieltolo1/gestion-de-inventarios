"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateInput_1 = require("../../../inputs/SoftwareComputerCreateInput");
let CreateSoftwareComputerArgs = class CreateSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateInput_1.SoftwareComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateInput_1.SoftwareComputerCreateInput)
], CreateSoftwareComputerArgs.prototype, "data", void 0);
CreateSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateSoftwareComputerArgs);
exports.CreateSoftwareComputerArgs = CreateSoftwareComputerArgs;
