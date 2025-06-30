// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  debugMode = isDevMode();
}
