"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutMovimientosInput_1 = require("../inputs/UserCreateOrConnectWithoutMovimientosInput");
const UserCreateWithoutMovimientosInput_1 = require("../inputs/UserCreateWithoutMovimientosInput");
const UserUpdateWithoutMovimientosInput_1 = require("../inputs/UserUpdateWithoutMovimientosInput");
const UserUpsertWithoutMovimientosInput_1 = require("../inputs/UserUpsertWithoutMovimientosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutMovimientosInput = class UserUpdateOneWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput)
], UserUpdateOneWithoutMovimientosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovimientosInput_1.UserCreateOrConnectWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutMovimientosInput_1.UserCreateOrConnectWithoutMovimientosInput)
], UserUpdateOneWithoutMovimientosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutMovimientosInput_1.UserUpsertWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutMovimientosInput_1.UserUpsertWithoutMovimientosInput)
], UserUpdateOneWithoutMovimientosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutMovimientosInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutMovimientosInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutMovimientosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutMovimientosInput_1.UserUpdateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutMovimientosInput_1.UserUpdateWithoutMovimientosInput)
], UserUpdateOneWithoutMovimientosInput.prototype, "update", void 0);
UserUpdateOneWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutMovimientosInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutMovimientosInput);
exports.UserUpdateOneWithoutMovimientosInput = UserUpdateOneWithoutMovimientosInput;
