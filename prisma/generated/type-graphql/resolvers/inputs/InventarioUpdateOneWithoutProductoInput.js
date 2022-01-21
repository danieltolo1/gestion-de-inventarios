"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateOneWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateOrConnectWithoutProductoInput_1 = require("../inputs/InventarioCreateOrConnectWithoutProductoInput");
const InventarioCreateWithoutProductoInput_1 = require("../inputs/InventarioCreateWithoutProductoInput");
const InventarioUpdateWithoutProductoInput_1 = require("../inputs/InventarioUpdateWithoutProductoInput");
const InventarioUpsertWithoutProductoInput_1 = require("../inputs/InventarioUpsertWithoutProductoInput");
const InventarioWhereUniqueInput_1 = require("../inputs/InventarioWhereUniqueInput");
let InventarioUpdateOneWithoutProductoInput = class InventarioUpdateOneWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateWithoutProductoInput_1.InventarioCreateWithoutProductoInput)
], InventarioUpdateOneWithoutProductoInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateOrConnectWithoutProductoInput_1.InventarioCreateOrConnectWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateOrConnectWithoutProductoInput_1.InventarioCreateOrConnectWithoutProductoInput)
], InventarioUpdateOneWithoutProductoInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpsertWithoutProductoInput_1.InventarioUpsertWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpsertWithoutProductoInput_1.InventarioUpsertWithoutProductoInput)
], InventarioUpdateOneWithoutProductoInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InventarioUpdateOneWithoutProductoInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InventarioUpdateOneWithoutProductoInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], InventarioUpdateOneWithoutProductoInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateWithoutProductoInput_1.InventarioUpdateWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateWithoutProductoInput_1.InventarioUpdateWithoutProductoInput)
], InventarioUpdateOneWithoutProductoInput.prototype, "update", void 0);
InventarioUpdateOneWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateOneWithoutProductoInput", {
        isAbstract: true
    })
], InventarioUpdateOneWithoutProductoInput);
exports.InventarioUpdateOneWithoutProductoInput = InventarioUpdateOneWithoutProductoInput;
