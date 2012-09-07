// Compile all coffee files in the current tree to js and delete originals

var cs = require("coffee-script");
var fs = require("fs");

files = fs.readdirSync('.');

var processDir = function (dir) {
    fs.readdirSync(dir).forEach(function (file) {
        var stat = fs.statSync(dir+"/"+file);
        if (stat.isDirectory()) {
            processDir(dir+"/"+file);
        } else {
            var fileParts = file.split(".");
            if (fileParts[fileParts.length-1] == "coffee" && fileParts.length > 1) {
                var script = fs.readFileSync(dir+"/"+file, "utf8");
                fileParts[fileParts.length-1] = "js";
                fs.writeFileSync(dir+"/"+fileParts.join("."), cs.compile(script), "utf8");
                fs.unlinkSync(dir+"/"+file);
                console.log("Compiled "+dir+"/"+file+" to "+dir+"/"+fileParts.join("."));
            }
        }
    });
};

processDir('.');
