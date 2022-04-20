"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramOrderByWithRelationInput_1 = require("../../../inputs/ProgramOrderByWithRelationInput");
const ProgramWhereInput_1 = require("../../../inputs/ProgramWhereInput");
const ProgramWhereUniqueInput_1 = require("../../../inputs/ProgramWhereUniqueInput");
const ProgramScalarFieldEnum_1 = require("../../../../enums/ProgramScalarFieldEnum");
let SoftwareComputerProgramArgs = class SoftwareComputerProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], SoftwareComputerProgramArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramOrderByWithRelationInput_1.ProgramOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerProgramArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], SoftwareComputerProgramArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerProgramArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerProgramArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramScalarFieldEnum_1.ProgramScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerProgramArgs.prototype, "distinct", void 0);
SoftwareComputerProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], SoftwareComputerProgramArgs);
exports.SoftwareComputerProgramArgs = SoftwareComputerProgramArgs;
