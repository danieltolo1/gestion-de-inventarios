"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutMovimientosInput_1 = require("../inputs/UserCreateOrConnectWithoutMovimientosInput");
const UserCreateWithoutMovimientosInput_1 = require("../inputs/UserCreateWithoutMovimientosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMovimientosInput = class UserCreateNestedOneWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMovimientosInput_1.UserCreateWithoutMovimientosInput)
], UserCreateNestedOneWithoutMovimientosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovimientosInput_1.UserCreateOrConnectWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutMovimientosInput_1.UserCreateOrConnectWithoutMovimientosInput)
], UserCreateNestedOneWithoutMovimientosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMovimientosInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMovimientosInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutMovimientosInput);
exports.UserCreateNestedOneWithoutMovimientosInput = UserCreateNestedOneWithoutMovimientosInput;
