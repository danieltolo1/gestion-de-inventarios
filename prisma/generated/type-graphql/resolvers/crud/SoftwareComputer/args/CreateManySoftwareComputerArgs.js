"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateManyInput_1 = require("../../../inputs/SoftwareComputerCreateManyInput");
let CreateManySoftwareComputerArgs = class CreateManySoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerCreateManyInput_1.SoftwareComputerCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManySoftwareComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManySoftwareComputerArgs.prototype, "skipDuplicates", void 0);
CreateManySoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManySoftwareComputerArgs);
exports.CreateManySoftwareComputerArgs = CreateManySoftwareComputerArgs;
