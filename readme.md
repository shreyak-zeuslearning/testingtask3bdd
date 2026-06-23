# QA AUTOMATION TASK BDD

## OVERVIEW 

This project is developed using **Playwright**, **Cucmber BDD** and **Typescript**, following the **Page Object Model(POM)**.

The framework automates web application testing and demonstrates:

- BDD implementation using Cucumber 
- Playwright browser automation
- Page Object Model structue
- Reporting and debugging
- Failure simulation and analysis

---

## Technology stack 
- Playwright
- Typescript
- Cucumber
- Gherkin

---

## Automated Scenario 

### Login functionality 
- Login with valid credentials
- Login with invalid credentials 
- Error message should be displayed
- Logout functionality should work 
- Login with multiple credential

### Form functionality 
- Filling form with multiple fields using data table

---

## Running Tests

### Execute all tests

```bash
npx cucumber-js
```

### Generate report 
```bash
node generate-report.mjs
```
---

## Failure and Timeout Simulation
The failure and timeout debugging report includes the **root cause**, **error log** and **steps to reproduce the failure**

### Failure 
- Element not found
- Timeout error
- Assertion mismtach
- Incorrect locator 
- Navigation failure 

### Timeout
- Page load timeout
- Element timeout
- Step timeout 
