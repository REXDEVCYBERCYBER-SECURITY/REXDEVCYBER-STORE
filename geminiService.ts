
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const analyzeSecurityPrompt = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-level cybersecurity analyst for REXDEVCYBER.
      Provide a concise security analysis or report based on the following query or code snippet.
      Identify potential vulnerabilities, suggest remediation, and rank severity.
      Query: ${userInput}`,
      config: {
        systemInstruction: "You are the REXDEVCYBER AI Security Analyst. You are professional, technical, and thorough. Use markdown formatting for clarity.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Security Analysis Error:", error);
    return "Error: Unable to process the security analysis request. Please ensure the API key is valid and try again.";
  }
};
