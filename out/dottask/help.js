// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.help');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dottask.core');
dottask.help.dottask_help = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"toolbar-buttons",cljs.core.cst$kw$title,"Toolbar",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"add-card",cljs.core.cst$kw$title,"Add a card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click the 'Add card' button to add a new blank card"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"bulk-add",cljs.core.cst$kw$title,"Bulk Add",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["If you want to add multiple cards at the same time, click 'Bulk add' and put each node label on a separate line","There are three different modes for handling indented lines. For the examples below, let's look at what happens if the following text were used:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,"1\n  1.1\n  1.2\n    1.2.1\n    1.2.2"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"bulk-add-ignore",cljs.core.cst$kw$title,"ignore mode",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Whitespace is trimmed from the ends and ignored",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"static/bulk_ignore.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$zoom,0.6,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"bulk-add-link",cljs.core.cst$kw$title,"link mode",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parents are linked to their children",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"static/bulk_link.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zoom,0.6], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"bulk-add-cluster",cljs.core.cst$kw$title,"cluster mode",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parents are turned into clusters that contain their children",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"static/bulk_cluster.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zoom,0.6], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"delete-all",cljs.core.cst$kw$title,"Delete all",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click the 'Delete all' button to delete everything from the graph. This change can still be undone."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"saving",cljs.core.cst$kw$title,"Saving",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["When you click 'Save', the graph's state is serialized and saved to the URL hash.","You can now bookmark the URL, put it in a shortener, send it to a friend, and more.","If you save to a URL and update the graph, you need to click save again to get a new URL in order to preserve your changes.","Some browsers have limits on how long the URL can be that may impact saving. I haven't hit the limit in chrome yet, but be forewarned that it may be possible."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"undo-button",cljs.core.cst$kw$title,"Undo/Redo",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click the undo/redo buttons to undo/redo changes to the graph. This history is not included with saves."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"arrow-dir",cljs.core.cst$kw$title,"Change arrow direction",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click this to open a menu to change the primary arrow direction. This also changes the direction you must drag from a node to add new nodes (e.g. if you change the direction to 'right', instead of dragging down to make a linked node below, drag right to make one after)"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"export-dot",cljs.core.cst$kw$title,"Export Graphviz Code",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicking this opens up a .dot representation of the graph that can be further edited and rendered with the graphviz application or many online renderers. These .dot representations currently can not be imported back into dottask."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"help-button",cljs.core.cst$kw$title,"Help",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This button opens/closes the help sidebar. You can also drag from this button to any highlighted element to jump to that help section"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"cards",cljs.core.cst$kw$title,"Cards",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$class,"node-overlay"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"task-text"], null),"sample card"], null)], null),"Cards (or 'nodes') are the basic units of the graph",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"delete-card",cljs.core.cst$kw$title,"Delete a card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hover over it then clicking the x button that appears in the upper right"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"card-text",cljs.core.cst$kw$title,"Change card text",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click on the light box inside the card","When done editing, hit enter/escape or click on the area outside the textbox to save changes. You can also hit tab or shift-tab to switch to the next/previous card."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"card-color",cljs.core.cst$kw$title,"Change card color",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hover over it and click a colored square in the right panel"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"card-resize",cljs.core.cst$kw$title,"Resize a card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drag the handle in the lower-right corner"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"links",cljs.core.cst$kw$title,"Links",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cards can be linked together",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"link-card",cljs.core.cst$kw$title,"Link/unlink cards",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drag the mouse from the source to the target"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"link-label",cljs.core.cst$kw$title,"Change link label",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hold down shift while dragging from source to target cards"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"card-drag",cljs.core.cst$kw$title,"Add cards via dragging",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.PersistentArrayMap.EMPTY,"If you already have card A and you know you want to create B then link A -> B, you could do this by ",dottask.core.a_link.cljs$core$IFn$_invoke$arity$2("add-card","adding the card")," and then ",dottask.core.a_link.cljs$core$IFn$_invoke$arity$2("link-card","creating the link"),". However, using dragging can be much faster"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"drag-card",cljs.core.cst$kw$title,"Add card and link it to an existing card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click down on the card and drag your mouse to empty space above/below the card to add a linked card before/after."], null)], null),"If your graph has A->C and you want to change this to A->B->C, you can quickly do this by 'splitting' one of the cards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"split-card",cljs.core.cst$kw$title,"Split a card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hold down shift while dragging from the card to an empty space before/after"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"clusters",cljs.core.cst$kw$title,"Clusters",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cards can be grouped into clusters which appear as a box with a label. If all of a cluster's contents are deleted, it is removed.",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"add-cluster-card",cljs.core.cst$kw$title,"Create a cluster around a card",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Double click on the card's border (outside the white text area)"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"add-cluster-cluster",cljs.core.cst$kw$title,"Create a cluster around a cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drag from the cluster text to empty space above"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"toggle-card-cluster",cljs.core.cst$kw$title,"Add/remove card to/from cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drag from the card to the cluster text (or vice versa)"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"toggle-cluster-cluster",cljs.core.cst$kw$title,"Add/remove cluster to/from cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drag from the child cluster text to the parent cluster text"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"collapse-cluster",cljs.core.cst$kw$title,"Collapse a cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click the minus sign in the upper right. The cluster is shrunk to look like a card, all its contents are hidden, and any links going in/out of contents of the cluster now go in/out of the cluster card."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"expand-cluster",cljs.core.cst$kw$title,"Expand a collapsed cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click on its dark border"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"delete-cluster",cljs.core.cst$kw$title,"Delete a cluster",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click the x in the upper right. If it is collapsed, its contents are also deleted."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"keyboard-shortcuts",cljs.core.cst$kw$title,"Keyboard Shortcuts",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Many of the site's actions also have keyboard shortcuts, which may sometimes be faster or more convenient than using a mouse",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"shortcut-selecting",cljs.core.cst$kw$title,"Selecting cards",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Many of the shortcuts below act on the selected card. You can select a card by using the following keys:",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"j: "], null),"Select next card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"k: "], null),"Select previous card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Esc: "], null),"De-select card"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"shortcut-changing",cljs.core.cst$kw$title,"Changing cards",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The following keys allow you to change the selected card (highlighted with a yellow border)",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"d: "], null),"Delete card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"e: "], null),"Edit card text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Change card color:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str(cljs.core.cst$kw$shortcut.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(": ")].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)], null);
}),dottask.core.colors)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"shortcut-adding",cljs.core.cst$kw$title,"Adding items",cljs.core.cst$kw$contents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"</>: "], null),"Add card before/after selected one (like ",dottask.core.a_link.cljs$core$IFn$_invoke$arity$2("drag-card","dragging from a card"),")"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"-: "], null),"Link/unlink cards. The first time you hit it, it marks that node as the source. Then select the target node and hit it again to mark the target and create the link"], null)], null)], null)], null)], null)], null)], null);
dottask.help.toc_row = (function dottask$help$toc_row(sect){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"toc-row"], null),dottask.core.a_link.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(sect),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sect)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask$help$toc_row,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$contents,cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$2(sect,cljs.core.PersistentVector.EMPTY)))], null);
});
dottask.help.section = (function dottask$help$section(var_args){
var args12333 = [];
var len__5729__auto___12336 = arguments.length;
var i__5730__auto___12337 = (0);
while(true){
if((i__5730__auto___12337 < len__5729__auto___12336)){
args12333.push((arguments[i__5730__auto___12337]));

var G__12338 = (i__5730__auto___12337 + (1));
i__5730__auto___12337 = G__12338;
continue;
} else {
}
break;
}

var G__12335 = args12333.length;
switch (G__12335) {
case 1:
return dottask.help.section.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.help.section.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12333.length)].join('')));

}
});

dottask.help.section.cljs$core$IFn$_invoke$arity$1 = (function (sect){
return dottask.help.section.cljs$core$IFn$_invoke$arity$2(sect,(0));
});

dottask.help.section.cljs$core$IFn$_invoke$arity$2 = (function (sect,level){
var tag = (((level === (0)))?cljs.core.cst$kw$h3:cljs.core.cst$kw$b);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(sect),cljs.core.cst$kw$class,"section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sect)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tag){
return (function (l){
if(cljs.core.contains_QMARK_(l,cljs.core.cst$kw$contents)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.help.section,l,(level + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.PersistentArrayMap.EMPTY,l], null);
}
});})(tag))
,cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(sect))], null);
});

dottask.help.section.cljs$lang$maxFixedArity = 2;
dottask.help.page = (function dottask$help$page(sections){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"toc"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.help.toc_row,sections)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.help.section,sections)], null);
});
;})(state))
});
dottask.help.render_BANG_ = (function dottask$help$render_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.help.page,dottask.help.dottask_help], null),document.getElementById("help"));
});
if(cljs.core.truth_(dottask.core.get_el("#help"))){
dottask.help.render_BANG_();
} else {
}
