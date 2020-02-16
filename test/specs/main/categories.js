describe("Category Search", function() {
  beforeAll(() => {
    /**
     * enable necessary domains
     */
    browser.cdp("Profiler", "enable");
    browser.cdp("Debugger", "enable");

    /**
     * start test coverage profiler
     */
    browser.cdp("Profiler", "startPreciseCoverage", {
      callCount: true,
      detailed: true
    });
    browser.url("http://localhost:3000");
  });

  it("searches cateogory session", function() {
    const categorySession = $(".category-session li");
    categorySession.waitForExist(5000);
  });

  afterAll(() => {
    /**
     * capture test coverage
     */
    const { result } = browser.cdp("Profiler", "takePreciseCoverage");
    const coverage = result.filter(res => res.url !== "");
    console.log(coverage);
  });
});
