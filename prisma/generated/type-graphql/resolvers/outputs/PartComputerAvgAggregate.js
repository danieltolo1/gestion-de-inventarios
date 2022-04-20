"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerAvgAggregate = class PartComputerAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerAvgAggregate.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerAvgAggregate.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerAvgAggregate.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerAvgAggregate.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerAvgAggregate.prototype, "maintenanceId", void 0);
PartComputerAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PartComputerAvgAggregate", {
        isAbstract: true
    })
], PartComputerAvgAggregate);
exports.PartComputerAvgAggregate = PartComputerAvgAggregate;
