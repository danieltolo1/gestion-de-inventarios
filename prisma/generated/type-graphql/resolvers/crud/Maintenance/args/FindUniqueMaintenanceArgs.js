"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceWhereUniqueInput_1 = require("../../../inputs/MaintenanceWhereUniqueInput");
let FindUniqueMaintenanceArgs = class FindUniqueMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], FindUniqueMaintenanceArgs.prototype, "where", void 0);
FindUniqueMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueMaintenanceArgs);
exports.FindUniqueMaintenanceArgs = FindUniqueMaintenanceArgs;
