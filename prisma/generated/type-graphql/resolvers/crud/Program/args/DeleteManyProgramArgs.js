"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramWhereInput_1 = require("../../../inputs/ProgramWhereInput");
let DeleteManyProgramArgs = class DeleteManyProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], DeleteManyProgramArgs.prototype, "where", void 0);
DeleteManyProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyProgramArgs);
exports.DeleteManyProgramArgs = DeleteManyProgramArgs;
