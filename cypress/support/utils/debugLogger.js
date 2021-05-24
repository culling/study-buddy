Cypress.Commands.add("debugMessage", (messageDebugLevel, message, object = "DUMMY_OBJECT") => {
    const DEBUG_LEVEL = 4;
    const DEBUG_DUMMY_OBJECT = "DUMMY_OBJECT";
    if (messageDebugLevel <= DEBUG_LEVEL) {
        console.log("DEBUG: ", message);
        if (object != DEBUG_DUMMY_OBJECT) {
            console.log("DEBUG: ", object);
        }
    }
});
