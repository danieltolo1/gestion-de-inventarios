"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceWhereInput_1 = require("../../../inputs/MaintenanceWhereInput");
let DeleteManyMaintenanceArgs = class DeleteManyMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], DeleteManyMaintenanceArgs.prototype, "where", void 0);
DeleteManyMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyMaintenanceArgs);
exports.DeleteManyMaintenanceArgs = DeleteManyMaintenanceArgs;
