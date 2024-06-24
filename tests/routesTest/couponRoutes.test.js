const request = require("supertest");

const baseURL = "http://localhost:4000/api/coupon";

describe("Testing Coupon routes", () => {
  it("Responds with 500 Internal Server Error for Getting all coupons without login", async () => {
    const response = await request(baseURL).get("/");
    expect(response.status).toBe(500);
    expect(typeof response.body).toBe("object");
  }),
    it("Responds with 200 OK for Getting a single coupon", async () => {
      const response = await request(baseURL).get("/6644495f5d045057f719a27f");
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
  it("Responds with 500 Internal Server Error for POST a coupon Without login", async () => {
    const response = await request(baseURL).post("/").send({
      title: "Test Category",
    });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
  it("Responds with 500 Internal Server Error for DELETE a coupon Without login", async () => {
    const response = await request(baseURL).delete("/6644495f5d045057f719a27f")
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
});