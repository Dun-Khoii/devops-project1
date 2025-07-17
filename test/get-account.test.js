const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /accounts/:id", () => {
     it("should return 200 and account data if account exists", async () => {
        const payload = { name: "Test User", email: "test@gmail.com" };
        const createRes = await request(app).post("/accounts").send(payload);
        const id = createRes.body.id;

        const res = await request(app).get(`/accounts/${id}`);
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(id);
        expect(res.body.name).to.equal(payload.name);
        expect(res.body.email).to.equal(payload.email);
    });
});
