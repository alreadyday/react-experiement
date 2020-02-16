describe("Category Search", function() {
  beforeAll(() => {
    browser.url("http://localhost:3000");
  });

  it("searches cateogory session", function() {
    const categorySession = $(".category-session li");
    console.warn(categorySession.length);
    categorySession.waitForExist(5000);
  });
});
