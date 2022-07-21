"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramWhereUniqueInput = class ProgramWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramWhereUniqueInput.prototype, "id_program", void 0);
ProgramWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramWhereUniqueInput", {
        isAbstract: true
    })
], ProgramWhereUniqueInput);
exports.ProgramWhereUniqueInput = ProgramWhereUniqueInput;
