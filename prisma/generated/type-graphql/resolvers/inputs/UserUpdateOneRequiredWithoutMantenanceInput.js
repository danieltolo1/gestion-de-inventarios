"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMantenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutMantenanceInput_1 = require("../inputs/UserCreateOrConnectWithoutMantenanceInput");
const UserCreateWithoutMantenanceInput_1 = require("../inputs/UserCreateWithoutMantenanceInput");
const UserUpdateWithoutMantenanceInput_1 = require("../inputs/UserUpdateWithoutMantenanceInput");
const UserUpsertWithoutMantenanceInput_1 = require("../inputs/UserUpsertWithoutMantenanceInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMantenanceInput = class UserUpdateOneRequiredWithoutMantenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput)
], UserUpdateOneRequiredWithoutMantenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMantenanceInput_1.UserCreateOrConnectWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutMantenanceInput_1.UserCreateOrConnectWithoutMantenanceInput)
], UserUpdateOneRequiredWithoutMantenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutMantenanceInput_1.UserUpsertWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutMantenanceInput_1.UserUpsertWithoutMantenanceInput)
], UserUpdateOneRequiredWithoutMantenanceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMantenanceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutMantenanceInput_1.UserUpdateWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutMantenanceInput_1.UserUpdateWithoutMantenanceInput)
], UserUpdateOneRequiredWithoutMantenanceInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutMantenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMantenanceInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutMantenanceInput);
exports.UserUpdateOneRequiredWithoutMantenanceInput = UserUpdateOneRequiredWithoutMantenanceInput;
