import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("test endpoint responses", () => {
  it("should return ", async (done) => {
    const response = await request.get("/api");
    expect(response.text).toBe("server started at localhost: 3000");
    done();
  });

  it("should return a status of 200", async (done) => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    done();
  });
});