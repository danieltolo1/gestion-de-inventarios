"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutMovimientosInput_1 = require("../inputs/UserCreateWithoutMovimientosInput");
const UserUpdateWithoutMovimientosInput_1 = require("../inputs/UserUpdateWithoutMovimientosInput");
let UserUpsertWithoutMovimientosInput = class UserUpsertWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutMovimientosInput_1.UserUpdateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutMovimientosInput_1.UserUpdateWithoutMovimientosInput)
], UserUpsertWithoutMovimientosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput)
], UserUpsertWithoutMovimientosInput.prototype, "create", void 0);
UserUpsertWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutMovimientosInput", {
        isAbstract: true
    })
], UserUpsertWithoutMovimientosInput);
exports.UserUpsertWithoutMovimientosInput = UserUpsertWithoutMovimientosInput;
