this["template"] = this["template"] || {};
this["template"]["todo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"listWrapper\">\n      <i class=\"fa fa-circle-thin checkbox\"></i>\n      <li class=\"listItem\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"task","hash":{},"data":data}) : helper)))
    + "</li>\n      <i class=\"fa fa-minus-square-o deletebox\"></i>\n    </div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"listWrapper\">\n      <i class=\"fa fa-check-circle checkbox\"></i>\n      <li class=\"listItem complete\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"task","hash":{},"data":data}) : helper)))
    + "</li>\n      <i class=\"fa fa-minus-square-o deletebox\"></i>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});