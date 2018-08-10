const assert = require("assert");
const { test } = require("kuta");
const jsdomGlobal = require("jsdom-global");
const h = require("../dist/main.js");

let browser;
test.beforeEach(() => {
  browser = jsdomGlobal();
});
test.afterEach(() => {
  browser();
});

test("generating proper dom", () => {
  document.body.appendChild(
    h.ul({ class: "hej" }, [h.li({}, "1"), h.li({}, "2"), h.li({}, "3")])
  );

  assert.equal(
    document.body.innerHTML,
    '<ul class="hej"><li>1</li><li>2</li><li>3</li></ul>'
  );
});

test("add event listener", () => {
  let clicked = false;
  document.body.appendChild(
    h.div({
      onClick: () => {
        clicked = true;
      }
    })
  );

  const event = new window.MouseEvent("click");
  document.querySelector("div").dispatchEvent(event);

  assert(clicked);
});

test("using h.createElement", () => {
  const element = h.createElement("div", {}, "tjena");

  assert.equal(element.outerHTML, "<div>tjena</div>");
});

test("apply styles", () => {
  const element = h.div({ style: { backgroundColor: "red" } }, "red");

  assert.equal(element.style.backgroundColor, "red");
});
