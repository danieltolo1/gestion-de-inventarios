"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramUpdateManyMutationInput_1 = require("../../../inputs/ProgramUpdateManyMutationInput");
const ProgramWhereInput_1 = require("../../../inputs/ProgramWhereInput");
let UpdateManyProgramArgs = class UpdateManyProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput)
], UpdateManyProgramArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], UpdateManyProgramArgs.prototype, "where", void 0);
UpdateManyProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProgramArgs);
exports.UpdateManyProgramArgs = UpdateManyProgramArgs;
