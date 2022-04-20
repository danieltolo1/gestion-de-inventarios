"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateInput_1 = require("../../../inputs/PartComputerCreateInput");
let CreatePartComputerArgs = class CreatePartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateInput_1.PartComputerCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateInput_1.PartComputerCreateInput)
], CreatePartComputerArgs.prototype, "data", void 0);
CreatePartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreatePartComputerArgs);
exports.CreatePartComputerArgs = CreatePartComputerArgs;
