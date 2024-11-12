import YanzGPT from "./functions.js";

(async () => {
  const response = await YanzGPT("apa itu sigma male?");
  console.log("response:", response);
  console.log(response.choices[0]?.message.content);
})();
