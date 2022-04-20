"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramOrderByWithRelationInput_1 = require("../../../inputs/ProgramOrderByWithRelationInput");
const ProgramWhereInput_1 = require("../../../inputs/ProgramWhereInput");
const ProgramWhereUniqueInput_1 = require("../../../inputs/ProgramWhereUniqueInput");
let AggregateProgramArgs = class AggregateProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], AggregateProgramArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramOrderByWithRelationInput_1.ProgramOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateProgramArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], AggregateProgramArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProgramArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProgramArgs.prototype, "skip", void 0);
AggregateProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateProgramArgs);
exports.AggregateProgramArgs = AggregateProgramArgs;
