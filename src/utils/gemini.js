export const fetchGeminiResponse = async (prompt) => {
  const response = await fetch("http://localhost:5000/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  return await response.json();
};
