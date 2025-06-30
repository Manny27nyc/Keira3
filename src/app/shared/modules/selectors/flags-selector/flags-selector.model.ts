// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { BaseModalConfig } from '../base-selector/base-selector.model';
import { Flag } from '../../../types/general';

export interface FlagsModalConfig extends BaseModalConfig {
  flags: Flag[];
}
