/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function StripeServiceInterface() { }
if (false) {
    /**
     * @return {?}
     */
    StripeServiceInterface.prototype.getInstance = function () { };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeServiceInterface.prototype.elements = function (options) { };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeServiceInterface.prototype.createToken = function (a, b) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeServiceInterface.prototype.createSource = function (a, b) { };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeServiceInterface.prototype.retrieveSource = function (source) { };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeServiceInterface.prototype.paymentRequest = function (options) { };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardAction = function (a) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardPayment = function (a, b, c) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeServiceInterface.prototype.confirmPaymentIntent = function (a, b) { };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.createPaymentMethod = function (a, b, c) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardSetup = function (a, b, c) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWluc3RhbmNlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBd0JBLDRDQWlDQzs7Ozs7SUFoQ0MsK0RBQW9DOzs7OztJQUNwQyxtRUFBMEQ7Ozs7OztJQUMxRCxtRUFHMkI7Ozs7OztJQUMzQixvRUFHNEI7Ozs7O0lBQzVCLHdFQUErRDs7Ozs7SUFDL0QseUVBQW9EOzs7OztJQUNwRCxxRUFBNkQ7Ozs7Ozs7SUFDN0QsNEVBSW1DOzs7Ozs7SUFDbkMsNEVBR21DOzs7Ozs7O0lBQ25DLDhFQUltQzs7Ozs7OztJQUNuQywwRUFJK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHNPcHRpb25zLCBFbGVtZW50cyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudHMnO1xuaW1wb3J0IHtcbiAgQmFua0FjY291bnQsXG4gIFBpaSxcbiAgQ2FyZERhdGFPcHRpb25zLFxuICBCYW5rQWNjb3VudERhdGEsXG4gIFBpaURhdGEsXG4gIFRva2VuUmVzdWx0XG59IGZyb20gJy4uL2ludGVyZmFjZXMvdG9rZW4nO1xuaW1wb3J0IHsgU291cmNlRGF0YSwgU291cmNlUmVzdWx0LCBTb3VyY2VQYXJhbXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NvdXJjZXMnO1xuaW1wb3J0IHsgUGF5bWVudFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wYXltZW50LXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBQYXltZW50SW50ZW50UmVzdWx0LFxuICBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnMsXG4gIFBheW1lbnRNZXRob2REYXRhLFxuICBQYXltZW50TWV0aG9kUmVzdWx0XG59IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5bWVudC1pbnRlbnQnO1xuaW1wb3J0IHsgU3RyaXBlSlMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0cmlwZSc7XG5pbXBvcnQgeyBDYXJkU2V0dXBSZXN1bHQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NhcmQtc2V0dXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmlwZVNlcnZpY2VJbnRlcmZhY2Uge1xuICBnZXRJbnN0YW5jZSgpOiBTdHJpcGVKUyB8IHVuZGVmaW5lZDtcbiAgZWxlbWVudHMob3B0aW9ucz86IEVsZW1lbnRzT3B0aW9ucyk6IE9ic2VydmFibGU8RWxlbWVudHM+O1xuICBjcmVhdGVUb2tlbihcbiAgICBhOiBFbGVtZW50IHwgQmFua0FjY291bnQgfCBQaWksXG4gICAgYjogQ2FyZERhdGFPcHRpb25zIHwgQmFua0FjY291bnREYXRhIHwgUGlpRGF0YSB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFRva2VuUmVzdWx0PjtcbiAgY3JlYXRlU291cmNlKFxuICAgIGE6IEVsZW1lbnQgfCBTb3VyY2VEYXRhLFxuICAgIGI/OiBTb3VyY2VEYXRhIHwgdW5kZWZpbmVkXG4gICk6IE9ic2VydmFibGU8U291cmNlUmVzdWx0PjtcbiAgcmV0cmlldmVTb3VyY2Uoc291cmNlOiBTb3VyY2VQYXJhbXMpOiBPYnNlcnZhYmxlPFNvdXJjZVJlc3VsdD47XG4gIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnM6IFBheW1lbnRSZXF1ZXN0T3B0aW9ucyk6IGFueTtcbiAgaGFuZGxlQ2FyZEFjdGlvbihhOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+O1xuICBoYW5kbGVDYXJkUGF5bWVudChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IEVsZW1lbnQgfCBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMsXG4gICAgYz86IEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+O1xuICBjb25maXJtUGF5bWVudEludGVudChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IENvbmZpcm1QYXltZW50SW50ZW50T3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+O1xuICBjcmVhdGVQYXltZW50TWV0aG9kKFxuICAgIGE6IHN0cmluZyxcbiAgICBiOiBFbGVtZW50LFxuICAgIGM/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBPYnNlcnZhYmxlPFBheW1lbnRNZXRob2RSZXN1bHQ+O1xuICBoYW5kbGVDYXJkU2V0dXAoXG4gICAgYTogc3RyaW5nLFxuICAgIGI/OiBFbGVtZW50IHwgc3RyaW5nIHwgUGF5bWVudE1ldGhvZERhdGEsXG4gICAgYz86IFBheW1lbnRNZXRob2REYXRhXG4gICk6IE9ic2VydmFibGU8Q2FyZFNldHVwUmVzdWx0Pjtcbn1cbiJdfQ==