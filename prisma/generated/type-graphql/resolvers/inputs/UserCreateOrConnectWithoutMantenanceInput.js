"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMantenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutMantenanceInput_1 = require("../inputs/UserCreateWithoutMantenanceInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMantenanceInput = class UserCreateOrConnectWithoutMantenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMantenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput)
], UserCreateOrConnectWithoutMantenanceInput.prototype, "create", void 0);
UserCreateOrConnectWithoutMantenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMantenanceInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutMantenanceInput);
exports.UserCreateOrConnectWithoutMantenanceInput = UserCreateOrConnectWithoutMantenanceInput;
