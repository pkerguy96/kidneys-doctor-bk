const Toggle = (function () {
    function $loop(list) {
        list.forEach((item) => {
            const current = document.querySelector(item.selector);
            if (!current) return;
            const $callable = (function $callable() {
                items = current.querySelectorAll(
                    "a, button, input, select, textarea"
                );
                if (current.classList.contains(item.class))
                    items.forEach((itm) => (itm.tabIndex = "-1"));
                else items.forEach((itm) => itm.removeAttribute("tabindex"));
                return $callable;
            })();
            new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === "attributes") {
                        if (mutation.attributeName === "class") {
                            $callable();
                        }
                    }
                }
            }).observe(current, {
                childList: true,
                subtree: true,
                attributes: true,
            });
        });
    }

    function $callable({ xs = [], sm = [], md = [], lg = [], xl = [] } = {}) {
        $loop(xs);
        if (matchMedia("(min-width: 640px)").matches) $loop(sm);
        if (matchMedia("(min-width: 768px)").matches) $loop(md);
        if (matchMedia("(min-width: 1024px)").matches) $loop(lg);
        if (matchMedia("(min-width: 1280px)").matches) $loop(xl);
    }

    function Toggle() {
        const { Elements, Attributes } = Toggle.opts;
        var targets = document.querySelectorAll(`[${Attributes.Selector}]`);
        if (Elements.length) targets = [...targets, ...Elements];
        if (!targets.length) return this;

        for (let i = 0; i < targets.length; i++) {
            const current = targets[i];
            current.x = {
                toggle: null,
            };
            const selectors = (
                current.getAttribute(Attributes.Targets) || ""
            ).split(",");
            if (!selectors.length) continue;
            const map = {
                properties: (
                    (current.getAttribute(Attributes.Properties) || "").split(
                        ","
                    ) || []
                ).map((e) => e.trim()),
                targets: [],
            };

            for (let j = 0; j < selectors.length; j++) {
                const selector = selectors[j].trim();
                const elements = document.querySelectorAll(selector);
                if (!elements.length) continue;
                map.targets = [...map.targets, ...elements];
            }

            current.addEventListener("click", (e) => {
                for (let j = 0; j < map.targets.length; j++) {
                    const target = map.targets[j];

                    for (let k = 0; k < map.properties.length; k++) {
                        const property = map.properties[k].split(">");

                        if (property[0] === "attr") {
                            const attribute = property[1];
                            if (target.hasAttribute(attribute))
                                target.removeAttribute(attribute);
                            else target.setAttribute(attribute, "");
                        } else {
                            const classname =
                                property.length > 1 ? property[1] : property[0];
                            target.classList.toggle(classname);
                        }
                    }
                }

                current.toggle && current.toggle(e);
                current.dispatchEvent(
                    new CustomEvent("x-toggle", {
                        bubbles: true,
                        detail: {
                            event: e,
                        },
                    })
                );
            });

            current.removeAttribute(Attributes.Targets);
            current.removeAttribute(Attributes.Selector);
            current.removeAttribute(Attributes.Properties);
        }

        return this;
    }

    Toggle.disable = function (obj) {
        window.addEventListener("resize", () => $callable(obj));
        $callable(obj);
    };

    Toggle.opts = {
        Elements: [],
        Attributes: {
            Selector: "x-toggle",
            Targets: "targets",
            Properties: "properties",
        },
    };

    return Toggle;
})();

Toggle();
var COLOR = "#000000";
const DOC = document.documentElement;
const DOWNLOAD = document.createElement("a");
const CANVAS = document.createElement("canvas");
const CONTEXT = CANVAS.getContext("2d");
const color = document.querySelector("#color");
const draw = document.querySelector("#draw");
const wrap = document.querySelector("#wrap");
const execs = document.querySelectorAll("[data-exec]");
const names = document.querySelectorAll("[data-name]");
const btns = document.querySelectorAll("#names button");
DOWNLOAD.download = "";

function fullscreen(e) {
    e.querySelectorAll("path").forEach((c) => c.classList.toggle("hidden"));
    const type = wrap.classList.contains("fixed") ? "remove" : "add";
    ["fixed", "inset-0", "z-[100]", "p-4"].forEach((c) => {
        wrap.classList[type](c);
    });

    if (type === "remove") {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }

    if (type === "add") {
        wrap.children[1].classList.add("flex-[1]");
        wrap.children[1].classList.remove(
            "aspect-square",
            "lg:aspect-[13.5/6]"
        );
    } else {
        wrap.children[1].classList.remove("flex-[1]");
        wrap.children[1].classList.add("aspect-square", "lg:aspect-[13.5/6]");
    }

    if (window.app.onResize) window.app.onResize();
    if (window.app.resizeView) window.app.resizeView();
}

function downlaod() {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CANVAS.height = wrap.clientHeight;
    CANVAS.width = wrap.clientWidth;
    const canvases = document.querySelectorAll("#graph canvas");
    if (canvases.length) {
        canvases.forEach((canvas) => {
            const factor = Math.min(
                CANVAS.width / canvas.width,
                CANVAS.height / canvas.height
            );

            CONTEXT.drawImage(
                canvas,
                CANVAS.width / 2 - (canvas.width * factor) / 2,
                CANVAS.height / 2 - (canvas.height * factor) / 2,
                canvas.width * factor,
                canvas.height * factor
            );
        });
    }

    DOWNLOAD.href = CANVAS.toDataURL("image/png");
    DOWNLOAD.click();
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((_btn) => {
            _btn.classList.remove("!bg-x-acent");
        });
        btn.classList.add("!bg-x-acent");
    });
});

function resize() {
    if (window.app.onResize) window.app.onResize();
    if (window.app.resizeView) window.app.resizeView();
}

window.addEventListener("resize", resize);

[color, draw].forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.target === el && !el.classList.contains("pointer-events-none")) {
            el.previousElementSibling.click();
        }
    });
});

[color.children[0], draw.children[0]].forEach((el) => {
    el.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

window.addEventListener("click", (e) => {
    if (
        !color.parentElement.contains(e.target) &&
        !color.classList.contains("pointer-events-none")
    ) {
        document.querySelector("#color_trigger").click();
    }
    if (
        !draw.parentElement.contains(e.target) &&
        !draw.classList.contains("pointer-events-none")
    ) {
        document.querySelector("#draw_trigger").click();
    }
});

document.querySelector("#draw_trigger").addEventListener("click", (e) => {
    exec(draw);
});
document.querySelector("#color_trigger").addEventListener("click", (e) => {
    exec(color);
});

names.forEach((name) => {
    name.addEventListener("click", (e) => {
        e.preventDefault();
        const name = e.target.dataset.name;
        const type = e.target.dataset.type;
        app["set" + type](name);
    });
});

execs.forEach((exec) => {
    exec.addEventListener("click", (e) => {
        e.preventDefault();
        const type = e.target.dataset.exec;
        actions[type](e.target);
        console.log(type);
    });
});

const actions = {
    Full: fullscreen,
    Download: downlaod,
    Undo: () => {
        window.app.undo();
    },
    Reset: () => {
        window.app.resetDisplay();
    },
    Redo: () => {
        window.app.redo();
    },
    Draw: (e) => {
        if (e.dataset.draw === "Livewire") {
            window.app.setTool("Livewire");
        } else {
            window.app.setTool("Draw");
            window.app.setToolFeatures({
                shapeName: e.dataset.draw,
                shapeColour: COLOR,
            });
        }
        document.querySelector("#draw_trigger").click();
    },
    Color: (e) => {
        COLOR = e.dataset.color;
        window.app.setToolFeatures({
            shapeColour: COLOR,
        });
        document.querySelector("#color_trigger").click();
    },
};

document.addEventListener("DOMContentLoaded", () => {
    dwv.decoderScripts.jpeg2000 = "/js/decoders/pdfjs/decode-jpeg2000.js";
    dwv.decoderScripts["jpeg-lossless"] =
        "/js/decoders/rii-mango/decode-jpegloss.js";
    dwv.decoderScripts["jpeg-baseline"] =
        "/js/decoders/pdfjs/decode-jpegbaseline.js";
    dwv.decoderScripts.rle = "/js/decoders/dwv/decode-rle.js";

    window.app = new dwv.App();
    window.app.init({
        dataViewConfigs: {
            "*": [
                {
                    divId: "graph",
                },
            ],
        },
        tools: {
            WindowLevel: {},
            ZoomAndPan: {},
            Livewire: {},
            Opacity: {},
            Scroll: {},
            Draw: {
                options: [
                    "Arrow",
                    "Ruler",
                    "Protractor",
                    "Rectangle",
                    "Roi",
                    "Ellipse",
                    "Circle",
                    "FreeHand",
                ],
            },
        },
    });

    callback();
});
