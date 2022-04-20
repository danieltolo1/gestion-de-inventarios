"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceUpdateManyMutationInput_1 = require("../../../inputs/MaintenanceUpdateManyMutationInput");
const MaintenanceWhereInput_1 = require("../../../inputs/MaintenanceWhereInput");
let UpdateManyMaintenanceArgs = class UpdateManyMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput)
], UpdateManyMaintenanceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], UpdateManyMaintenanceArgs.prototype, "where", void 0);
UpdateManyMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyMaintenanceArgs);
exports.UpdateManyMaintenanceArgs = UpdateManyMaintenanceArgs;
