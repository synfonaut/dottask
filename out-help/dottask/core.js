// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('tubax.core');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.html.SafeHtml');
dottask.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"white",cljs.core.cst$kw$hex,"#C9C9C9",cljs.core.cst$kw$shortcut,"w"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"red",cljs.core.cst$kw$hex,"#D1686E",cljs.core.cst$kw$shortcut,"r"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"orange",cljs.core.cst$kw$hex,"#D4B06A",cljs.core.cst$kw$shortcut,"o"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"yellow",cljs.core.cst$kw$hex,"#D4D36A",cljs.core.cst$kw$shortcut,"y"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"green",cljs.core.cst$kw$hex,"#5FAE57",cljs.core.cst$kw$shortcut,"g"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"blue",cljs.core.cst$kw$hex,"#4E638E",cljs.core.cst$kw$shortcut,"b"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"violet",cljs.core.cst$kw$hex,"#744B8E",cljs.core.cst$kw$shortcut,"v"], null)], null);
dottask.core.color_keycode_lookup = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors),dottask.core.colors);
dottask.core.directions = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"up",cljs.core.cst$kw$dot,"BT",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._GT_,cljs.core.cst$kw$rotation,"0deg"], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"down",cljs.core.cst$kw$dot,"TB",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._LT_,cljs.core.cst$kw$rotation,"180deg"], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"left",cljs.core.cst$kw$dot,"RL",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._GT_,cljs.core.cst$kw$rotation,"270deg"], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"right",cljs.core.cst$kw$dot,"LR",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._LT_,cljs.core.cst$kw$rotation,"90deg"], null)], null);
dottask.core.debug = (function dottask$core$debug(result){
console.log("DEBUG",result);

return result;
});
dottask.core.prompt = (function dottask$core$prompt(message,val){
return prompt(message,val);
});
dottask.core.toggle = (function dottask$core$toggle(dict,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dict,key,cljs.core.not((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(dict) : key.call(null,dict))));
});
dottask.core.toggler = (function dottask$core$toggler(state,key){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,dottask.core.toggle,key);
});
});
dottask.core.extent = (function dottask$core$extent(numbers){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,numbers),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,numbers)], null);
});
dottask.core.map_vals = (function dottask$core$map_vals(func,hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function dottask$core$map_vals_$_iter__18430(s__18431){
return (new cljs.core.LazySeq(null,(function (){
var s__18431__$1 = s__18431;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18431__$1);
if(temp__4425__auto__){
var s__18431__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18431__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__18431__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__18433 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__18432 = (0);
while(true){
if((i__18432 < size__5442__auto__)){
var vec__18438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__18432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(1),null);
cljs.core.chunk_append(b__18433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null));

var G__18440 = (i__18432 + (1));
i__18432 = G__18440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18433),dottask$core$map_vals_$_iter__18430(cljs.core.chunk_rest(s__18431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18433),null);
}
} else {
var vec__18439 = cljs.core.first(s__18431__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null),dottask$core$map_vals_$_iter__18430(cljs.core.rest(s__18431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__(hmap);
})());
});
dottask.core.hesc = (function dottask$core$hesc(text){
return goog.html.SafeHtml.htmlEscape(text).getTypedStringValue();
});
dottask.core.esc = (function dottask$core$esc(text){
var G__18442 = [cljs.core.str(text)].join('');
return goog.string.escapeString(G__18442);
});
dottask.core.coords = (function dottask$core$coords(evt){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,evt.clientX,cljs.core.cst$kw$y,evt.clientY], null);
});
dottask.core.compare_coords = (function dottask$core$compare_coords(this$,other,direction){
var coord = cljs.core.cst$kw$coord.cljs$core$IFn$_invoke$arity$1(direction);
var before = cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(direction);
if(cljs.core.truth_((function (){var G__18445 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(this$) : coord.call(null,this$));
var G__18446 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(other) : coord.call(null,other));
return (before.cljs$core$IFn$_invoke$arity$2 ? before.cljs$core$IFn$_invoke$arity$2(G__18445,G__18446) : before.call(null,G__18445,G__18446));
})())){
return cljs.core.cst$kw$before;
} else {
return cljs.core.cst$kw$after;
}
});
dottask.core.invert_list_map = (function dottask$core$invert_list_map(hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.first(item)], null);
}),cljs.core.second(item));
}),hmap));
});
dottask.core.get_node = (function dottask$core$get_node(nodes,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18447_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_));
}),nodes));
});
dottask.core.get_node_dim = (function dottask$core$get_node_dim(node,dim){
var G__18449 = (((dim instanceof cljs.core.Keyword))?dim.fqn:null);
switch (G__18449) {
case "width":
var or__4671__auto__ = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (2);
}

break;
case "height":
var or__4671__auto__ = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return 1.2;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dim)].join('')));

}
});
dottask.core.get_el = (function dottask$core$get_el(selector){
return document.querySelector(selector);
});
dottask.core.jump_to_anchor = (function dottask$core$jump_to_anchor(id){
var G__18453 = (function (){
return dottask.core.get_el([cljs.core.str("#"),cljs.core.str(id)].join('')).scrollIntoView();
});
var G__18454 = (1);
return setTimeout(G__18453,G__18454);
});
dottask.core.a_link = (function dottask$core$a_link(var_args){
var args18455 = [];
var len__5729__auto___18458 = arguments.length;
var i__5730__auto___18459 = (0);
while(true){
if((i__5730__auto___18459 < len__5729__auto___18458)){
args18455.push((arguments[i__5730__auto___18459]));

var G__18460 = (i__5730__auto___18459 + (1));
i__5730__auto___18459 = G__18460;
continue;
} else {
}
break;
}

var G__18457 = args18455.length;
switch (G__18457) {
case 2:
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18455.length)].join('')));

}
});

dottask.core.a_link.cljs$core$IFn$_invoke$arity$2 = (function (id,text){
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$3(id,text,null);
});

dottask.core.a_link.cljs$core$IFn$_invoke$arity$3 = (function (id,text,func){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_(func)){
(func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
} else {
}

return dottask.core.jump_to_anchor(id);
})], null),text], null);
});

dottask.core.a_link.cljs$lang$maxFixedArity = 3;
dottask.core.el__GT_nodeid = (function dottask$core$el__GT_nodeid(el){
var node = goog.dom.getAncestorByClass(el,"node-overlay");
var node_id = (cljs.core.truth_(node)?node.getAttribute("data-nodeid"):null);
return node_id;
});
dottask.core.el__GT_clusterid = (function dottask$core$el__GT_clusterid(el){
var cluster = goog.dom.getAncestorByClass(el,"cluster-overlay");
var clusternode = goog.dom.getAncestorByClass(el,"cluster-node");
var cluster_id = (function (){var or__4671__auto__ = (cljs.core.truth_(cluster)?cluster.getAttribute("data-clusterid"):null);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_(clusternode)){
return clusternode.getAttribute("data-nodeid");
} else {
return null;
}
}
})();
return cluster_id;
});
dottask.core.center = (function dottask$core$center(point){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$max], null))) / (2)),cljs.core.cst$kw$y,((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$max], null))) / (2))], null);
});
dottask.core.width = (function dottask$core$width(rect){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
});
dottask.core.height = (function dottask$core$height(rect){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$max], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
});
dottask.core.rad__GT_deg = (function dottask$core$rad__GT_deg(rad){
return ((rad * (180)) / Math.PI);
});
dottask.core.get_angle = (function dottask$core$get_angle(start,end){
return dottask.core.rad__GT_deg((function (){var G__18464 = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(start));
var G__18465 = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(start));
return Math.atan2(G__18464,G__18465);
})());
});
dottask.core.polygon_points = (function dottask$core$polygon_points(var_args){
var args18466 = [];
var len__5729__auto___18469 = arguments.length;
var i__5730__auto___18470 = (0);
while(true){
if((i__5730__auto___18470 < len__5729__auto___18469)){
args18466.push((arguments[i__5730__auto___18470]));

var G__18471 = (i__5730__auto___18470 + (1));
i__5730__auto___18470 = G__18471;
continue;
} else {
}
break;
}

var G__18468 = args18466.length;
switch (G__18468) {
case 2:
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18466.length)].join('')));

}
});

dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2 = (function (start,moves){
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3(start,moves,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null));
});

dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3 = (function (start,moves,so_far){
if(cljs.core.truth_(cljs.core.not_empty(moves))){
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3(start,cljs.core.rest(moves),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(so_far,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.last(so_far),cljs.core.first(moves)))));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,","),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(so_far,start)));
}
});

dottask.core.polygon_points.cljs$lang$maxFixedArity = 3;