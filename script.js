let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

const isTouchDevice = () => {
    try{
        document.creatreEvent("TouchEvent");
        return true;
    }
    catch(e)
    {
        return false;
    }
}