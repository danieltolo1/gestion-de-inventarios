"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AccountSumAggregate = class AccountSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountSumAggregate.prototype, "expires_at", void 0);
AccountSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AccountSumAggregate", {
        isAbstract: true
    })
], AccountSumAggregate);
exports.AccountSumAggregate = AccountSumAggregate;
