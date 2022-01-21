"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateOrConnectWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateWithoutMovimientoInventarioInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioCreateOrConnectWithoutMovimientoInventarioInput = class InventarioCreateOrConnectWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioCreateOrConnectWithoutMovimientoInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput)
], InventarioCreateOrConnectWithoutMovimientoInventarioInput.prototype, "create", void 0);
InventarioCreateOrConnectWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateOrConnectWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioCreateOrConnectWithoutMovimientoInventarioInput);
exports.InventarioCreateOrConnectWithoutMovimientoInventarioInput = InventarioCreateOrConnectWithoutMovimientoInventarioInput;
