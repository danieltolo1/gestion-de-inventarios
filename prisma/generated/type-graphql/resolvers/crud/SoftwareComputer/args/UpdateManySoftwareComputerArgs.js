"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerUpdateManyMutationInput_1 = require("../../../inputs/SoftwareComputerUpdateManyMutationInput");
const SoftwareComputerWhereInput_1 = require("../../../inputs/SoftwareComputerWhereInput");
let UpdateManySoftwareComputerArgs = class UpdateManySoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateManyMutationInput_1.SoftwareComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateManyMutationInput_1.SoftwareComputerUpdateManyMutationInput)
], UpdateManySoftwareComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], UpdateManySoftwareComputerArgs.prototype, "where", void 0);
UpdateManySoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManySoftwareComputerArgs);
exports.UpdateManySoftwareComputerArgs = UpdateManySoftwareComputerArgs;
