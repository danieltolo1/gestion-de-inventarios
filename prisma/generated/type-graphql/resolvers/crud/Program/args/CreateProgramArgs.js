"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateInput_1 = require("../../../inputs/ProgramCreateInput");
let CreateProgramArgs = class CreateProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateInput_1.ProgramCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateInput_1.ProgramCreateInput)
], CreateProgramArgs.prototype, "data", void 0);
CreateProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProgramArgs);
exports.CreateProgramArgs = CreateProgramArgs;
