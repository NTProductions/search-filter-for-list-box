// Search Filter for ListView

var originalItems = ["Title", "Subtitle", "Content", "Footer"];

var window = new Window("palette", "ListView Filter", undefined);
window.orientation = "column";

var searchBox = window.add("edittext", undefined, "");
searchBox.size = [100, 25];

var listBox = window.add("listbox", undefined, originalItems);
listBox.size = [100, 100];
listBox.selection = 0;

window.center();
window.show();

searchBox.onChanging = function() {
        if(searchBox.text == "") {
            listBox.removeAll();
            for(var i = 0; i < originalItems.length; i++) {
                listBox.add("item", originalItems[i]);
                }
            listBox.selection = 0;
            } else {
                listBox.removeAll();
                for(var i = 0; i < originalItems.length; i++) {
                if(originalItems[i].toLowerCase().indexOf(searchBox.text) != -1) {
                listBox.add("item", originalItems[i]);
                    }
                    }
                }
    }