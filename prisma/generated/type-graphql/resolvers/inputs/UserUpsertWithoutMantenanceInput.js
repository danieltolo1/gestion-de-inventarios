"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMantenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutMantenanceInput_1 = require("../inputs/UserCreateWithoutMantenanceInput");
const UserUpdateWithoutMantenanceInput_1 = require("../inputs/UserUpdateWithoutMantenanceInput");
let UserUpsertWithoutMantenanceInput = class UserUpsertWithoutMantenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutMantenanceInput_1.UserUpdateWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutMantenanceInput_1.UserUpdateWithoutMantenanceInput)
], UserUpsertWithoutMantenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutMantenanceInput_1.UserCreateWithoutMantenanceInput)
], UserUpsertWithoutMantenanceInput.prototype, "create", void 0);
UserUpsertWithoutMantenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutMantenanceInput", {
        isAbstract: true
    })
], UserUpsertWithoutMantenanceInput);
exports.UserUpsertWithoutMantenanceInput = UserUpsertWithoutMantenanceInput;
