"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyMutationInput_1 = require("../../../inputs/ComputerUpdateManyMutationInput");
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
let UpdateManyComputerArgs = class UpdateManyComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput)
], UpdateManyComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], UpdateManyComputerArgs.prototype, "where", void 0);
UpdateManyComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyComputerArgs);
exports.UpdateManyComputerArgs = UpdateManyComputerArgs;
