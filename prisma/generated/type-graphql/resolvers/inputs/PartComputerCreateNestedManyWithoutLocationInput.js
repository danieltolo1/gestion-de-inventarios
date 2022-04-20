"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateNestedManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyLocationInputEnvelope_1 = require("../inputs/PartComputerCreateManyLocationInputEnvelope");
const PartComputerCreateOrConnectWithoutLocationInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutLocationInput");
const PartComputerCreateWithoutLocationInput_1 = require("../inputs/PartComputerCreateWithoutLocationInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateNestedManyWithoutLocationInput = class PartComputerCreateNestedManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutLocationInput_1.PartComputerCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyLocationInputEnvelope_1.PartComputerCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyLocationInputEnvelope_1.PartComputerCreateManyLocationInputEnvelope)
], PartComputerCreateNestedManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutLocationInput.prototype, "connect", void 0);
PartComputerCreateNestedManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateNestedManyWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerCreateNestedManyWithoutLocationInput);
exports.PartComputerCreateNestedManyWithoutLocationInput = PartComputerCreateNestedManyWithoutLocationInput;
