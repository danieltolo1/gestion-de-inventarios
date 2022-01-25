"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutMovimientosInput_1 = require("../inputs/UserCreateWithoutMovimientosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMovimientosInput = class UserCreateOrConnectWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMovimientosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput)
], UserCreateOrConnectWithoutMovimientosInput.prototype, "create", void 0);
UserCreateOrConnectWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMovimientosInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutMovimientosInput);
exports.UserCreateOrConnectWithoutMovimientosInput = UserCreateOrConnectWithoutMovimientosInput;
