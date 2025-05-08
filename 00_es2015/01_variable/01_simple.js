function checkScope() {
  if (true) {
    let blockVar = "블록 변수";
    console.log(blockVar);
  }
  console.log(blockVar);
}
try {
  checkScope();
} catch (e) {
  console.error(e);
}

const config = {
  apiUrl: "/api/v1",
};

function updateConfig() {
  config.apiUrl = "/api/v2";
  console.log("Config updated");
  config = { apiUrl: "/api/v3" };
  console.log("Config reassigned");
}
try {
  updateConfig();
} catch (e) {
  console.error(e.name, e.message);
  //console.error(e.stack);
}
console.log(config.apiUrl);
