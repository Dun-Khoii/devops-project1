const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("PUT /accounts/:id", () => {
    it("Should update and exitsing account and return 200 with JSON body", async () => {
        const newAcc = await request(app)
            .post("/accounts")
            .send({ name: "John Doe", email: "jd@gmail.com" });
        const id = newAcc.body.id;

        const payload = { name: "Jane Doe", email: "jd@gmail.com" };

        const res = await request(app).put(`/accounts/${id}`).send(payload);

        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(id);
        expect(res.body.name).to.equal(payload.name);
        expect(res.body.email).to.equal(payload.email);
    });
    it("Should return 404 if updating non-exitstibf account", async () => {
        const res = await request(app).put("/accounts/9999").send({
            name: "Jane Doe",
            email: "jd@gmail.com"
        });
        expect(res.status).to.equal(404);
        expect(res.body).to.be.empty;
        
    })
});
