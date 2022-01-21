"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpsertWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateWithoutMovimientoInventarioInput");
const InventarioUpdateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioUpdateWithoutMovimientoInventarioInput");
let InventarioUpsertWithoutMovimientoInventarioInput = class InventarioUpsertWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateWithoutMovimientoInventarioInput_1.InventarioUpdateWithoutMovimientoInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateWithoutMovimientoInventarioInput_1.InventarioUpdateWithoutMovimientoInventarioInput)
], InventarioUpsertWithoutMovimientoInventarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput)
], InventarioUpsertWithoutMovimientoInventarioInput.prototype, "create", void 0);
InventarioUpsertWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpsertWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioUpsertWithoutMovimientoInventarioInput);
exports.InventarioUpsertWithoutMovimientoInventarioInput = InventarioUpsertWithoutMovimientoInventarioInput;
