"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedManyWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyStateInputEnvelope_1 = require("../inputs/ComputerCreateManyStateInputEnvelope");
const ComputerCreateOrConnectWithoutStateInput_1 = require("../inputs/ComputerCreateOrConnectWithoutStateInput");
const ComputerCreateWithoutStateInput_1 = require("../inputs/ComputerCreateWithoutStateInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedManyWithoutStateInput = class ComputerCreateNestedManyWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutStateInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutStateInput_1.ComputerCreateOrConnectWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutStateInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManyStateInputEnvelope_1.ComputerCreateManyStateInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManyStateInputEnvelope_1.ComputerCreateManyStateInputEnvelope)
], ComputerCreateNestedManyWithoutStateInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutStateInput.prototype, "connect", void 0);
ComputerCreateNestedManyWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedManyWithoutStateInput", {
        isAbstract: true
    })
], ComputerCreateNestedManyWithoutStateInput);
exports.ComputerCreateNestedManyWithoutStateInput = ComputerCreateNestedManyWithoutStateInput;
