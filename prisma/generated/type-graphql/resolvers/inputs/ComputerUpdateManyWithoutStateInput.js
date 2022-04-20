"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyStateInputEnvelope_1 = require("../inputs/ComputerCreateManyStateInputEnvelope");
const ComputerCreateOrConnectWithoutStateInput_1 = require("../inputs/ComputerCreateOrConnectWithoutStateInput");
const ComputerCreateWithoutStateInput_1 = require("../inputs/ComputerCreateWithoutStateInput");
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyWithWhereWithoutStateInput_1 = require("../inputs/ComputerUpdateManyWithWhereWithoutStateInput");
const ComputerUpdateWithWhereUniqueWithoutStateInput_1 = require("../inputs/ComputerUpdateWithWhereUniqueWithoutStateInput");
const ComputerUpsertWithWhereUniqueWithoutStateInput_1 = require("../inputs/ComputerUpsertWithWhereUniqueWithoutStateInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateManyWithoutStateInput = class ComputerUpdateManyWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutStateInput_1.ComputerCreateOrConnectWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpsertWithWhereUniqueWithoutStateInput_1.ComputerUpsertWithWhereUniqueWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManyStateInputEnvelope_1.ComputerCreateManyStateInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManyStateInputEnvelope_1.ComputerCreateManyStateInputEnvelope)
], ComputerUpdateManyWithoutStateInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateWithWhereUniqueWithoutStateInput_1.ComputerUpdateWithWhereUniqueWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateManyWithWhereWithoutStateInput_1.ComputerUpdateManyWithWhereWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereInput_1.ComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutStateInput.prototype, "deleteMany", void 0);
ComputerUpdateManyWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithoutStateInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithoutStateInput);
exports.ComputerUpdateManyWithoutStateInput = ComputerUpdateManyWithoutStateInput;
