"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioUpdateManyMutationInput_1 = require("../../../inputs/MovimientoInventarioUpdateManyMutationInput");
const MovimientoInventarioWhereInput_1 = require("../../../inputs/MovimientoInventarioWhereInput");
let UpdateManyMovimientoInventarioArgs = class UpdateManyMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput)
], UpdateManyMovimientoInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], UpdateManyMovimientoInventarioArgs.prototype, "where", void 0);
UpdateManyMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyMovimientoInventarioArgs);
exports.UpdateManyMovimientoInventarioArgs = UpdateManyMovimientoInventarioArgs;
