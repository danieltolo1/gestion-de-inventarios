"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SoftwareComputerWhereUniqueInput = class SoftwareComputerWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerWhereUniqueInput.prototype, "id_softwarecomputer", void 0);
SoftwareComputerWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerWhereUniqueInput", {
        isAbstract: true
    })
], SoftwareComputerWhereUniqueInput);
exports.SoftwareComputerWhereUniqueInput = SoftwareComputerWhereUniqueInput;
