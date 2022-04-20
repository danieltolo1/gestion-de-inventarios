"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyComputerInputEnvelope_1 = require("../inputs/PartComputerCreateManyComputerInputEnvelope");
const PartComputerCreateOrConnectWithoutComputerInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutComputerInput");
const PartComputerCreateWithoutComputerInput_1 = require("../inputs/PartComputerCreateWithoutComputerInput");
const PartComputerScalarWhereInput_1 = require("../inputs/PartComputerScalarWhereInput");
const PartComputerUpdateManyWithWhereWithoutComputerInput_1 = require("../inputs/PartComputerUpdateManyWithWhereWithoutComputerInput");
const PartComputerUpdateWithWhereUniqueWithoutComputerInput_1 = require("../inputs/PartComputerUpdateWithWhereUniqueWithoutComputerInput");
const PartComputerUpsertWithWhereUniqueWithoutComputerInput_1 = require("../inputs/PartComputerUpsertWithWhereUniqueWithoutComputerInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateManyWithoutComputerInput = class PartComputerUpdateManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutComputerInput_1.PartComputerCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpsertWithWhereUniqueWithoutComputerInput_1.PartComputerUpsertWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyComputerInputEnvelope_1.PartComputerCreateManyComputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyComputerInputEnvelope_1.PartComputerCreateManyComputerInputEnvelope)
], PartComputerUpdateManyWithoutComputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateWithWhereUniqueWithoutComputerInput_1.PartComputerUpdateWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateManyWithWhereWithoutComputerInput_1.PartComputerUpdateManyWithWhereWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1.PartComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutComputerInput.prototype, "deleteMany", void 0);
PartComputerUpdateManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateManyWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerUpdateManyWithoutComputerInput);
exports.PartComputerUpdateManyWithoutComputerInput = PartComputerUpdateManyWithoutComputerInput;
