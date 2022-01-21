"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioScalarWhereInput_1 = require("../inputs/MovimientoInventarioScalarWhereInput");
const MovimientoInventarioUpdateManyMutationInput_1 = require("../inputs/MovimientoInventarioUpdateManyMutationInput");
let MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput = class MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput)
], MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyMutationInput_1.MovimientoInventarioUpdateManyMutationInput)
], MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput.prototype, "data", void 0);
MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput);
exports.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput = MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput;
