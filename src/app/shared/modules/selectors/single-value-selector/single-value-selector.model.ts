// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { BaseModalConfig } from '../base-selector/base-selector.model';
import { Option } from '../../../types/general';

export interface SingleValueModalConfig extends BaseModalConfig {
  options: Option[];
}
