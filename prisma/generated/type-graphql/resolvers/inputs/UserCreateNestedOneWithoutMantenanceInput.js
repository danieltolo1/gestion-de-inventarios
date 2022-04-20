"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMantenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutMantenanceInput_1 = require("../inputs/UserCreateOrConnectWithoutMantenanceInput");
const UserCreateWithoutMantenanceInput_1 = require("../inputs/UserCreateWithoutMantenanceInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMantenanceInput = class UserCreateNestedOneWithoutMantenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput)
], UserCreateNestedOneWithoutMantenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMantenanceInput_1.UserCreateOrConnectWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutMantenanceInput_1.UserCreateOrConnectWithoutMantenanceInput)
], UserCreateNestedOneWithoutMantenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMantenanceInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMantenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMantenanceInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutMantenanceInput);
exports.UserCreateNestedOneWithoutMantenanceInput = UserCreateNestedOneWithoutMantenanceInput;
