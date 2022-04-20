"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateInput_1 = require("../../../inputs/ComputerCreateInput");
let CreateComputerArgs = class CreateComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateInput_1.ComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateInput_1.ComputerCreateInput)
], CreateComputerArgs.prototype, "data", void 0);
CreateComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateComputerArgs);
exports.CreateComputerArgs = CreateComputerArgs;
