"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyInput_1 = require("../../../inputs/ComputerCreateManyInput");
let CreateManyComputerArgs = class CreateManyComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateManyInput_1.ComputerCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyComputerArgs.prototype, "skipDuplicates", void 0);
CreateManyComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyComputerArgs);
exports.CreateManyComputerArgs = CreateManyComputerArgs;
