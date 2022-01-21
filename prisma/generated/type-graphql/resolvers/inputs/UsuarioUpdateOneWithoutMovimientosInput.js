"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutMovimientosInput");
const UsuarioCreateWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateWithoutMovimientosInput");
const UsuarioUpdateWithoutMovimientosInput_1 = require("../inputs/UsuarioUpdateWithoutMovimientosInput");
const UsuarioUpsertWithoutMovimientosInput_1 = require("../inputs/UsuarioUpsertWithoutMovimientosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneWithoutMovimientosInput = class UsuarioUpdateOneWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutMovimientosInput_1.UsuarioCreateOrConnectWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutMovimientosInput_1.UsuarioCreateOrConnectWithoutMovimientosInput)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutMovimientosInput_1.UsuarioUpsertWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpsertWithoutMovimientosInput_1.UsuarioUpsertWithoutMovimientosInput)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutMovimientosInput_1.UsuarioUpdateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutMovimientosInput_1.UsuarioUpdateWithoutMovimientosInput)
], UsuarioUpdateOneWithoutMovimientosInput.prototype, "update", void 0);
UsuarioUpdateOneWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateOneWithoutMovimientosInput", {
        isAbstract: true
    })
], UsuarioUpdateOneWithoutMovimientosInput);
exports.UsuarioUpdateOneWithoutMovimientosInput = UsuarioUpdateOneWithoutMovimientosInput;
