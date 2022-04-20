"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateInput_1 = require("../../../inputs/ComputerUpdateInput");
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
let UpdateComputerArgs = class UpdateComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateInput_1.ComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateInput_1.ComputerUpdateInput)
], UpdateComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], UpdateComputerArgs.prototype, "where", void 0);
UpdateComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateComputerArgs);
exports.UpdateComputerArgs = UpdateComputerArgs;
