"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateAvgAggregate_1 = require("../outputs/StateAvgAggregate");
const StateCountAggregate_1 = require("../outputs/StateCountAggregate");
const StateMaxAggregate_1 = require("../outputs/StateMaxAggregate");
const StateMinAggregate_1 = require("../outputs/StateMinAggregate");
const StateSumAggregate_1 = require("../outputs/StateSumAggregate");
let StateGroupBy = class StateGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateGroupBy.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCountAggregate_1.StateCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCountAggregate_1.StateCountAggregate)
], StateGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateAvgAggregate_1.StateAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateAvgAggregate_1.StateAvgAggregate)
], StateGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateSumAggregate_1.StateSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateSumAggregate_1.StateSumAggregate)
], StateGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMinAggregate_1.StateMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMinAggregate_1.StateMinAggregate)
], StateGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMaxAggregate_1.StateMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMaxAggregate_1.StateMaxAggregate)
], StateGroupBy.prototype, "_max", void 0);
StateGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateGroupBy", {
        isAbstract: true
    })
], StateGroupBy);
exports.StateGroupBy = StateGroupBy;
