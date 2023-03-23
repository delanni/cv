// this will work as long as they have these classes :D
var articles = [...document.querySelectorAll(".mg.yf.pw.y")].map((el) => {
  const mainTarget = el.querySelector("*[href]");
  const dateTarget = el.querySelector(".bu.b.bv.bw.hj");
  return {
    title: mainTarget.textContent,
    url: mainTarget.href.split("?")[0],
    date: dateTarget.textContent,
    description: "",
  };
});

document.write(`<pre>${JSON.stringify(articles, null, 2)}</pre>`);
