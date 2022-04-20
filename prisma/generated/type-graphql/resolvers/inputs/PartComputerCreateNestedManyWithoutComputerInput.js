"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateNestedManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyComputerInputEnvelope_1 = require("../inputs/PartComputerCreateManyComputerInputEnvelope");
const PartComputerCreateOrConnectWithoutComputerInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutComputerInput");
const PartComputerCreateWithoutComputerInput_1 = require("../inputs/PartComputerCreateWithoutComputerInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateNestedManyWithoutComputerInput = class PartComputerCreateNestedManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutComputerInput_1.PartComputerCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyComputerInputEnvelope_1.PartComputerCreateManyComputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyComputerInputEnvelope_1.PartComputerCreateManyComputerInputEnvelope)
], PartComputerCreateNestedManyWithoutComputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutComputerInput.prototype, "connect", void 0);
PartComputerCreateNestedManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateNestedManyWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerCreateNestedManyWithoutComputerInput);
exports.PartComputerCreateNestedManyWithoutComputerInput = PartComputerCreateNestedManyWithoutComputerInput;
