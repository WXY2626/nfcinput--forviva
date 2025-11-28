function setup() {
  noCanvas(); // 当前不需要画布

  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    let time = document.getElementById("timeInput").value;
    let app = document.getElementById("appInput").value;

    if (time === "" || app === "") {
      document.getElementById("result").innerHTML =
        "<p style='color:red;'>请先填写完整信息！</p>";
      return;
    }

    document.getElementById("result").innerHTML = `
      <p><strong>提交成功！</strong></p>
      <p>你今日使用手机 ${time} 分钟。</p>
      <p>最常使用的 App：<strong>${app}</strong></p>
    `;
  });
}
