const DEBUG_LEVEL = 4;
const DEBUG_DUMMY_OBJECT = "DUMMY_OBJECT";
const debugMessage = (messageDebugLevel, message, object = DEBUG_DUMMY_OBJECT) => {
    if (messageDebugLevel <= DEBUG_LEVEL) {
        console.log("DEBUG: ", message);
        if (object != DEBUG_DUMMY_OBJECT) {
            console.log("DEBUG: ", object);
        }
    }
}
const printDebug = debugMessage;

