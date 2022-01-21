"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpsertWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateWithoutProductoInput_1 = require("../inputs/InventarioCreateWithoutProductoInput");
const InventarioUpdateWithoutProductoInput_1 = require("../inputs/InventarioUpdateWithoutProductoInput");
let InventarioUpsertWithoutProductoInput = class InventarioUpsertWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateWithoutProductoInput_1.InventarioUpdateWithoutProductoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateWithoutProductoInput_1.InventarioUpdateWithoutProductoInput)
], InventarioUpsertWithoutProductoInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput)
], InventarioUpsertWithoutProductoInput.prototype, "create", void 0);
InventarioUpsertWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpsertWithoutProductoInput", {
        isAbstract: true
    })
], InventarioUpsertWithoutProductoInput);
exports.InventarioUpsertWithoutProductoInput = InventarioUpsertWithoutProductoInput;
