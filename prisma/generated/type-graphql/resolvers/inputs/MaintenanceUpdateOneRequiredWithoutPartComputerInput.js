"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateOneRequiredWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutPartComputerInput");
const MaintenanceCreateWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateWithoutPartComputerInput");
const MaintenanceUpdateWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpdateWithoutPartComputerInput");
const MaintenanceUpsertWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpsertWithoutPartComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateOneRequiredWithoutPartComputerInput = class MaintenanceUpdateOneRequiredWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput)
], MaintenanceUpdateOneRequiredWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateOrConnectWithoutPartComputerInput_1.MaintenanceCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateOrConnectWithoutPartComputerInput_1.MaintenanceCreateOrConnectWithoutPartComputerInput)
], MaintenanceUpdateOneRequiredWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpsertWithoutPartComputerInput_1.MaintenanceUpsertWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpsertWithoutPartComputerInput_1.MaintenanceUpsertWithoutPartComputerInput)
], MaintenanceUpdateOneRequiredWithoutPartComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpdateOneRequiredWithoutPartComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutPartComputerInput_1.MaintenanceUpdateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutPartComputerInput_1.MaintenanceUpdateWithoutPartComputerInput)
], MaintenanceUpdateOneRequiredWithoutPartComputerInput.prototype, "update", void 0);
MaintenanceUpdateOneRequiredWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateOneRequiredWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceUpdateOneRequiredWithoutPartComputerInput);
exports.MaintenanceUpdateOneRequiredWithoutPartComputerInput = MaintenanceUpdateOneRequiredWithoutPartComputerInput;
