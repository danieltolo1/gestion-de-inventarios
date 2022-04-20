"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManySoftwarecomputerInputEnvelope_1 = require("../inputs/ComputerCreateManySoftwarecomputerInputEnvelope");
const ComputerCreateOrConnectWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateOrConnectWithoutSoftwarecomputerInput");
const ComputerCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateWithoutSoftwarecomputerInput");
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput");
const ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput");
const ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateManyWithoutSoftwarecomputerInput = class ComputerUpdateManyWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutSoftwarecomputerInput_1.ComputerCreateOrConnectWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput_1.ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManySoftwarecomputerInputEnvelope_1.ComputerCreateManySoftwarecomputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManySoftwarecomputerInputEnvelope_1.ComputerCreateManySoftwarecomputerInputEnvelope)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput_1.ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput_1.ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereInput_1.ComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutSoftwarecomputerInput.prototype, "deleteMany", void 0);
ComputerUpdateManyWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithoutSoftwarecomputerInput);
exports.ComputerUpdateManyWithoutSoftwarecomputerInput = ComputerUpdateManyWithoutSoftwarecomputerInput;
