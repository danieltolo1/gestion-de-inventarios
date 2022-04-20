"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateInput_1 = require("../../../inputs/ProgramCreateInput");
const ProgramUpdateInput_1 = require("../../../inputs/ProgramUpdateInput");
const ProgramWhereUniqueInput_1 = require("../../../inputs/ProgramWhereUniqueInput");
let UpsertProgramArgs = class UpsertProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], UpsertProgramArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateInput_1.ProgramCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateInput_1.ProgramCreateInput)
], UpsertProgramArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateInput_1.ProgramUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateInput_1.ProgramUpdateInput)
], UpsertProgramArgs.prototype, "update", void 0);
UpsertProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertProgramArgs);
exports.UpsertProgramArgs = UpsertProgramArgs;
