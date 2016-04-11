import { isString } from 'angular2/src/facade/lang';
import { RequestMethod } from './enums';
import { makeTypeError } from 'angular2/src/facade/exceptions';
export function normalizeMethodName(method) {
    if (isString(method)) {
        var originalMethod = method;
        method = method
            .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
        method = RequestMethod[method];
        if (typeof method !== 'number')
            throw makeTypeError(`Invalid request method. The method "${originalMethod}" is not supported.`);
    }
    return method;
}
export const isSuccess = (status) => (status >= 200 && status < 300);
export function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
export { isJsObject } from 'angular2/src/facade/lang';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdzNEUmxYSmkudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUMxQyxFQUFDLGFBQWEsRUFBQyxNQUFNLFNBQVM7T0FDOUIsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7QUFHNUQsb0NBQW9DLE1BQThCO0lBQ2hFQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNyQkEsSUFBSUEsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDNUJBLE1BQU1BLEdBQVlBLE1BQU9BO2FBQ1hBLE9BQU9BLENBQ0pBLFlBQVlBLEVBQ1pBLENBQUNBLEVBQVVBLEVBQUVBLEVBQVVBLEVBQUVBLEVBQVVBLEtBQUtBLEVBQUVBLENBQUNBLFdBQVdBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBO1FBQzlGQSxNQUFNQSxHQUFrQ0EsYUFBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDL0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLE1BQU1BLEtBQUtBLFFBQVFBLENBQUNBO1lBQzdCQSxNQUFNQSxhQUFhQSxDQUNmQSx1Q0FBdUNBLGNBQWNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBQ0RBLE1BQU1BLENBQWdCQSxNQUFNQSxDQUFDQTtBQUMvQkEsQ0FBQ0E7QUFFRCxhQUFhLFNBQVMsR0FBRyxDQUFDLE1BQWMsS0FBYyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRXRGLCtCQUErQixHQUFRO0lBQ3JDQyxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6REEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0E7QUFDVEEsQ0FBQ0E7QUFFRCxTQUFRLFVBQVUsUUFBTywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNTdHJpbmd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1JlcXVlc3RNZXRob2R9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi9zdGF0aWNfcmVzcG9uc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2Q6IHN0cmluZyB8IFJlcXVlc3RNZXRob2QpOiBSZXF1ZXN0TWV0aG9kIHtcbiAgaWYgKGlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBtZXRob2Q7XG4gICAgbWV0aG9kID0gKDxzdHJpbmc+bWV0aG9kKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgIC8oXFx3KShcXHcqKS9nLFxuICAgICAgICAgICAgICAgICAgICAgKGcwOiBzdHJpbmcsIGcxOiBzdHJpbmcsIGcyOiBzdHJpbmcpID0+IGcxLnRvVXBwZXJDYXNlKCkgKyBnMi50b0xvd2VyQ2FzZSgpKTtcbiAgICBtZXRob2QgPSA8bnVtYmVyPig8e1trZXk6IHN0cmluZ106IGFueX0+UmVxdWVzdE1ldGhvZClbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBtYWtlVHlwZUVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHJlcXVlc3QgbWV0aG9kLiBUaGUgbWV0aG9kIFwiJHtvcmlnaW5hbE1ldGhvZH1cIiBpcyBub3Qgc3VwcG9ydGVkLmApO1xuICB9XG4gIHJldHVybiA8UmVxdWVzdE1ldGhvZD5tZXRob2Q7XG59XG5cbmV4cG9ydCBjb25zdCBpc1N1Y2Nlc3MgPSAoc3RhdHVzOiBudW1iZXIpOiBib29sZWFuID0+IChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZVVSTCh4aHI6IGFueSk6IHN0cmluZyB7XG4gIGlmICgncmVzcG9uc2VVUkwnIGluIHhocikge1xuICAgIHJldHVybiB4aHIucmVzcG9uc2VVUkw7XG4gIH1cbiAgaWYgKC9eWC1SZXF1ZXN0LVVSTDovbS50ZXN0KHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpIHtcbiAgICByZXR1cm4geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLVJlcXVlc3QtVVJMJyk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge2lzSnNPYmplY3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG4iXX0=