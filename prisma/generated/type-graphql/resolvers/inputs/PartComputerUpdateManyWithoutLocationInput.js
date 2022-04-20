"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyLocationInputEnvelope_1 = require("../inputs/PartComputerCreateManyLocationInputEnvelope");
const PartComputerCreateOrConnectWithoutLocationInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutLocationInput");
const PartComputerCreateWithoutLocationInput_1 = require("../inputs/PartComputerCreateWithoutLocationInput");
const PartComputerScalarWhereInput_1 = require("../inputs/PartComputerScalarWhereInput");
const PartComputerUpdateManyWithWhereWithoutLocationInput_1 = require("../inputs/PartComputerUpdateManyWithWhereWithoutLocationInput");
const PartComputerUpdateWithWhereUniqueWithoutLocationInput_1 = require("../inputs/PartComputerUpdateWithWhereUniqueWithoutLocationInput");
const PartComputerUpsertWithWhereUniqueWithoutLocationInput_1 = require("../inputs/PartComputerUpsertWithWhereUniqueWithoutLocationInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateManyWithoutLocationInput = class PartComputerUpdateManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutLocationInput_1.PartComputerCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpsertWithWhereUniqueWithoutLocationInput_1.PartComputerUpsertWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyLocationInputEnvelope_1.PartComputerCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyLocationInputEnvelope_1.PartComputerCreateManyLocationInputEnvelope)
], PartComputerUpdateManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateWithWhereUniqueWithoutLocationInput_1.PartComputerUpdateWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateManyWithWhereWithoutLocationInput_1.PartComputerUpdateManyWithWhereWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1.PartComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutLocationInput.prototype, "deleteMany", void 0);
PartComputerUpdateManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateManyWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerUpdateManyWithoutLocationInput);
exports.PartComputerUpdateManyWithoutLocationInput = PartComputerUpdateManyWithoutLocationInput;
