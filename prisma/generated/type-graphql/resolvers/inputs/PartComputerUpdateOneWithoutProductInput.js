"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateOrConnectWithoutProductInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutProductInput");
const PartComputerCreateWithoutProductInput_1 = require("../inputs/PartComputerCreateWithoutProductInput");
const PartComputerUpdateWithoutProductInput_1 = require("../inputs/PartComputerUpdateWithoutProductInput");
const PartComputerUpsertWithoutProductInput_1 = require("../inputs/PartComputerUpsertWithoutProductInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateOneWithoutProductInput = class PartComputerUpdateOneWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput)
], PartComputerUpdateOneWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateOrConnectWithoutProductInput_1.PartComputerCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateOrConnectWithoutProductInput_1.PartComputerCreateOrConnectWithoutProductInput)
], PartComputerUpdateOneWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpsertWithoutProductInput_1.PartComputerUpsertWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpsertWithoutProductInput_1.PartComputerUpsertWithoutProductInput)
], PartComputerUpdateOneWithoutProductInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PartComputerUpdateOneWithoutProductInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PartComputerUpdateOneWithoutProductInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpdateOneWithoutProductInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutProductInput_1.PartComputerUpdateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutProductInput_1.PartComputerUpdateWithoutProductInput)
], PartComputerUpdateOneWithoutProductInput.prototype, "update", void 0);
PartComputerUpdateOneWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateOneWithoutProductInput", {
        isAbstract: true
    })
], PartComputerUpdateOneWithoutProductInput);
exports.PartComputerUpdateOneWithoutProductInput = PartComputerUpdateOneWithoutProductInput;
