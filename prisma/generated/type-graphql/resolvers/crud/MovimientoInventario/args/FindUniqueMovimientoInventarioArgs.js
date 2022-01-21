"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
let FindUniqueMovimientoInventarioArgs = class FindUniqueMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], FindUniqueMovimientoInventarioArgs.prototype, "where", void 0);
FindUniqueMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueMovimientoInventarioArgs);
exports.FindUniqueMovimientoInventarioArgs = FindUniqueMovimientoInventarioArgs;
