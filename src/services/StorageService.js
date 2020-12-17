'use strict';
export const storageService = {
    save,
    load,
    remove
}
function save(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}

function remove(key) {
    localStorage.removeItem(key);
}