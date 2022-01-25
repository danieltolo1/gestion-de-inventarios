"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateNestedManyWithoutUsuarioInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1.MovimientoInventarioCreateNestedManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1.MovimientoInventarioCreateNestedManyWithoutUsuarioInput)
], UserCreateWithoutAccountsInput.prototype, "movimientos", void 0);
UserCreateWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
        isAbstract: true
    })
], UserCreateWithoutAccountsInput);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
