"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateInput_1 = require("../../../inputs/PartComputerUpdateInput");
const PartComputerWhereUniqueInput_1 = require("../../../inputs/PartComputerWhereUniqueInput");
let UpdatePartComputerArgs = class UpdatePartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateInput_1.PartComputerUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateInput_1.PartComputerUpdateInput)
], UpdatePartComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], UpdatePartComputerArgs.prototype, "where", void 0);
UpdatePartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdatePartComputerArgs);
exports.UpdatePartComputerArgs = UpdatePartComputerArgs;
