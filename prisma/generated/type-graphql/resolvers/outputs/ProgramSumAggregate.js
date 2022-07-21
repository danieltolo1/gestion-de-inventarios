"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramSumAggregate = class ProgramSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramSumAggregate.prototype, "id_program", void 0);
ProgramSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramSumAggregate", {
        isAbstract: true
    })
], ProgramSumAggregate);
exports.ProgramSumAggregate = ProgramSumAggregate;
