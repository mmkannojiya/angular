import { XHR } from 'angular2/src/compiler/xhr';
import { WebWorkerXHRImpl } from 'angular2/src/web_workers/worker/xhr_impl';
import { WebWorkerRootRenderer } from 'angular2/src/web_workers/worker/renderer';
import { print, CONST_EXPR } from 'angular2/src/facade/lang';
import { RootRenderer } from 'angular2/src/core/render/api';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES, ExceptionHandler, APPLICATION_COMMON_PROVIDERS, PLATFORM_COMMON_PROVIDERS } from 'angular2/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS } from 'angular2/common';
import { ClientMessageBrokerFactory, ClientMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/client_message_broker';
import { ServiceMessageBrokerFactory, ServiceMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/service_message_broker';
import { Serializer } from 'angular2/src/web_workers/shared/serializer';
import { ON_WEB_WORKER } from 'angular2/src/web_workers/shared/api';
import { Provider } from 'angular2/src/core/di';
import { RenderStore } from 'angular2/src/web_workers/shared/render_store';
class PrintLogger {
    constructor() {
        this.log = print;
        this.logError = print;
        this.logGroup = print;
    }
    logGroupEnd() { }
}
export const WORKER_APP_PLATFORM = CONST_EXPR([PLATFORM_COMMON_PROVIDERS]);
export const WORKER_APP_APPLICATION_COMMON = CONST_EXPR([
    APPLICATION_COMMON_PROVIDERS, FORM_PROVIDERS, Serializer,
    new Provider(PLATFORM_PIPES, { useValue: COMMON_PIPES, multi: true }),
    new Provider(PLATFORM_DIRECTIVES, { useValue: COMMON_DIRECTIVES, multi: true }),
    new Provider(ClientMessageBrokerFactory, { useClass: ClientMessageBrokerFactory_ }),
    new Provider(ServiceMessageBrokerFactory, { useClass: ServiceMessageBrokerFactory_ }),
    WebWorkerRootRenderer, new Provider(RootRenderer, { useExisting: WebWorkerRootRenderer }),
    new Provider(ON_WEB_WORKER, { useValue: true }), RenderStore,
    new Provider(ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }), WebWorkerXHRImpl,
    new Provider(XHR, { useExisting: WebWorkerXHRImpl })
]);
function _exceptionHandler() {
    return new ExceptionHandler(new PrintLogger());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcF9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXczRFJsWEppLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcF9jb21tb24udHMiXSwibmFtZXMiOlsiUHJpbnRMb2dnZXIiLCJQcmludExvZ2dlci5jb25zdHJ1Y3RvciIsIlByaW50TG9nZ2VyLmxvZ0dyb3VwRW5kIiwiX2V4Y2VwdGlvbkhhbmRsZXIiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sMkJBQTJCO09BQ3RDLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEM7T0FDbEUsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDBDQUEwQztPQUN2RSxFQUFDLEtBQUssRUFBUSxVQUFVLEVBQVksTUFBTSwwQkFBMEI7T0FDcEUsRUFBQyxZQUFZLEVBQUMsTUFBTSw4QkFBOEI7T0FDbEQsRUFBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlO09BQ3RJLEVBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxNQUFNLGlCQUFpQjtPQUN4RSxFQUFDLDBCQUEwQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sdURBQXVEO09BQ3RILEVBQUMsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSx3REFBd0Q7T0FDekgsRUFBQyxVQUFVLEVBQUMsTUFBTSw0Q0FBNEM7T0FDOUQsRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUM7T0FDMUQsRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0I7T0FDdEMsRUFBQyxXQUFXLEVBQUMsTUFBTSw4Q0FBOEM7QUFFeEU7SUFBQUE7UUFDRUMsUUFBR0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDWkEsYUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO0lBRW5CQSxDQUFDQTtJQURDRCxXQUFXQSxLQUFJRSxDQUFDQTtBQUNsQkYsQ0FBQ0E7QUFFRCxhQUFhLG1CQUFtQixHQUM1QixVQUFVLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFFNUMsYUFBYSw2QkFBNkIsR0FBMkMsVUFBVSxDQUFDO0lBQzlGLDRCQUE0QixFQUFFLGNBQWMsRUFBRSxVQUFVO0lBQ3hELElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ25FLElBQUksUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM3RSxJQUFJLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO0lBQ2pGLElBQUksUUFBUSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUM7SUFDbkYscUJBQXFCLEVBQUUsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFDLENBQUM7SUFDdkYsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQUUsV0FBVztJQUMxRCxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxnQkFBZ0I7SUFDM0YsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFDLENBQUM7Q0FDbkQsQ0FBQyxDQUFDO0FBRUg7SUFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsZ0JBQWdCQSxDQUFDQSxJQUFJQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUNqREEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3hocic7XG5pbXBvcnQge1dlYldvcmtlclhIUkltcGx9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIveGhyX2ltcGwnO1xuaW1wb3J0IHtXZWJXb3JrZXJSb290UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcmVuZGVyZXInO1xuaW1wb3J0IHtwcmludCwgVHlwZSwgQ09OU1RfRVhQUiwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtSb290UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlbmRlci9hcGknO1xuaW1wb3J0IHtQTEFURk9STV9ESVJFQ1RJVkVTLCBQTEFURk9STV9QSVBFUywgRXhjZXB0aW9uSGFuZGxlciwgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUywgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyx9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFUywgQ09NTU9OX1BJUEVTLCBGT1JNX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q2xpZW50TWVzc2FnZUJyb2tlckZhY3RvcnksIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5X30gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuaW1wb3J0IHtTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnksIFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeV99IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplcic7XG5pbXBvcnQge09OX1dFQl9XT1JLRVJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvYXBpJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7UmVuZGVyU3RvcmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcmVuZGVyX3N0b3JlJztcblxuY2xhc3MgUHJpbnRMb2dnZXIge1xuICBsb2cgPSBwcmludDtcbiAgbG9nRXJyb3IgPSBwcmludDtcbiAgbG9nR3JvdXAgPSBwcmludDtcbiAgbG9nR3JvdXBFbmQoKSB7fVxufVxuXG5leHBvcnQgY29uc3QgV09SS0VSX0FQUF9QTEFURk9STTogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1BMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlNdKTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9BUFBfQVBQTElDQVRJT05fQ09NTU9OOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLCBGT1JNX1BST1ZJREVSUywgU2VyaWFsaXplcixcbiAgbmV3IFByb3ZpZGVyKFBMQVRGT1JNX1BJUEVTLCB7dXNlVmFsdWU6IENPTU1PTl9QSVBFUywgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKFBMQVRGT1JNX0RJUkVDVElWRVMsIHt1c2VWYWx1ZTogQ09NTU9OX0RJUkVDVElWRVMsIG11bHRpOiB0cnVlfSksXG4gIG5ldyBQcm92aWRlcihDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeSwge3VzZUNsYXNzOiBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeV99KSxcbiAgbmV3IFByb3ZpZGVyKFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeSwge3VzZUNsYXNzOiBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnlffSksXG4gIFdlYldvcmtlclJvb3RSZW5kZXJlciwgbmV3IFByb3ZpZGVyKFJvb3RSZW5kZXJlciwge3VzZUV4aXN0aW5nOiBXZWJXb3JrZXJSb290UmVuZGVyZXJ9KSxcbiAgbmV3IFByb3ZpZGVyKE9OX1dFQl9XT1JLRVIsIHt1c2VWYWx1ZTogdHJ1ZX0pLCBSZW5kZXJTdG9yZSxcbiAgbmV3IFByb3ZpZGVyKEV4Y2VwdGlvbkhhbmRsZXIsIHt1c2VGYWN0b3J5OiBfZXhjZXB0aW9uSGFuZGxlciwgZGVwczogW119KSwgV2ViV29ya2VyWEhSSW1wbCxcbiAgbmV3IFByb3ZpZGVyKFhIUiwge3VzZUV4aXN0aW5nOiBXZWJXb3JrZXJYSFJJbXBsfSlcbl0pO1xuXG5mdW5jdGlvbiBfZXhjZXB0aW9uSGFuZGxlcigpOiBFeGNlcHRpb25IYW5kbGVyIHtcbiAgcmV0dXJuIG5ldyBFeGNlcHRpb25IYW5kbGVyKG5ldyBQcmludExvZ2dlcigpKTtcbn1cbiJdfQ==