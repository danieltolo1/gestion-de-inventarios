"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramWhereUniqueInput_1 = require("../../../inputs/ProgramWhereUniqueInput");
let DeleteProgramArgs = class DeleteProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], DeleteProgramArgs.prototype, "where", void 0);
DeleteProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteProgramArgs);
exports.DeleteProgramArgs = DeleteProgramArgs;
