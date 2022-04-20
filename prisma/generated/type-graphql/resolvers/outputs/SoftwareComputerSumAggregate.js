"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SoftwareComputerSumAggregate = class SoftwareComputerSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerSumAggregate.prototype, "id_softwarecomputer", void 0);
SoftwareComputerSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputerSumAggregate", {
        isAbstract: true
    })
], SoftwareComputerSumAggregate);
exports.SoftwareComputerSumAggregate = SoftwareComputerSumAggregate;
