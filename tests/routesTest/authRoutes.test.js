const request = require("supertest");

const baseURL = "http://localhost:4000/api/user";

describe("Testing for User Routes", () => {
  // it("responds with 200 OK for success of creating a user", async () => {
  //   const response = await request(baseURL)
  //     .post("/register")
  //     .send({
  //       firstName: "Test",
  //       lastName: "User",
  //       email: "test4@test.test",
  //       mobile: "0712302678",
  //       password: "Test1234#",
  //     })
  //     .set("Accept", "application/json");
  //   expect(response.status).toBe(200);
  // }),
  it("responds with 500 Internal Server Error for Existing Email", async () => {
    const response = await request(baseURL)
      .post("/register")
      .send({
        firstName: "Test",
        lastName: "User",
        email: "test@test.test",
        mobile: "0712345678",
        password: "Test1234#",
      })
      .set("Accept", "application/json");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Email Already Exists!" });
  }),
    it("responds with 500 Internal Server Error for Existing Mobile", async () => {
      const response = await request(baseURL)
        .post("/register")
        .send({
          firstName: "Test",
          lastName: "User",
          email: "test1@test.com",
          mobile: "0712345675",
          password: "Test1234#",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        message: "Mobile number already in use!",
      });
    }),
    it("responds with 200 OK for successful login", async () => {
      const response = await request(baseURL)
        .post("/login")
        .send({
          email: "admin@sande.dev",
          password: "ABCabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
      expect(response.body).toHaveProperty("email");
      expect(response.body.email).toBe("admin@sande.dev");
    }),
    it("responds with 500 Internal Server Error for invalid username", async () => {
      const response = await request(baseURL)
        .post("/login")
        .send({
          email: "test@sande.dev",
          password: "ABCabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Invalid Credentials!");
    }),
    it("responds with 500 Internal Server Error for invalid password", async () => {
      const response = await request(baseURL)
        .post("/login")
        .send({
          email: "admin@sande.dev",
          password: "Testabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Invalid Credentials!");
    }),
    it("responds with 500 Internal Server Error for invalid username and password", async () => {
      const response = await request(baseURL)
        .post("/login")
        .send({
          email: "test@sande.dev",
          password: "Testabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Invalid Credentials!");
    }),
    it("responds with 200 OK for successful ADMIN login", async () => {
      const response = await request(baseURL)
        .post("/login")
        .send({
          email: "admin@sande.dev",
          password: "ABCabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
      expect(response.body).toHaveProperty("email");
      expect(response.body.email).toBe("admin@sande.dev");
    }),
    it("responds with 500 Internal Server Error for normal users", async () => {
      const response = await request(baseURL)
        .post("/admin-login")
        .send({
          email: "test@test.com",
          password: "Testabc123!",
        })
        .set("Accept", "application/json");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Not Authorized." });
    }),
    it("responds with 200 OK for get all users", async () => {
      const response = await request(baseURL)
        .get("/all-users")
        .set("Accept", "application/json");
      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
    });
});
