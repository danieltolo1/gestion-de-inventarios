"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyLocationInputEnvelope_1 = require("../inputs/ComputerCreateManyLocationInputEnvelope");
const ComputerCreateOrConnectWithoutLocationInput_1 = require("../inputs/ComputerCreateOrConnectWithoutLocationInput");
const ComputerCreateWithoutLocationInput_1 = require("../inputs/ComputerCreateWithoutLocationInput");
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyWithWhereWithoutLocationInput_1 = require("../inputs/ComputerUpdateManyWithWhereWithoutLocationInput");
const ComputerUpdateWithWhereUniqueWithoutLocationInput_1 = require("../inputs/ComputerUpdateWithWhereUniqueWithoutLocationInput");
const ComputerUpsertWithWhereUniqueWithoutLocationInput_1 = require("../inputs/ComputerUpsertWithWhereUniqueWithoutLocationInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateManyWithoutLocationInput = class ComputerUpdateManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutLocationInput_1.ComputerCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpsertWithWhereUniqueWithoutLocationInput_1.ComputerUpsertWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManyLocationInputEnvelope_1.ComputerCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManyLocationInputEnvelope_1.ComputerCreateManyLocationInputEnvelope)
], ComputerUpdateManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateWithWhereUniqueWithoutLocationInput_1.ComputerUpdateWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateManyWithWhereWithoutLocationInput_1.ComputerUpdateManyWithWhereWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereInput_1.ComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutLocationInput.prototype, "deleteMany", void 0);
ComputerUpdateManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithoutLocationInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithoutLocationInput);
exports.ComputerUpdateManyWithoutLocationInput = ComputerUpdateManyWithoutLocationInput;
