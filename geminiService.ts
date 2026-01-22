
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, SKILLS } from './constants';

// Initialize the Google GenAI client. 
// The API key is obtained from process.env.API_KEY as per security guidelines.
export async function askAboutResume(userQuery: string) {
  // Always create a new instance inside the call or ensure it's initialized correctly with the environment variable.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are Chibueze Clinton's AI Assistant. 
    Chibueze is a professional in EMEA Tax Operations and Management.
    Current Role: EMEA Tax Operations Analyst at Barclays.
    Summary: ${PERSONAL_INFO.summary}
    Experience: ${JSON.stringify(EXPERIENCES)}
    Education: ${JSON.stringify(EDUCATIONS)}
    Skills: ${JSON.stringify(SKILLS)}

    Answer questions about Chibueze accurately based on this information. 
    Keep responses professional and concise.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    
    // Access the .text property directly (not a method).
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a break. Please check out the profile sections below!";
  }
}
