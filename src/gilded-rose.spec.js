const GildedRose = require("./gilded-rose");
const Item = require("./item");

describe("Gilded Rose", () => {
  it("should foo", function() {
    const gildedRose = new GildedRose([new Item("fixme", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });
});
