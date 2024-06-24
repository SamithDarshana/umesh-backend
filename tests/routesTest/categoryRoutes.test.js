const request = require("supertest");

const baseURL = "http://localhost:4000/api/category";

describe("Testing Category routes", () => {
  it("Responds with 200 OK for Getting all categories", async () => {
    const response = await request(baseURL).get("/");
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");
  }),
    it("Responds with 200 OK for Getting a single category", async () => {
      const response = await request(baseURL).get("/6640a9c2f8fd7951ebde85b7");
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
    }),
    it("Responds with 500 Internal Server Error for Invalid ID", async () => {
      const response = await request(baseURL).get("/12345678");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        message: "This is not a valid mongoDb Id!",
      });
    });
  it("Responds with 500 Internal Server Error for POST a category Without login", async () => {
    const response = await request(baseURL).post("/").send({
      title: "Test Category",
    });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
  it("Responds with 500 Internal Server Error for DELETE a category Without login", async () => {
    const response = await request(baseURL).delete("/6640a9c2f8fd7951ebde85b7")
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
});
