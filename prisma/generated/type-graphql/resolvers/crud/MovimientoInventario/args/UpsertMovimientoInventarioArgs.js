"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateInput_1 = require("../../../inputs/MovimientoInventarioCreateInput");
const MovimientoInventarioUpdateInput_1 = require("../../../inputs/MovimientoInventarioUpdateInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
let UpsertMovimientoInventarioArgs = class UpsertMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], UpsertMovimientoInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateInput_1.MovimientoInventarioCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateInput_1.MovimientoInventarioCreateInput)
], UpsertMovimientoInventarioArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateInput_1.MovimientoInventarioUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateInput_1.MovimientoInventarioUpdateInput)
], UpsertMovimientoInventarioArgs.prototype, "update", void 0);
UpsertMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertMovimientoInventarioArgs);
exports.UpsertMovimientoInventarioArgs = UpsertMovimientoInventarioArgs;
