"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateOrConnectWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateOrConnectWithoutMovimientoInventarioInput");
const InventarioCreateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateWithoutMovimientoInventarioInput");
const InventarioUpdateWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioUpdateWithoutMovimientoInventarioInput");
const InventarioUpsertWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioUpsertWithoutMovimientoInventarioInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioUpdateOneRequiredWithoutMovimientoInventarioInput = class InventarioUpdateOneRequiredWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutMovimientoInventarioInput_1.InventarioCreateWithoutMovimientoInventarioInput)
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateOrConnectWithoutMovimientoInventarioInput_1.InventarioCreateOrConnectWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateOrConnectWithoutMovimientoInventarioInput_1.InventarioCreateOrConnectWithoutMovimientoInventarioInput)
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpsertWithoutMovimientoInventarioInput_1.InventarioUpsertWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpsertWithoutMovimientoInventarioInput_1.InventarioUpsertWithoutMovimientoInventarioInput)
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateWithoutMovimientoInventarioInput_1.InventarioUpdateWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateWithoutMovimientoInventarioInput_1.InventarioUpdateWithoutMovimientoInventarioInput)
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput.prototype, "update", void 0);
InventarioUpdateOneRequiredWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateOneRequiredWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioUpdateOneRequiredWithoutMovimientoInventarioInput);
exports.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput = InventarioUpdateOneRequiredWithoutMovimientoInventarioInput;
