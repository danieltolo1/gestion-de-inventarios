"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyInput_1 = require("../../../inputs/PartComputerCreateManyInput");
let CreateManyPartComputerArgs = class CreateManyPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateManyInput_1.PartComputerCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyPartComputerArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyPartComputerArgs.prototype, "skipDuplicates", void 0);
CreateManyPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyPartComputerArgs);
exports.CreateManyPartComputerArgs = CreateManyPartComputerArgs;
