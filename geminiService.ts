
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, SKILLS, PUBLICATIONS } from './constants';

// Initialize the Google GenAI client. 
// The API key is obtained from process.env.API_KEY as per security guidelines.
export async function askAboutResume(userQuery: string) {
  // Check if API key is available
  if (!process.env.API_KEY) {
    return "The AI assistant is not configured. Please set up the API key to enable this feature.";
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are Chibueze Clinton's AI Assistant. 
    Chibueze is a professional in EMEA Tax Operations and Management.
    Current Role: EMEA Tax Operations Analyst at Barclays.
    Summary: ${PERSONAL_INFO.summary}
    Experience: ${JSON.stringify(EXPERIENCES)}
    Education: ${JSON.stringify(EDUCATIONS)}
    Skills: ${JSON.stringify(SKILLS)}
    Publications: ${JSON.stringify(PUBLICATIONS)}

    Answer questions about Chibueze accurately based on this information. 
    Keep responses professional and concise.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
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
