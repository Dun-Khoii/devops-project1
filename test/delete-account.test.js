const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("DELETE /accounts/:id", () => {
    it("should delete account and return 204 if account exists", async () => {
        const payload = { name: "Delete User", email: "delete@gmail.com" };
        const createRes = await request(app).post("/accounts").send(payload);
        const id = createRes.body.id;

        const res = await request(app).delete(`/accounts/${id}`);
        expect(res.status).to.equal(204);

        // Check that account is actually deleted
        const getRes = await request(app).get(`/accounts/${id}`);
        expect(getRes.status).to.equal(404);
    });

    it("should return 404 if account does not exist", async () => {
        const res = await request(app).delete("/accounts/9999");
        expect(res.status).to.equal(404);
    });
});
