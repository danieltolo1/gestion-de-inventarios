"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const MaintenanceCreateNestedManyWithoutUserInput_1 = require("../inputs/MaintenanceCreateNestedManyWithoutUserInput");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedManyWithoutUserInput_1.MaintenanceCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedManyWithoutUserInput_1.MaintenanceCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "mantenance", void 0);
UserCreateWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
        isAbstract: true
    })
], UserCreateWithoutSessionsInput);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
