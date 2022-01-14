function scope(x, up=window) {
    return new Proxy(x, {
        has: (o, k) => true,
        get: (o, k) => k in o ? o[k] : up[k]
    });
}

var Example = {};

with (scope(Example)) {
    x = 1;
    y = 2;
    add_x = function(y) {
        console.log(x + y);
    }
}

Example.add_x(5);
Example.add_x(20);


with (scope(Example)) {
    x = 3;
    add_y = function(x) {
        console.log(x + y);
    }
}

Example.add_x(5);

Example.y = 5;
Example.add_y(30);

Example.y = 1;
Example.add_y(30);
