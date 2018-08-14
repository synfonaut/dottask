// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.graph');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dottask.help');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('tubax.core');
goog.require('goog.events.EventType');
goog.require('historian.core');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.html.SafeHtml');
goog.require('dottask.core');
dottask.graph.ppi = (72);
if(typeof dottask.graph.app_state !== 'undefined'){
} else {
dottask.graph.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gclusters,cljs.core.cst$kw$selected_DASH_node_DASH_id,cljs.core.cst$kw$nodes,cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$svg,cljs.core.cst$kw$dot,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,cljs.core.cst$kw$clusters,cljs.core.cst$kw$direction,cljs.core.cst$kw$deps,cljs.core.cst$kw$gnodes],[null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node1",cljs.core.cst$kw$text,"Drag things"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node2",cljs.core.cst$kw$text,"Make nodes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node3",cljs.core.cst$kw$text,"Make links"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node4",cljs.core.cst$kw$text,"???"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node5",cljs.core.cst$kw$text,"Profit!"], null)], null),(6),"",null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$down,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node2","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node3","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node4","node5"], null)], null),null]));
}
if(typeof dottask.graph.ui_state !== 'undefined'){
} else {
dottask.graph.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,false,cljs.core.cst$kw$help_DASH_visible_QMARK_,false,cljs.core.cst$kw$resize_DASH_points,null,cljs.core.cst$kw$preview_DASH_points,null,cljs.core.cst$kw$edit_DASH_node_DASH_id,null,cljs.core.cst$kw$connected_DASH_nodes,cljs.core.PersistentHashSet.EMPTY], null));
}
dottask.graph.state_to_save = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$direction,cljs.core.cst$kw$clusters,cljs.core.cst$kw$nodes,cljs.core.cst$kw$deps], null);
dottask.graph.save_hash = (function dottask$graph$save_hash(state){
return (window["location"]["hash"] = (function (){var G__12573 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(state,dottask.graph.state_to_save)], 0));
return encodeURIComponent(G__12573);
})());
});
dottask.graph.load_hash = (function dottask$graph$load_hash(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,cljs.reader.read_string((function (){var G__12575 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest((window["location"]["hash"])));
return decodeURIComponent(G__12575);
})())], 0));
});
dottask.graph.get_hidden_ids = (function dottask$graph$get_hidden_ids(var_args){
var args12576 = [];
var len__5729__auto___12579 = arguments.length;
var i__5730__auto___12580 = (0);
while(true){
if((i__5730__auto___12580 < len__5729__auto___12579)){
args12576.push((arguments[i__5730__auto___12580]));

var G__12581 = (i__5730__auto___12580 + (1));
i__5730__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var G__12578 = args12576.length;
switch (G__12578) {
case 2:
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12576.length)].join('')));

}
});

dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2 = (function (nodes,clusters){
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes),cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters)),null,null);
});

dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6 = (function (nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cluster_id,collapsed_parent_id){
var collapsed_id = (function (){var or__4671__auto__ = collapsed_parent_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = cluster_id;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clusters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cluster_id,cljs.core.cst$kw$collapsed], null));
} else {
return and__4659__auto__;
}
})())){
return cluster_id;
} else {
return null;
}
}
})();
var hidden_children = (cljs.core.truth_(collapsed_id)?cljs.core.PersistentArrayMap.fromArray([collapsed_id,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id))], true, false):cljs.core.PersistentArrayMap.EMPTY);
var nested_maps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (collapsed_id,hidden_children){
return (function (child_cluster){
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(child_cluster),collapsed_id);
});})(collapsed_id,hidden_children))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id));
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.concat,hidden_children,nested_maps);
return result;
});

dottask.graph.get_hidden_ids.cljs$lang$maxFixedArity = 6;
dottask.graph.fix_deps = (function dottask$graph$fix_deps(deps,hidden_ids){
var rename_lookup = dottask.core.invert_list_map(hidden_ids);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12584_SHARP_){
var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12584_SHARP_),cljs.core.second(p1__12584_SHARP_));
if(and__4659__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(hidden_ids,cljs.core.first(p1__12584_SHARP_));
} else {
return and__4659__auto__;
}
});})(rename_lookup))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12583_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(rename_lookup,p1__12583_SHARP_);
});})(rename_lookup))
,deps))));
});
dottask.graph.node__GT_dot = (function dottask$graph$node__GT_dot(var_args){
var args12585 = [];
var len__5729__auto___12588 = arguments.length;
var i__5730__auto___12589 = (0);
while(true){
if((i__5730__auto___12589 < len__5729__auto___12588)){
args12585.push((arguments[i__5730__auto___12589]));

var G__12590 = (i__5730__auto___12589 + (1));
i__5730__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var G__12587 = args12585.length;
switch (G__12587) {
case 1:
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12585.length)].join('')));

}
});

dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$1 = (function (node){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(node,"");
});

dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2 = (function (node,label){
return [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str("[label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\" color=\""),cljs.core.str((function (){var or__4671__auto__ = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "#666666";
}
})()),cljs.core.str("\" height=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$height)),cljs.core.str("\" width=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$width)),cljs.core.str("\"];")].join('');
});

dottask.graph.node__GT_dot.cljs$lang$maxFixedArity = 2;
dottask.graph.cluster__GT_dot = (function dottask$graph$cluster__GT_dot(cluster_id,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_){
var cluster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cluster_id);
var label = (cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cluster):" ");
if(cljs.core.truth_(cljs.core.cst$kw$collapsed.cljs$core$IFn$_invoke$arity$1(cluster))){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cluster_id], null),label);
} else {
return [cljs.core.str("\nsubgraph "),cljs.core.str((function (){var or__4671__auto__ = cluster_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "root";
}
})()),cljs.core.str("{\n"),cljs.core.str("label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\";\n "),cljs.core.str("color=\"#666666\";\n "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cluster,label){
return (function (p1__12592_SHARP_){
return dottask$graph$cluster__GT_dot(p1__12592_SHARP_,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_);
});})(cluster,label))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id))))),cljs.core.str("\n"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(";\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id)))),cljs.core.str("}\n")].join('');
}
});
dottask.graph.graph__GT_dot = (function dottask$graph$graph__GT_dot(nodes,deps,clusters,direction,labels_QMARK_){
var nodes_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes);
var clusters_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters));
var hidden_ids = dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2(nodes,clusters);
var hidden_id_set = cljs.core.set(cljs.core.flatten(cljs.core.vals(hidden_ids)));
return [cljs.core.str("digraph \"\" {\n"),cljs.core.str("dpi="),cljs.core.str(dottask.graph.ppi),cljs.core.str(";\n"),cljs.core.str("rankdir="),cljs.core.str(cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(direction)),cljs.core.str(";\n"),cljs.core.str("node [label=\"\" shape=\"rect\" penwidth=\"4\"]\n"),cljs.core.str("edge [color=\"#555555\"]\n"),cljs.core.str(dottask.graph.cluster__GT_dot(null,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12593_SHARP_){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(p1__12593_SHARP_,(cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(p1__12593_SHARP_):""));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12594_SHARP_){
return cljs.core.contains_QMARK_(hidden_id_set,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12594_SHARP_));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,nodes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12595_SHARP_){
return [cljs.core.str(cljs.core.first(p1__12595_SHARP_)),cljs.core.str("->"),cljs.core.str(cljs.core.second(p1__12595_SHARP_)),cljs.core.str("[label=\""),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__12595_SHARP_,(2),null)),cljs.core.str("\"];")].join('');
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,dottask.graph.fix_deps(deps,hidden_ids)))))),cljs.core.str("}")].join('');
});
dottask.graph.get_points = (function dottask$graph$get_points(cljdotnode){
var points = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdotnode))));
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.extent,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12597_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,p1__12597_SHARP_);
});})(points))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12596_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__12596_SHARP_,/,/);
});})(points))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/ /))))));
});
dottask.graph.get_cljdot_id = (function dottask$graph$get_cljdot_id(item){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(item))));
});
dottask.graph.svg__GT_gdata = (function dottask$graph$svg__GT_gdata(svg){
var cljdot = tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(svg);
var items = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.graph.get_cljdot_id(node),cljs.core.cst$kw$points,dottask.graph.get_points(node)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12598_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12598_SHARP_)),"node");
});})(cljdot,items))
,items)),cljs.core.cst$kw$clusters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (cluster){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.graph.get_cljdot_id(cluster),cljs.core.cst$kw$points,dottask.graph.get_points(cluster)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12599_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12599_SHARP_)),"cluster");
});})(cljdot,items))
,items))], null);
});
dottask.graph.dot__GT_svg = (function dottask$graph$dot__GT_svg(dot){
return clojure.string.replace((function (){var G__12608 = dot;
var G__12609 = (function (){var obj12611 = {"format":"svg"};
return obj12611;
})();
return Viz(G__12608,G__12609);
})(),/pt\"/,"px\"");
});
dottask.graph.update_state = (function dottask$graph$update_state(state){
var dot = dottask.graph.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions),false);
var same_graph = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dot,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(state));
var svg = ((same_graph)?cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state):dottask.graph.dot__GT_svg(dot));
var gdata = ((same_graph)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state)], null):dottask.graph.svg__GT_gdata(svg));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$dot,dot,cljs.core.array_seq([cljs.core.cst$kw$svg,svg,cljs.core.cst$kw$gnodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dot,same_graph,svg,gdata){
return (function (p1__12612_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12612_SHARP_,cljs.core.cst$kw$node,dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12612_SHARP_)),cljs.core.array_seq([cljs.core.cst$kw$cluster,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12612_SHARP_)], null))], 0));
});})(dot,same_graph,svg,gdata))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(gdata)),cljs.core.cst$kw$gclusters,cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(gdata)], 0));
});
dottask.graph.rerender_BANG_ = (function dottask$graph$rerender_BANG_(updater){
return (function() { 
var G__12613__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,dottask.graph.app_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dottask.graph.update_state,updater)),args);
};
var G__12613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12614__i = 0, G__12614__a = new Array(arguments.length -  0);
while (G__12614__i < G__12614__a.length) {G__12614__a[G__12614__i] = arguments[G__12614__i + 0]; ++G__12614__i;}
  args = new cljs.core.IndexedSeq(G__12614__a,0);
} 
return G__12613__delegate.call(this,args);};
G__12613.cljs$lang$maxFixedArity = 0;
G__12613.cljs$lang$applyTo = (function (arglist__12615){
var args = cljs.core.seq(arglist__12615);
return G__12613__delegate(args);
});
G__12613.cljs$core$IFn$_invoke$arity$variadic = G__12613__delegate;
return G__12613;
})()
;
});
dottask.graph.set_direction = (function dottask$graph$set_direction(state,dirkey){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$direction,dirkey);
});
dottask.graph.update_node = (function dottask$graph$update_node(state,node_id,func){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$nodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),node_id)){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(node) : func.call(null,node));
} else {
return node;
}
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)));
});
dottask.graph.rename_node = (function dottask$graph$rename_node(state,node_id,text){
return dottask.graph.update_node(state,node_id,(function (p1__12616_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12616_SHARP_,cljs.core.cst$kw$text,text);
}));
});
dottask.graph.resize_node = (function dottask$graph$resize_node(state,node_id,width,height){
var height_pt = (height / dottask.graph.ppi);
var width_pt = (width / dottask.graph.ppi);
return dottask.graph.update_node(state,node_id,((function (height_pt,width_pt){
return (function (p1__12617_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12617_SHARP_,cljs.core.cst$kw$width,width_pt,cljs.core.array_seq([cljs.core.cst$kw$height,height_pt], 0));
});})(height_pt,width_pt))
);
});
dottask.graph.recolor_node = (function dottask$graph$recolor_node(state,node_id,color){
return dottask.graph.update_node(state,node_id,(function (p1__12618_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12618_SHARP_,cljs.core.cst$kw$color,color);
}));
});
dottask.graph.recluster_node = (function dottask$graph$recluster_node(state,node_id,cluster_id){
return dottask.graph.update_node(state,node_id,(function (p1__12619_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12619_SHARP_,cljs.core.cst$kw$cluster_DASH_id,cluster_id);
}));
});
dottask.graph.select_node = (function dottask$graph$select_node(state,node_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,node_id);
});
dottask.graph.get_next_node_id = (function dottask$graph$get_next_node_id(state,direction,current){
var gdata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state));
var positioned_nodes = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gdata){
return (function (node){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y], null)))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)],null));
});})(gdata))
,gdata));
var node_index = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (gdata,positioned_nodes){
return (function (idx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(node,(2)),idx], null);
});})(gdata,positioned_nodes))
,positioned_nodes)));
var old_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index,current);
var new_index = (((current == null))?(0):cljs.core.mod((old_index + direction),cljs.core.count(positioned_nodes)));
var new_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positioned_nodes,new_index);
var new_node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_node,(2));
return new_node_id;
});
dottask.graph.select_next_node = (function dottask$graph$select_next_node(var_args){
var args12620 = [];
var len__5729__auto___12623 = arguments.length;
var i__5730__auto___12624 = (0);
while(true){
if((i__5730__auto___12624 < len__5729__auto___12623)){
args12620.push((arguments[i__5730__auto___12624]));

var G__12625 = (i__5730__auto___12624 + (1));
i__5730__auto___12624 = G__12625;
continue;
} else {
}
break;
}

var G__12622 = args12620.length;
switch (G__12622) {
case 1:
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12620.length)].join('')));

}
});

dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2(state,(1));
});

dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2 = (function (state,direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,dottask.graph.get_next_node_id(state,direction,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)));
});

dottask.graph.select_next_node.cljs$lang$maxFixedArity = 2;
dottask.graph.edit_next = (function dottask$graph$edit_next(ui_state,state,direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_state,cljs.core.cst$kw$edit_DASH_node_DASH_id,dottask.graph.get_next_node_id(state,direction,cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(ui_state)));
});
dottask.graph.delete_node = (function dottask$graph$delete_node(state,id){
var new_nodes = cljs.core.filterv((function (p1__12627_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12627_SHARP_));
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state));
var new_deps = cljs.core.filterv(((function (new_nodes){
return (function (dep){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,id),dep);
});})(new_nodes))
,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,new_deps], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state))){
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1(new_state);
} else {
return new_state;
}
});
dottask.graph.delete_nodes = (function dottask$graph$delete_nodes(state,ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(dottask.graph.delete_node,state,ids);
});
dottask.graph.delete_all = (function dottask$graph$delete_all(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$deps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$clusters,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$selected_DASH_node_DASH_id,null], 0));
});
dottask.graph.add_node = (function dottask$graph$add_node(var_args){
var args12630 = [];
var len__5729__auto___12633 = arguments.length;
var i__5730__auto___12634 = (0);
while(true){
if((i__5730__auto___12634 < len__5729__auto___12633)){
args12630.push((arguments[i__5730__auto___12634]));

var G__12635 = (i__5730__auto___12634 + (1));
i__5730__auto___12634 = G__12635;
continue;
} else {
}
break;
}

var G__12632 = args12630.length;
switch (G__12632) {
case 3:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12630.length)].join('')));

}
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3 = (function (state,befores,afters){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4(state,befores,afters,"");
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4 = (function (state,befores,afters,text){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,befores,afters,text,false);
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5 = (function (state,befores,afters,text,return_id_QMARK_){
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$text,text], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var all_deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12628_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12628_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node)],null));
});})(new_node_id,new_node,new_nodes))
,befores),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12629_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node),p1__12629_SHARP_],null));
});})(new_node_id,new_node,new_nodes))
,afters)], null));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,all_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,new_node_id], null);
} else {
return new_state;
}
});

dottask.graph.add_node.cljs$lang$maxFixedArity = 5;
dottask.graph.clone_node = (function dottask$graph$clone_node(state,node_id){
var node = dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id);
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$id,new_node_id);
var sub = ((function (node,new_node_id,new_node){
return (function (id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,node_id)){
return new_node_id;
} else {
return id;
}
});})(node,new_node_id,new_node))
;
var new_deps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,new_node_id,new_node,sub){
return (function (p1__12637_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([sub,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__12637_SHARP_)], 0)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__12637_SHARP_));
});})(node,new_node_id,new_node,sub))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dottask.core.node_in_link_QMARK_,node_id),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node),cljs.core.array_seq([cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new_deps),cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});
dottask.graph.inside_cluster_QMARK_ = (function dottask$graph$inside_cluster_QMARK_(clusters,child,parent_id){
if((cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child) == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child))){
return true;
} else {
return dottask$graph$inside_cluster_QMARK_(clusters,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child)),parent_id);

}
}
});
dottask.graph.toggle_cluster_nesting = (function dottask$graph$toggle_cluster_nesting(state,child_id,parent_id){
if(cljs.core.truth_(dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,parent_id], null)),child_id))){
return state;
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null))))?null:parent_id));
}
});
dottask.graph.add_cluster = (function dottask$graph$add_cluster(var_args){
var args12643 = [];
var len__5729__auto___12646 = arguments.length;
var i__5730__auto___12647 = (0);
while(true){
if((i__5730__auto___12647 < len__5729__auto___12646)){
args12643.push((arguments[i__5730__auto___12647]));

var G__12648 = (i__5730__auto___12647 + (1));
i__5730__auto___12647 = G__12648;
continue;
} else {
}
break;
}

var G__12645 = args12643.length;
switch (G__12645) {
case 2:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12643.length)].join('')));

}
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,node_ids){
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3(state,dottask.core.prompt("Enter a name for the box",""),node_ids);
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,text,node_ids){
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,node_ids,false);
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4 = (function (state,text,node_ids,return_id_QMARK_){
var cluster_id = [cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_id){
return (function (p1__12641_SHARP_,p2__12642_SHARP_){
return dottask.graph.recluster_node(p1__12641_SHARP_,p2__12642_SHARP_,cluster_id);
});})(cluster_id))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$clusters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cluster_id,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cluster_id,cljs.core.cst$kw$text,text,cljs.core.cst$kw$collapsed,false], null)),cljs.core.array_seq([cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0)),node_ids);
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,cluster_id], null);
} else {
return new_state;
}
});

dottask.graph.add_cluster.cljs$lang$maxFixedArity = 4;
dottask.graph.delete_cluster = (function dottask$graph$delete_cluster(var_args){
var args12652 = [];
var len__5729__auto___12655 = arguments.length;
var i__5730__auto___12656 = (0);
while(true){
if((i__5730__auto___12656 < len__5729__auto___12655)){
args12652.push((arguments[i__5730__auto___12656]));

var G__12657 = (i__5730__auto___12656 + (1));
i__5730__auto___12656 = G__12657;
continue;
} else {
}
break;
}

var G__12654 = args12652.length;
switch (G__12654) {
case 2:
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12652.length)].join('')));

}
});

dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,id){
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3(state,id,false);
});

dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,id,delete_contents_QMARK_){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,id,cljs.core.cst$kw$cluster_DASH_id], null));
var wipe_id = ((function (parent_id){
return (function (p1__12650_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__12650_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12650_SHARP_,cljs.core.cst$kw$cluster_DASH_id,parent_id);
} else {
return p1__12650_SHARP_;
}
});})(parent_id))
;
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(wipe_id,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$clusters,dottask.core.map_vals(wipe_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),id))], 0));
var nodes_to_delete = (cljs.core.truth_(delete_contents_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parent_id,wipe_id,new_state){
return (function (p1__12651_SHARP_){
return dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),p1__12651_SHARP_,id);
});})(parent_id,wipe_id,new_state))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)):null);
return dottask.graph.delete_nodes(new_state,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,nodes_to_delete));
});

dottask.graph.delete_cluster.cljs$lang$maxFixedArity = 3;
dottask.graph.rename_cluster = (function dottask$graph$rename_cluster(state,cluster_id,name){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null),name);
});
dottask.graph.rename_cluster_prompt = (function dottask$graph$rename_cluster_prompt(state,cluster_id){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id], null)))){
var new_name = dottask.core.prompt("Enter new name",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null)));
if(cljs.core.truth_(new_name)){
return dottask.graph.rename_cluster(state,cluster_id,new_name);
} else {
return state;
}
} else {
return state;
}
});
dottask.graph.outer_cluster_prompt = (function dottask$graph$outer_cluster_prompt(state,inner_cluster_id){
return dottask.graph.toggle_cluster_nesting(dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),inner_cluster_id,[cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join(''));
});
dottask.graph.toggle_node_cluster = (function dottask$graph$toggle_node_cluster(state,node_id,cluster_id){
var new_cluster_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id))))?"":cluster_id);
return dottask.graph.recluster_node(state,node_id,new_cluster_id);
});
dottask.graph.move_deps = (function dottask$graph$move_deps(var_args){
var args12659 = [];
var len__5729__auto___12662 = arguments.length;
var i__5730__auto___12663 = (0);
while(true){
if((i__5730__auto___12663 < len__5729__auto___12662)){
args12659.push((arguments[i__5730__auto___12663]));

var G__12664 = (i__5730__auto___12663 + (1));
i__5730__auto___12663 = G__12664;
continue;
} else {
}
break;
}

var G__12661 = args12659.length;
switch (G__12661) {
case 4:
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12659.length)].join('')));

}
});

dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4 = (function (deps,old_node_id,new_node_id,dep_type){
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5(deps,old_node_id,new_node_id,(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$before)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)),(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$after)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)));
});

dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5 = (function (deps,old_node_id,new_node_id,move_befores,move_afters){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dep){
if(cljs.core.truth_((function (){var and__4659__auto__ = move_befores;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(dep),old_node_id);
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(dep),new_node_id], null);
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = move_afters;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dep),old_node_id);
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_node_id,cljs.core.second(dep)], null);
} else {
return dep;

}
}
}),deps);
});

dottask.graph.move_deps.cljs$lang$maxFixedArity = 5;
dottask.graph.split_node = (function dottask$graph$split_node(state,node_id,new_node_pos){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state);
var node = dottask.core.get_node(nodes,node_id);
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$cluster_DASH_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$text,""], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new_node);
var new_deps = dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),node_id,new_node_id,new_node_pos);
var final_deps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_deps,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_node_pos,cljs.core.cst$kw$before))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_node_id,node_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new_node_id], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,final_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});
dottask.graph.add_or_split_node = (function dottask$graph$add_or_split_node(state,node_id,position,split_QMARK_){
if(cljs.core.truth_(split_QMARK_)){
return dottask.graph.split_node(state,node_id,position);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$before)){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null));
} else {
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null),cljs.core.PersistentVector.EMPTY);
}
}
});
dottask.graph.find_dep = (function dottask$graph$find_dep(state,dep){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12666_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__12666_SHARP_),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),dep));
}),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state)));
});
dottask.graph.toggle_dep = (function dottask$graph$toggle_dep(state,dep){
var found = dottask.graph.find_dep(state,dep);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deps], null),((function (found){
return (function (deps){
if(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(dep,(2),null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12667_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12667_SHARP_,found);
});})(found))
,deps),dep);
} else {
if(cljs.core.truth_(found)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12668_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12668_SHARP_,found);
});})(found))
,deps);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(deps,dep);
}
}
});})(found))
);
});
dottask.graph.toggle_dep_clear = (function dottask$graph$toggle_dep_clear(state,dep){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dottask.graph.toggle_dep(state,dep),cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
});
dottask.graph.on_toggle_dep_click = (function dottask$graph$on_toggle_dep_click(state,node_id,label){
var last_clicked_id = cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state);
if((last_clicked_id == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,node_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_clicked_id,node_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
} else {
return dottask.graph.toggle_dep_clear(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_clicked_id,node_id,label], null));
}
}
});
dottask.graph.node_mouseup = (function dottask$graph$node_mouseup(src_node_id,src_coords,direction,move_keys){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$preview_DASH_points,null);

if(cljs.core.truth_(move_keys)){
var seq__12673_12677 = cljs.core.seq(move_keys);
var chunk__12674_12678 = null;
var count__12675_12679 = (0);
var i__12676_12680 = (0);
while(true){
if((i__12676_12680 < count__12675_12679)){
var move_key_12681 = chunk__12674_12678.cljs$core$IIndexed$_nth$arity$2(null,i__12676_12680);
goog.events.unlistenByKey(move_key_12681);

var G__12682 = seq__12673_12677;
var G__12683 = chunk__12674_12678;
var G__12684 = count__12675_12679;
var G__12685 = (i__12676_12680 + (1));
seq__12673_12677 = G__12682;
chunk__12674_12678 = G__12683;
count__12675_12679 = G__12684;
i__12676_12680 = G__12685;
continue;
} else {
var temp__4425__auto___12686 = cljs.core.seq(seq__12673_12677);
if(temp__4425__auto___12686){
var seq__12673_12687__$1 = temp__4425__auto___12686;
if(cljs.core.chunked_seq_QMARK_(seq__12673_12687__$1)){
var c__5474__auto___12688 = cljs.core.chunk_first(seq__12673_12687__$1);
var G__12689 = cljs.core.chunk_rest(seq__12673_12687__$1);
var G__12690 = c__5474__auto___12688;
var G__12691 = cljs.core.count(c__5474__auto___12688);
var G__12692 = (0);
seq__12673_12677 = G__12689;
chunk__12674_12678 = G__12690;
count__12675_12679 = G__12691;
i__12676_12680 = G__12692;
continue;
} else {
var move_key_12693 = cljs.core.first(seq__12673_12687__$1);
goog.events.unlistenByKey(move_key_12693);

var G__12694 = cljs.core.next(seq__12673_12687__$1);
var G__12695 = null;
var G__12696 = (0);
var G__12697 = (0);
seq__12673_12677 = G__12694;
chunk__12674_12678 = G__12695;
count__12675_12679 = G__12696;
i__12676_12680 = G__12697;
continue;
}
} else {
}
}
break;
}
} else {
}

var tgt_coords = dottask.core.coords(e);
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
var shift_key = e.shiftKey;
var alt_key = e.altKey;
if(cljs.core.truth_((function (){var and__4659__auto__ = node_id;
if(cljs.core.truth_(and__4659__auto__)){
return ((dottask.core.coords_dist(src_coords,tgt_coords) > (5))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,cluster_id));
} else {
return and__4659__auto__;
}
})())){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_dep_clear).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_node_id,node_id,(cljs.core.truth_(shift_key)?dottask.core.prompt("Enter link text:",""):null)], null));
} else {
if(cljs.core.truth_(cluster_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_node_cluster).call(null,src_node_id,cluster_id);
} else {
if(cljs.core.truth_(alt_key)){
return dottask.graph.rerender_BANG_(dottask.graph.clone_node).call(null,src_node_id);
} else {
if((node_id == null)){
return dottask.graph.rerender_BANG_(dottask.graph.add_or_split_node).call(null,src_node_id,dottask.core.compare_coords(tgt_coords,src_coords,(direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(dottask.core.directions) : direction.call(null,dottask.core.directions))),shift_key);
} else {
return null;
}
}
}
}
});
});
dottask.graph.edit_node_BANG_ = (function dottask$graph$edit_node_BANG_(node_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$edit_DASH_node_DASH_id,node_id);

var textbox = document.querySelector(".edit-overlay textarea");
var G__12700_12702 = ((function (textbox){
return (function (){
return textbox.focus();
});})(textbox))
;
setTimeout(G__12700_12702);

var G__12701 = ((function (textbox){
return (function (){
return textbox.select();
});})(textbox))
;
return setTimeout(G__12701);
});
dottask.graph.add_and_name_node_BANG_ = (function dottask$graph$add_and_name_node_BANG_(state,befores,afters,cluster_id){
var vec__12704 = dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,befores,afters,"",true);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(1),null);
dottask.graph.edit_node_BANG_(new_id);

if(cljs.core.truth_(cluster_id)){
return dottask.graph.recluster_node(new_state,new_id,cluster_id);
} else {
return new_state;
}
});
dottask.graph.cluster_mouseup = (function dottask$graph$cluster_mouseup(src_cluster_id,down_event){
var src_y = down_event.clientY;
return ((function (src_y){
return (function (e){
var tgt_coords = dottask.core.coords(e);
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
if(cljs.core.truth_(node_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_node_cluster).call(null,node_id,src_cluster_id);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,src_cluster_id)){
if(cljs.core.truth_(cluster_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_cluster_nesting).call(null,src_cluster_id,cluster_id);
} else {
if((e.clientY < src_y)){
return dottask.graph.rerender_BANG_(dottask.graph.outer_cluster_prompt).call(null,src_cluster_id);
} else {
return dottask.graph.rerender_BANG_(dottask.graph.add_and_name_node_BANG_).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,src_cluster_id);
}
}
} else {
return null;
}
}
});
;})(src_y))
});
dottask.graph.resize_mouse = (function dottask$graph$resize_mouse(target,move_keys){
return (function (e){
var node = goog.dom.getAncestorByClass(target,"node-overlay");
var container = goog.dom.getAncestorByClass(target,"dotgraph");
var bounds = node.getBoundingClientRect();
var ctop = container.getBoundingClientRect().top;
var width = (function (){var x__5002__auto__ = (e.clientX - bounds.left);
var y__5003__auto__ = (35);
return ((x__5002__auto__ > y__5003__auto__) ? x__5002__auto__ : y__5003__auto__);
})();
var height = (function (){var x__5002__auto__ = (e.clientY - bounds.top);
var y__5003__auto__ = (35);
return ((x__5002__auto__ > y__5003__auto__) ? x__5002__auto__ : y__5003__auto__);
})();
var node_id = dottask.core.el__GT_nodeid(target);
if(cljs.core.truth_(move_keys)){
var seq__12709_12713 = cljs.core.seq(move_keys);
var chunk__12710_12714 = null;
var count__12711_12715 = (0);
var i__12712_12716 = (0);
while(true){
if((i__12712_12716 < count__12711_12715)){
var key_12717 = chunk__12710_12714.cljs$core$IIndexed$_nth$arity$2(null,i__12712_12716);
goog.events.unlistenByKey(key_12717);

var G__12718 = seq__12709_12713;
var G__12719 = chunk__12710_12714;
var G__12720 = count__12711_12715;
var G__12721 = (i__12712_12716 + (1));
seq__12709_12713 = G__12718;
chunk__12710_12714 = G__12719;
count__12711_12715 = G__12720;
i__12712_12716 = G__12721;
continue;
} else {
var temp__4425__auto___12722 = cljs.core.seq(seq__12709_12713);
if(temp__4425__auto___12722){
var seq__12709_12723__$1 = temp__4425__auto___12722;
if(cljs.core.chunked_seq_QMARK_(seq__12709_12723__$1)){
var c__5474__auto___12724 = cljs.core.chunk_first(seq__12709_12723__$1);
var G__12725 = cljs.core.chunk_rest(seq__12709_12723__$1);
var G__12726 = c__5474__auto___12724;
var G__12727 = cljs.core.count(c__5474__auto___12724);
var G__12728 = (0);
seq__12709_12713 = G__12725;
chunk__12710_12714 = G__12726;
count__12711_12715 = G__12727;
i__12712_12716 = G__12728;
continue;
} else {
var key_12729 = cljs.core.first(seq__12709_12723__$1);
goog.events.unlistenByKey(key_12729);

var G__12730 = cljs.core.next(seq__12709_12723__$1);
var G__12731 = null;
var G__12732 = (0);
var G__12733 = (0);
seq__12709_12713 = G__12730;
chunk__12710_12714 = G__12731;
count__12711_12715 = G__12732;
i__12712_12716 = G__12733;
continue;
}
} else {
}
}
break;
}

dottask.graph.rerender_BANG_(dottask.graph.resize_node).call(null,node_id,width,height);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$resize_DASH_points,null,cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,""], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (node,container,bounds,ctop,width,height,node_id){
return (function (state){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null),(width + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$max], null),(height + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null))));
});})(node,container,bounds,ctop,width,height,node_id))
);
}
});
});
dottask.graph.graph_coords = (function dottask$graph$graph_coords(target,e){
var container = goog.dom.getAncestorByClass(target,"dotgraph");
var bounds = container.getBoundingClientRect();
var base = ((typeof e.clientX === 'number')?e:dottask.core.changed_touch(e));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(base.clientX - bounds.left),cljs.core.cst$kw$y,(base.clientY - bounds.top)], null);
});
dottask.graph.link_preview = (function dottask$graph$link_preview(target,start_touch_event){
return (function (e){
if(((start_touch_event == null)) || (cljs.core.some_QMARK_(dottask.core.changed_touch_by_id(e.event_,start_touch_event.identifier)))){
var tgt_coords = dottask.core.coords(e);
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tgt_coords),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tgt_coords)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (tgt_coords,node_id,cluster_id){
return (function (state){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$shift_DASH_key], null),e.shiftKey),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$alt_DASH_key], null),e.altKey),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end], null),dottask.graph.graph_coords(target,e)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end_DASH_node_DASH_id], null),node_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end_DASH_cluster_DASH_id], null),cluster_id);
});})(tgt_coords,node_id,cluster_id))
);
} else {
return null;
}
});
});
dottask.graph.help_mouseup = (function dottask$graph$help_mouseup(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_drag,false);

var help_node = (function (){var G__12738 = e.target;
var G__12739 = ((function (G__12738){
return (function (p1__12734_SHARP_){
var and__4659__auto__ = p1__12734_SHARP_.hasAttribute;
if(cljs.core.truth_(and__4659__auto__)){
return p1__12734_SHARP_.hasAttribute("data-help-link");
} else {
return and__4659__auto__;
}
});})(G__12738))
;
var G__12740 = true;
return goog.dom.getAncestor(G__12738,G__12739,G__12740);
})();
if(cljs.core.truth_(help_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_visible_QMARK_,true);

return dottask.core.jump_to_anchor(help_node.getAttribute("data-help-link"));
} else {
return null;
}
});
dottask.graph.help_mousedown = (function dottask$graph$help_mousedown(e){
var G__12744_12747 = window;
var G__12745_12748 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12746_12749 = dottask.graph.help_mouseup;
goog.events.listenOnce(G__12744_12747,G__12745_12748,G__12746_12749);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_drag,true);
});
dottask.graph.node_mousedown = (function dottask$graph$node_mousedown(e,state,ui_state){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"touchstart")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0)))){
e.preventDefault();

var target_12784 = e.target;
var node_id_12785 = dottask.core.el__GT_nodeid(target_12784);
var gnode_12786 = dottask.core.get_node(cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),node_id_12785);
var direction_12787 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var G__12768 = e.target;
var G__12769 = "node-resize";
return goog.dom.classlist.contains(G__12768,G__12769);
})())){
var move_keys_12788 = dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (target_12784,node_id_12785,gnode_12786,direction_12787){
return (function (p1__12750_SHARP_){
var G__12770 = window;
var G__12771 = p1__12750_SHARP_;
var G__12772 = dottask.graph.resize_mouse(e.target,null);
return goog.events.listen(G__12770,G__12771,G__12772);
});})(target_12784,node_id_12785,gnode_12786,direction_12787))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.EventType.MOUSEMOVE,goog.events.EventType.TOUCHMOVE], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ui_state,cljs.core.assoc,cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode_12786),cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode_12786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null))], 0));

var G__12773_12789 = window;
var G__12774_12790 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12775_12791 = dottask.graph.resize_mouse(target_12784,move_keys_12788);
goog.events.listenOnce(G__12773_12789,G__12774_12790,G__12775_12791);
} else {
var move_keys_12792 = dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (target_12784,node_id_12785,gnode_12786,direction_12787){
return (function (p1__12751_SHARP_){
var G__12776 = window;
var G__12777 = p1__12751_SHARP_;
var G__12778 = dottask.graph.link_preview(e.target,dottask.core.changed_touch(e));
return goog.events.listen(G__12776,G__12777,G__12778);
});})(target_12784,node_id_12785,gnode_12786,direction_12787))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.EventType.MOUSEMOVE,goog.events.EventType.TOUCHMOVE], null)], 0));
var start_point_12793 = dottask.graph.graph_coords(target_12784,e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui_state,cljs.core.assoc,cljs.core.cst$kw$preview_DASH_points,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,start_point_12793,cljs.core.cst$kw$end,start_point_12793,cljs.core.cst$kw$start_DASH_node_DASH_id,node_id_12785,cljs.core.cst$kw$end_DASH_node_DASH_id,node_id_12785], null));

var G__12779_12794 = window;
var G__12780_12795 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12781_12796 = dottask.graph.node_mouseup((function (){var G__12782 = e.target;
var G__12783 = "node-overlay";
return goog.dom.getAncestorByClass(G__12782,G__12783);
})().getAttribute("data-nodeid"),dottask.core.coords(e),direction_12787,move_keys_12792);
goog.events.listenOnce(G__12779_12794,G__12780_12795,G__12781_12796);
}

return false;
} else {
return null;
}
});
dottask.graph.cluster_mousedown = (function dottask$graph$cluster_mousedown(e){
e.preventDefault();

var G__12802_12807 = window;
var G__12803_12808 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12804_12809 = dottask.graph.cluster_mouseup((function (){var G__12805 = e.target;
var G__12806 = "cluster-overlay";
return goog.dom.getAncestorByClass(G__12805,G__12806);
})().getAttribute("data-clusterid"),e);
goog.events.listenOnce(G__12802_12807,G__12803_12808,G__12804_12809);

return false;
});
dottask.graph.graph_mousemove = (function dottask$graph$graph_mousemove(ui_state){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster_DASH_points,cljs.core.cst$kw$end], null),dottask.graph.graph_coords(e.target,e));
});
});
dottask.graph.graph_mouseup = (function dottask$graph$graph_mouseup(ui_state,move_key){
return (function (e){
goog.events.unlistenByKey(move_key);

var els_12810 = dottask.core.arraylike_to_seq(document.querySelectorAll(".boxed"));
var node_ids_12811 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.el__GT_nodeid,els_12810);
var pts_12812 = cljs.core.cst$kw$cluster_DASH_points.cljs$core$IFn$_invoke$arity$1(ui_state);
if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.not_empty(node_ids_12811);
if(cljs.core.truth_(and__4659__auto__)){
return (dottask.core.debug(dottask.core.coords_dist(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(pts_12812),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(pts_12812))) > (1));
} else {
return and__4659__auto__;
}
})())){
dottask.graph.rerender_BANG_(dottask.graph.add_cluster).call(null,node_ids_12811);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui_state,cljs.core.assoc,cljs.core.cst$kw$cluster_DASH_points,null);
});
});
dottask.graph.graph_mousedown = (function dottask$graph$graph_mousedown(e,state,ui_state){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"touchstart")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0)))){
var coords = dottask.graph.graph_coords(e.target,e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui_state,cljs.core.assoc,cljs.core.cst$kw$cluster_DASH_points,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,coords,cljs.core.cst$kw$end,coords], null));

var move_key = (function (){var G__12819 = window;
var G__12820 = goog.events.EventType.MOUSEMOVE;
var G__12821 = dottask.graph.graph_mousemove(ui_state);
return goog.events.listen(G__12819,G__12820,G__12821);
})();
var G__12822 = window;
var G__12823 = goog.events.EventType.MOUSEUP;
var G__12824 = dottask.graph.graph_mouseup(ui_state,move_key);
return goog.events.listenOnce(G__12822,G__12823,G__12824);
} else {
return null;
}
});
dottask.graph.edit_done_BANG_ = (function dottask$graph$edit_done_BANG_(var_args){
var args12825 = [];
var len__5729__auto___12828 = arguments.length;
var i__5730__auto___12829 = (0);
while(true){
if((i__5730__auto___12829 < len__5729__auto___12828)){
args12825.push((arguments[i__5730__auto___12829]));

var G__12830 = (i__5730__auto___12829 + (1));
i__5730__auto___12829 = G__12830;
continue;
} else {
}
break;
}

var G__12827 = args12825.length;
switch (G__12827) {
case 2:
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12825.length)].join('')));

}
});

dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (node_id,text){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3(node_id,text,null);
});

dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node_id,text,select_id){
dottask.graph.edit_node_BANG_(select_id);

return dottask.graph.rerender_BANG_(dottask.graph.rename_node).call(null,node_id,text);
});

dottask.graph.edit_done_BANG_.cljs$lang$maxFixedArity = 3;
dottask.graph.parse_line = (function dottask$graph$parse_line(index,line){
var clean = clojure.string.triml(line);
var indentation = (cljs.core.count(line) - cljs.core.count(clean));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$idx,index,cljs.core.cst$kw$orig,line,cljs.core.cst$kw$clean,clean,cljs.core.cst$kw$indent,indentation], null);
});
dottask.graph.add_parents = (function dottask$graph$add_parents(var_args){
var args12832 = [];
var len__5729__auto___12837 = arguments.length;
var i__5730__auto___12838 = (0);
while(true){
if((i__5730__auto___12838 < len__5729__auto___12837)){
args12832.push((arguments[i__5730__auto___12838]));

var G__12839 = (i__5730__auto___12838 + (1));
i__5730__auto___12838 = G__12839;
continue;
} else {
}
break;
}

var G__12834 = args12832.length;
switch (G__12834) {
case 1:
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12832.length)].join('')));

}
});

dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1 = (function (parsed_lines){
var line = cljs.core.first(parsed_lines);
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null));
});

dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3 = (function (parsed_lines,indent_parents,result){
if(cljs.core.empty_QMARK_(parsed_lines)){
return result;
} else {
var line = cljs.core.first(parsed_lines);
var indent = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line);
var parent = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (line,indent){
return (function (p__12835){
var vec__12836 = p__12835;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12836,(1),null);
return (k < indent);
});})(line,indent))
,indent_parents)));
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indent_parents,indent,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$parent,parent)));
}
});

dottask.graph.add_parents.cljs$lang$maxFixedArity = 3;
dottask.graph.mark_parents = (function dottask$graph$mark_parents(parsed){
var pars = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,parsed));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pars){
return (function (line){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$is_DASH_parent_QMARK_,cljs.core.contains_QMARK_(pars,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)));
});})(pars))
,parsed);
});
dottask.graph.dot__GT_state = (function dottask$graph$dot__GT_state(state,dot){
var json = (function (){var G__12867 = dot;
var G__12868 = (function (){var obj12870 = {"format":"json"};
return obj12870;
})();
return Viz(G__12867,G__12868);
})();
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var objects = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (json,data){
return (function (p1__12841_SHARP_){
return cljs.core.contains_QMARK_(p1__12841_SHARP_,cljs.core.cst$kw$_draw_);
});})(json,data))
,cljs.core.cst$kw$objects.cljs$core$IFn$_invoke$arity$1(data));
var nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (json,data,objects){
return (function (p1__12842_SHARP_){
return cljs.core.contains_QMARK_(p1__12842_SHARP_,cljs.core.cst$kw$nodes);
});})(json,data,objects))
,objects));
var vec__12863 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (json,data,objects,nodes){
return (function (p__12871,node){
var vec__12872 = p__12871;
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12872,(0),null);
var lookup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12872,(1),null);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(node),"\\N"))?cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(node):cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(node));
var vec__12873 = dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(st,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,label,true);
var newst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12873,(0),null);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12873,(1),null);
var newlookup = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lookup,cljs.core.cst$kw$_gvid.cljs$core$IFn$_invoke$arity$1(node),node_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newst,newlookup], null);
});})(json,data,objects,nodes))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.PersistentArrayMap.EMPTY], null),nodes);
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12863,(0),null);
var node_lookup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12863,(1),null);
var clusters = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.count,cljs.core.cst$kw$nodes),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (json,data,objects,nodes,vec__12863,st,node_lookup){
return (function (p1__12843_SHARP_){
return (cljs.core.contains_QMARK_(p1__12843_SHARP_,cljs.core.cst$kw$nodes)) || (cljs.core.contains_QMARK_(p1__12843_SHARP_,cljs.core.cst$kw$subgraphs));
});})(json,data,objects,nodes,vec__12863,st,node_lookup))
,objects));
var vec__12864 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (json,data,objects,nodes,vec__12863,st,node_lookup,clusters){
return (function (p__12874,cluster){
var vec__12875 = p__12874;
var st__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(0),null);
var lookup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(1),null);
var vec__12876 = dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4(st__$1,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.map.cljs$core$IFn$_invoke$arity$2(node_lookup,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(cluster)),true);
var newst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876,(0),null);
var cluster_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876,(1),null);
var newlookup = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lookup,cljs.core.cst$kw$_gvid.cljs$core$IFn$_invoke$arity$1(cluster),cluster_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newst,newlookup], null);
});})(json,data,objects,nodes,vec__12863,st,node_lookup,clusters))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [st,cljs.core.PersistentArrayMap.EMPTY], null),clusters);
var st2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(0),null);
var cluster_lookup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(1),null);
var cluster_nestings = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup){
return (function (p1__12844_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup){
return (function (cl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_gvid.cljs$core$IFn$_invoke$arity$1(p1__12844_SHARP_),cl], null);
});})(json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup))
,cljs.core.cst$kw$subgraphs.cljs$core$IFn$_invoke$arity$1(p1__12844_SHARP_));
});})(json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup))
,cljs.core.array_seq([clusters], 0));
var st3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup,cluster_nestings){
return (function (st__$1,p__12877){
var vec__12878 = p__12877;
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(0),null);
var child_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(1),null);
return dottask.graph.toggle_cluster_nesting(st__$1,(cluster_lookup.cljs$core$IFn$_invoke$arity$1 ? cluster_lookup.cljs$core$IFn$_invoke$arity$1(child_id) : cluster_lookup.call(null,child_id)),(cluster_lookup.cljs$core$IFn$_invoke$arity$1 ? cluster_lookup.cljs$core$IFn$_invoke$arity$1(parent_id) : cluster_lookup.call(null,parent_id)));
});})(json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup,cluster_nestings))
,st2,cluster_nestings);
var edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup,cluster_nestings,st3){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12879 = cljs.core.cst$kw$tail.cljs$core$IFn$_invoke$arity$1(x);
return (node_lookup.cljs$core$IFn$_invoke$arity$1 ? node_lookup.cljs$core$IFn$_invoke$arity$1(G__12879) : node_lookup.call(null,G__12879));
})(),(function (){var G__12880 = cljs.core.cst$kw$head.cljs$core$IFn$_invoke$arity$1(x);
return (node_lookup.cljs$core$IFn$_invoke$arity$1 ? node_lookup.cljs$core$IFn$_invoke$arity$1(G__12880) : node_lookup.call(null,G__12880));
})()], null);
});})(json,data,objects,nodes,vec__12863,st,node_lookup,clusters,vec__12864,st2,cluster_lookup,cluster_nestings,st3))
,cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(data));
var st4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st3,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(st3),edges));
return st4;
});
dottask.graph.parse_bulk_add = (function dottask$graph$parse_bulk_add(text){
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split_lines(text));
var parsed = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(dottask.graph.parse_line,lines);
return dottask.graph.mark_parents(dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1(parsed));
});
dottask.graph.add_lines = (function dottask$graph$add_lines(var_args){
var args12881 = [];
var len__5729__auto___12885 = arguments.length;
var i__5730__auto___12886 = (0);
while(true){
if((i__5730__auto___12886 < len__5729__auto___12885)){
args12881.push((arguments[i__5730__auto___12886]));

var G__12887 = (i__5730__auto___12886 + (1));
i__5730__auto___12886 = G__12887;
continue;
} else {
}
break;
}

var G__12883 = args12881.length;
switch (G__12883) {
case 3:
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12881.length)].join('')));

}
});

dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3 = (function (state,lines,mode){
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4(state,lines,mode,cljs.core.PersistentArrayMap.EMPTY);
});

dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4 = (function (state,lines,mode,id_lookup){
var line = cljs.core.first(lines);
if((line == null)){
return state;
} else {
var text = cljs.core.cst$kw$clean.cljs$core$IFn$_invoke$arity$1(line);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_lookup,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(line));
var vec__12884 = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line);
} else {
return and__4659__auto__;
}
})())?dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,cljs.core.PersistentVector.EMPTY,true):dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,text,true));
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(1),null);
var final_state = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line))?dottask.graph.toggle_cluster_nesting(new_state,new_id,parent_id):dottask.graph.recluster_node(new_state,new_id,parent_id)):(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"link");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?dottask.graph.toggle_dep(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new_id], null)):new_state
));
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4(final_state,cljs.core.rest(lines),mode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_lookup,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line),new_id));
}
});

dottask.graph.add_lines.cljs$lang$maxFixedArity = 4;
dottask.graph.bulk_add_modal = (function dottask$graph$bulk_add_modal(ui_state){
var bulk_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (bulk_text,mode){
return (function (){
return dottask.core.keyed_modal(ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bulk-modal"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-title"], null),"Bulk Add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Add a line of text for each node you want created ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.a_link,"bulk-add","help",((function (bulk_text,mode){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_visible_QMARK_,true);
});})(bulk_text,mode))
], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),cljs.core.cst$kw$on_DASH_change,((function (bulk_text,mode){
return (function (p1__12889_SHARP_){
var G__12892 = mode;
var G__12893 = p1__12889_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12892,G__12893) : cljs.core.reset_BANG_.call(null,G__12892,G__12893));
});})(bulk_text,mode))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ignore"], null),"ignore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"link"], null),"link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"cluster"], null),"cluster"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"graphviz"], null),"graphviz"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.text_area,bulk_text,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$float,"right"], null),cljs.core.cst$kw$on_DASH_click,((function (bulk_text,mode){
return (function (){
return dottask.core.toggler(ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_).call(null).call(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),"graphviz"))?dottask.graph.rerender_BANG_(dottask.graph.dot__GT_state).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text))):dottask.graph.rerender_BANG_(((function (bulk_text,mode){
return (function (state){
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3(state,dottask.graph.parse_bulk_add((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text))),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)));
});})(bulk_text,mode))
).call(null)));
});})(bulk_text,mode))
], null),"Add nodes"], null)], null)], null));
});
;})(bulk_text,mode))
});
dottask.graph.toolbar = (function dottask$graph$toolbar(state,ui_state){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-bar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Add node",cljs.core.cst$kw$data_DASH_help_DASH_link,"add-card",cljs.core.cst$kw$on_DASH_click,(function (){
return dottask.graph.rerender_BANG_(dottask.graph.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"plus","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Bulk add",cljs.core.cst$kw$data_DASH_help_DASH_link,"bulk-add",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"list-alt","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Delete all",cljs.core.cst$kw$data_DASH_help_DASH_link,"delete-all",cljs.core.cst$kw$on_DASH_click,(function (){
return dottask.graph.rerender_BANG_(dottask.graph.delete_all).call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"trash","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Save",cljs.core.cst$kw$data_DASH_help_DASH_link,"saving",cljs.core.cst$kw$on_DASH_click,(function (){
return dottask.graph.save_hash(state);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"save","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Undo",cljs.core.cst$kw$data_DASH_help_DASH_link,"undo-button",cljs.core.cst$kw$on_DASH_click,historian.core.undo_BANG_,cljs.core.cst$kw$style,(cljs.core.truth_(historian.core.can_undo_QMARK_())?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$opacity,"0.3"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"undo","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Redo",cljs.core.cst$kw$data_DASH_help_DASH_link,"undo-button",cljs.core.cst$kw$on_DASH_click,historian.core.redo_BANG_,cljs.core.cst$kw$style,(cljs.core.truth_(historian.core.can_redo_QMARK_())?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$opacity,"0.3"], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"undo","30px",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(-1, 1)"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Change arrow direction",cljs.core.cst$kw$class,"direction-button",cljs.core.cst$kw$data_DASH_help_DASH_link,"arrow-dir"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"hidden-select",cljs.core.cst$kw$value,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions)),cljs.core.cst$kw$on_DASH_change,(function (p1__12894_SHARP_){
return dottask.graph.rerender_BANG_(dottask.graph.set_direction).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__12894_SHARP_.target.value));
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12897){
var vec__12898 = p__12897;
var dirkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,dirkey,cljs.core.cst$kw$value,dirkey,cljs.core.cst$kw$on_DASH_click,((function (vec__12898,dirkey,dir){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.set_direction).call(null,dirkey);
});})(vec__12898,dirkey,dir))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"plus","16px"], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(dir)], null);
}),dottask.core.directions)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"arrow-circle-up","30px",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions))),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Export to dot format",cljs.core.cst$kw$data_DASH_help_DASH_link,"export-dot",cljs.core.cst$kw$on_DASH_click,(function (){
var w = window.open();
return w.document.write([cljs.core.str("<pre>"),cljs.core.str(dottask.core.hesc(dottask.graph.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions),true))),cljs.core.str("</pre>")].join(''));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"file-code","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Help. Try dragging from me to highlighted elements!",cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.graph.help_mousedown,cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.graph.help_mousedown,cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.icon,"question","30px"], null)], null)], null);
});
dottask.graph.graph = (function dottask$graph$graph(state){
var vec__12908 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.re_find(/translate\(([\d.]+) ([\d.]+)\)/,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12908,(0),null);
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12908,(1),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12908,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$help_DASH_drag.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?" help-drag":null),cljs.core.cst$kw$on_DASH_key_DASH_press,((function (vec__12908,_,x_offset,y_offset){
return (function (p1__12899_SHARP_){
return console.log(p1__12899_SHARP_);
});})(vec__12908,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.toolbar,state,dottask.graph.ui_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str("help-window"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$help_DASH_visible_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?null:" hidden"))].join(''),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$padding,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$height],["0 0 8px 2px #666","#f6f6f6","35%","99999","10px","0px","fixed","1px solid #666","100%"])], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$text_DASH_align,"right",cljs.core.cst$kw$padding_DASH_right,"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"./help.html",cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),"Pop out"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),"Close"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_y,"auto",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.help.page,dottask.help.dottask_help], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.bulk_add_modal,dottask.graph.ui_state], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str("dotgraph"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?" editing":null))].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (vec__12908,_,x_offset,y_offset){
return (function (p1__12900_SHARP_){
return dottask.graph.graph_mousedown(p1__12900_SHARP_,state,dottask.graph.ui_state);
});})(vec__12908,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"graph-overlay"], null),(cljs.core.truth_(cljs.core.cst$kw$resize_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?(function (){var points = cljs.core.cst$kw$resize_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var x = (x_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var y = (y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
var width = dottask.core.width(points);
var height = dottask.core.height(points);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"resize-overlay",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,[cljs.core.str(x),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(y),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str(height),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"task-text"], null),cljs.core.cst$kw$resize_DASH_label.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)))], null)], null);
})():null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12908,_,x_offset,y_offset){
return (function (node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_mouse_DASH_enter,cljs.core.cst$kw$key,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$style,cljs.core.cst$kw$on_DASH_double_DASH_click,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,cljs.core.cst$kw$on_DASH_touch_DASH_start,cljs.core.cst$kw$data_DASH_nodeid],[((function (vec__12908,_,x_offset,y_offset){
return (function (e){
if(cljs.core.truth_(e.shiftKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.app_state,cljs.core.assoc,cljs.core.cst$kw$connected_DASH_nodes,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dottask.core.node_in_link_QMARK_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state)))));
} else {
return null;
}
});})(vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12908,_,x_offset,y_offset){
return (function (p1__12901_SHARP_){
return dottask.graph.node_mousedown(p1__12901_SHARP_,state,dottask.graph.ui_state);
});})(vec__12908,_,x_offset,y_offset))
:null),(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12908,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(((function (vec__12908,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$collapsed], null),false);
});})(vec__12908,_,x_offset,y_offset))
).call(null);
});})(vec__12908,_,x_offset,y_offset))
:null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$left,[cljs.core.str((x_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str((y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$width) * dottask.graph.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$height) * dottask.graph.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),"")], null),((function (vec__12908,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null));
});})(vec__12908,_,x_offset,y_offset))
,[cljs.core.str("node-overlay"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)))?" selected":null)),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?" cluster-node":null)),cljs.core.str(((cljs.core.contains_QMARK_(cljs.core.cst$kw$connected_DASH_nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)))?" connected":null)),cljs.core.str((cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.cst$kw$cluster_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
if(cljs.core.truth_(and__4659__auto__)){
return dottask.core.rects_overlap_QMARK_(dottask.core.translate_rect(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(node),x_offset,y_offset),dottask.core.bounding_rect(cljs.core.vals(cljs.core.cst$kw$cluster_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))));
} else {
return and__4659__auto__;
}
})())?" boxed":null))].join(''),((function (vec__12908,_,x_offset,y_offset){
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$connected_DASH_nodes.cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.app_state,cljs.core.assoc,cljs.core.cst$kw$connected_DASH_nodes,cljs.core.PersistentHashSet.EMPTY);
}
});})(vec__12908,_,x_offset,y_offset))
,(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12908,_,x_offset,y_offset){
return (function (p1__12902_SHARP_){
return dottask.graph.node_mousedown(p1__12902_SHARP_,state,dottask.graph.ui_state);
});})(vec__12908,_,x_offset,y_offset))
:null),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"node-sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$data_DASH_help_DASH_link,"delete-card",cljs.core.cst$kw$on_DASH_click,((function (vec__12908,_,x_offset,y_offset){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))){
return dottask.graph.rerender_BANG_(dottask.graph.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),true);
} else {
return dottask.graph.rerender_BANG_(dottask.graph.delete_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
}
});})(vec__12908,_,x_offset,y_offset))
], null),"\u00D7"], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-picker",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-color"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12908,_,x_offset,y_offset){
return (function (color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(" (shortcut "),cljs.core.str(cljs.core.cst$kw$shortcut.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(")")].join(''),cljs.core.cst$kw$class,"color-swatch",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color)], null),cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color),cljs.core.cst$kw$on_DASH_click,((function (vec__12908,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.recolor_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
});})(vec__12908,_,x_offset,y_offset))
], null)], null);
});})(vec__12908,_,x_offset,y_offset))
,dottask.core.colors)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"task-text",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-text",cljs.core.cst$kw$title,"Click to Change",cljs.core.cst$kw$on_DASH_click,((function (vec__12908,_,x_offset,y_offset){
return (function (e){
dottask.graph.edit_node_BANG_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));

return false;
});})(vec__12908,_,x_offset,y_offset))
], null),(function (){var or__4671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster,cljs.core.cst$kw$text], null));
}
})()], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"draggable node-resize",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-resize"], null),""], null):null)], null);
});})(vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12908,_,x_offset,y_offset){
return (function (cluster){
var top = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$up))?((y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$max], null))) - (21)):(((1) + y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null))));
var left = (((1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var right = (((-1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)));
var width = (right - left);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$class,"cluster-overlay",cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$data_DASH_clusterid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.graph.cluster_mousedown,cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.graph.cluster_mousedown,cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12908,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.rename_cluster_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));
});})(top,left,right,width,vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,[cljs.core.str(left),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(top),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"collapse",cljs.core.cst$kw$title,"Collapse",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12908,_,x_offset,y_offset){
return (function (e){
dottask.graph.rerender_BANG_(((function (top,left,right,width,vec__12908,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$collapsed], null),true);
});})(top,left,right,width,vec__12908,_,x_offset,y_offset))
).call(null);

return false;
});})(top,left,right,width,vec__12908,_,x_offset,y_offset))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12908,_,x_offset,y_offset){
return (function (e){
dottask.graph.rerender_BANG_(dottask.graph.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));

return false;
});})(top,left,right,width,vec__12908,_,x_offset,y_offset))
], null),"\u00D7"], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster)))], null);
});})(vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state))], null),(cljs.core.truth_(cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?(function (){var map__12909 = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12909__$1 = ((((!((map__12909 == null)))?((((map__12909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12909):map__12909);
var shift_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$shift_DASH_key);
var alt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$alt_DASH_key);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$end);
var start_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$start_DASH_node_DASH_id);
var end_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$end_DASH_node_DASH_id);
var end_cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,cljs.core.cst$kw$end_DASH_cluster_DASH_id);
var start_node = dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),start_id);
var icon = (function (){var or__4671__auto__ = (cljs.core.truth_((function (){var and__4659__auto__ = end_id;
if(cljs.core.truth_(and__4659__auto__)){
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(end_id,start_id);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return alt_key;
}
} else {
return and__4659__auto__;
}
})())?(cljs.core.truth_(shift_key)?"#tag":(cljs.core.truth_(dottask.graph.find_dep(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_id,end_id], null)))?"#minus":"#plus")):null);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_(end_cluster_id)){
if(cljs.core.truth_(dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),start_node,end_cluster_id))){
return "#minus";
} else {
return "#plus";
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(icon)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"link-preview-icon",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,[cljs.core.str((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - (5))),cljs.core.str("px")].join(''),cljs.core.cst$kw$left,[cljs.core.str(((13) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,"18px",cljs.core.cst$kw$height,"18px",cljs.core.cst$kw$fill,new cljs.core.PersistentArrayMap(null, 3, ["#plus","green","#minus","red","#tag","green"], null).call(null,icon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#plus",cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#plus"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#minus",cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#minus"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#tag",cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#tag"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null)], null);
} else {
return null;
}
})():null),(cljs.core.truth_(cljs.core.cst$kw$cluster_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"link-preview"], null),(function (){var points = cljs.core.cst$kw$cluster_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var rect = dottask.core.bounding_rect(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(points),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(points)], null));
var width = dottask.core.width(rect);
var height = dottask.core.height(rect);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)),cljs.core.cst$kw$y,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)),cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$stroke,"#666",cljs.core.cst$kw$stroke_DASH_width,(2),cljs.core.cst$kw$stroke_DASH_dasharray,"8,4",cljs.core.cst$kw$fill,"none"], null)], null);
})()], null):null),(cljs.core.truth_(cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"link-preview"], null),(function (){var points = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12911 = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12911__$1 = ((((!((map__12911 == null)))?((((map__12911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12911):map__12911);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$end);
var start_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$start_DASH_node_DASH_id);
var end_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$end_DASH_node_DASH_id);
var end_cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$end_DASH_cluster_DASH_id);
var alt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$alt_DASH_key);
var color = "#666";
var point_backwards_QMARK_ = (cljs.core.not((function (){var or__4671__auto__ = end_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return end_cluster_id;
}
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before,dottask.core.compare_coords(end,start,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions))));
var arrow_point = ((point_backwards_QMARK_)?start:end);
var angle = (dottask.core.get_angle(start,end) + ((point_backwards_QMARK_)?(180):(0)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"edge pv-line"], null),(cljs.core.truth_((function (){var or__4671__auto__ = end_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return end_cluster_id;
}
})())?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,(-72),cljs.core.cst$kw$y,(-43),cljs.core.cst$kw$width,(144),cljs.core.cst$kw$height,(86),cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$stroke_DASH_width,(2),cljs.core.cst$kw$stroke_DASH_dasharray,"8,4",cljs.core.cst$kw$fill,"none"], null)], null),(cljs.core.truth_(alt_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(24 -37) scale(0.02)",cljs.core.cst$kw$fill,"#666"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#clone"], null)], null)], null):null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$x1,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(start),cljs.core.cst$kw$y1,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(start),cljs.core.cst$kw$x2,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end),cljs.core.cst$kw$y2,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end)], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_id,end_id))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fill,color,cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$points,dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(arrow_point),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(arrow_point)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),-3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(7)], null)], null)),cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str(angle),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(arrow_point)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(arrow_point)),cljs.core.str(")")].join('')], null)], null):null)], null);
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null),(function (){var edit_id = cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var gnode = dottask.core.get_node(cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),edit_id);
var node_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(gnode)));
var width = dottask.core.width(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode));
var height = dottask.core.height(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"edit-overlay",cljs.core.cst$kw$on_DASH_click,((function (edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset){
return (function (e){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)));
});})(edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.text_area,node_text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_click,((function (edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset){
return (function (e){
return false;
});})(edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(27),null,(13),null], null), null),e.which)){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),e.which)){
dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)),dottask.graph.get_next_node_id(state,(cljs.core.truth_(e.shiftKey)?(-1):(1)),edit_id));

return false;
} else {
return null;
}
}
});})(edit_id,gnode,node_text,width,height,vec__12908,_,x_offset,y_offset))
,cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,[cljs.core.str((((8) + y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$left,[cljs.core.str((((8) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((width - (20))),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((height - (22))),cljs.core.str("px")].join('')], null)], null)], null)], null);
})()], null)], null);
});
React.initializeTouchEvents(true);
document.onkeydown = (function dottask$graph$on_key_press(evt){
var shift = evt.shiftKey;
var selected = cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.app_state) : cljs.core.deref.call(null,dottask.graph.app_state)));
var keycode = evt.which;
var keychar = clojure.string.lower_case(cljs.core.char$(keycode));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dottask.core.color_keycode_lookup,keychar);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target)){
var G__12916_12919 = keycode;
switch (G__12916_12919) {
case (27):
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.app_state,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_node_DASH_id,null);

break;
case (37):
if(cljs.core.truth_(shift)){
historian.core.undo_BANG_();
} else {
}

break;
case (39):
if(cljs.core.truth_(shift)){
historian.core.redo_BANG_();
} else {
}

break;
case (68):
dottask.graph.rerender_BANG_(dottask.graph.delete_node).call(null,selected);

break;
case (69):
dottask.graph.edit_node_BANG_(selected);

break;
case (73):
dottask.graph.rerender_BANG_(dottask.graph.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null));

break;
case (74):
var _STAR_record_active_STAR_12917_12921 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.graph.rerender_BANG_(dottask.graph.select_next_node).call(null,(1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12917_12921;
}
break;
case (75):
var _STAR_record_active_STAR_12918_12922 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.graph.rerender_BANG_(dottask.graph.select_next_node).call(null,(-1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12918_12922;
}
break;
case (78):
dottask.graph.rerender_BANG_(dottask.graph.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter title for node:",""));

break;
case (188):
if(cljs.core.truth_(shift)){
dottask.graph.rerender_BANG_(dottask.graph.add_and_name_node_BANG_).call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),null);
} else {
}

break;
case (190):
if(cljs.core.truth_(shift)){
dottask.graph.rerender_BANG_(dottask.graph.add_and_name_node_BANG_).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),cljs.core.PersistentVector.EMPTY,null);
} else {
}

break;
case (189):
dottask.graph.rerender_BANG_(dottask.graph.on_toggle_dep_click).call(null,selected,(cljs.core.truth_(shift)?dottask.core.prompt("Enter link text:",""):null));

break;
default:

}

if(cljs.core.truth_(color)){
return dottask.graph.rerender_BANG_(dottask.graph.recolor_node).call(null,selected,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
} else {
return null;
}
} else {
return null;
}
});
dottask.graph.render_BANG_ = (function dottask$graph$render_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.graph,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.app_state) : cljs.core.deref.call(null,dottask.graph.app_state))], null),document.getElementById("app"));
});
dottask.graph.on_page_load_BANG_ = (function dottask$graph$on_page_load_BANG_(){
devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$sanity_DASH_hints], 0));

devtools.core.install_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,dottask.graph.load_hash);
});
if(typeof dottask.graph.on_page_load !== 'undefined'){
} else {
dottask.graph.on_page_load = dottask.graph.on_page_load_BANG_();
}
cljs.core.add_watch(dottask.graph.app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.graph.render_BANG_();
}));
cljs.core.add_watch(dottask.graph.ui_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.graph.render_BANG_();
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,dottask.graph.update_state);
historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,cljs.core.cst$kw$app_DASH_state);
