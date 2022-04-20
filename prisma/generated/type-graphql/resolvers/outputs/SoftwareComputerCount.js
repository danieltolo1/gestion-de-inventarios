"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SoftwareComputerCount = class SoftwareComputerCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCount.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCount.prototype, "program", void 0);
SoftwareComputerCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputerCount", {
        isAbstract: true
    })
], SoftwareComputerCount);
exports.SoftwareComputerCount = SoftwareComputerCount;
