"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ComputerWhereUniqueInput = class ComputerWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerWhereUniqueInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerWhereUniqueInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerWhereUniqueInput.prototype, "softwarecomputerId", void 0);
ComputerWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerWhereUniqueInput", {
        isAbstract: true
    })
], ComputerWhereUniqueInput);
exports.ComputerWhereUniqueInput = ComputerWhereUniqueInput;
