export const saveItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const getItemFromLocalStorage = (key) => {

    const item = localStorage.getItem(key);

    if(item){
        return item;
    }

    return null;
}