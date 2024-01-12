// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setLeft("3.8095238095238093em")
                .setTop("6.857142857142857em")
                .setWidth("18em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("Date Picker")
                .setType("date")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("6.857142857142857em")
                .setTop("13.714285714285714em")
                .setWidth("18em")
                .setHeight("18em")
                .setCaption("Foldable Panel")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true)
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#B22222",
                        "background-color" : "#FFFAF0"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});