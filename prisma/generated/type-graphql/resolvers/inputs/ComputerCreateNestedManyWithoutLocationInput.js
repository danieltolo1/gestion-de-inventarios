"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyLocationInputEnvelope_1 = require("../inputs/ComputerCreateManyLocationInputEnvelope");
const ComputerCreateOrConnectWithoutLocationInput_1 = require("../inputs/ComputerCreateOrConnectWithoutLocationInput");
const ComputerCreateWithoutLocationInput_1 = require("../inputs/ComputerCreateWithoutLocationInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedManyWithoutLocationInput = class ComputerCreateNestedManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutLocationInput_1.ComputerCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManyLocationInputEnvelope_1.ComputerCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManyLocationInputEnvelope_1.ComputerCreateManyLocationInputEnvelope)
], ComputerCreateNestedManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutLocationInput.prototype, "connect", void 0);
ComputerCreateNestedManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedManyWithoutLocationInput", {
        isAbstract: true
    })
], ComputerCreateNestedManyWithoutLocationInput);
exports.ComputerCreateNestedManyWithoutLocationInput = ComputerCreateNestedManyWithoutLocationInput;
