"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateOneRequiredWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateOrConnectWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateOrConnectWithoutProgramInput");
const SoftwareComputerCreateWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateWithoutProgramInput");
const SoftwareComputerUpdateWithoutProgramInput_1 = require("../inputs/SoftwareComputerUpdateWithoutProgramInput");
const SoftwareComputerUpsertWithoutProgramInput_1 = require("../inputs/SoftwareComputerUpsertWithoutProgramInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerUpdateOneRequiredWithoutProgramInput = class SoftwareComputerUpdateOneRequiredWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput)
], SoftwareComputerUpdateOneRequiredWithoutProgramInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateOrConnectWithoutProgramInput_1.SoftwareComputerCreateOrConnectWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateOrConnectWithoutProgramInput_1.SoftwareComputerCreateOrConnectWithoutProgramInput)
], SoftwareComputerUpdateOneRequiredWithoutProgramInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpsertWithoutProgramInput_1.SoftwareComputerUpsertWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpsertWithoutProgramInput_1.SoftwareComputerUpsertWithoutProgramInput)
], SoftwareComputerUpdateOneRequiredWithoutProgramInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerUpdateOneRequiredWithoutProgramInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateWithoutProgramInput_1.SoftwareComputerUpdateWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateWithoutProgramInput_1.SoftwareComputerUpdateWithoutProgramInput)
], SoftwareComputerUpdateOneRequiredWithoutProgramInput.prototype, "update", void 0);
SoftwareComputerUpdateOneRequiredWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateOneRequiredWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateOneRequiredWithoutProgramInput);
exports.SoftwareComputerUpdateOneRequiredWithoutProgramInput = SoftwareComputerUpdateOneRequiredWithoutProgramInput;
