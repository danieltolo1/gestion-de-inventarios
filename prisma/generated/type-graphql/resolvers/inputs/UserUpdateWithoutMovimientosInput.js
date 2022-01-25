"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutMovimientosInput = class UserUpdateWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutMovimientosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMovimientosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMovimientosInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutMovimientosInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMovimientosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutMovimientosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutMovimientosInput.prototype, "sessions", void 0);
UserUpdateWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithoutMovimientosInput", {
        isAbstract: true
    })
], UserUpdateWithoutMovimientosInput);
exports.UserUpdateWithoutMovimientosInput = UserUpdateWithoutMovimientosInput;
