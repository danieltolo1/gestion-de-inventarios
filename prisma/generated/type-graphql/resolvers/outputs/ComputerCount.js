"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ComputerCount = class ComputerCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerCount.prototype, "partComputer", void 0);
ComputerCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ComputerCount", {
        isAbstract: true
    })
], ComputerCount);
exports.ComputerCount = ComputerCount;
