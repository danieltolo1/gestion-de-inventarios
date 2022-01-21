"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateOrConnectWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateWithoutProductoInput_1 = require("../inputs/InventarioCreateWithoutProductoInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioCreateOrConnectWithoutProductoInput = class InventarioCreateOrConnectWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioCreateOrConnectWithoutProductoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput)
], InventarioCreateOrConnectWithoutProductoInput.prototype, "create", void 0);
InventarioCreateOrConnectWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateOrConnectWithoutProductoInput", {
        isAbstract: true
    })
], InventarioCreateOrConnectWithoutProductoInput);
exports.InventarioCreateOrConnectWithoutProductoInput = InventarioCreateOrConnectWithoutProductoInput;
