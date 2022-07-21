"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateOneRequiredWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateOrConnectWithoutMaintenanceInput");
const ComputerCreateWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateWithoutMaintenanceInput");
const ComputerUpdateWithoutMaintenanceInput_1 = require("../inputs/ComputerUpdateWithoutMaintenanceInput");
const ComputerUpsertWithoutMaintenanceInput_1 = require("../inputs/ComputerUpsertWithoutMaintenanceInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateOneRequiredWithoutMaintenanceInput = class ComputerUpdateOneRequiredWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput)
], ComputerUpdateOneRequiredWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateOrConnectWithoutMaintenanceInput_1.ComputerCreateOrConnectWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateOrConnectWithoutMaintenanceInput_1.ComputerCreateOrConnectWithoutMaintenanceInput)
], ComputerUpdateOneRequiredWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpsertWithoutMaintenanceInput_1.ComputerUpsertWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpsertWithoutMaintenanceInput_1.ComputerUpsertWithoutMaintenanceInput)
], ComputerUpdateOneRequiredWithoutMaintenanceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateOneRequiredWithoutMaintenanceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutMaintenanceInput_1.ComputerUpdateWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutMaintenanceInput_1.ComputerUpdateWithoutMaintenanceInput)
], ComputerUpdateOneRequiredWithoutMaintenanceInput.prototype, "update", void 0);
ComputerUpdateOneRequiredWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateOneRequiredWithoutMaintenanceInput", {
        isAbstract: true
    })
], ComputerUpdateOneRequiredWithoutMaintenanceInput);
exports.ComputerUpdateOneRequiredWithoutMaintenanceInput = ComputerUpdateOneRequiredWithoutMaintenanceInput;
