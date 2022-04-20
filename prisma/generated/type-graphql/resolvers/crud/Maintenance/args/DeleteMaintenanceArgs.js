"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceWhereUniqueInput_1 = require("../../../inputs/MaintenanceWhereUniqueInput");
let DeleteMaintenanceArgs = class DeleteMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], DeleteMaintenanceArgs.prototype, "where", void 0);
DeleteMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteMaintenanceArgs);
exports.DeleteMaintenanceArgs = DeleteMaintenanceArgs;
