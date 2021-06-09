export function parser(param, type, value){  
    if (type === "int"){
        value = parseInt(value);
        return value;
    }
    if (type === "str"){
        return value;
    }
    // ---------can add here more parsing options------------

    return false;
};
