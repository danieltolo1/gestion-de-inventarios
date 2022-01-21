"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateOrConnectWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutInventarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioCreateOrConnectWithoutInventarioInput = class MovimientoInventarioCreateOrConnectWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioCreateOrConnectWithoutInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput)
], MovimientoInventarioCreateOrConnectWithoutInventarioInput.prototype, "create", void 0);
MovimientoInventarioCreateOrConnectWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateOrConnectWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateOrConnectWithoutInventarioInput);
exports.MovimientoInventarioCreateOrConnectWithoutInventarioInput = MovimientoInventarioCreateOrConnectWithoutInventarioInput;
