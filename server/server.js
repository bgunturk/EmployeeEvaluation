require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Get all employees
app.get("/api/v1/employees", async (req, res) => {
  try {
    //const results = await db.query("select * from employees");
    const employeeRatingsData = await db.query(
      "select * from employees left join (select employee_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by employee_id) reviews on employees.id = reviews.employee_id;"
    );

    res.status(200).json({
      status: "success",
      results: employeeRatingsData.rows.length,
      data: {
        employees: employeeRatingsData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a employee
app.get("/api/v1/employees/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const employee = await db.query(
      "select * from employees left join (select employee_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by employee_id) reviews on employees.id = reviews.employee_id where id = $1",
      [req.params.id]
    );
    // select * from employees wehre id = req.params.id

    const reviews = await db.query(
      "select * from reviews where employee_id = $1",
      [req.params.id]
    );
    console.log(reviews);

    res.status(200).json({
      status: "succes",
      data: {
        employee: employee.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a employee

app.post("/api/v1/employees", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO employees (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        employee: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Employees

app.put("/api/v1/employees/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE employees SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        retaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete Employee

app.delete("/api/v1/employees/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM employees where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/employees/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (employee_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});