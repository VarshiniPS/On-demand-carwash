/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { WindowRef } from './window-ref.service';
import { LazyStripeAPILoader } from './api-loader.service';
import { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS } from '../interfaces/stripe';
import { StripeInstance } from './stripe-instance.class';
import { filter, map } from 'rxjs/operators';
var StripeService = /** @class */ (function () {
    function StripeService(key, options, loader, window) {
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.loader, this.window, key, options);
        }
    }
    /**
     * @return {?}
     */
    StripeService.prototype.getStripeReference = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.loader.asStream().pipe(filter(function (status) { return status.loaded === true; }), map(function () { return ((/** @type {?} */ (_this.window.getNativeWindow()))).Stripe; }));
    };
    /**
     * @return {?}
     */
    StripeService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.stripe.getInstance();
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.setKey = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        return this.changeKey(key, options);
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.changeKey = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.elements = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.stripe.elements(options);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeService.prototype.createToken = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.createToken(a, b);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeService.prototype.createSource = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.createSource(a, b);
    };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeService.prototype.retrieveSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.stripe.retrieveSource(source);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeService.prototype.paymentRequest = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.stripe.paymentRequest(options);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.handleCardPayment = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.handleCardPayment(a, b, c);
    };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeService.prototype.handleCardAction = /**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return this.stripe.handleCardAction(a);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.createPaymentMethod = /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.createPaymentMethod(a, b, c);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeService.prototype.confirmPaymentIntent = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.confirmPaymentIntent(a, b);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.handleCardSetup = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.handleCardSetup(a, b, c);
    };
    StripeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StripeService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
        { type: LazyStripeAPILoader },
        { type: WindowRef }
    ]; };
    return StripeService;
}());
export { StripeService };
if (false) {
    /** @type {?} */
    StripeService.prototype.stripe;
    /** @type {?} */
    StripeService.prototype.key;
    /** @type {?} */
    StripeService.prototype.options;
    /** @type {?} */
    StripeService.prototype.loader;
    /** @type {?} */
    StripeService.prototype.window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0cmlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFFbkUsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixjQUFjLEVBR2YsTUFBTSxzQkFBc0IsQ0FBQztBQWM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVU3QztJQUlFLHVCQUN5QyxHQUFXLEVBQ25CLE9BQWdCLEVBQ3hDLE1BQTJCLEVBQzNCLE1BQWlCO1FBSGUsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFFeEIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7O0lBRU0sMENBQWtCOzs7SUFBekI7UUFBQSxpQkFLQztRQUpDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUF0QixDQUFzQixDQUFD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QUFNLFNBQUMsY0FBYztnQkF4Q2pCLG1CQUFtQjtnQkFEbkIsU0FBUzs7SUFtSWxCLG9CQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0EvRlksYUFBYTs7O0lBQ3hCLCtCQUErQjs7SUFHN0IsNEJBQWtEOztJQUNsRCxnQ0FBK0M7O0lBQy9DLCtCQUFrQzs7SUFDbEMsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi93aW5kb3ctcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF6eVN0cmlwZUFQSUxvYWRlciwgU3RhdHVzIH0gZnJvbSAnLi9hcGktbG9hZGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLFxuICBTVFJJUEVfT1BUSU9OUyxcbiAgT3B0aW9ucyxcbiAgU3RyaXBlSlNcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHJpcGUnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cywgRWxlbWVudHNPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9lbGVtZW50cyc7XG5pbXBvcnQgeyBTb3VyY2VEYXRhLCBTb3VyY2VSZXN1bHQsIFNvdXJjZVBhcmFtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc291cmNlcyc7XG5pbXBvcnQge1xuICBDYXJkRGF0YU9wdGlvbnMsXG4gIFRva2VuUmVzdWx0LFxuICBBY2NvdW50LFxuICBBY2NvdW50RGF0YSxcbiAgQmFua0FjY291bnQsXG4gIEJhbmtBY2NvdW50RGF0YSxcbiAgUGlpRGF0YSxcbiAgUGlpXG59IGZyb20gJy4uL2ludGVyZmFjZXMvdG9rZW4nO1xuaW1wb3J0IHsgU3RyaXBlSW5zdGFuY2UgfSBmcm9tICcuL3N0cmlwZS1pbnN0YW5jZS5jbGFzcyc7XG5pbXBvcnQgeyBTdHJpcGVTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi9zdHJpcGUtaW5zdGFuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBheW1lbnRSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5bWVudC1yZXF1ZXN0JztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnMsXG4gIFBheW1lbnRJbnRlbnRSZXN1bHQsXG4gIFBheW1lbnRNZXRob2RSZXN1bHQsXG4gIFBheW1lbnRNZXRob2REYXRhXG59IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5bWVudC1pbnRlbnQnO1xuaW1wb3J0IHsgQ2FyZFNldHVwUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXJkLXNldHVwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cmlwZVNlcnZpY2UgaW1wbGVtZW50cyBTdHJpcGVTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgcHVibGljIHN0cmlwZSE6IFN0cmlwZUluc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSkgcHVibGljIGtleTogc3RyaW5nLFxuICAgIEBJbmplY3QoU1RSSVBFX09QVElPTlMpIHB1YmxpYyBvcHRpb25zOiBPcHRpb25zLFxuICAgIHB1YmxpYyBsb2FkZXI6IExhenlTdHJpcGVBUElMb2FkZXIsXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93UmVmXG4gICkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHRoaXMuc3RyaXBlID0gbmV3IFN0cmlwZUluc3RhbmNlKHRoaXMubG9hZGVyLCB0aGlzLndpbmRvdywga2V5LCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RyaXBlUmVmZXJlbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVyLmFzU3RyZWFtKCkucGlwZShcbiAgICAgIGZpbHRlcigoc3RhdHVzOiBTdGF0dXMpID0+IHN0YXR1cy5sb2FkZWQgPT09IHRydWUpLFxuICAgICAgbWFwKCgpID0+ICh0aGlzLndpbmRvdy5nZXROYXRpdmVXaW5kb3coKSBhcyBhbnkpLlN0cmlwZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldEluc3RhbmNlKCk6IFN0cmlwZUpTIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRLZXkoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlS2V5KGtleSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlS2V5KGtleTogc3RyaW5nLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIHRoaXMuc3RyaXBlID0gbmV3IFN0cmlwZUluc3RhbmNlKHRoaXMubG9hZGVyLCB0aGlzLndpbmRvdywga2V5LCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLnN0cmlwZTtcbiAgfVxuXG4gIHB1YmxpYyBlbGVtZW50cyhvcHRpb25zPzogRWxlbWVudHNPcHRpb25zKTogT2JzZXJ2YWJsZTxFbGVtZW50cz4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUb2tlbihcbiAgICBhOiBFbGVtZW50IHwgQWNjb3VudCB8IEJhbmtBY2NvdW50IHwgUGlpLFxuICAgIGI6IENhcmREYXRhT3B0aW9ucyB8IEFjY291bnREYXRhIHwgQmFua0FjY291bnREYXRhIHwgUGlpRGF0YSB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFRva2VuUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNyZWF0ZVRva2VuKGEsIGIpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVNvdXJjZShcbiAgICBhOiBFbGVtZW50IHwgU291cmNlRGF0YSxcbiAgICBiPzogU291cmNlRGF0YSB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jcmVhdGVTb3VyY2UoYSwgYik7XG4gIH1cblxuICBwdWJsaWMgcmV0cmlldmVTb3VyY2Uoc291cmNlOiBTb3VyY2VQYXJhbXMpOiBPYnNlcnZhYmxlPFNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5yZXRyaWV2ZVNvdXJjZShzb3VyY2UpO1xuICB9XG5cbiAgcHVibGljIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnM6IFBheW1lbnRSZXF1ZXN0T3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5wYXltZW50UmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYXJkUGF5bWVudChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IEVsZW1lbnQgfCBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMsXG4gICAgYz86IEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlQ2FyZFBheW1lbnQoYSwgYiwgYyk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FyZEFjdGlvbihhOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlQ2FyZEFjdGlvbihhKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVQYXltZW50TWV0aG9kKFxuICAgIGE6IHN0cmluZyxcbiAgICBiOiBFbGVtZW50LFxuICAgIGM/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBPYnNlcnZhYmxlPFBheW1lbnRNZXRob2RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZChhLCBiLCBjKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maXJtUGF5bWVudEludGVudChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IENvbmZpcm1QYXltZW50SW50ZW50T3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBheW1lbnRJbnRlbnQoYSwgYik7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FyZFNldHVwKFxuICAgIGE6IHN0cmluZyxcbiAgICBiPzogc3RyaW5nIHwgRWxlbWVudCB8IFBheW1lbnRNZXRob2REYXRhLFxuICAgIGM/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBPYnNlcnZhYmxlPENhcmRTZXR1cFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5oYW5kbGVDYXJkU2V0dXAoYSwgYiwgYyk7XG4gIH1cbn1cbiJdfQ==