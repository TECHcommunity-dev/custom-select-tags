/*
*Created new "eq" helper to compare two value in Handlebar template
*/

import { registerUnbound } from "discourse-common/lib/helpers";

registerUnbound("eq", function(value1, value2, params) {
  return value1 === value2;
});
