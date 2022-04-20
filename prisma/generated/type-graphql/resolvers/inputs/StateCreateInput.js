"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutStateInput_1 = require("../inputs/ComputerCreateNestedManyWithoutStateInput");
const ProductCreateNestedManyWithoutStateInput_1 = require("../inputs/ProductCreateNestedManyWithoutStateInput");
let StateCreateInput = class StateCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutStateInput_1.ProductCreateNestedManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutStateInput_1.ProductCreateNestedManyWithoutStateInput)
], StateCreateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutStateInput_1.ComputerCreateNestedManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutStateInput_1.ComputerCreateNestedManyWithoutStateInput)
], StateCreateInput.prototype, "computer", void 0);
StateCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateInput", {
        isAbstract: true
    })
], StateCreateInput);
exports.StateCreateInput = StateCreateInput;
