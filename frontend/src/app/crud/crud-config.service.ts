import {InjectionToken} from "@angular/core";
import {CrudServiceConfig} from "./models";

export const CrudServiceConfiguration = new InjectionToken<CrudServiceConfig>('CrudServiceConfig');
