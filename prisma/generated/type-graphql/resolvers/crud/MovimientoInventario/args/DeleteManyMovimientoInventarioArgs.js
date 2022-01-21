"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioWhereInput_1 = require("../../../inputs/MovimientoInventarioWhereInput");
let DeleteManyMovimientoInventarioArgs = class DeleteManyMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], DeleteManyMovimientoInventarioArgs.prototype, "where", void 0);
DeleteManyMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyMovimientoInventarioArgs);
exports.DeleteManyMovimientoInventarioArgs = DeleteManyMovimientoInventarioArgs;
