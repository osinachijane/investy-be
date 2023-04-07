const express = require("express");
const axios = require("axios");
const router = express.Router();

const { MONO_API_ENDPOINT, MONO_SECRET_KEY } = process.env;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "mono-sec-key": MONO_SECRET_KEY,
};

// GET ACCOUNT ID
router.post("/auth", async (req, res) => {
  const code = req.body.code;
  try {
    const response = await axios({
      method: "post",
      url: `${MONO_API_ENDPOINT}/account/auth`,
      headers,
      data: { code },
    });
    res.json(response.data);
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
    });
  }
});

module.exports = router;
