const APP = (function () {
    let _root = 12;
    let _px = 12;
    let _em = 1;
    const _accuracy = 4;

    const rootInputEl = document.getElementById("root");
    const pxInputEl = document.getElementById("px");
    const emInputEl = document.getElementById("em");

    function init() {
        addEvent();
        reset();
    }

    function addEvent() {
        rootInputEl.addEventListener("change", handleChangeRootInputEl);
        pxInputEl.addEventListener("change", handleChangePXInputEl);
    }

    function reset() {
        pxInputEl.value = _root
        calculator()
    }

    function handleChangeRootInputEl(e) {
        const { currentTarget: { value } } = e
        _root = value
        calculator()
    }

    function handleChangePXInputEl(e) {
        const { currentTarget: { value } } = e
        _px = value
        calculator()
    }

    function calculator() {
        _em = parseFloat((_px / parseInt(_root, 10)).toPrecision(_accuracy));
        emInputEl.value = _em
    }

    return {
        init() {
            return init();
        }
    }
})();

APP.init();