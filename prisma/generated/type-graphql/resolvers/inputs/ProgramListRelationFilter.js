"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramWhereInput_1 = require("../inputs/ProgramWhereInput");
let ProgramListRelationFilter = class ProgramListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], ProgramListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], ProgramListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], ProgramListRelationFilter.prototype, "none", void 0);
ProgramListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramListRelationFilter", {
        isAbstract: true
    })
], ProgramListRelationFilter);
exports.ProgramListRelationFilter = ProgramListRelationFilter;
