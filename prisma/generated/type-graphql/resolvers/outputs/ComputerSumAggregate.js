"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ComputerSumAggregate = class ComputerSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerSumAggregate.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerSumAggregate.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerSumAggregate.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerSumAggregate.prototype, "softwarecomputerId", void 0);
ComputerSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ComputerSumAggregate", {
        isAbstract: true
    })
], ComputerSumAggregate);
exports.ComputerSumAggregate = ComputerSumAggregate;
