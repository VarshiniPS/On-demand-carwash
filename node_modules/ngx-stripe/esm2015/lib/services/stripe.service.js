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
export class StripeService {
    /**
     * @param {?} key
     * @param {?} options
     * @param {?} loader
     * @param {?} window
     */
    constructor(key, options, loader, window) {
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
    getStripeReference() {
        return this.loader.asStream().pipe(filter((status) => status.loaded === true), map(() => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe.getInstance();
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe.elements(options);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    createToken(a, b) {
        return this.stripe.createToken(a, b);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    handleCardPayment(a, b, c) {
        return this.stripe.handleCardPayment(a, b, c);
    }
    /**
     * @param {?} a
     * @return {?}
     */
    handleCardAction(a) {
        return this.stripe.handleCardAction(a);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    createPaymentMethod(a, b, c) {
        return this.stripe.createPaymentMethod(a, b, c);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    confirmPaymentIntent(a, b) {
        return this.stripe.confirmPaymentIntent(a, b);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    handleCardSetup(a, b, c) {
        return this.stripe.handleCardSetup(a, b, c);
    }
}
StripeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0cmlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFFbkUsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixjQUFjLEVBR2YsTUFBTSxzQkFBc0IsQ0FBQztBQWM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVc3QyxNQUFNLE9BQU8sYUFBYTs7Ozs7OztJQUd4QixZQUN5QyxHQUFXLEVBQ25CLE9BQWdCLEVBQ3hDLE1BQTJCLEVBQzNCLE1BQWlCO1FBSGUsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFFeEIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFD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amVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vd2luZG93LXJlZi5zZXJ2aWNlJztcbmltcG9ydCB7IExhenlTdHJpcGVBUElMb2FkZXIsIFN0YXR1cyB9IGZyb20gJy4vYXBpLWxvYWRlci5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSxcbiAgU1RSSVBFX09QVElPTlMsXG4gIE9wdGlvbnMsXG4gIFN0cmlwZUpTXG59IGZyb20gJy4uL2ludGVyZmFjZXMvc3RyaXBlJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMsIEVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgU291cmNlRGF0YSwgU291cmNlUmVzdWx0LCBTb3VyY2VQYXJhbXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NvdXJjZXMnO1xuaW1wb3J0IHtcbiAgQ2FyZERhdGFPcHRpb25zLFxuICBUb2tlblJlc3VsdCxcbiAgQWNjb3VudCxcbiAgQWNjb3VudERhdGEsXG4gIEJhbmtBY2NvdW50LFxuICBCYW5rQWNjb3VudERhdGEsXG4gIFBpaURhdGEsXG4gIFBpaVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Rva2VuJztcbmltcG9ydCB7IFN0cmlwZUluc3RhbmNlIH0gZnJvbSAnLi9zdHJpcGUtaW5zdGFuY2UuY2xhc3MnO1xuaW1wb3J0IHsgU3RyaXBlU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4vc3RyaXBlLWluc3RhbmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQYXltZW50UmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheW1lbnQtcmVxdWVzdCc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyxcbiAgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zLFxuICBQYXltZW50SW50ZW50UmVzdWx0LFxuICBQYXltZW50TWV0aG9kUmVzdWx0LFxuICBQYXltZW50TWV0aG9kRGF0YVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheW1lbnQtaW50ZW50JztcbmltcG9ydCB7IENhcmRTZXR1cFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2FyZC1zZXR1cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJpcGVTZXJ2aWNlIGltcGxlbWVudHMgU3RyaXBlU2VydmljZUludGVyZmFjZSB7XG4gIHB1YmxpYyBzdHJpcGUhOiBTdHJpcGVJbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNUUklQRV9QVUJMSVNIQUJMRV9LRVkpIHB1YmxpYyBrZXk6IHN0cmluZyxcbiAgICBASW5qZWN0KFNUUklQRV9PUFRJT05TKSBwdWJsaWMgb3B0aW9uczogT3B0aW9ucyxcbiAgICBwdWJsaWMgbG9hZGVyOiBMYXp5U3RyaXBlQVBJTG9hZGVyLFxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd1JlZlxuICApIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB0aGlzLnN0cmlwZSA9IG5ldyBTdHJpcGVJbnN0YW5jZSh0aGlzLmxvYWRlciwgdGhpcy53aW5kb3csIGtleSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFN0cmlwZVJlZmVyZW5jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRlci5hc1N0cmVhbSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHN0YXR1czogU3RhdHVzKSA9PiBzdGF0dXMubG9hZGVkID09PSB0cnVlKSxcbiAgICAgIG1hcCgoKSA9PiAodGhpcy53aW5kb3cuZ2V0TmF0aXZlV2luZG93KCkgYXMgYW55KS5TdHJpcGUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnN0YW5jZSgpOiBTdHJpcGVKUyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0S2V5KGtleTogc3RyaW5nLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZUtleShrZXksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZUtleShrZXk6IHN0cmluZywgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICB0aGlzLnN0cmlwZSA9IG5ldyBTdHJpcGVJbnN0YW5jZSh0aGlzLmxvYWRlciwgdGhpcy53aW5kb3csIGtleSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcGU7XG4gIH1cblxuICBwdWJsaWMgZWxlbWVudHMob3B0aW9ucz86IEVsZW1lbnRzT3B0aW9ucyk6IE9ic2VydmFibGU8RWxlbWVudHM+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuZWxlbWVudHMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVG9rZW4oXG4gICAgYTogRWxlbWVudCB8IEFjY291bnQgfCBCYW5rQWNjb3VudCB8IFBpaSxcbiAgICBiOiBDYXJkRGF0YU9wdGlvbnMgfCBBY2NvdW50RGF0YSB8IEJhbmtBY2NvdW50RGF0YSB8IFBpaURhdGEgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxUb2tlblJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jcmVhdGVUb2tlbihhLCBiKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTb3VyY2UoXG4gICAgYTogRWxlbWVudCB8IFNvdXJjZURhdGEsXG4gICAgYj86IFNvdXJjZURhdGEgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY3JlYXRlU291cmNlKGEsIGIpO1xuICB9XG5cbiAgcHVibGljIHJldHJpZXZlU291cmNlKHNvdXJjZTogU291cmNlUGFyYW1zKTogT2JzZXJ2YWJsZTxTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucmV0cmlldmVTb3VyY2Uoc291cmNlKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXltZW50UmVxdWVzdChvcHRpb25zOiBQYXltZW50UmVxdWVzdE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGF5bWVudFJlcXVlc3Qob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FyZFBheW1lbnQoXG4gICAgYTogc3RyaW5nLFxuICAgIGI/OiBFbGVtZW50IHwgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICAgIGM/OiBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KGEsIGIsIGMpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhcmRBY3Rpb24oYTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmhhbmRsZUNhcmRBY3Rpb24oYSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUGF5bWVudE1ldGhvZChcbiAgICBhOiBzdHJpbmcsXG4gICAgYjogRWxlbWVudCxcbiAgICBjPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50TWV0aG9kUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2QoYSwgYiwgYyk7XG4gIH1cblxuICBwdWJsaWMgY29uZmlybVBheW1lbnRJbnRlbnQoXG4gICAgYTogc3RyaW5nLFxuICAgIGI/OiBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1QYXltZW50SW50ZW50KGEsIGIpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhcmRTZXR1cChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IHN0cmluZyB8IEVsZW1lbnQgfCBQYXltZW50TWV0aG9kRGF0YSxcbiAgICBjPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogT2JzZXJ2YWJsZTxDYXJkU2V0dXBSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlQ2FyZFNldHVwKGEsIGIsIGMpO1xuICB9XG59XG4iXX0=