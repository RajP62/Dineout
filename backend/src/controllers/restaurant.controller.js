const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");

router.get("", async (req, res) => {
  try {
    let data = await Restaurants.find()
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/filter", async (req, res) => {
  try {
    let data = await Restaurants.find({})
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    data = data.filter((el) => el.state.name === req.query.state);
    res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    let data = await Restaurants.findById(req.params.id)
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
