"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateNestedOneWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateOrConnectWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateOrConnectWithoutMovimientoInventarioInput");
const InventarioCreateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateWithoutMovimientoInventarioInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioCreateNestedOneWithoutMovimientoInventarioInput = class InventarioCreateNestedOneWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput)
], InventarioCreateNestedOneWithoutMovimientoInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateOrConnectWithoutMovimientoInventarioInput_1.InventarioCreateOrConnectWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateOrConnectWithoutMovimientoInventarioInput_1.InventarioCreateOrConnectWithoutMovimientoInventarioInput)
], InventarioCreateNestedOneWithoutMovimientoInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioCreateNestedOneWithoutMovimientoInventarioInput.prototype, "connect", void 0);
InventarioCreateNestedOneWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateNestedOneWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioCreateNestedOneWithoutMovimientoInventarioInput);
exports.InventarioCreateNestedOneWithoutMovimientoInventarioInput = InventarioCreateNestedOneWithoutMovimientoInventarioInput;
