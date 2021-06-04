/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
export const STRIPE_OPTIONS = new InjectionToken('Stripe Options');
/**
 * @record
 */
export function StripeJS() { }
if (false) {
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeJS.prototype.elements = function (options) { };
    /**
     * @param {?} el
     * @param {?=} cardData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (el, cardData) { };
    /**
     * @param {?} account
     * @param {?} accountData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (account, accountData) { };
    /**
     * @param {?} account
     * @param {?} bankAccountData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (account, bankAccountData) { };
    /**
     * @param {?} pii
     * @param {?} piiData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (pii, piiData) { };
    /**
     * @param {?} el
     * @param {?=} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (el, sourceData) { };
    /**
     * @param {?} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (sourceData) { };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeJS.prototype.retrieveSource = function (source) { };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeJS.prototype.paymentRequest = function (options) { };
    /**
     * @param {?} clientSecret
     * @param {?} cardElement
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardPayment = function (clientSecret, cardElement, data) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardPayment = function (clientSecret, data) { };
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    StripeJS.prototype.handleCardAction = function (clientSecret) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.confirmPaymentIntent = function (clientSecret, data) { };
    /**
     * @param {?} type
     * @param {?} cardElement
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.createPaymentMethod = function (type, cardElement, data) { };
    /**
     * @param {?} clientSecret
     * @param {?} element
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardSetup = function (clientSecret, element, data) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardSetup = function (clientSecret, data) { };
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.stripeAccount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL3N0cmlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUF5Qi9DLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FDdEQsd0JBQXdCLENBQ3pCOztBQUNELE1BQU0sT0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQVUsZ0JBQWdCLENBQUM7Ozs7QUFFM0UsOEJBeUNDOzs7Ozs7SUF4Q0MscURBQThDOzs7Ozs7SUFDOUMsNkRBQTJFOzs7Ozs7SUFDM0UscUVBQThFOzs7Ozs7SUFDOUUseUVBR3dCOzs7Ozs7SUFDeEIsNkRBQThEOzs7Ozs7SUFDOUQsZ0VBQTBFOzs7OztJQUMxRSw0REFBNEQ7Ozs7O0lBQzVELDBEQUE0RDs7Ozs7SUFDNUQsMkRBQW9EOzs7Ozs7O0lBQ3BELHNGQUlnQzs7Ozs7O0lBQ2hDLHlFQUdnQzs7Ozs7SUFDaEMsa0VBQXFFOzs7Ozs7SUFDckUsNEVBR2dDOzs7Ozs7O0lBQ2hDLGdGQUlnQzs7Ozs7OztJQUNoQyxnRkFJNEI7Ozs7OztJQUM1Qix1RUFHNEI7Ozs7O0FBRzlCLDZCQUVDOzs7SUFEQyxnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbGVtZW50cywgRWxlbWVudHNPcHRpb25zIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7XG4gIEFjY291bnQsXG4gIEFjY291bnREYXRhLFxuICBCYW5rQWNjb3VudCxcbiAgQmFua0FjY291bnREYXRhLFxuICBDYXJkRGF0YU9wdGlvbnMsXG4gIFBpaSxcbiAgUGlpRGF0YSxcbiAgVG9rZW5SZXN1bHRcbn0gZnJvbSAnLi90b2tlbic7XG5pbXBvcnQgeyBTb3VyY2VEYXRhLCBTb3VyY2VQYXJhbXMsIFNvdXJjZVJlc3VsdCB9IGZyb20gJy4vc291cmNlcyc7XG5pbXBvcnQgeyBQYXltZW50UmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL3BheW1lbnQtcmVxdWVzdCc7XG5pbXBvcnQge1xuICBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMsXG4gIFBheW1lbnRJbnRlbnRSZXN1bHQsXG4gIENvbmZpcm1QYXltZW50SW50ZW50T3B0aW9ucyxcbiAgUGF5bWVudE1ldGhvZERhdGEsXG4gIFBheW1lbnRNZXRob2RSZXN1bHRcbn0gZnJvbSAnLi9wYXltZW50LWludGVudCc7XG5pbXBvcnQgeyBDYXJkU2V0dXBSZXN1bHQgfSBmcm9tICcuL2NhcmQtc2V0dXAnO1xuXG5leHBvcnQgY29uc3QgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KFxuICAnU3RyaXBlIFB1Ymxpc2hhYmxlIEtleSdcbik7XG5leHBvcnQgY29uc3QgU1RSSVBFX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48T3B0aW9ucz4oJ1N0cmlwZSBPcHRpb25zJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaXBlSlMge1xuICBlbGVtZW50cyhvcHRpb25zPzogRWxlbWVudHNPcHRpb25zKTogRWxlbWVudHM7XG4gIGNyZWF0ZVRva2VuKGVsOiBFbGVtZW50LCBjYXJkRGF0YT86IENhcmREYXRhT3B0aW9ucyk6IFByb21pc2U8VG9rZW5SZXN1bHQ+O1xuICBjcmVhdGVUb2tlbihhY2NvdW50OiBBY2NvdW50LCBhY2NvdW50RGF0YTogQWNjb3VudERhdGEpOiBQcm9taXNlPFRva2VuUmVzdWx0PjtcbiAgY3JlYXRlVG9rZW4oXG4gICAgYWNjb3VudDogQmFua0FjY291bnQsXG4gICAgYmFua0FjY291bnREYXRhOiBCYW5rQWNjb3VudERhdGFcbiAgKTogUHJvbWlzZTxUb2tlblJlc3VsdD47XG4gIGNyZWF0ZVRva2VuKHBpaTogUGlpLCBwaWlEYXRhOiBQaWlEYXRhKTogUHJvbWlzZTxUb2tlblJlc3VsdD47XG4gIGNyZWF0ZVNvdXJjZShlbDogRWxlbWVudCwgc291cmNlRGF0YT86IFNvdXJjZURhdGEpOiBQcm9taXNlPFNvdXJjZVJlc3VsdD47XG4gIGNyZWF0ZVNvdXJjZShzb3VyY2VEYXRhOiBTb3VyY2VEYXRhKTogUHJvbWlzZTxTb3VyY2VSZXN1bHQ+O1xuICByZXRyaWV2ZVNvdXJjZShzb3VyY2U6IFNvdXJjZVBhcmFtcyk6IFByb21pc2U8U291cmNlUmVzdWx0PjtcbiAgcGF5bWVudFJlcXVlc3Qob3B0aW9uczogUGF5bWVudFJlcXVlc3RPcHRpb25zKTogYW55O1xuICBoYW5kbGVDYXJkUGF5bWVudChcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBjYXJkRWxlbWVudDogRWxlbWVudCxcbiAgICBkYXRhPzogSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zXG4gICk6IFByb21pc2U8UGF5bWVudEludGVudFJlc3VsdD47XG4gIGhhbmRsZUNhcmRQYXltZW50KFxuICAgIGNsaWVudFNlY3JldDogc3RyaW5nLFxuICAgIGRhdGE/OiBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnNcbiAgKTogUHJvbWlzZTxQYXltZW50SW50ZW50UmVzdWx0PjtcbiAgaGFuZGxlQ2FyZEFjdGlvbihjbGllbnRTZWNyZXQ6IHN0cmluZyk6IFByb21pc2U8UGF5bWVudEludGVudFJlc3VsdD47XG4gIGNvbmZpcm1QYXltZW50SW50ZW50KFxuICAgIGNsaWVudFNlY3JldDogc3RyaW5nLFxuICAgIGRhdGE/OiBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnNcbiAgKTogUHJvbWlzZTxQYXltZW50SW50ZW50UmVzdWx0PjtcbiAgY3JlYXRlUGF5bWVudE1ldGhvZChcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgY2FyZEVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgZGF0YT86IFBheW1lbnRNZXRob2REYXRhXG4gICk6IFByb21pc2U8UGF5bWVudE1ldGhvZFJlc3VsdD47XG4gIGhhbmRsZUNhcmRTZXR1cChcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIGRhdGE/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBQcm9taXNlPENhcmRTZXR1cFJlc3VsdD47XG4gIGhhbmRsZUNhcmRTZXR1cChcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBkYXRhPzogc3RyaW5nIHwgUGF5bWVudE1ldGhvZERhdGFcbiAgKTogUHJvbWlzZTxDYXJkU2V0dXBSZXN1bHQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICBzdHJpcGVBY2NvdW50Pzogc3RyaW5nO1xufVxuIl19