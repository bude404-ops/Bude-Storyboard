/**
 * BudE StoryBoard AI
 * Update v0058
 *
 * Version Counter Repair
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");

const VERSION_FILE =
    path.join(ROOT,"versions.json");


function run(){

    console.log(
        "Repairing Evolution Version Counter..."
    );


    const version =
        JSON.parse(
            fs.readFileSync(
                VERSION_FILE,
                "utf8"
            )
        );


    let highest = 0;


    version.completedUpdates.forEach(file=>{

        const match =
            file.match(/update-v0*(\d+)/);


        if(match){

            const number =
                parseInt(match[1]);


            if(number > highest){

                highest = number;

            }

        }

    });



    version.currentVersion =
        `0.${highest}`;


    version.systemHealth =
        "healthy";


    version.lastUpdate =
        new Date().toISOString();



    fs.writeFileSync(

        VERSION_FILE,

        JSON.stringify(
            version,
            null,
            2
        )

    );


    console.log(
        "Version repaired:",
        version.currentVersion
    );

}



module.exports={
    run
};
