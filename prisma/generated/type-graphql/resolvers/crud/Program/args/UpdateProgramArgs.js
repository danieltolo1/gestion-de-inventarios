"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramUpdateInput_1 = require("../../../inputs/ProgramUpdateInput");
const ProgramWhereUniqueInput_1 = require("../../../inputs/ProgramWhereUniqueInput");
let UpdateProgramArgs = class UpdateProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateInput_1.ProgramUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateInput_1.ProgramUpdateInput)
], UpdateProgramArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], UpdateProgramArgs.prototype, "where", void 0);
UpdateProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProgramArgs);
exports.UpdateProgramArgs = UpdateProgramArgs;
