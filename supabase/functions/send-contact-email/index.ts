import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GOOGLE_SCRIPT_URL = Deno.env.get("GOOGLE_SCRIPT_URL");

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Only allow POST
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Only POST requests are allowed.",
        }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check Google Apps Script URL
    if (!GOOGLE_SCRIPT_URL) {
      throw new Error("GOOGLE_SCRIPT_URL is missing");
    }

    // Get form data
    const { name, email, message } = await req.json();

    // Validate form data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, email and message are required.",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Contact form received:", {
      name,
      email,
      message,
    });

    // Send data to Google Apps Script
    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const responseText = await googleResponse.text();

    console.log("Google Apps Script response:", responseText);

    if (!googleResponse.ok) {
      throw new Error(
        `Google Apps Script returned ${googleResponse.status}: ${responseText}`
      );
    }

    let googleResult;

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      googleResult = {
        success: true,
        message: responseText,
      };
    }

    if (googleResult.success === false) {
      throw new Error(
        googleResult.message || "Failed to send email through Gmail"
      );
    }

    // Everything successful
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      {
        status: 200,

        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send email.",
      }),
      {
        status: 500,

        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});