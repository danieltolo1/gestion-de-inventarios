"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioOrderByWithRelationInput_1 = require("../../../inputs/MovimientoInventarioOrderByWithRelationInput");
const MovimientoInventarioWhereInput_1 = require("../../../inputs/MovimientoInventarioWhereInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
const MovimientoInventarioScalarFieldEnum_1 = require("../../../../enums/MovimientoInventarioScalarFieldEnum");
let FindFirstMovimientoInventarioArgs = class FindFirstMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], FindFirstMovimientoInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioOrderByWithRelationInput_1.MovimientoInventarioOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstMovimientoInventarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], FindFirstMovimientoInventarioArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstMovimientoInventarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstMovimientoInventarioArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarFieldEnum_1.MovimientoInventarioScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstMovimientoInventarioArgs.prototype, "distinct", void 0);
FindFirstMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstMovimientoInventarioArgs);
exports.FindFirstMovimientoInventarioArgs = FindFirstMovimientoInventarioArgs;
