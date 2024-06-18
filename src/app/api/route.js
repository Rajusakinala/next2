const mongoose = require("mongoose");

export async function GET(req, res) {
  console.log("req", req);
  return new Response("Get call successful");
}
