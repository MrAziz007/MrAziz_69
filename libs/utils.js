export function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    for (const item of arr) {
        let elem = component(item)
        box.append(elem);
    };
}