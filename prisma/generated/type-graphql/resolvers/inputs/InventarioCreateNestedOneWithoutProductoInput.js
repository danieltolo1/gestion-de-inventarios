"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateNestedOneWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateOrConnectWithoutProductoInput_1 = require("../inputs/InventarioCreateOrConnectWithoutProductoInput");
const InventarioCreateWithoutProductoInput_1 = require("../inputs/InventarioCreateWithoutProductoInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioCreateNestedOneWithoutProductoInput = class InventarioCreateNestedOneWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput)
], InventarioCreateNestedOneWithoutProductoInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateOrConnectWithoutProductoInput_1.InventarioCreateOrConnectWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateOrConnectWithoutProductoInput_1.InventarioCreateOrConnectWithoutProductoInput)
], InventarioCreateNestedOneWithoutProductoInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioCreateNestedOneWithoutProductoInput.prototype, "connect", void 0);
InventarioCreateNestedOneWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateNestedOneWithoutProductoInput", {
        isAbstract: true
    })
], InventarioCreateNestedOneWithoutProductoInput);
exports.InventarioCreateNestedOneWithoutProductoInput = InventarioCreateNestedOneWithoutProductoInput;
