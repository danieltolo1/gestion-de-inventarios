"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioOrderByWithRelationInput_1 = require("../../../inputs/MovimientoInventarioOrderByWithRelationInput");
const MovimientoInventarioWhereInput_1 = require("../../../inputs/MovimientoInventarioWhereInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
const MovimientoInventarioScalarFieldEnum_1 = require("../../../../enums/MovimientoInventarioScalarFieldEnum");
let InventarioMovimientoInventarioArgs = class InventarioMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], InventarioMovimientoInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioOrderByWithRelationInput_1.MovimientoInventarioOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InventarioMovimientoInventarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], InventarioMovimientoInventarioArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioMovimientoInventarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioMovimientoInventarioArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarFieldEnum_1.MovimientoInventarioScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InventarioMovimientoInventarioArgs.prototype, "distinct", void 0);
InventarioMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], InventarioMovimientoInventarioArgs);
exports.InventarioMovimientoInventarioArgs = InventarioMovimientoInventarioArgs;
