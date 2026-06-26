module.exports = {
  default: {
    formatOptions: { snippetInterface: "async-await" },
    paths: ["features/*.feature"],
    require: [
      "step-definitions/**/*.ts",
      // "support/**/*.ts"
      "",
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:reports/cucumber_report.json",
      "html:reports/cucumber_report.html",
    ],
    publishQuiet: true,
  },
};


