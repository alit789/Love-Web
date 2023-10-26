async function getValue() {
  const firstName = document.getElementById("firstName").value;
  const secondName = document.getElementById("secondName").value;
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondName}&fname=${firstName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const showPersentase = document.getElementById("showPersentase");
    showPersentase.innerHTML = `Persentase Kamu dengan dia adalah : ${result.percentage}% `;
    const saran = document.getElementById("Saran");
    saran.innerHTML = result.result;
  } catch (error) {
    console.error(error);
  }
}
