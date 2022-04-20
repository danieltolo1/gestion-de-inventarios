"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerUpdateInput_1 = require("../../../inputs/SoftwareComputerUpdateInput");
const SoftwareComputerWhereUniqueInput_1 = require("../../../inputs/SoftwareComputerWhereUniqueInput");
let UpdateSoftwareComputerArgs = class UpdateSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateInput_1.SoftwareComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateInput_1.SoftwareComputerUpdateInput)
], UpdateSoftwareComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], UpdateSoftwareComputerArgs.prototype, "where", void 0);
UpdateSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateSoftwareComputerArgs);
exports.UpdateSoftwareComputerArgs = UpdateSoftwareComputerArgs;
