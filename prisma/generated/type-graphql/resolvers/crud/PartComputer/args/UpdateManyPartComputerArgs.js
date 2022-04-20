"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateManyMutationInput_1 = require("../../../inputs/PartComputerUpdateManyMutationInput");
const PartComputerWhereInput_1 = require("../../../inputs/PartComputerWhereInput");
let UpdateManyPartComputerArgs = class UpdateManyPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateManyMutationInput_1.PartComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateManyMutationInput_1.PartComputerUpdateManyMutationInput)
], UpdateManyPartComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], UpdateManyPartComputerArgs.prototype, "where", void 0);
UpdateManyPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyPartComputerArgs);
exports.UpdateManyPartComputerArgs = UpdateManyPartComputerArgs;
