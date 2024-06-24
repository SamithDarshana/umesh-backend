const request = require("supertest");

const baseURL = "http://localhost:4000/api/product";

describe("Testing Product routes", () => {
  it("Responds with 500 Internal Server Error for POST a product Without login", async () => {
    const response = await request(baseURL).post("/").send({
      title: "Test Title 04",
      description: "Test Description 04",
      price: 55000,
      quantity: 10,
      category: "Category01",
      brand: "Brand01",
      color: "Color01",
    });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
  it("Responds with 200 OK for Getting all products", async () => {
    const response = await request(baseURL).get("/");
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");
  });
  it("Responds with 200 OK for Getting a single products", async () => {
    const response = await request(baseURL).get("/6640dcc7ff56c3f642478c67");
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");
  });
  it("Responds with 500 Internal Server Error for Invalid ID", async () => {
    const response = await request(baseURL).get("/12345678");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "This is not a valid mongoDb Id!",
    });
  });
  it("Responds with 500 Internal Server Error for DELETE a enquiry Without login", async () => {
    const response = await request(baseURL).delete("/6640dcc7ff56c3f642478c67");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
});
