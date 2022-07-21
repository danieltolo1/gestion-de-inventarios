"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateManyWithWhereWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceScalarWhereInput_1 = require("../inputs/MaintenanceScalarWhereInput");
const MaintenanceUpdateManyMutationInput_1 = require("../inputs/MaintenanceUpdateManyMutationInput");
let MaintenanceUpdateManyWithWhereWithoutComputerInput = class MaintenanceUpdateManyWithWhereWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput)
], MaintenanceUpdateManyWithWhereWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput)
], MaintenanceUpdateManyWithWhereWithoutComputerInput.prototype, "data", void 0);
MaintenanceUpdateManyWithWhereWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateManyWithWhereWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceUpdateManyWithWhereWithoutComputerInput);
exports.MaintenanceUpdateManyWithWhereWithoutComputerInput = MaintenanceUpdateManyWithWhereWithoutComputerInput;
