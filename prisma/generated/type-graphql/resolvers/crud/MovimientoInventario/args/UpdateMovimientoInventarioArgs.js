"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioUpdateInput_1 = require("../../../inputs/MovimientoInventarioUpdateInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../../../inputs/MovimientoInventarioWhereUniqueInput");
let UpdateMovimientoInventarioArgs = class UpdateMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateInput_1.MovimientoInventarioUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateInput_1.MovimientoInventarioUpdateInput)
], UpdateMovimientoInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], UpdateMovimientoInventarioArgs.prototype, "where", void 0);
UpdateMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateMovimientoInventarioArgs);
exports.UpdateMovimientoInventarioArgs = UpdateMovimientoInventarioArgs;
