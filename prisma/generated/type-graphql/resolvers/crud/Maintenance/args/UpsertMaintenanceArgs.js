"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateInput_1 = require("../../../inputs/MaintenanceCreateInput");
const MaintenanceUpdateInput_1 = require("../../../inputs/MaintenanceUpdateInput");
const MaintenanceWhereUniqueInput_1 = require("../../../inputs/MaintenanceWhereUniqueInput");
let UpsertMaintenanceArgs = class UpsertMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], UpsertMaintenanceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateInput_1.MaintenanceCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateInput_1.MaintenanceCreateInput)
], UpsertMaintenanceArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateInput_1.MaintenanceUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateInput_1.MaintenanceUpdateInput)
], UpsertMaintenanceArgs.prototype, "update", void 0);
UpsertMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertMaintenanceArgs);
exports.UpsertMaintenanceArgs = UpsertMaintenanceArgs;
