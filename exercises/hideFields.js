/*
Unbounce Community :: Tips & Scripts :: Conditional State/ Province Form Field Based on Dropdown 
TS:0002-04-060
***********************
Do not remove this section. It helps our team track useage of external workarounds.
*/

(function() {
    //ID of Submit Button
    var submitBtn = $("#lp-pom-button-20");

    //ID of dropdown field
    var field = $("#country");

    // Number of fields to show/hide with dropdown
    var count = 4;

    // Adjust to fine tune placement of other form fields
    var space = 27;

    // Add the ID of the containing element (box) of your form if one exists
    // Leave as "" if there is no box containing the form.
    var box = "#lp-pom-box-17";

    // DO NOT EDIT CODE BELOW
    var conFields = field
        .parent()
        .nextAll()
        .slice(0, +count);
    var moreFields = field
        .parent()
        .nextAll()
        .slice(count);
    var topPos = conFields.first().position().top;

    // function to add the heights of all fields selected
    $(conFields).each(function() {
        $(this).css({ top: topPos });
        var height = $(this).outerHeight(true);
        space = space += height;
    });
    // hide fields
    conFields.css("display", "none");
    // position other form fields
    $(moreFields).each(function() {
        $(this).animate({ top: "-=" + space }, 0);
    });

    // function to show/hide fields
    var z = true;
    var box = $(box);
    $(field).change(function() {
        // adjust position of fields
        var fieldAdjust = function(h, dir) {
            if (dir == "up") {
                $(moreFields).each(function() {
                    $(this).animate({ top: "+=" + (h + 5) }, 600);
                });
                submitBtn.animate({ top: "+=" + (h + 5) }, 600);
                if (box != "") {
                    box.animate({ height: "+=" + (h + 5) }, 600);
                }
            } else if (dir == "down") {
                $(moreFields).each(function() {
                    $(this).animate({ top: "-=" + (h + 5) }, 600);
                });
                submitBtn.animate({ top: "-=" + (h + 5) }, 600);
                if (box != "") {
                    box.animate({ height: "-=" + (h + 5) }, 600);
                }
            }
        };
        var fieldGroup = range(0, count);
        if (this.selectedIndex - 1 in fieldGroup) {
            var revealNum = this.selectedIndex - 1;
        } else {
            var revealNum = -1;
        }
        var revealField = conFields.get(revealNum);
        var otherFields = conFields.not(revealField);
        var fieldHeight = $(revealField).outerHeight(true);
        if (revealNum in fieldGroup) {
            $(revealField).fadeIn("slow");
            $(otherFields).fadeOut("slow");
            if (z) {
                fieldAdjust(fieldHeight, "up");
                z = false;
            }
        } else {
            $(revealField).fadeOut("slow");
            $(otherFields).fadeOut("slow");
            fieldAdjust(fieldHeight, "down");
            z = true;
        }
    });
    function range(start, end) {
        var array = new Array();
        for (var i = start; i < end; i++) {
            array.push(i);
        }
        return array;
    }
})();
