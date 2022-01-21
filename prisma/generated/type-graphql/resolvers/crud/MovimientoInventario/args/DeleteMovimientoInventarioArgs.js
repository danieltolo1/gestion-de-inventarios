"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
let DeleteMovimientoInventarioArgs = class DeleteMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], DeleteMovimientoInventarioArgs.prototype, "where", void 0);
DeleteMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteMovimientoInventarioArgs);
exports.DeleteMovimientoInventarioArgs = DeleteMovimientoInventarioArgs;
