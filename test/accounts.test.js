const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /accounts", () => {
    it("Should return 200 and an Array", async() => {
        const res = await request(app).get("/accounts");
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
    })
});
