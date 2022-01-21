"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateInput_1 = require("../../../inputs/MovimientoInventarioCreateInput");
let CreateMovimientoInventarioArgs = class CreateMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateInput_1.MovimientoInventarioCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateInput_1.MovimientoInventarioCreateInput)
], CreateMovimientoInventarioArgs.prototype, "data", void 0);
CreateMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateMovimientoInventarioArgs);
exports.CreateMovimientoInventarioArgs = CreateMovimientoInventarioArgs;
