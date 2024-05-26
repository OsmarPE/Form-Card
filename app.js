var radios = document.querySelectorAll('.form__radio');
var termsInput = document.querySelector('#terms');
var form = document.querySelector('.form');
var alerts = document.querySelector('.alert');
for (var _i = 0, radios_1 = radios; _i < radios_1.length; _i++) {
    var radio = radios_1[_i];
    radio.addEventListener('click', function () {
        radios.forEach(function (item) { return item.checked = false; });
        this.checked = true;
    });
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    e.preventDefault();
    var data = new FormData(e.target);
    var name = data.get('name');
    var last = data.get('last');
    var email = data.get('email');
    var message = data.get('message');
    var terms = (_a = data.get('terms')) !== null && _a !== void 0 ? _a : '';
    var type = '';
    var typeObj = {
        type: '',
        id: ''
    };
    radios.forEach(function (item) { return item.checked && (typeObj = { type: item.value, id: item.id }); });
    type = typeObj.type;
    var Obj = { name: name, last: last, email: email, message: message, type: type, terms: terms };
    for (var _i = 0, _t = Object.entries(Obj); _i < _t.length; _i++) {
        var key = _t[_i][0];
        var query = "#".concat(key);
        if (key === 'type') {
            (_d = (_c = (_b = radios[0].parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.classList.remove('error');
        }
        else if (key === 'terms') {
            (_g = (_f = (_e = termsInput === null || termsInput === void 0 ? void 0 : termsInput.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.classList.remove('error');
        }
        else {
            (_j = (_h = document.querySelector(query)) === null || _h === void 0 ? void 0 : _h.nextElementSibling) === null || _j === void 0 ? void 0 : _j.classList.remove('error');
        }
    }
    for (var _u = 0, _v = Object.entries(Obj); _u < _v.length; _u++) {
        var _w = _v[_u], key = _w[0], value = _w[1];
        var query = "#".concat(key);
        if (key === 'type' && value === '') {
            (_m = (_l = (_k = radios[0].parentElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.lastElementChild) === null || _m === void 0 ? void 0 : _m.classList.add('error');
        }
        else if (key === 'terms' && value === '') {
            (_q = (_p = (_o = termsInput === null || termsInput === void 0 ? void 0 : termsInput.parentElement) === null || _o === void 0 ? void 0 : _o.parentElement) === null || _p === void 0 ? void 0 : _p.lastElementChild) === null || _q === void 0 ? void 0 : _q.classList.add('error');
        }
        else if (value === '') {
            (_s = (_r = document.querySelector(query)) === null || _r === void 0 ? void 0 : _r.nextElementSibling) === null || _s === void 0 ? void 0 : _s.classList.add('error');
        }
    }
    if (Object.values(Obj).includes(''))
        return;
    form.reset();
    alerts === null || alerts === void 0 ? void 0 : alerts.classList.add('active');
    setTimeout(function () {
        alerts === null || alerts === void 0 ? void 0 : alerts.classList.remove('active');
    }, 5000);
});
