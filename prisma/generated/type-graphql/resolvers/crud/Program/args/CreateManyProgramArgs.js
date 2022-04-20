"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateManyInput_1 = require("../../../inputs/ProgramCreateManyInput");
let CreateManyProgramArgs = class CreateManyProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateManyInput_1.ProgramCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProgramArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProgramArgs.prototype, "skipDuplicates", void 0);
CreateManyProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProgramArgs);
exports.CreateManyProgramArgs = CreateManyProgramArgs;
