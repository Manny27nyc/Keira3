// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { QueryBuilderOptions } from 'squel';

export const squelConfig: QueryBuilderOptions = {
  autoQuoteTableNames: true,
  autoQuoteFieldNames: true,
  autoQuoteAliasNames: true,
  replaceSingleQuotes: true,
  singleQuoteReplacement: `\\'`,
};
