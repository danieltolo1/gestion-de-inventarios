"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerSumAggregate = class PartComputerSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerSumAggregate.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerSumAggregate.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerSumAggregate.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerSumAggregate.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerSumAggregate.prototype, "maintenanceId", void 0);
PartComputerSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PartComputerSumAggregate", {
        isAbstract: true
    })
], PartComputerSumAggregate);
exports.PartComputerSumAggregate = PartComputerSumAggregate;
