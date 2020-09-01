let numpicsclicked = 0, pictureone, picturetwo, elementid1, elementid2;

let puzzleimages = ["person.png", "woman.png", "man.png", "camera.png", "tv.png",
                    "person.png", "woman.png", "man.png", "camera.png", "tv.png",
                    "person.png", "woman.png", "man.png",
                    "person.png", "woman.png", "man.png"];

shuffle(puzzleimages);

//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array)
{
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex)
    {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function PlayMemoryGame(elementid, square)
{
    //Do not allow three squares to be uncovered at a time
    if(numpicsclicked < 2)
    {
        square--;
        document.getElementById(elementid).src=puzzleimages[square];
    }
    else
    {
        return;
    }


    if(numpicsclicked == 0)
    {
        numpicsclicked++;
        document.getElementById("debugtext").innerHTML = numpicsclicked;
        document.getElementById("debugtext2").innerHTML = "FIRST CLICK";
    }
    else if(numpicsclicked == 1 && elementid != elementid1)
    {
        numpicsclicked++;
        document.getElementById("debugtext").innerHTML = numpicsclicked;
        document.getElementById("debugtext2").innerHTML = "SECOND CLICK";
    }

    if(numpicsclicked == 1)
    {
        pictureone = puzzleimages[square];
        elementid1 = elementid;
    }
    else if(numpicsclicked == 2)
    {
        picturetwo = puzzleimages[square];
        elementid2 = elementid;
    
        //see if pictures match, if not, wait and then hide them again
        if(pictureone == picturetwo)
        {
            numpicsclicked = 0;
            document.getElementById("debugtext").innerHTML = numpicsclicked;
            document.getElementById("debugtext2").innerHTML = "MATCHING IMAGES";
        }
        else
        {
            setTimeout(function(){ HidePictures(elementid1, elementid2); }, 1000);
        }
    }
}

function HidePictures(elementid1, elementid2) {
    document.getElementById(elementid1).src="redsq.png";
    document.getElementById(elementid2).src="redsq.png";
    numpicsclicked = 0;
    document.getElementById("debugtext").innerHTML = numpicsclicked;
    document.getElementById("debugtext2").innerHTML = "HIDING IMAGES";
}