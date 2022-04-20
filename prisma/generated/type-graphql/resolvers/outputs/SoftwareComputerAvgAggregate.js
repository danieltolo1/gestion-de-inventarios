"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SoftwareComputerAvgAggregate = class SoftwareComputerAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerAvgAggregate.prototype, "id_softwarecomputer", void 0);
SoftwareComputerAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputerAvgAggregate", {
        isAbstract: true
    })
], SoftwareComputerAvgAggregate);
exports.SoftwareComputerAvgAggregate = SoftwareComputerAvgAggregate;
