"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceUpdateInput_1 = require("../../../inputs/MaintenanceUpdateInput");
const MaintenanceWhereUniqueInput_1 = require("../../../inputs/MaintenanceWhereUniqueInput");
let UpdateMaintenanceArgs = class UpdateMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateInput_1.MaintenanceUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateInput_1.MaintenanceUpdateInput)
], UpdateMaintenanceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], UpdateMaintenanceArgs.prototype, "where", void 0);
UpdateMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateMaintenanceArgs);
exports.UpdateMaintenanceArgs = UpdateMaintenanceArgs;
