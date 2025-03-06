import { v } from "convex/values";
import { action } from "./_generated/server";

const HUGGING_FACE_TOKEN = "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";
const EDENAI_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGNjYjA5YjctMjk2My00NDZiLTliZGMtMTM2YmRjODFmYzViIiwidHlwZSI6ImFwaV90b2tlbiJ9.3ZuPpUuFAK7nQ-kR3BNf03ziORM17bEmtLJ1c9dfI3A";

async function huggingFaceTTSFetch(input: string) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/mms-tts-eng",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      const error = await response.text().catch(() => "");
      throw new Error(
        `Hugging Face API error: ${response.statusText} - ${error}`
      );
    }

    return response;
  } catch (error) {
    console.error("Hugging Face API call failed:", error);
    throw error;
  }
}

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: async (_, { voice, input }) => {
    // Currently ignoring "voice" or you could pass it to a multi-voice TTS model.
    const response = await huggingFaceTTSFetch(input);
    return await response.arrayBuffer();
  },
});

export const generateThumbnailAction = action({
  args: { prompt: v.string() },
  handler: async (_, { prompt }) => {
    // Make sure "stabilityai" is correct, and check your Eden AI plan
    // Also note the engine parameter, which may be required:
    const response = await fetch("https://api.edenai.run/v2/image/generation", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${EDENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        providers: "stabilityai",
        text: prompt,
        resolution: "1024x1024",
        num_images: 1,
        // The engine name can vary. Try "stable-diffusion-v1-5" or "stable-diffusion-v2-1" if needed.
        engine: "stable-diffusion-v2-1",
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        `Eden AI error: ${response.status} - ${JSON.stringify(error)}`
      );
    }

    const data = await response.json();
    // The JSON should have "stabilityai" as the key if "providers" is "stabilityai"
    const url = data.stabilityai?.items?.[0]?.image_resource_url;

    if (!url) {
      throw new Error("Error generating thumbnail (no URL returned)");
    }

    const imageResponse = await fetch(url);
    return await imageResponse.arrayBuffer();
  },
});
