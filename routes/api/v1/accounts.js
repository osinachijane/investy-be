const express = require("express");
const axios = require("axios");
const router = express.Router();

const { MONO_API_ENDPOINT, MONO_SECRET_KEY } = process.env;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "mono-sec-key": MONO_SECRET_KEY,
};

// GET ACCOUNT INFO
router.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios({
      method: "get",
      url: `${MONO_API_ENDPOINT}/accounts/${id}`,
      headers,
    });
    res.json(response.data);
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
    });
  }
});

// GET ASSETS DATA
router.get(`/:id/assets`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios({
      method: "get",
      url: `${MONO_API_ENDPOINT}/accounts/${id}/assets`,
      headers,
    });
    res.json(response.data);
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
    });
  }
});

// GET EARNINGS DATA
router.get(`/:id/earnings`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios({
      method: "get",
      url: `${MONO_API_ENDPOINT}/accounts/${id}/earnings`,
      headers,
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
