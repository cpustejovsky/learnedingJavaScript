var submitBtn = $("#lp-pom-button-10"); // Add ID of Submit Button
var field = $("#cats_or_dogs"); // Add ID of Dropdown field

var conField1 = field.parent().next();
var conField2 = conField1.next();

var topPos = conField1.position().top;
conField2.css({ top: topPos });

conField1.css("display", "none");
conField2.css("display", "none");

var fieldHeight = conField1.height();
var space = fieldHeight * 2 + 37;
var halfSpace = space / 2;

var moreFields = $(conField2).nextAll();
moreFields.animate({ top: "-=" + space }, 0);

var i = true;
$(field).change(function() {
    console.log(this);
    console.log(this.selectedIndex);
    if (this.selectedIndex == 1) {
        conField1.fadeIn("slow");
        conField2.fadeOut("slow");
        if (i) {
            fieldAdjust();
            i = false;
        }
    } else if (this.selectedIndex == 2) {
        conField1.fadeOut("slow");
        conField2.fadeIn("slow");
        if (i) {
            fieldAdjust();
            i = false;
        }
    } else {
        i = true;
        conField1.fadeOut("slow");
        conField2.fadeOut("slow");
        moreFields.animate({ top: "-=" + halfSpace }, 600);
        submitBtn.animate({ top: "-=" + halfSpace }, 600);
    }
});

var i = true;
$(field).change(function() {
    console.log($(field).val());
    for (let i = 0; i < gpdrCountries.length; i++) {
        const element = gpdrCountries[i];
        if ($(field).val() === gpdrCountries[i]) {
            conField1.fadeIn("slow");
            break;
        }
    }
    for (let i = 0; i < gpdrCountries.length; i++) {
        const element = gpdrCountries[i];
        if ($(field).val() !== gpdrCountries[i]) {
            conField1.fadeOut("slow");
            break;
        }
    }
});

var fieldAdjust = function() {
    moreFields.animate({ top: "+=" + halfSpace }, 600);
    submitBtn.animate({ top: "+=" + halfSpace }, 600);
};

let gpdrCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "United Kingdom"
];
