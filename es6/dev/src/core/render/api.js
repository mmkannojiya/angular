export class RenderComponentType {
    constructor(id, encapsulation, styles) {
        this.id = id;
        this.encapsulation = encapsulation;
        this.styles = styles;
    }
}
export class RenderDebugInfo {
    constructor(injector, component, providerTokens, locals) {
        this.injector = injector;
        this.component = component;
        this.providerTokens = providerTokens;
        this.locals = locals;
    }
}
export class Renderer {
}
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
export class RootRenderer {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC13M0RSbFhKaS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6WyJSZW5kZXJDb21wb25lbnRUeXBlIiwiUmVuZGVyQ29tcG9uZW50VHlwZS5jb25zdHJ1Y3RvciIsIlJlbmRlckRlYnVnSW5mbyIsIlJlbmRlckRlYnVnSW5mby5jb25zdHJ1Y3RvciIsIlJlbmRlcmVyIiwiUm9vdFJlbmRlcmVyIl0sIm1hcHBpbmdzIjoiQUFHQTtJQUNFQSxZQUNXQSxFQUFVQSxFQUFTQSxhQUFnQ0EsRUFDbkRBLE1BQTJCQTtRQUQzQkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBUUE7UUFBU0Esa0JBQWFBLEdBQWJBLGFBQWFBLENBQW1CQTtRQUNuREEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO0lBQUdBLENBQUNBO0FBQzVDRCxDQUFDQTtBQUVEO0lBQ0VFLFlBQ1dBLFFBQWtCQSxFQUFTQSxTQUFjQSxFQUFTQSxjQUFxQkEsRUFDdkVBLE1BQXdCQTtRQUR4QkMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBVUE7UUFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBS0E7UUFBU0EsbUJBQWNBLEdBQWRBLGNBQWNBLENBQU9BO1FBQ3ZFQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFrQkE7SUFBR0EsQ0FBQ0E7QUFDekNELENBQUNBO0FBSUQ7QUE4Q0FFLENBQUNBO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFFSDtBQUVBQyxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge0luamVjdG9yLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJDb21wb25lbnRUeXBlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgICAgcHVibGljIHN0eWxlczogQXJyYXk8c3RyaW5nfGFueVtdPikge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbmRlckRlYnVnSW5mbyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHVibGljIGNvbXBvbmVudDogYW55LCBwdWJsaWMgcHJvdmlkZXJUb2tlbnM6IGFueVtdLFxuICAgICAgcHVibGljIGxvY2FsczogTWFwPHN0cmluZywgYW55Pikge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJlbnRSZW5kZXJlciB7IHJlbmRlckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXI7IH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlcmVyIGltcGxlbWVudHMgUGFyZW50UmVuZGVyZXIge1xuICBhYnN0cmFjdCByZW5kZXJDb21wb25lbnQoY29tcG9uZW50VHlwZTogUmVuZGVyQ29tcG9uZW50VHlwZSk6IFJlbmRlcmVyO1xuXG4gIGFic3RyYWN0IHNlbGVjdFJvb3RFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBhbnk7XG5cbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudChwYXJlbnRFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZyk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVWaWV3Um9vdChob3N0RWxlbWVudDogYW55KTogYW55O1xuXG4gIGFic3RyYWN0IGNyZWF0ZVRlbXBsYXRlQW5jaG9yKHBhcmVudEVsZW1lbnQ6IGFueSk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVUZXh0KHBhcmVudEVsZW1lbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IGFueTtcblxuICBhYnN0cmFjdCBwcm9qZWN0Tm9kZXMocGFyZW50RWxlbWVudDogYW55LCBub2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGF0dGFjaFZpZXdBZnRlcihub2RlOiBhbnksIHZpZXdSb290Tm9kZXM6IGFueVtdKTogdm9pZDtcblxuICBhYnN0cmFjdCBkZXRhY2hWaWV3KHZpZXdSb290Tm9kZXM6IGFueVtdKTogdm9pZDtcblxuICBhYnN0cmFjdCBkZXN0cm95Vmlldyhob3N0RWxlbWVudDogYW55LCB2aWV3QWxsTm9kZXM6IGFueVtdKTogdm9pZDtcblxuICBhYnN0cmFjdCBsaXN0ZW4ocmVuZGVyRWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xuXG4gIGFic3RyYWN0IGxpc3Rlbkdsb2JhbCh0YXJnZXQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiBGdW5jdGlvbjtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50UHJvcGVydHkocmVuZGVyRWxlbWVudDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogYW55KTogdm9pZDtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50QXR0cmlidXRlKHJlbmRlckVsZW1lbnQ6IGFueSwgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTpcbiAgICAgIHZvaWQ7XG5cbiAgLyoqXG4gICAqIFVzZWQgb25seSBpbiBkZWJ1ZyBtb2RlIHRvIHNlcmlhbGl6ZSBwcm9wZXJ0eSBjaGFuZ2VzIHRvIGNvbW1lbnQgbm9kZXMsXG4gICAqIHN1Y2ggYXMgPHRlbXBsYXRlPiBwbGFjZWhvbGRlcnMuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRCaW5kaW5nRGVidWdJbmZvKHJlbmRlckVsZW1lbnQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5VmFsdWU6IHN0cmluZyk6XG4gICAgICB2b2lkO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnREZWJ1Z0luZm8ocmVuZGVyRWxlbWVudDogYW55LCBpbmZvOiBSZW5kZXJEZWJ1Z0luZm8pO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRDbGFzcyhyZW5kZXJFbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nLCBpc0FkZDogYm9vbGVhbik7XG5cbiAgYWJzdHJhY3Qgc2V0RWxlbWVudFN0eWxlKHJlbmRlckVsZW1lbnQ6IGFueSwgc3R5bGVOYW1lOiBzdHJpbmcsIHN0eWxlVmFsdWU6IHN0cmluZyk7XG5cbiAgYWJzdHJhY3QgaW52b2tlRWxlbWVudE1ldGhvZChyZW5kZXJFbGVtZW50OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pO1xuXG4gIGFic3RyYWN0IHNldFRleHQocmVuZGVyTm9kZTogYW55LCB0ZXh0OiBzdHJpbmcpO1xufVxuXG4vKipcbiAqIEluamVjdGFibGUgc2VydmljZSB0aGF0IHByb3ZpZGVzIGEgbG93LWxldmVsIGludGVyZmFjZSBmb3IgbW9kaWZ5aW5nIHRoZSBVSS5cbiAqXG4gKiBVc2UgdGhpcyBzZXJ2aWNlIHRvIGJ5cGFzcyBBbmd1bGFyJ3MgdGVtcGxhdGluZyBhbmQgbWFrZSBjdXN0b20gVUkgY2hhbmdlcyB0aGF0IGNhbid0IGJlXG4gKiBleHByZXNzZWQgZGVjbGFyYXRpdmVseS4gRm9yIGV4YW1wbGUgaWYgeW91IG5lZWQgdG8gc2V0IGEgcHJvcGVydHkgb3IgYW4gYXR0cmlidXRlIHdob3NlIG5hbWUgaXNcbiAqIG5vdCBzdGF0aWNhbGx5IGtub3duLCB1c2Uge0BsaW5rICNzZXRFbGVtZW50UHJvcGVydHl9IG9yIHtAbGluayAjc2V0RWxlbWVudEF0dHJpYnV0ZX1cbiAqIHJlc3BlY3RpdmVseS5cbiAqXG4gKiBJZiB5b3UgYXJlIGltcGxlbWVudGluZyBhIGN1c3RvbSByZW5kZXJlciwgeW91IG11c3QgaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlLlxuICpcbiAqIFRoZSBkZWZhdWx0IFJlbmRlcmVyIGltcGxlbWVudGF0aW9uIGlzIGBEb21SZW5kZXJlcmAuIEFsc28gYXZhaWxhYmxlIGlzIGBXZWJXb3JrZXJSZW5kZXJlcmAuXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJvb3RSZW5kZXJlciBpbXBsZW1lbnRzIFBhcmVudFJlbmRlcmVyIHtcbiAgYWJzdHJhY3QgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBSZW5kZXJlcjtcbn1cbiJdfQ==