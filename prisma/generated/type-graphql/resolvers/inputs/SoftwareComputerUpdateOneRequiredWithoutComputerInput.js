"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateOneRequiredWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateOrConnectWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateOrConnectWithoutComputerInput");
const SoftwareComputerCreateWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateWithoutComputerInput");
const SoftwareComputerUpdateWithoutComputerInput_1 = require("../inputs/SoftwareComputerUpdateWithoutComputerInput");
const SoftwareComputerUpsertWithoutComputerInput_1 = require("../inputs/SoftwareComputerUpsertWithoutComputerInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerUpdateOneRequiredWithoutComputerInput = class SoftwareComputerUpdateOneRequiredWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput)
], SoftwareComputerUpdateOneRequiredWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateOrConnectWithoutComputerInput_1.SoftwareComputerCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateOrConnectWithoutComputerInput_1.SoftwareComputerCreateOrConnectWithoutComputerInput)
], SoftwareComputerUpdateOneRequiredWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpsertWithoutComputerInput_1.SoftwareComputerUpsertWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpsertWithoutComputerInput_1.SoftwareComputerUpsertWithoutComputerInput)
], SoftwareComputerUpdateOneRequiredWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerUpdateOneRequiredWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateWithoutComputerInput_1.SoftwareComputerUpdateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateWithoutComputerInput_1.SoftwareComputerUpdateWithoutComputerInput)
], SoftwareComputerUpdateOneRequiredWithoutComputerInput.prototype, "update", void 0);
SoftwareComputerUpdateOneRequiredWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateOneRequiredWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateOneRequiredWithoutComputerInput);
exports.SoftwareComputerUpdateOneRequiredWithoutComputerInput = SoftwareComputerUpdateOneRequiredWithoutComputerInput;
