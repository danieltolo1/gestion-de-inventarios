"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateManyWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateManySoftwarecomputerInputEnvelope_1 = require("../inputs/ProgramCreateManySoftwarecomputerInputEnvelope");
const ProgramCreateOrConnectWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateOrConnectWithoutSoftwarecomputerInput");
const ProgramCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateWithoutSoftwarecomputerInput");
const ProgramScalarWhereInput_1 = require("../inputs/ProgramScalarWhereInput");
const ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput");
const ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput");
const ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpdateManyWithoutSoftwarecomputerInput = class ProgramUpdateManyWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateOrConnectWithoutSoftwarecomputerInput_1.ProgramCreateOrConnectWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput_1.ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateManySoftwarecomputerInputEnvelope_1.ProgramCreateManySoftwarecomputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateManySoftwarecomputerInputEnvelope_1.ProgramCreateManySoftwarecomputerInputEnvelope)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput_1.ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput_1.ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramScalarWhereInput_1.ProgramScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutSoftwarecomputerInput.prototype, "deleteMany", void 0);
ProgramUpdateManyWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateManyWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramUpdateManyWithoutSoftwarecomputerInput);
exports.ProgramUpdateManyWithoutSoftwarecomputerInput = ProgramUpdateManyWithoutSoftwarecomputerInput;
