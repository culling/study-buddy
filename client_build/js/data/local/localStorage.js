const localStorageStrategy = {};



/**
 * Save 
 * 
 * @param {string} key 
 * @param {json} json 
 * @returns 
 */
localStorageStrategy.save = (key, json)=>{
    debugMessage(5, "localStorageStrategy.save - hit!");
    if(!!! json){
        console.error("Did you mean to delete?");
        return;
    }
    debugMessage(5, key, json);
    window.localStorage.setItem(key, JSON.stringify(json));
}

/**
 * Load
 * 
 * @param {string} key 
 * @returns json
 */
localStorageStrategy.load = (key)=>{
    debugMessage(5, "localStorageStrategy.load - hit!");
    const rawString = window.localStorage.getItem(key);
    const json = JSON.parse(rawString);
    return json;
}

/**
 * Delete 
 * 
 * @param {string} key 
 */
localStorageStrategy.delete = (key)=>{
    debugMessage(5, "localStorageStrategy.delete - hit!");
    window.localStorage.removeItem(key);
}


/**
 * Add
 * 
 * Add a json object to a local storage array if it exists. 
 * If no key exists for the 
 * @param {string} key 
 * @param {json} data 
 */
localStorageStrategy.add = (key, data)=>{
    debugMessage(5, "localStorageStrategy.add - Hit!");
    const raw = localStorageStrategy.load(key);
    debugMessage(5, "raw: ", raw);
    
    if ( (!!raw) && (!Array.isArray( raw )) ){
        console.error(key, "is not an array or null");
        return;
    }

    const json = (raw == null)? [] : raw;
    debugMessage(5, "json: ", json);
    json.push(data);
    localStorageStrategy.save(key, json);
}