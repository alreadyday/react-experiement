describe("WebdriverIO search", function() {
  it("searches for WebdriverIO", function() {
    browser.url("http://localhost:3000");
    var title = browser.getTitle();
    console.log("Title is: " + title);
    expect(title).toBe("React App");
  });
});
