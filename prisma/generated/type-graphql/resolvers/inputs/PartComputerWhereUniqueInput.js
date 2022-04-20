"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerWhereUniqueInput = class PartComputerWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerWhereUniqueInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerWhereUniqueInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerWhereUniqueInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerWhereUniqueInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerWhereUniqueInput.prototype, "maintenanceId", void 0);
PartComputerWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerWhereUniqueInput", {
        isAbstract: true
    })
], PartComputerWhereUniqueInput);
exports.PartComputerWhereUniqueInput = PartComputerWhereUniqueInput;
