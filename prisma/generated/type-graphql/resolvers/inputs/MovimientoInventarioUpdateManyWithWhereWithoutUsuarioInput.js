"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioScalarWhereInput_1 = require("../inputs/MovimientoInventarioScalarWhereInput");
const MovimientoInventarioUpdateManyMutationInput_1 = require("../inputs/MovimientoInventarioUpdateManyMutationInput");
let MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = class MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput)
], MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput)
], MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput.prototype, "data", void 0);
MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput);
exports.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput;
