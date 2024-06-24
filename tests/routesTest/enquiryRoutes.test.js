const request = require("supertest");

const baseURL = "http://localhost:4000/api/enquiry";

describe("Testing Enquiry routes", () => {
  it("Responds with 200 OK for POST a enquiry Without login", async () => {
    const response = await request(baseURL).post("/").send({
      name: "Test name",
      email: "test@test.dev",
      mobile: "0714332165",
      comment: "Test comment",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body.name).toBe("Test name");
  });
  it("Responds with 500 Internal Server Error for GET enquiries Without login", async () => {
    const response = await request(baseURL).get("/");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  }),
    it("Responds with 500 Internal Server Error for GET a enquiry Without login", async () => {
      const response = await request(baseURL).get("/6629e8a961915db9ab3fb2fa");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        message: "No token is attached to the headers!",
      });
    }),
    it("Responds with 500 Internal Server Error for Invalid ID", async () => {
      const response = await request(baseURL).get("/12345678");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        message: "No token is attached to the headers!",
      });
    });
  it("Responds with 500 Internal Server Error for DELETE a enquiry Without login", async () => {
    const response = await request(baseURL).delete("/6629e8a961915db9ab3fb2fa");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "No token is attached to the headers!",
    });
  });
});
